# 模块化

## 背景

传统模块模式基于一个【带有内部变量和函数】的外层函数，以及一个被返回的 public API。


```
  function Queen(arr) {
    function show() {
      console.log(arr)
    }

    return {
      show: show
    };
  }

  var list = Queen([1, 2, 3]);
  list.show();
```

+实现单例：IIFE 立即执行函数
```
  var list = (function Queen() {
    function show() {
      console.log(arr)
    }

    return {
      show: show
    };
  })([1, 2, 3]);
  list.show();
```

## es6 module
老旧的模块化实现方案是使用函数闭包提供支持，ES6 在语言标准的层面上，实现了模块功能。

ES6 module：
- 模块API是静态的，编译时就能确定模块的依赖关系。不可以动态拼接。
```
  import { 'f' + 'oo' } from 'my_module';

  let module = 'my_module';
  import { foo } from module;

  // 报错
  if (x === 1) {
    import { foo } from 'module1';
  } else {
    import { foo } from 'module2';
  }

  // 所有动态需要判断的形式都会报错，本质是import命令是编译阶段执行的，在代码运行之前。
```

- 模块API中暴露的属性和方法不仅仅是值的拷贝或引用，而是内部模块定义的标识符的实际绑定（指针）。
```
var aa = 1;
export {aa};
aa = 100;
// aa => 100;
```

- 模块API是单例。

> 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点.
```
  var Singleton = function( name ){
      this.name = name;
  };

  Singleton.prototype.getName = function(){
      alert ( this.name );
  };

  Singleton.getInstance = (function(){
      var instance = null;
      return function( name ){
        if ( ! instance ){
            instance = new Singleton( name );
        }
        return instance;
      }
  })();

  var a = Singleton.getInstance( 'sven1' );
  var b = Singleton.getInstance( 'sven2' );

  alert ( a === b );     // true
```

## 语法

### 导出 export

**命名导出：导出变量/函数等名称的绑定**

```
export function foo()  {
  // 
}

export var aa = 1;
var bb = [1, 2, 3];
export bb;
```

对于`var bb = [1, 2, 3];` 来说是在模块内部保持私有的，没有export 导出的变量是不会挂在顶层全局作用域的。


**重命名**

```
function foo() {

}
export { foo as bar };

```
foo 隐藏在内部，bar是对外导出的名字。

**导出是变量的绑定（指针）**

导出模块一旦在内部发生了更改，导入模块将会随之改变。
```
var aa = 1;
export {aa};
aa = 100;

// a => 100
```

**默认导入default：模块使用一个导出**
每个模块只能使用一个默认导出，可以使 import 导入语法简洁。

命名导出vs默认导出
- 命名导出：`export {a as name}`. 可以有多个。
- 默认导出：`export default fn() {}`, 每个模块只能使用一个默认导出.

## import 


**循环依赖**

> 循环依赖：循环依赖是指模块A依赖于模块B，同时模块B依赖于模块A.

举个栗子：

```
// foo.js
import bar from './bar.js';
function foo(invoker) {
    console.log(invoker + ' invokes foo.js');
    bar('foo.js');
}
export default foo;

// bar.js
import foo from './foo.js';
let invoked = false;
function bar(invoker) {
    if(!invoked) {
        invoked = true;
        console.log(invoker + ' invokes bar.js');
        foo('bar.js');
    }
}
export default bar;

//index.js
import foo from './foo.js';
```


输出：
```
index.js invokes foo.js
foo.js invokes bar.js
bar.js invokes foo.js
```


可以看到，foo.js 和 bar.js循环依赖的模块均获取到了正确的导出值,下面让我们分析一下代码的执行过程:
1. index.js作为入口导入了foo.js，此时开始执行foo.js中的代码。
2. 从foo.js导入了bar.js，执行权交给bar.js。
3. 在bar.js中一直执行到其结束，完成bar函数的定义。注意，此时由于foo.js还没执行完，foo的值现在仍然是undefined。
4. 执行权回到foo.js继续执行直到其结束，完成foo函数的定义。由于ES6 Module动态映射的特性，此时在bar.js中foo的值已经从undefined成为了我们定义的函数，这是与CommonJS在解决循环依赖时的本质区别，CommonJS中导入的是值的拷贝，不会随着被夹在模块中原有值的变化而变化。
5. 执行权回到index.js并调用foo函数，此时会依次执行foo→bar→foo，并在控制台打出正确的值。由上面的例子可以看出，ES6 Module的特性使其可以更好地支持循环依赖，只是需要由开发者来保证当导入的值被使用时已经设置好正确的导出值。


## require 与 import

require是 CommonJS的语法，import是es6 module语法。
- 它们的主要区别在于前者建立模块依赖关系是在运行时，后者是在编译时；
- 在模块导入方面，CommonJS导入的是值拷贝，ES6Module导入的是只读的变量映射；
- ES6 Module通过其静态特性可以进行编译过程中的优化，并且具备处理循环依赖的能力。

**举个栗子**

```
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。


```
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载。


**commonJS循环依赖**

```
// foo.js
const bar = require('./bar.js');
console.log('value of bar:', bar);
module.exports = 'This is foo.js';

// bar.js
const foo = require('./foo.js');
console.log('value of foo:', foo);
module.exports = 'This is bar.js';

// index.js
require('./foo.js');
```

输出结果：
value of foo: {}
value of bar: This is bar.js


执行结果过程：
1. index.js导入了foo.js，此时开始执行foo.js中的代码。
2. foo.js的第1句导入了bar.js，这时foo.js不会继续向下执行，而是进入了bar.js内部。
3. 在bar.js中又对foo.js进行了require，这里产生了循环依赖。需要注意的是，执行权并不会再交回foo.js，而是直接取其导出值，也就是module.exports。但由于foo.js未执行完毕，导出值在这时为默认的空对象，因此当bar.js执行到打印语句时，我们看到控制台中的value of foo就是一个空对象。
4. bar.js执行完毕，将执行权交回foo.js。
5. foo.js从require语句继续向下执行，在控制台打印出value of bar（这个值是正确的），整个流程结束。由上面可以看出，尽管循环依赖的模块均被执行了，但模块导入的值并不是我们想要的。因此在CommonJS中，若遇到循环依赖我们没有办法得到预想中的结果。

**node 的 es6支持**

可以使用es-checker来检测当前Node.js对ES6的支持情况。

使用命令，全局安装es-checker：

`npm install -g es-checker`

安装好之后，执行以下命令来查看Node.js对ES6的支持情况, 运行：

`es-checker`

<img src="https://i.postimg.cc/fbcRCGq8/f1d760ab6c7c79ecf1159e637e0dbd06.jpg" width="600"/>


es6 module相比于 CommonJS 来说具备以下几点优势：
- 死代码检测和排除。我们可以用静态分析工具检测出哪些模块没有被调用过。比如，在引入工具类库时，工程中往往只用到了其中一部分组件或接口，但有可能会将其代码完整地加载进来。未被调用到的模块代码永远不会被执行，也就成为了死代码。通过静态分析可以在打包时去掉这些未曾使用过的模块，以减小打包资源体积。
- 模块变量类型检查。JavaScript属于动态类型语言，不会在代码执行前检查类型错误（比如对一个字符串类型的值进行函数调用）。ES6 Module的静态模块结构有助于确保模块之间传递的值或接口类型是正确的。
- 编译器优化。在CommonJS等动态模块系统中，无论采用哪种方式，本质上导入的都是一个对象，而ES6 Module支持直接导入变量，减少了引用层级，程序效率更高。
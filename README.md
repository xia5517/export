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
```

**默认导入default：模块使用一个导出**
每个模块只能使用一个默认导出，可以使 import 导入语法简洁。


**命名导出vs默认导出**

- 命名导出：`export {a as name}`. 可以有多个。
- 默认导出：`export default fn() {}`, 每个模块只能使用一个默认导出.


## require 与 import

require是 CommonJS的语法，import是es6 module语法。

｜｜CommonJS｜es6 module｜
|---|---|---|
|**本质**|技术方案｜语言标准｜
|**宿主环境**| 服务器 | 浏览器（node 不支持） |
｜**依赖关系的确定**｜运行时｜编译时｜

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

**node 的 es6支持**

可以使用es-checker来检测当前Node.js对ES6的支持情况。

使用命令，全局安装es-checker：

`npm install -g es-checker`

安装好之后，执行以下命令来查看Node.js对ES6的支持情况, 运行：

`es-checker`

<img src="https://i.postimg.cc/fbcRCGq8/f1d760ab6c7c79ecf1159e637e0dbd06.jpg" width="600"/>
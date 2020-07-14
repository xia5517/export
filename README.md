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
  const val = 'key1';
  import val from "'./'+val";
```

- 模块API中暴露的属性和方法不仅仅是值的拷贝或引用，而是内部模块定义的标识符的实际绑定（指针）。
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
每个模块只能使用一个默认导出，可以使 import 导入语法简介。


**命名导出vs默认导出**
```
function foo() {
  //
}

export {foo as default};
```

vs

```
function foo() {
  // 
}
export default foo;
```

默认导出导出的是函数表达式的绑定，而不是标识符foo。相当于：
```
  export default function foo() {
    //
  }
```

因此加入在模块内有重赋值，也不会被覆盖。

```
  export default function foo() {
    //
  }

  foo = 11;
```
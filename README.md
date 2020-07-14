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


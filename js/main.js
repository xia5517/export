// import {aa} from './foo';
// // foo.name = "lisa";
// // foo.xx = () => {
    
// // }

// console.log('这里是main');
// console.log(aa)


// import bar from './bar';
// import foo from './foo';
// import status from './com';

// import {aa, cc} from './point';
// 验证命名指针绑定
// console.log(aa)

// 验证模块外修改变量
// console.log(cc)
// cc = 'zzz';
// console.log(cc)


// 验证默认导出vs命名导出
// import aa from './point';

// console.log(aa)

// foo();
// bar();

// console.log(status);

// 验证 没有export  foo
// console.log(bb);


// foo('index.js');

// index.js
// require('./foo.js');


// import foo from './foo.js';
// foo('index.js');

import * as com from './com.js';
console.log(document.getElementById("myBtn"));
document.getElementById("myBtn").addEventListener("click", () => {
    com.add();
})
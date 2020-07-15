// export default {
//     fn: () => {
//         console.log('这里是foo')
//     }
//     // name: 'xxx'
// };

// export function aa() {
//     let zz = 1;
// }

// import status from './com';

// export default function () {
//     status.status = 'foo';
// }

// 验证 没有export 的全局声明
// var bb = [1, 2, 3];

// import bar from './bar.js';
// console.log('value of bar:', bar);
// export default 'This is foo.js';

// import {bar} from './bar.js';
// console.log('foo.mjs');
// console.log(bar);
// export let foo = 'foo';

import bar from './bar.js';
function foo(invoker) {
    console.log(invoker + ' invokes foo.js');
    bar('foo.js');
}
export default foo;

// const bar = require('./bar.js');
// console.log('value of bar:', bar);
// module.exports = 'This is foo.js';


// import bar from './bar.js';
// console.log('value of bar:', bar);
// export default 'This is foo.js';
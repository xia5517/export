// export default {
//     fn: () => {
//         console.log('这里是foo')
//     }
//     // name: 'xxx'
// };

// export function aa() {
//     let zz = 1;
// }

import status from './com';

export default function () {
    status.status = 'foo';
}

// 验证 没有export 的全局声明
// var bb = [1, 2, 3];
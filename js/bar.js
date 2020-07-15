// import status from './com';
// export default function () {
//     status.status = 'bar';
// }



// import {foo} from './foo.js';
// console.log('bar.mjs');
// console.log(foo);
// let bar = 'bar';
// export { 
//     bar
// };

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

// const foo = require('./foo.js');
// console.log('value of foo:', foo);
// module.exports = 'This is bar.js';


// bar.js
// import foo from './foo.js';
// console.log('value of foo:', foo);
// export default 'This is bar.js';

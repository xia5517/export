// bar.js
import {foo} from './foo.js';
console.log('bar.mjs');
console.log(foo);
let bar = 'bar';
export { 
    bar
};
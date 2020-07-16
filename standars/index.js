// import aa from './a.js';

// console.log(aa);

import {a, add} from './bar.js';

document.getElementById('bn').addEventListener('click', () => {
    add();
    console.log(a);
})
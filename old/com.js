// var status = (function aa() {
//     function fn() {
//         return 1;
//     }
//     var obj = {};
//     obj.fn = fn;
//     return obj;
// })();

// console.log(status);

var me = (function() {
    function fn() {
        return 1;
    }
    return {
        fn: fn,
        status: 'false'
    };
})();
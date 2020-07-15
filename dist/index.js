/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/bar.js":
/*!*******************!*\
  !*** ./js/bar.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo.js */ \"./js/foo.js\");\n// import status from './com';\n// export default function () {\n//     status.status = 'bar';\n// }\n\n\n\n// import {foo} from './foo.js';\n// console.log('bar.mjs');\n// console.log(foo);\n// let bar = 'bar';\n// export { \n//     bar\n// };\n\n// bar.js\n\nlet invoked = false;\nfunction bar(invoker) {\n    if(!invoked) {\n        invoked = true;\n        console.log(invoker + ' invokes bar.js');\n        Object(_foo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('bar.js');\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (bar);\n\n// const foo = require('./foo.js');\n// console.log('value of foo:', foo);\n// module.exports = 'This is bar.js';\n\n\n// bar.js\n// import foo from './foo.js';\n// console.log('value of foo:', foo);\n// export default 'This is bar.js';\n\n\n//# sourceURL=webpack:///./js/bar.js?");

/***/ }),

/***/ "./js/foo.js":
/*!*******************!*\
  !*** ./js/foo.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar.js */ \"./js/bar.js\");\n// export default {\n//     fn: () => {\n//         console.log('这里是foo')\n//     }\n//     // name: 'xxx'\n// };\n\n// export function aa() {\n//     let zz = 1;\n// }\n\n// import status from './com';\n\n// export default function () {\n//     status.status = 'foo';\n// }\n\n// 验证 没有export 的全局声明\n// var bb = [1, 2, 3];\n\n// import bar from './bar.js';\n// console.log('value of bar:', bar);\n// export default 'This is foo.js';\n\n// import {bar} from './bar.js';\n// console.log('foo.mjs');\n// console.log(bar);\n// export let foo = 'foo';\n\n\nfunction foo(invoker) {\n    console.log(invoker + ' invokes foo.js');\n    Object(_bar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('foo.js');\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (foo);\n\n// const bar = require('./bar.js');\n// console.log('value of bar:', bar);\n// module.exports = 'This is foo.js';\n\n\n// import bar from './bar.js';\n// console.log('value of bar:', bar);\n// export default 'This is foo.js';\n\n//# sourceURL=webpack:///./js/foo.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo.js */ \"./js/foo.js\");\n// import {aa} from './foo';\n// // foo.name = \"lisa\";\n// // foo.xx = () => {\n    \n// // }\n\n// console.log('这里是main');\n// console.log(aa)\n\n\n// import bar from './bar';\n// import foo from './foo';\n// import status from './com';\n\n// import {aa, cc} from './point';\n// 验证命名指针绑定\n// console.log(aa)\n\n// 验证模块外修改变量\n// console.log(cc)\n// cc = 'zzz';\n// console.log(cc)\n\n\n// 验证默认导出vs命名导出\n// import aa from './point';\n\n// console.log(aa)\n\n// foo();\n// bar();\n\n// console.log(status);\n\n// 验证 没有export  foo\n// console.log(bb);\n\n\n// foo('index.js');\n\n// index.js\n// require('./foo.js');\n\n\n\nObject(_foo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('index.js');\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });
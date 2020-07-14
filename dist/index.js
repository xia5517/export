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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./com */ \"./js/com.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n    _com__WEBPACK_IMPORTED_MODULE_0__[\"default\"].status = 'bar';\n});\n\n//# sourceURL=webpack:///./js/bar.js?");

/***/ }),

/***/ "./js/com.js":
/*!*******************!*\
  !*** ./js/com.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    status: 'false'\n});\n\n//# sourceURL=webpack:///./js/com.js?");

/***/ }),

/***/ "./js/foo.js":
/*!*******************!*\
  !*** ./js/foo.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./com */ \"./js/com.js\");\n// export default {\n//     fn: () => {\n//         console.log('这里是foo')\n//     }\n//     // name: 'xxx'\n// };\n\n// export function aa() {\n//     let zz = 1;\n// }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n    _com__WEBPACK_IMPORTED_MODULE_0__[\"default\"].status = 'foo';\n});\n\n//# sourceURL=webpack:///./js/foo.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar */ \"./js/bar.js\");\n/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foo */ \"./js/foo.js\");\n/* harmony import */ var _com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com */ \"./js/com.js\");\n// import {aa} from './foo';\n// // foo.name = \"lisa\";\n// // foo.xx = () => {\n    \n// // }\n\n// console.log('这里是main');\n// console.log(aa)\n\n\n\n\n\nObject(_foo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nObject(_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconsole.log(_com__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconsole.log(\"66\");\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adam.js":
/*!*********************!*\
  !*** ./src/adam.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   approachNumber: () => (/* binding */ approachNumber),\n/* harmony export */   createRandomArr: () => (/* binding */ createRandomArr),\n/* harmony export */   getRndInteger: () => (/* binding */ getRndInteger),\n/* harmony export */   randFloat: () => (/* binding */ randFloat),\n/* harmony export */   zeroFunc: () => (/* binding */ zeroFunc)\n/* harmony export */ });\nconsole.log(\"Adam French ~2022\");\n\nfunction getRndInteger(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n}\nfunction randFloat(min, max) {\n  return Math.random() * (max - min) + min;\n}\nfunction zeroFunc(initial, time) {\n  return initial * Math.exp(-time);\n}\nfunction approachNumber(startNum, endNum, interval) {\n  return -interval * (endNum - startNum);\n}\nfunction createRandomArr(length, min, max) {\n  arr = [];\n  for (let i = 0; i < length; i++) {\n    arr.push(randFloat(min, max));\n  }\n  return arr;\n}\n\n\n//# sourceURL=webpack://adam_website/./src/adam.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/adam.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
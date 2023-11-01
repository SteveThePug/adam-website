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

/***/ "./src/multipleScenes.js":
/*!*******************************!*\
  !*** ./src/multipleScenes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeSceneInfo: () => (/* binding */ makeSceneInfo),\n/* harmony export */   renderSceneInfo: () => (/* binding */ renderSceneInfo)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n  alpha: true,\n});\nconst body = document.getElementsByTagName(\"body\")[0];\nconst canvas = renderer.domElement;\nbody.appendChild(canvas);\n\ncanvas.style.position = \"absolute\";\ncanvas.style.zIndex = 1;\ncanvas.style.left = 0;\ncanvas.style.top = 0;\ncanvas.style.width = \"100%\";\ncanvas.style.height = \"100%\";\ncanvas.style.margin = 0;\ncanvas.style.pointerEvents = \"none\";\n\nconst resizeRendererToDisplaySize = () => {\n  const width = canvas.clientWidth;\n  const height = canvas.clientHeight;\n\n  const needResize = canvas.width !== width || canvas.height !== height;\n  if (needResize) {\n    renderer.setSize(width, height, false);\n  }\n  return needResize;\n};\n\nwindow.addEventListener(\"resize\", resizeRendererToDisplaySize, false);\nresizeRendererToDisplaySize();\n\nconst makeSceneInfo = (elem) => {\n  const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n  const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(\n    75,\n    elem.clientWidth / elem.clientHeight,\n    0.01,\n    5\n  );\n  const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 0.5);\n  light.position.set(1, 0, 1);\n  scene.add(light);\n\n  camera.position.set(0, 0, 2);\n  camera.lookAt(0, 0, 0);\n\n  return { scene, camera, elem};\n};\n\n//Renders a SceneInfo to its given element\nconst renderSceneInfo = (sceneInfo) => {\n  const { scene, camera, elem } = sceneInfo;\n  const { left, right, top, bottom, width, height } =\n    elem.getBoundingClientRect();\n\n  const isOffscreen =\n    bottom < 0 ||\n    top > renderer.domElement.clientHeight ||\n    right < 0 ||\n    left > renderer.domElement.clientWidth;\n\n  if (isOffscreen) return;\n\n  camera.aspect = width / height;\n  camera.updateProjectionMatrix();\n\n  const positiveYUpBottom = renderer.domElement.clientHeight - bottom;\n  renderer.setScissorTest(true);\n  renderer.setScissor(left, positiveYUpBottom, width, height);\n  renderer.setViewport(left, positiveYUpBottom, width, height);\n\n  renderer.render(scene, camera);\n\n  const transform = `translateY(${window.scrollY}px)`;\n  renderer.domElement.style.transform = transform;\n};\n\n\n//# sourceURL=webpack://adam_website/./src/multipleScenes.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/multipleScenes.js");
/******/ 	
/******/ })()
;
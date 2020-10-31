/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! namespace exports */
/*! export Clock [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clock\": () => /* binding */ Clock\n/* harmony export */ });\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n    \n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n    \n    // 3. Call printTime.\n    const time = this.printTime();\n    (0,_warmup_js__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(time, clockElement);\n    \n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n  \n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    \n    // Use console.log to print it.\n    return timeString;\n  }\n  \n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n    \n    // 2. Call printTime.\n    const time = this.printTime();\n    (0,_warmup_js__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(time, clockElement);\n  }\n  \n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n  \n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n  \n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clockElement = document.getElementById(\"clock\");\nconst clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst liGenerator = (dogName, dogInfo) => {\n  const aTag = document.createElement(\"a\");\n  aTag.innerHTML = dogName;\n  aTag.setAttribute(\"href\", dogInfo);\n  \n  const liTag = document.createElement(\"li\");\n  liTag.setAttribute(\"class\", \"dog-link\");\n  liTag.appendChild(aTag);\n\n  return liTag;\n}\n\nfunction dogLinkCreator () {\n  const dogNames = Object.keys(dogs);\n  const dogInfo = Object.values(dogs);\n  const liArr = [];\n\n  for(let i = 0; i < dogNames.length; i++) {\n    liArr.push(liGenerator(dogNames[i], dogInfo[i]))\n  }\n\n  return liArr;\n}\n\nfunction attachDogLinks () {\n  const dogLinks = dogLinkCreator();\n  const dropDownUl = document.querySelector(\".drop-down-dog-list\")\n  dogLinks.forEach(dog => {\n    dropDownUl.append(dog);\n  });\n}\n\nfunction handleEnter() { //class = hovered\n  const dropDown = document.querySelector(\".drop-down-dog-nav\");\n  \n  dropDown.addEventListener(\"mouseenter\", (event) => {\n    const dogList = document.querySelectorAll(\".dog-link\")\n    for(let i = 0; i < dogList.length; i++) {\n      dogList[i].className = \"hovered\"\n    }\n  });\n}\n\nfunction handleLeave() {\n  const dropDown = document.querySelector(\".drop-down-dog-nav\");\n  \n  dropDown.addEventListener(\"mouseleave\", (event) => {\n    const dogList = document.querySelectorAll(\".hovered\")\n    for (let i = 0; i < dogList.length; i++) {\n      dogList[i].className = \"dog-link\"\n    }\n  });\n}\n\nattachDogLinks();\nhandleEnter();\nhandleLeave();\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("const storageStr = localStorage.getItem(\"todos\")\nlet todos;\nconst ul = document.querySelector(\".todos\")\nconst form = document.querySelector(\".add-todo-form\")\n\nif (storageStr.length > 0) {\n  todos = JSON.parse(storageStr)\n  populateList()\n} else {\n  todos = []\n}\n\nfunction addTodo () {\n  while (ul.children.length > 1) {\n    ul.removeChild(ul.lastChild);\n  }\n  const text = document.querySelector('input[name=\"add-todo\"]').value;\n  const todo = {\"val\": text, \"done\": false}\n  todos.push(todo)\n  document.querySelector('input[name=\"add-todo\"]').value = \"\";\n  populateList();\n  localStorage.setItem(\"todos\", JSON.stringify(todos));\n}\n\nfunction populateList() {\n  todos.forEach(todo => {\n    const label = document.createElement(\"label\");\n    label.htmlFor = \"todo\";\n    label.textContent = todo[\"val\"];\n\n    const checkBox = document.createElement(\"input\");\n    checkBox.id = \"todo\";\n    checkBox.type = \"checkbox\";\n    \n    const li = document.createElement(\"li\");\n    li.className = \"todo-goal\"\n    li.appendChild(checkBox);\n    li.appendChild(label);\n    ul.appendChild(li);\n  })\n}\n\nfunction handleSubmit() {\n  form.addEventListener(\"submit\", event => {\n    // debugger;\n    event.preventDefault();\n    addTodo();\n  });\n}\n\nfunction handleCheckbox() {\n  const lis = document.querySelectorAll(\".todo-goal\")\n  li.addEventListener(\"click\", event => {\n    debugger;\n  })\n}\n\nhandleSubmit();\nhandleCheckbox();\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! namespace exports */
/*! export htmlGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => /* binding */ htmlGenerator\n/* harmony export */ });\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  const children = Array.from(htmlElement.children);\n  // debugger;\n  if (children.length > 0) {\n    htmlElement.removeChild(htmlElement.firstChild);\n  }\n  \n  const newPTag = document.createElement(\"p\");\n  newPTag.textContent = string;\n  htmlElement.append(newPTag);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst DEFAULTS = {\n  COLOR: \"#D3D3D3\",\n  RADIUS: 30,\n}\n\nfunction Asteroid(options) {\n    options.color =  DEFAULTS.COLOR;\n    options.radius = DEFAULTS.RADIUS;\n    MovingObject.call(this, options);\n}\n\nUtils.inherits(Asteroid, MovingObject);\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n  \n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 8;\n\n\nGame.prototype.addAsteroids = function addAsteroids() {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({\n          game: this\n\n        }));\n    }\n    \n}\n\nGame.prototype.randomPosition = function () {\n    const x = Math.random() * Game.DIM_X;\n    const y = Math.random() * Game.DIM_Y;\n    return [x, y];\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, DIM_X, DIM_Y);\n  clear = this.asteroids;\n  for (let i = 0; i < clear.length; i++) {\n    clear[i].draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n    move = this.asteroids\n    for (let i = 0; i < move.length; i++) {\n        move[i].move();\n    }\n}\n\nmodule.export = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView (game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  let that = this;\n    setInterval(function() {\n      that.game.moveObjects();\n      that.game.draw(that.ctx);\n    }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("function MovingObject (options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI\n  );\n  ctx.fill();\n\n\n}\n\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0]; \n    this.pos[1] += this.vel[1]; \n}\n\n\n  // ctx.beginPath();\n  // ctx.arc(100, 100, 20, 0, 2*Math.PI);\n  // ctx.strokeStyle = \"green\";\n  // ctx.lineWidth = 5;\n  // ctx.stroke();\n  // ctx.fillStyle = \"blue\";\n  // ctx.fill();\n\nmodule.exports = MovingObject;\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n\n\n// const canvas1 = document.getElementById('game-canvas');\n\n// canvas1.width = 500;\n// canvas1.height = 500;\n\n// const ctx = canvas1.getContext('2d');\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// mo.draw(ctx);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("const Utils = {\n    inherits(childClass, parentClass) {\n      function Surrogate() {};\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate();\n      childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.GameView = GameView;\nwindow.Game = Game;\n\n\ndocument.addEventListener('DOMContentLoaded', function(){\n    const canvas1 = document.getElementById('game-canvas');\n    const ctx = canvas1.getContext('2d');\n\n    const game = new Game();\n    const gameView = new GameView(game, ctx);\n    gameView.start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/dom-ready.js":
/*!**************************!*\
  !*** ./app/dom-ready.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isIEBrowser=__webpack_require__(/*! ./is-ie-browser */ "./app/is-ie-browser.js");module.exports=function(a){a&&"function"==typeof a?isIEBrowser()?document.attachEvent("onreadystatechange",function(){if("complete"===document.readyState)return a()}):document.addEventListener("DOMContentLoaded",function(){return a()}):console.error("The callback is not a function!")};

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}(function(){var a=__webpack_require__(/*! ./dom-ready */ "./app/dom-ready.js"),b=function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=__webpack_require__(/*! ../misc/core/browser-factory */ "./src/core/browser-factory.js"),c=new b,d=c.create(),d.add("core/channel"),d.add("core/bus"),a.next=5,d.load();case 5:d.locate("core/bootstrap").bootstrap().then(function(){var a=d.locator.locate("core/bus");a.emit({channelId:"domain-events",name:"logged",data:"que paso parce"})});case 6:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();a(b)})(document,window);

/***/ }),

/***/ "./app/is-ie-browser.js":
/*!******************************!*\
  !*** ./app/is-ie-browser.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(){return document.attachEvent&&"undefined"!=typeof document.attachEvent};

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*$":
/*!***************************!*\
  !*** ./src sync ^\.\/.*$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./src/index.js",
	"./core/bootstrap": "./src/core/bootstrap/index.js",
	"./core/bootstrap/": "./src/core/bootstrap/index.js",
	"./core/bootstrap/config": "./src/core/bootstrap/config.js",
	"./core/bootstrap/config.js": "./src/core/bootstrap/config.js",
	"./core/bootstrap/index": "./src/core/bootstrap/index.js",
	"./core/bootstrap/index.js": "./src/core/bootstrap/index.js",
	"./core/bootstrap/locator": "./src/core/bootstrap/locator.js",
	"./core/bootstrap/locator.js": "./src/core/bootstrap/locator.js",
	"./core/browser-config-fetcher": "./src/core/browser-config-fetcher/index.js",
	"./core/browser-config-fetcher/": "./src/core/browser-config-fetcher/index.js",
	"./core/browser-config-fetcher/index": "./src/core/browser-config-fetcher/index.js",
	"./core/browser-config-fetcher/index.js": "./src/core/browser-config-fetcher/index.js",
	"./core/browser-factory": "./src/core/browser-factory.js",
	"./core/browser-factory.js": "./src/core/browser-factory.js",
	"./core/browser-service-loader": "./src/core/browser-service-loader/index.js",
	"./core/browser-service-loader/": "./src/core/browser-service-loader/index.js",
	"./core/browser-service-loader/index": "./src/core/browser-service-loader/index.js",
	"./core/browser-service-loader/index.js": "./src/core/browser-service-loader/index.js",
	"./core/bus": "./src/core/bus/index.js",
	"./core/bus/": "./src/core/bus/index.js",
	"./core/bus/bootstrap": "./src/core/bus/bootstrap/index.js",
	"./core/bus/bootstrap/": "./src/core/bus/bootstrap/index.js",
	"./core/bus/bootstrap/error/observer-contract-not-honered": "./src/core/bus/bootstrap/error/observer-contract-not-honered.js",
	"./core/bus/bootstrap/error/observer-contract-not-honered.js": "./src/core/bus/bootstrap/error/observer-contract-not-honered.js",
	"./core/bus/bootstrap/index": "./src/core/bus/bootstrap/index.js",
	"./core/bus/bootstrap/index.js": "./src/core/bus/bootstrap/index.js",
	"./core/bus/bootstrap/locator": "./src/core/bus/bootstrap/locator.js",
	"./core/bus/bootstrap/locator.js": "./src/core/bus/bootstrap/locator.js",
	"./core/bus/config": "./src/core/bus/config.js",
	"./core/bus/config.js": "./src/core/bus/config.js",
	"./core/bus/factory": "./src/core/bus/factory/index.js",
	"./core/bus/factory/": "./src/core/bus/factory/index.js",
	"./core/bus/factory/index": "./src/core/bus/factory/index.js",
	"./core/bus/factory/index.js": "./src/core/bus/factory/index.js",
	"./core/bus/factory/locator": "./src/core/bus/factory/locator.js",
	"./core/bus/factory/locator.js": "./src/core/bus/factory/locator.js",
	"./core/bus/index": "./src/core/bus/index.js",
	"./core/bus/index.js": "./src/core/bus/index.js",
	"./core/bus/log": "./src/core/bus/log/index.js",
	"./core/bus/log/": "./src/core/bus/log/index.js",
	"./core/bus/log/index": "./src/core/bus/log/index.js",
	"./core/bus/log/index.js": "./src/core/bus/log/index.js",
	"./core/bus/log/locator": "./src/core/bus/log/locator.js",
	"./core/bus/log/locator.js": "./src/core/bus/log/locator.js",
	"./core/bus/schema/entity/bus": "./src/core/bus/schema/entity/bus.js",
	"./core/bus/schema/entity/bus.js": "./src/core/bus/schema/entity/bus.js",
	"./core/channel": "./src/core/channel/index.js",
	"./core/channel/": "./src/core/channel/index.js",
	"./core/channel/config": "./src/core/channel/config.js",
	"./core/channel/config.js": "./src/core/channel/config.js",
	"./core/channel/factory": "./src/core/channel/factory/index.js",
	"./core/channel/factory/": "./src/core/channel/factory/index.js",
	"./core/channel/factory/index": "./src/core/channel/factory/index.js",
	"./core/channel/factory/index.js": "./src/core/channel/factory/index.js",
	"./core/channel/factory/locator": "./src/core/channel/factory/locator.js",
	"./core/channel/factory/locator.js": "./src/core/channel/factory/locator.js",
	"./core/channel/index": "./src/core/channel/index.js",
	"./core/channel/index.js": "./src/core/channel/index.js",
	"./core/channel/locator": "./src/core/channel/locator.js",
	"./core/channel/locator.js": "./src/core/channel/locator.js",
	"./core/channel/schema/dto/event": "./src/core/channel/schema/dto/event.js",
	"./core/channel/schema/dto/event-meta": "./src/core/channel/schema/dto/event-meta.js",
	"./core/channel/schema/dto/event-meta.js": "./src/core/channel/schema/dto/event-meta.js",
	"./core/channel/schema/dto/event.js": "./src/core/channel/schema/dto/event.js",
	"./core/channel/schema/entity/channel": "./src/core/channel/schema/entity/channel.js",
	"./core/channel/schema/entity/channel.js": "./src/core/channel/schema/entity/channel.js",
	"./core/config": "./src/core/config.js",
	"./core/config-fetcher": "./src/core/config-fetcher/index.js",
	"./core/config-fetcher/": "./src/core/config-fetcher/index.js",
	"./core/config-fetcher/index": "./src/core/config-fetcher/index.js",
	"./core/config-fetcher/index.js": "./src/core/config-fetcher/index.js",
	"./core/config.js": "./src/core/config.js",
	"./core/configuration": "./src/core/configuration/index.js",
	"./core/configuration/": "./src/core/configuration/index.js",
	"./core/configuration/config": "./src/core/configuration/config.js",
	"./core/configuration/config.js": "./src/core/configuration/config.js",
	"./core/configuration/index": "./src/core/configuration/index.js",
	"./core/configuration/index.js": "./src/core/configuration/index.js",
	"./core/configuration/locator": "./src/core/configuration/locator.js",
	"./core/configuration/locator.js": "./src/core/configuration/locator.js",
	"./core/console": "./src/core/console/index.js",
	"./core/console/": "./src/core/console/index.js",
	"./core/console/config": "./src/core/console/config.js",
	"./core/console/config.js": "./src/core/console/config.js",
	"./core/console/factory": "./src/core/console/factory/index.js",
	"./core/console/factory/": "./src/core/console/factory/index.js",
	"./core/console/factory/index": "./src/core/console/factory/index.js",
	"./core/console/factory/index.js": "./src/core/console/factory/index.js",
	"./core/console/factory/locator": "./src/core/console/factory/locator.js",
	"./core/console/factory/locator.js": "./src/core/console/factory/locator.js",
	"./core/console/index": "./src/core/console/index.js",
	"./core/console/index.js": "./src/core/console/index.js",
	"./core/data-structure/associative-array": "./src/core/data-structure/associative-array/index.js",
	"./core/data-structure/associative-array/": "./src/core/data-structure/associative-array/index.js",
	"./core/data-structure/associative-array/factory": "./src/core/data-structure/associative-array/factory/index.js",
	"./core/data-structure/associative-array/factory/": "./src/core/data-structure/associative-array/factory/index.js",
	"./core/data-structure/associative-array/factory/index": "./src/core/data-structure/associative-array/factory/index.js",
	"./core/data-structure/associative-array/factory/index.js": "./src/core/data-structure/associative-array/factory/index.js",
	"./core/data-structure/associative-array/factory/locator": "./src/core/data-structure/associative-array/factory/locator.js",
	"./core/data-structure/associative-array/factory/locator.js": "./src/core/data-structure/associative-array/factory/locator.js",
	"./core/data-structure/associative-array/index": "./src/core/data-structure/associative-array/index.js",
	"./core/data-structure/associative-array/index.js": "./src/core/data-structure/associative-array/index.js",
	"./core/data-structure/associative-array/locator": "./src/core/data-structure/associative-array/locator.js",
	"./core/data-structure/associative-array/locator.js": "./src/core/data-structure/associative-array/locator.js",
	"./core/data-structure/config": "./src/core/data-structure/config.js",
	"./core/data-structure/config.js": "./src/core/data-structure/config.js",
	"./core/data-structure/graph": "./src/core/data-structure/graph/index.js",
	"./core/data-structure/graph/": "./src/core/data-structure/graph/index.js",
	"./core/data-structure/graph/error/node-not-exists": "./src/core/data-structure/graph/error/node-not-exists.js",
	"./core/data-structure/graph/error/node-not-exists.js": "./src/core/data-structure/graph/error/node-not-exists.js",
	"./core/data-structure/graph/factory": "./src/core/data-structure/graph/factory/index.js",
	"./core/data-structure/graph/factory/": "./src/core/data-structure/graph/factory/index.js",
	"./core/data-structure/graph/factory/index": "./src/core/data-structure/graph/factory/index.js",
	"./core/data-structure/graph/factory/index.js": "./src/core/data-structure/graph/factory/index.js",
	"./core/data-structure/graph/factory/locator": "./src/core/data-structure/graph/factory/locator.js",
	"./core/data-structure/graph/factory/locator.js": "./src/core/data-structure/graph/factory/locator.js",
	"./core/data-structure/graph/index": "./src/core/data-structure/graph/index.js",
	"./core/data-structure/graph/index.js": "./src/core/data-structure/graph/index.js",
	"./core/data-structure/graph/locator": "./src/core/data-structure/graph/locator.js",
	"./core/data-structure/graph/locator.js": "./src/core/data-structure/graph/locator.js",
	"./core/data-structure/multiple-associative-array": "./src/core/data-structure/multiple-associative-array/index.js",
	"./core/data-structure/multiple-associative-array/": "./src/core/data-structure/multiple-associative-array/index.js",
	"./core/data-structure/multiple-associative-array/factory": "./src/core/data-structure/multiple-associative-array/factory/index.js",
	"./core/data-structure/multiple-associative-array/factory/": "./src/core/data-structure/multiple-associative-array/factory/index.js",
	"./core/data-structure/multiple-associative-array/factory/index": "./src/core/data-structure/multiple-associative-array/factory/index.js",
	"./core/data-structure/multiple-associative-array/factory/index.js": "./src/core/data-structure/multiple-associative-array/factory/index.js",
	"./core/data-structure/multiple-associative-array/factory/locator": "./src/core/data-structure/multiple-associative-array/factory/locator.js",
	"./core/data-structure/multiple-associative-array/factory/locator.js": "./src/core/data-structure/multiple-associative-array/factory/locator.js",
	"./core/data-structure/multiple-associative-array/index": "./src/core/data-structure/multiple-associative-array/index.js",
	"./core/data-structure/multiple-associative-array/index.js": "./src/core/data-structure/multiple-associative-array/index.js",
	"./core/data-structure/multiple-associative-array/locator": "./src/core/data-structure/multiple-associative-array/locator.js",
	"./core/data-structure/multiple-associative-array/locator.js": "./src/core/data-structure/multiple-associative-array/locator.js",
	"./core/data-structure/object": "./src/core/data-structure/object/index.js",
	"./core/data-structure/object/": "./src/core/data-structure/object/index.js",
	"./core/data-structure/object/config": "./src/core/data-structure/object/config.js",
	"./core/data-structure/object/config.js": "./src/core/data-structure/object/config.js",
	"./core/data-structure/object/index": "./src/core/data-structure/object/index.js",
	"./core/data-structure/object/index.js": "./src/core/data-structure/object/index.js",
	"./core/data-structure/object/locator": "./src/core/data-structure/object/locator.js",
	"./core/data-structure/object/locator.js": "./src/core/data-structure/object/locator.js",
	"./core/data-structure/queue": "./src/core/data-structure/queue/index.js",
	"./core/data-structure/queue/": "./src/core/data-structure/queue/index.js",
	"./core/data-structure/queue/factory": "./src/core/data-structure/queue/factory/index.js",
	"./core/data-structure/queue/factory/": "./src/core/data-structure/queue/factory/index.js",
	"./core/data-structure/queue/factory/index": "./src/core/data-structure/queue/factory/index.js",
	"./core/data-structure/queue/factory/index.js": "./src/core/data-structure/queue/factory/index.js",
	"./core/data-structure/queue/factory/locator": "./src/core/data-structure/queue/factory/locator.js",
	"./core/data-structure/queue/factory/locator.js": "./src/core/data-structure/queue/factory/locator.js",
	"./core/data-structure/queue/index": "./src/core/data-structure/queue/index.js",
	"./core/data-structure/queue/index.js": "./src/core/data-structure/queue/index.js",
	"./core/data-structure/queue/locator": "./src/core/data-structure/queue/locator.js",
	"./core/data-structure/queue/locator.js": "./src/core/data-structure/queue/locator.js",
	"./core/data-structure/schema/validator": "./src/core/data-structure/schema/validator/index.js",
	"./core/data-structure/schema/validator/": "./src/core/data-structure/schema/validator/index.js",
	"./core/data-structure/schema/validator/associative-array": "./src/core/data-structure/schema/validator/associative-array/index.js",
	"./core/data-structure/schema/validator/associative-array/": "./src/core/data-structure/schema/validator/associative-array/index.js",
	"./core/data-structure/schema/validator/associative-array/error/invalid-associative-array": "./src/core/data-structure/schema/validator/associative-array/error/invalid-associative-array.js",
	"./core/data-structure/schema/validator/associative-array/error/invalid-associative-array.js": "./src/core/data-structure/schema/validator/associative-array/error/invalid-associative-array.js",
	"./core/data-structure/schema/validator/associative-array/index": "./src/core/data-structure/schema/validator/associative-array/index.js",
	"./core/data-structure/schema/validator/associative-array/index.js": "./src/core/data-structure/schema/validator/associative-array/index.js",
	"./core/data-structure/schema/validator/associative-array/locator": "./src/core/data-structure/schema/validator/associative-array/locator.js",
	"./core/data-structure/schema/validator/associative-array/locator.js": "./src/core/data-structure/schema/validator/associative-array/locator.js",
	"./core/data-structure/schema/validator/collection": "./src/core/data-structure/schema/validator/collection/index.js",
	"./core/data-structure/schema/validator/collection/": "./src/core/data-structure/schema/validator/collection/index.js",
	"./core/data-structure/schema/validator/collection/error/invalid-collection": "./src/core/data-structure/schema/validator/collection/error/invalid-collection.js",
	"./core/data-structure/schema/validator/collection/error/invalid-collection.js": "./src/core/data-structure/schema/validator/collection/error/invalid-collection.js",
	"./core/data-structure/schema/validator/collection/index": "./src/core/data-structure/schema/validator/collection/index.js",
	"./core/data-structure/schema/validator/collection/index.js": "./src/core/data-structure/schema/validator/collection/index.js",
	"./core/data-structure/schema/validator/collection/locator": "./src/core/data-structure/schema/validator/collection/locator.js",
	"./core/data-structure/schema/validator/collection/locator.js": "./src/core/data-structure/schema/validator/collection/locator.js",
	"./core/data-structure/schema/validator/custom-json": "./src/core/data-structure/schema/validator/custom-json/index.js",
	"./core/data-structure/schema/validator/custom-json/": "./src/core/data-structure/schema/validator/custom-json/index.js",
	"./core/data-structure/schema/validator/custom-json/error/invalid-json": "./src/core/data-structure/schema/validator/custom-json/error/invalid-json.js",
	"./core/data-structure/schema/validator/custom-json/error/invalid-json.js": "./src/core/data-structure/schema/validator/custom-json/error/invalid-json.js",
	"./core/data-structure/schema/validator/custom-json/index": "./src/core/data-structure/schema/validator/custom-json/index.js",
	"./core/data-structure/schema/validator/custom-json/index.js": "./src/core/data-structure/schema/validator/custom-json/index.js",
	"./core/data-structure/schema/validator/custom-json/locator": "./src/core/data-structure/schema/validator/custom-json/locator.js",
	"./core/data-structure/schema/validator/custom-json/locator.js": "./src/core/data-structure/schema/validator/custom-json/locator.js",
	"./core/data-structure/schema/validator/index": "./src/core/data-structure/schema/validator/index.js",
	"./core/data-structure/schema/validator/index.js": "./src/core/data-structure/schema/validator/index.js",
	"./core/data-structure/schema/validator/multiple-associative-array": "./src/core/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/data-structure/schema/validator/multiple-associative-array/": "./src/core/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array": "./src/core/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js",
	"./core/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js": "./src/core/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js",
	"./core/data-structure/schema/validator/multiple-associative-array/index": "./src/core/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/data-structure/schema/validator/multiple-associative-array/index.js": "./src/core/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/data-structure/schema/validator/multiple-associative-array/locator": "./src/core/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/data-structure/schema/validator/multiple-associative-array/locator.js": "./src/core/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/data-structure/schema/value-object/associative-array": "./src/core/data-structure/schema/value-object/associative-array.js",
	"./core/data-structure/schema/value-object/associative-array.js": "./src/core/data-structure/schema/value-object/associative-array.js",
	"./core/data-structure/schema/value-object/edge": "./src/core/data-structure/schema/value-object/edge.js",
	"./core/data-structure/schema/value-object/edge.js": "./src/core/data-structure/schema/value-object/edge.js",
	"./core/data-structure/schema/value-object/graph": "./src/core/data-structure/schema/value-object/graph.js",
	"./core/data-structure/schema/value-object/graph.js": "./src/core/data-structure/schema/value-object/graph.js",
	"./core/data-structure/schema/value-object/multiple-associative-array": "./src/core/data-structure/schema/value-object/multiple-associative-array.js",
	"./core/data-structure/schema/value-object/multiple-associative-array.js": "./src/core/data-structure/schema/value-object/multiple-associative-array.js",
	"./core/data-structure/schema/value-object/node": "./src/core/data-structure/schema/value-object/node.js",
	"./core/data-structure/schema/value-object/node.js": "./src/core/data-structure/schema/value-object/node.js",
	"./core/data-structure/schema/value-object/queue": "./src/core/data-structure/schema/value-object/queue.js",
	"./core/data-structure/schema/value-object/queue.js": "./src/core/data-structure/schema/value-object/queue.js",
	"./core/data-structure/schema/value-object/stack": "./src/core/data-structure/schema/value-object/stack.js",
	"./core/data-structure/schema/value-object/stack.js": "./src/core/data-structure/schema/value-object/stack.js",
	"./core/data-structure/schema/value-object/tree": "./src/core/data-structure/schema/value-object/tree.js",
	"./core/data-structure/schema/value-object/tree.js": "./src/core/data-structure/schema/value-object/tree.js",
	"./core/data-structure/stack": "./src/core/data-structure/stack/index.js",
	"./core/data-structure/stack/": "./src/core/data-structure/stack/index.js",
	"./core/data-structure/stack/factory": "./src/core/data-structure/stack/factory/index.js",
	"./core/data-structure/stack/factory/": "./src/core/data-structure/stack/factory/index.js",
	"./core/data-structure/stack/factory/index": "./src/core/data-structure/stack/factory/index.js",
	"./core/data-structure/stack/factory/index.js": "./src/core/data-structure/stack/factory/index.js",
	"./core/data-structure/stack/factory/locator": "./src/core/data-structure/stack/factory/locator.js",
	"./core/data-structure/stack/factory/locator.js": "./src/core/data-structure/stack/factory/locator.js",
	"./core/data-structure/stack/index": "./src/core/data-structure/stack/index.js",
	"./core/data-structure/stack/index.js": "./src/core/data-structure/stack/index.js",
	"./core/data-structure/stack/locator": "./src/core/data-structure/stack/locator.js",
	"./core/data-structure/stack/locator.js": "./src/core/data-structure/stack/locator.js",
	"./core/data-structure/tree": "./src/core/data-structure/tree/index.js",
	"./core/data-structure/tree/": "./src/core/data-structure/tree/index.js",
	"./core/data-structure/tree/factory": "./src/core/data-structure/tree/factory/index.js",
	"./core/data-structure/tree/factory/": "./src/core/data-structure/tree/factory/index.js",
	"./core/data-structure/tree/factory/index": "./src/core/data-structure/tree/factory/index.js",
	"./core/data-structure/tree/factory/index.js": "./src/core/data-structure/tree/factory/index.js",
	"./core/data-structure/tree/factory/locator": "./src/core/data-structure/tree/factory/locator.js",
	"./core/data-structure/tree/factory/locator.js": "./src/core/data-structure/tree/factory/locator.js",
	"./core/data-structure/tree/index": "./src/core/data-structure/tree/index.js",
	"./core/data-structure/tree/index.js": "./src/core/data-structure/tree/index.js",
	"./core/data-structure/tree/locator": "./src/core/data-structure/tree/locator.js",
	"./core/data-structure/tree/locator.js": "./src/core/data-structure/tree/locator.js",
	"./core/deepassign": "./src/core/deepassign/index.js",
	"./core/deepassign/": "./src/core/deepassign/index.js",
	"./core/deepassign/config": "./src/core/deepassign/config.js",
	"./core/deepassign/config.js": "./src/core/deepassign/config.js",
	"./core/deepassign/error/not-an-object": "./src/core/deepassign/error/not-an-object.js",
	"./core/deepassign/error/not-an-object.js": "./src/core/deepassign/error/not-an-object.js",
	"./core/deepassign/index": "./src/core/deepassign/index.js",
	"./core/deepassign/index.js": "./src/core/deepassign/index.js",
	"./core/deepassign/locator": "./src/core/deepassign/locator.js",
	"./core/deepassign/locator.js": "./src/core/deepassign/locator.js",
	"./core/deepclone": "./src/core/deepclone/index.js",
	"./core/deepclone/": "./src/core/deepclone/index.js",
	"./core/deepclone/config": "./src/core/deepclone/config.js",
	"./core/deepclone/config.js": "./src/core/deepclone/config.js",
	"./core/deepclone/error/failed-to-clone": "./src/core/deepclone/error/failed-to-clone.js",
	"./core/deepclone/error/failed-to-clone.js": "./src/core/deepclone/error/failed-to-clone.js",
	"./core/deepclone/index": "./src/core/deepclone/index.js",
	"./core/deepclone/index.js": "./src/core/deepclone/index.js",
	"./core/deepclone/locator": "./src/core/deepclone/locator.js",
	"./core/deepclone/locator.js": "./src/core/deepclone/locator.js",
	"./core/deepfind": "./src/core/deepfind/index.js",
	"./core/deepfind/": "./src/core/deepfind/index.js",
	"./core/deepfind/config": "./src/core/deepfind/config.js",
	"./core/deepfind/config.js": "./src/core/deepfind/config.js",
	"./core/deepfind/index": "./src/core/deepfind/index.js",
	"./core/deepfind/index.js": "./src/core/deepfind/index.js",
	"./core/deepfind/locator": "./src/core/deepfind/locator.js",
	"./core/deepfind/locator.js": "./src/core/deepfind/locator.js",
	"./core/deepfreeze": "./src/core/deepfreeze/index.js",
	"./core/deepfreeze/": "./src/core/deepfreeze/index.js",
	"./core/deepfreeze/config": "./src/core/deepfreeze/config.js",
	"./core/deepfreeze/config.js": "./src/core/deepfreeze/config.js",
	"./core/deepfreeze/index": "./src/core/deepfreeze/index.js",
	"./core/deepfreeze/index.js": "./src/core/deepfreeze/index.js",
	"./core/deepfreeze/locator": "./src/core/deepfreeze/locator.js",
	"./core/deepfreeze/locator.js": "./src/core/deepfreeze/locator.js",
	"./core/deepmerge": "./src/core/deepmerge/index.js",
	"./core/deepmerge/": "./src/core/deepmerge/index.js",
	"./core/deepmerge/config": "./src/core/deepmerge/config.js",
	"./core/deepmerge/config.js": "./src/core/deepmerge/config.js",
	"./core/deepmerge/index": "./src/core/deepmerge/index.js",
	"./core/deepmerge/index.js": "./src/core/deepmerge/index.js",
	"./core/deepmerge/locator": "./src/core/deepmerge/locator.js",
	"./core/deepmerge/locator.js": "./src/core/deepmerge/locator.js",
	"./core/error/component-not-resolvable": "./src/core/error/component-not-resolvable.js",
	"./core/error/component-not-resolvable.js": "./src/core/error/component-not-resolvable.js",
	"./core/error/service-locator-not-found": "./src/core/error/service-locator-not-found.js",
	"./core/error/service-locator-not-found.js": "./src/core/error/service-locator-not-found.js",
	"./core/error/service-unable-to-resolve-dependencies": "./src/core/error/service-unable-to-resolve-dependencies.js",
	"./core/error/service-unable-to-resolve-dependencies.js": "./src/core/error/service-unable-to-resolve-dependencies.js",
	"./core/error/service-unmet-dependency": "./src/core/error/service-unmet-dependency.js",
	"./core/error/service-unmet-dependency.js": "./src/core/error/service-unmet-dependency.js",
	"./core/locator": "./src/core/locator/index.js",
	"./core/locator/": "./src/core/locator/index.js",
	"./core/locator/constituent": "./src/core/locator/constituent.js",
	"./core/locator/constituent.js": "./src/core/locator/constituent.js",
	"./core/locator/error/locator-not-implemented": "./src/core/locator/error/locator-not-implemented.js",
	"./core/locator/error/locator-not-implemented.js": "./src/core/locator/error/locator-not-implemented.js",
	"./core/locator/error/service-undefined": "./src/core/locator/error/service-undefined.js",
	"./core/locator/error/service-undefined.js": "./src/core/locator/error/service-undefined.js",
	"./core/locator/index": "./src/core/locator/index.js",
	"./core/locator/index.js": "./src/core/locator/index.js",
	"./core/object": "./src/core/object/index.js",
	"./core/object/": "./src/core/object/index.js",
	"./core/object/config": "./src/core/object/config.js",
	"./core/object/config.js": "./src/core/object/config.js",
	"./core/object/index": "./src/core/object/index.js",
	"./core/object/index.js": "./src/core/object/index.js",
	"./core/object/locator": "./src/core/object/locator.js",
	"./core/object/locator.js": "./src/core/object/locator.js",
	"./core/schema/browser-bootstrap": "./src/core/schema/browser-bootstrap/index.js",
	"./core/schema/browser-bootstrap/": "./src/core/schema/browser-bootstrap/index.js",
	"./core/schema/browser-bootstrap/error/schema-not-resolvable": "./src/core/schema/browser-bootstrap/error/schema-not-resolvable.js",
	"./core/schema/browser-bootstrap/error/schema-not-resolvable.js": "./src/core/schema/browser-bootstrap/error/schema-not-resolvable.js",
	"./core/schema/browser-bootstrap/index": "./src/core/schema/browser-bootstrap/index.js",
	"./core/schema/browser-bootstrap/index.js": "./src/core/schema/browser-bootstrap/index.js",
	"./core/schema/browser-bootstrap/locator": "./src/core/schema/browser-bootstrap/locator.js",
	"./core/schema/browser-bootstrap/locator.js": "./src/core/schema/browser-bootstrap/locator.js",
	"./core/schema/composer": "./src/core/schema/composer/index.js",
	"./core/schema/composer/": "./src/core/schema/composer/index.js",
	"./core/schema/composer/error/filter-is-not-honering-contract": "./src/core/schema/composer/error/filter-is-not-honering-contract.js",
	"./core/schema/composer/error/filter-is-not-honering-contract.js": "./src/core/schema/composer/error/filter-is-not-honering-contract.js",
	"./core/schema/composer/error/invalid-attribute": "./src/core/schema/composer/error/invalid-attribute.js",
	"./core/schema/composer/error/invalid-attribute.js": "./src/core/schema/composer/error/invalid-attribute.js",
	"./core/schema/composer/error/invalid-collection": "./src/core/schema/composer/error/invalid-collection.js",
	"./core/schema/composer/error/invalid-collection.js": "./src/core/schema/composer/error/invalid-collection.js",
	"./core/schema/composer/error/invalid-schema": "./src/core/schema/composer/error/invalid-schema.js",
	"./core/schema/composer/error/invalid-schema.js": "./src/core/schema/composer/error/invalid-schema.js",
	"./core/schema/composer/error/schema-not-found": "./src/core/schema/composer/error/schema-not-found.js",
	"./core/schema/composer/error/schema-not-found.js": "./src/core/schema/composer/error/schema-not-found.js",
	"./core/schema/composer/error/validator-is-not-honering-contract": "./src/core/schema/composer/error/validator-is-not-honering-contract.js",
	"./core/schema/composer/error/validator-is-not-honering-contract.js": "./src/core/schema/composer/error/validator-is-not-honering-contract.js",
	"./core/schema/composer/error/validator-not-found": "./src/core/schema/composer/error/validator-not-found.js",
	"./core/schema/composer/error/validator-not-found.js": "./src/core/schema/composer/error/validator-not-found.js",
	"./core/schema/composer/index": "./src/core/schema/composer/index.js",
	"./core/schema/composer/index.js": "./src/core/schema/composer/index.js",
	"./core/schema/composer/locator": "./src/core/schema/composer/locator.js",
	"./core/schema/composer/locator.js": "./src/core/schema/composer/locator.js",
	"./core/schema/config": "./src/core/schema/config.js",
	"./core/schema/config.js": "./src/core/schema/config.js",
	"./core/schema/filter": "./src/core/schema/filter/index.js",
	"./core/schema/filter/": "./src/core/schema/filter/index.js",
	"./core/schema/filter/boolean": "./src/core/schema/filter/boolean/index.js",
	"./core/schema/filter/boolean/": "./src/core/schema/filter/boolean/index.js",
	"./core/schema/filter/boolean/index": "./src/core/schema/filter/boolean/index.js",
	"./core/schema/filter/boolean/index.js": "./src/core/schema/filter/boolean/index.js",
	"./core/schema/filter/boolean/locator": "./src/core/schema/filter/boolean/locator.js",
	"./core/schema/filter/boolean/locator.js": "./src/core/schema/filter/boolean/locator.js",
	"./core/schema/filter/csv": "./src/core/schema/filter/csv/index.js",
	"./core/schema/filter/csv/": "./src/core/schema/filter/csv/index.js",
	"./core/schema/filter/csv/index": "./src/core/schema/filter/csv/index.js",
	"./core/schema/filter/csv/index.js": "./src/core/schema/filter/csv/index.js",
	"./core/schema/filter/csv/locator": "./src/core/schema/filter/csv/locator.js",
	"./core/schema/filter/csv/locator.js": "./src/core/schema/filter/csv/locator.js",
	"./core/schema/filter/decimal": "./src/core/schema/filter/decimal/index.js",
	"./core/schema/filter/decimal/": "./src/core/schema/filter/decimal/index.js",
	"./core/schema/filter/decimal/index": "./src/core/schema/filter/decimal/index.js",
	"./core/schema/filter/decimal/index.js": "./src/core/schema/filter/decimal/index.js",
	"./core/schema/filter/decimal/locator": "./src/core/schema/filter/decimal/locator.js",
	"./core/schema/filter/decimal/locator.js": "./src/core/schema/filter/decimal/locator.js",
	"./core/schema/filter/index": "./src/core/schema/filter/index.js",
	"./core/schema/filter/index.js": "./src/core/schema/filter/index.js",
	"./core/schema/filter/integer": "./src/core/schema/filter/integer/index.js",
	"./core/schema/filter/integer/": "./src/core/schema/filter/integer/index.js",
	"./core/schema/filter/integer/index": "./src/core/schema/filter/integer/index.js",
	"./core/schema/filter/integer/index.js": "./src/core/schema/filter/integer/index.js",
	"./core/schema/filter/integer/locator": "./src/core/schema/filter/integer/locator.js",
	"./core/schema/filter/integer/locator.js": "./src/core/schema/filter/integer/locator.js",
	"./core/schema/filter/json": "./src/core/schema/filter/json/index.js",
	"./core/schema/filter/json/": "./src/core/schema/filter/json/index.js",
	"./core/schema/filter/json/index": "./src/core/schema/filter/json/index.js",
	"./core/schema/filter/json/index.js": "./src/core/schema/filter/json/index.js",
	"./core/schema/filter/json/locator": "./src/core/schema/filter/json/locator.js",
	"./core/schema/filter/json/locator.js": "./src/core/schema/filter/json/locator.js",
	"./core/schema/filter/schema": "./src/core/schema/filter/schema/index.js",
	"./core/schema/filter/schema/": "./src/core/schema/filter/schema/index.js",
	"./core/schema/filter/schema/error/missing-schema-definition": "./src/core/schema/filter/schema/error/missing-schema-definition.js",
	"./core/schema/filter/schema/error/missing-schema-definition.js": "./src/core/schema/filter/schema/error/missing-schema-definition.js",
	"./core/schema/filter/schema/index": "./src/core/schema/filter/schema/index.js",
	"./core/schema/filter/schema/index.js": "./src/core/schema/filter/schema/index.js",
	"./core/schema/filter/schema/locator": "./src/core/schema/filter/schema/locator.js",
	"./core/schema/filter/schema/locator.js": "./src/core/schema/filter/schema/locator.js",
	"./core/schema/filter/string": "./src/core/schema/filter/string/index.js",
	"./core/schema/filter/string/": "./src/core/schema/filter/string/index.js",
	"./core/schema/filter/string/index": "./src/core/schema/filter/string/index.js",
	"./core/schema/filter/string/index.js": "./src/core/schema/filter/string/index.js",
	"./core/schema/filter/string/locator": "./src/core/schema/filter/string/locator.js",
	"./core/schema/filter/string/locator.js": "./src/core/schema/filter/string/locator.js",
	"./core/schema/filter/timestamp": "./src/core/schema/filter/timestamp/index.js",
	"./core/schema/filter/timestamp/": "./src/core/schema/filter/timestamp/index.js",
	"./core/schema/filter/timestamp/index": "./src/core/schema/filter/timestamp/index.js",
	"./core/schema/filter/timestamp/index.js": "./src/core/schema/filter/timestamp/index.js",
	"./core/schema/filter/timestamp/locator": "./src/core/schema/filter/timestamp/locator.js",
	"./core/schema/filter/timestamp/locator.js": "./src/core/schema/filter/timestamp/locator.js",
	"./core/schema/node-bootstrap": "./src/core/schema/node-bootstrap/index.js",
	"./core/schema/node-bootstrap/": "./src/core/schema/node-bootstrap/index.js",
	"./core/schema/node-bootstrap/error/schema-not-resolvable": "./src/core/schema/node-bootstrap/error/schema-not-resolvable.js",
	"./core/schema/node-bootstrap/error/schema-not-resolvable.js": "./src/core/schema/node-bootstrap/error/schema-not-resolvable.js",
	"./core/schema/node-bootstrap/index": "./src/core/schema/node-bootstrap/index.js",
	"./core/schema/node-bootstrap/index.js": "./src/core/schema/node-bootstrap/index.js",
	"./core/schema/node-bootstrap/locator": "./src/core/schema/node-bootstrap/locator.js",
	"./core/schema/node-bootstrap/locator.js": "./src/core/schema/node-bootstrap/locator.js",
	"./core/schema/validator": "./src/core/schema/validator/index.js",
	"./core/schema/validator/": "./src/core/schema/validator/index.js",
	"./core/schema/validator/boolean": "./src/core/schema/validator/boolean/index.js",
	"./core/schema/validator/boolean/": "./src/core/schema/validator/boolean/index.js",
	"./core/schema/validator/boolean/error/invalid": "./src/core/schema/validator/boolean/error/invalid.js",
	"./core/schema/validator/boolean/error/invalid.js": "./src/core/schema/validator/boolean/error/invalid.js",
	"./core/schema/validator/boolean/index": "./src/core/schema/validator/boolean/index.js",
	"./core/schema/validator/boolean/index.js": "./src/core/schema/validator/boolean/index.js",
	"./core/schema/validator/boolean/locator": "./src/core/schema/validator/boolean/locator.js",
	"./core/schema/validator/boolean/locator.js": "./src/core/schema/validator/boolean/locator.js",
	"./core/schema/validator/csv": "./src/core/schema/validator/csv/index.js",
	"./core/schema/validator/csv/": "./src/core/schema/validator/csv/index.js",
	"./core/schema/validator/csv/error/invalid": "./src/core/schema/validator/csv/error/invalid.js",
	"./core/schema/validator/csv/error/invalid.js": "./src/core/schema/validator/csv/error/invalid.js",
	"./core/schema/validator/csv/index": "./src/core/schema/validator/csv/index.js",
	"./core/schema/validator/csv/index.js": "./src/core/schema/validator/csv/index.js",
	"./core/schema/validator/csv/locator": "./src/core/schema/validator/csv/locator.js",
	"./core/schema/validator/csv/locator.js": "./src/core/schema/validator/csv/locator.js",
	"./core/schema/validator/decimal": "./src/core/schema/validator/decimal/index.js",
	"./core/schema/validator/decimal/": "./src/core/schema/validator/decimal/index.js",
	"./core/schema/validator/decimal/error/invalid": "./src/core/schema/validator/decimal/error/invalid.js",
	"./core/schema/validator/decimal/error/invalid.js": "./src/core/schema/validator/decimal/error/invalid.js",
	"./core/schema/validator/decimal/index": "./src/core/schema/validator/decimal/index.js",
	"./core/schema/validator/decimal/index.js": "./src/core/schema/validator/decimal/index.js",
	"./core/schema/validator/decimal/locator": "./src/core/schema/validator/decimal/locator.js",
	"./core/schema/validator/decimal/locator.js": "./src/core/schema/validator/decimal/locator.js",
	"./core/schema/validator/index": "./src/core/schema/validator/index.js",
	"./core/schema/validator/index.js": "./src/core/schema/validator/index.js",
	"./core/schema/validator/integer": "./src/core/schema/validator/integer/index.js",
	"./core/schema/validator/integer/": "./src/core/schema/validator/integer/index.js",
	"./core/schema/validator/integer/error/invalid": "./src/core/schema/validator/integer/error/invalid.js",
	"./core/schema/validator/integer/error/invalid.js": "./src/core/schema/validator/integer/error/invalid.js",
	"./core/schema/validator/integer/index": "./src/core/schema/validator/integer/index.js",
	"./core/schema/validator/integer/index.js": "./src/core/schema/validator/integer/index.js",
	"./core/schema/validator/integer/locator": "./src/core/schema/validator/integer/locator.js",
	"./core/schema/validator/integer/locator.js": "./src/core/schema/validator/integer/locator.js",
	"./core/schema/validator/json": "./src/core/schema/validator/json/index.js",
	"./core/schema/validator/json/": "./src/core/schema/validator/json/index.js",
	"./core/schema/validator/json/error/invalid": "./src/core/schema/validator/json/error/invalid.js",
	"./core/schema/validator/json/error/invalid.js": "./src/core/schema/validator/json/error/invalid.js",
	"./core/schema/validator/json/index": "./src/core/schema/validator/json/index.js",
	"./core/schema/validator/json/index.js": "./src/core/schema/validator/json/index.js",
	"./core/schema/validator/json/locator": "./src/core/schema/validator/json/locator.js",
	"./core/schema/validator/json/locator.js": "./src/core/schema/validator/json/locator.js",
	"./core/schema/validator/schema": "./src/core/schema/validator/schema/index.js",
	"./core/schema/validator/schema/": "./src/core/schema/validator/schema/index.js",
	"./core/schema/validator/schema/error/invalid": "./src/core/schema/validator/schema/error/invalid.js",
	"./core/schema/validator/schema/error/invalid.js": "./src/core/schema/validator/schema/error/invalid.js",
	"./core/schema/validator/schema/index": "./src/core/schema/validator/schema/index.js",
	"./core/schema/validator/schema/index.js": "./src/core/schema/validator/schema/index.js",
	"./core/schema/validator/schema/locator": "./src/core/schema/validator/schema/locator.js",
	"./core/schema/validator/schema/locator.js": "./src/core/schema/validator/schema/locator.js",
	"./core/schema/validator/string": "./src/core/schema/validator/string/index.js",
	"./core/schema/validator/string/": "./src/core/schema/validator/string/index.js",
	"./core/schema/validator/string/error/invalid": "./src/core/schema/validator/string/error/invalid.js",
	"./core/schema/validator/string/error/invalid.js": "./src/core/schema/validator/string/error/invalid.js",
	"./core/schema/validator/string/index": "./src/core/schema/validator/string/index.js",
	"./core/schema/validator/string/index.js": "./src/core/schema/validator/string/index.js",
	"./core/schema/validator/string/locator": "./src/core/schema/validator/string/locator.js",
	"./core/schema/validator/string/locator.js": "./src/core/schema/validator/string/locator.js",
	"./core/schema/validator/timestamp": "./src/core/schema/validator/timestamp/index.js",
	"./core/schema/validator/timestamp/": "./src/core/schema/validator/timestamp/index.js",
	"./core/schema/validator/timestamp/error/invalid": "./src/core/schema/validator/timestamp/error/invalid.js",
	"./core/schema/validator/timestamp/error/invalid.js": "./src/core/schema/validator/timestamp/error/invalid.js",
	"./core/schema/validator/timestamp/index": "./src/core/schema/validator/timestamp/index.js",
	"./core/schema/validator/timestamp/index.js": "./src/core/schema/validator/timestamp/index.js",
	"./core/schema/validator/timestamp/locator": "./src/core/schema/validator/timestamp/locator.js",
	"./core/schema/validator/timestamp/locator.js": "./src/core/schema/validator/timestamp/locator.js",
	"./core/service-loader": "./src/core/service-loader/index.js",
	"./core/service-loader/": "./src/core/service-loader/index.js",
	"./core/service-loader/index": "./src/core/service-loader/index.js",
	"./core/service-loader/index.js": "./src/core/service-loader/index.js",
	"./core/string": "./src/core/string/index.js",
	"./core/string/": "./src/core/string/index.js",
	"./core/string/config": "./src/core/string/config.js",
	"./core/string/config.js": "./src/core/string/config.js",
	"./core/string/index": "./src/core/string/index.js",
	"./core/string/index.js": "./src/core/string/index.js",
	"./core/string/locator": "./src/core/string/locator.js",
	"./core/string/locator.js": "./src/core/string/locator.js",
	"./index": "./src/index.js",
	"./index.js": "./src/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/config$":
/*!***********************************!*\
  !*** ./src sync ^\.\/.*\/config$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core/bootstrap/config": "./src/core/bootstrap/config.js",
	"./core/bus/config": "./src/core/bus/config.js",
	"./core/channel/config": "./src/core/channel/config.js",
	"./core/config": "./src/core/config.js",
	"./core/configuration/config": "./src/core/configuration/config.js",
	"./core/console/config": "./src/core/console/config.js",
	"./core/data-structure/config": "./src/core/data-structure/config.js",
	"./core/data-structure/object/config": "./src/core/data-structure/object/config.js",
	"./core/deepassign/config": "./src/core/deepassign/config.js",
	"./core/deepclone/config": "./src/core/deepclone/config.js",
	"./core/deepfind/config": "./src/core/deepfind/config.js",
	"./core/deepfreeze/config": "./src/core/deepfreeze/config.js",
	"./core/deepmerge/config": "./src/core/deepmerge/config.js",
	"./core/object/config": "./src/core/object/config.js",
	"./core/schema/config": "./src/core/schema/config.js",
	"./core/string/config": "./src/core/string/config.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/.*\\/config$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/locator$":
/*!************************************!*\
  !*** ./src sync ^\.\/.*\/locator$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core/bootstrap/locator": "./src/core/bootstrap/locator.js",
	"./core/bus/bootstrap/locator": "./src/core/bus/bootstrap/locator.js",
	"./core/bus/factory/locator": "./src/core/bus/factory/locator.js",
	"./core/bus/log/locator": "./src/core/bus/log/locator.js",
	"./core/channel/factory/locator": "./src/core/channel/factory/locator.js",
	"./core/channel/locator": "./src/core/channel/locator.js",
	"./core/configuration/locator": "./src/core/configuration/locator.js",
	"./core/console/factory/locator": "./src/core/console/factory/locator.js",
	"./core/data-structure/associative-array/factory/locator": "./src/core/data-structure/associative-array/factory/locator.js",
	"./core/data-structure/associative-array/locator": "./src/core/data-structure/associative-array/locator.js",
	"./core/data-structure/graph/factory/locator": "./src/core/data-structure/graph/factory/locator.js",
	"./core/data-structure/graph/locator": "./src/core/data-structure/graph/locator.js",
	"./core/data-structure/multiple-associative-array/factory/locator": "./src/core/data-structure/multiple-associative-array/factory/locator.js",
	"./core/data-structure/multiple-associative-array/locator": "./src/core/data-structure/multiple-associative-array/locator.js",
	"./core/data-structure/object/locator": "./src/core/data-structure/object/locator.js",
	"./core/data-structure/queue/factory/locator": "./src/core/data-structure/queue/factory/locator.js",
	"./core/data-structure/queue/locator": "./src/core/data-structure/queue/locator.js",
	"./core/data-structure/schema/validator/associative-array/locator": "./src/core/data-structure/schema/validator/associative-array/locator.js",
	"./core/data-structure/schema/validator/collection/locator": "./src/core/data-structure/schema/validator/collection/locator.js",
	"./core/data-structure/schema/validator/custom-json/locator": "./src/core/data-structure/schema/validator/custom-json/locator.js",
	"./core/data-structure/schema/validator/multiple-associative-array/locator": "./src/core/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/data-structure/stack/factory/locator": "./src/core/data-structure/stack/factory/locator.js",
	"./core/data-structure/stack/locator": "./src/core/data-structure/stack/locator.js",
	"./core/data-structure/tree/factory/locator": "./src/core/data-structure/tree/factory/locator.js",
	"./core/data-structure/tree/locator": "./src/core/data-structure/tree/locator.js",
	"./core/deepassign/locator": "./src/core/deepassign/locator.js",
	"./core/deepclone/locator": "./src/core/deepclone/locator.js",
	"./core/deepfind/locator": "./src/core/deepfind/locator.js",
	"./core/deepfreeze/locator": "./src/core/deepfreeze/locator.js",
	"./core/deepmerge/locator": "./src/core/deepmerge/locator.js",
	"./core/locator": "./src/core/locator/index.js",
	"./core/object/locator": "./src/core/object/locator.js",
	"./core/schema/browser-bootstrap/locator": "./src/core/schema/browser-bootstrap/locator.js",
	"./core/schema/composer/locator": "./src/core/schema/composer/locator.js",
	"./core/schema/filter/boolean/locator": "./src/core/schema/filter/boolean/locator.js",
	"./core/schema/filter/csv/locator": "./src/core/schema/filter/csv/locator.js",
	"./core/schema/filter/decimal/locator": "./src/core/schema/filter/decimal/locator.js",
	"./core/schema/filter/integer/locator": "./src/core/schema/filter/integer/locator.js",
	"./core/schema/filter/json/locator": "./src/core/schema/filter/json/locator.js",
	"./core/schema/filter/schema/locator": "./src/core/schema/filter/schema/locator.js",
	"./core/schema/filter/string/locator": "./src/core/schema/filter/string/locator.js",
	"./core/schema/filter/timestamp/locator": "./src/core/schema/filter/timestamp/locator.js",
	"./core/schema/node-bootstrap/locator": "./src/core/schema/node-bootstrap/locator.js",
	"./core/schema/validator/boolean/locator": "./src/core/schema/validator/boolean/locator.js",
	"./core/schema/validator/csv/locator": "./src/core/schema/validator/csv/locator.js",
	"./core/schema/validator/decimal/locator": "./src/core/schema/validator/decimal/locator.js",
	"./core/schema/validator/integer/locator": "./src/core/schema/validator/integer/locator.js",
	"./core/schema/validator/json/locator": "./src/core/schema/validator/json/locator.js",
	"./core/schema/validator/schema/locator": "./src/core/schema/validator/schema/locator.js",
	"./core/schema/validator/string/locator": "./src/core/schema/validator/string/locator.js",
	"./core/schema/validator/timestamp/locator": "./src/core/schema/validator/timestamp/locator.js",
	"./core/string/locator": "./src/core/string/locator.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/.*\\/locator$";

/***/ }),

/***/ "./src/core/bootstrap/config.js":
/*!**************************************!*\
  !*** ./src/core/bootstrap/config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/bootstrap";module.exports={core:{locator:{"core/bootstrap":dirname}}};

/***/ }),

/***/ "./src/core/bootstrap/index.js":
/*!*************************************!*\
  !*** ./src/core/bootstrap/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Bootstrap=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"bootstrap",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c,d,e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:b=this.locator.locate("core/configuration"),c=b.find("core.bootstrap"),a.t0=regeneratorRuntime.keys(c);case 2:if((a.t1=a.t0()).done){a.next=9;break}return d=a.t1.value,e=this.locator.locate(c[d]),a.next=7,e.bootstrap();case 7:a.next=2;break;case 9:case"end":return a.stop();}},a,this)}));return function bootstrap(){return a.apply(this,arguments)}}()}]),a}();module.exports=Bootstrap;

/***/ }),

/***/ "./src/core/bootstrap/locator.js":
/*!***************************************!*\
  !*** ./src/core/bootstrap/locator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Bootstrap=__webpack_require__(/*! . */ "./src/core/bootstrap/index.js"),BootstrapLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return new Bootstrap(this.locator)}}]),a}();module.exports=BootstrapLocator;

/***/ }),

/***/ "./src/core/browser-config-fetcher/index.js":
/*!**************************************************!*\
  !*** ./src/core/browser-config-fetcher/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var ConfigFetcher=__webpack_require__(/*! ../config-fetcher */ "./src/core/config-fetcher/index.js"),ComponentNotResolvableError=__webpack_require__(/*! ../error/component-not-resolvable */ "./src/core/error/component-not-resolvable.js"),BrowserConfigFetcher=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"fetchComponentConfig",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(d,e){var f;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{f=__webpack_require__("./src sync recursive ^\\.\\/.*\\/config$")("./".concat(c?c:b,"/config")),d(f)}catch(a){e(new ComponentNotResolvableError("could not resolve path to component \"".concat(b,"\"")))}case 1:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a)}));return function fetchComponentConfig(){return a.apply(this,arguments)}}()}]),b}(ConfigFetcher);module.exports=BrowserConfigFetcher;

/***/ }),

/***/ "./src/core/browser-factory.js":
/*!*************************************!*\
  !*** ./src/core/browser-factory.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Core=__webpack_require__(/*! .. */ "./src/index.js"),Locator=__webpack_require__(/*! ./locator */ "./src/core/locator/index.js"),Deepclone=__webpack_require__(/*! ./deepclone */ "./src/core/deepclone/index.js"),Deepfreeze=__webpack_require__(/*! ./deepfreeze */ "./src/core/deepfreeze/index.js"),Deepfind=__webpack_require__(/*! ./deepfind */ "./src/core/deepfind/index.js"),Deepmerge=__webpack_require__(/*! ./deepmerge */ "./src/core/deepmerge/index.js"),DeepAssign=__webpack_require__(/*! ./deepassign */ "./src/core/deepassign/index.js"),Configuration=__webpack_require__(/*! ./configuration */ "./src/core/configuration/index.js"),ConfigFetcher=__webpack_require__(/*! ./browser-config-fetcher */ "./src/core/browser-config-fetcher/index.js"),ServiceLoader=__webpack_require__(/*! ./browser-service-loader */ "./src/core/browser-service-loader/index.js"),CoreFactory=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"create",value:function create(){var a=this.createLocator(),b=new ConfigFetcher(a),c=new ServiceLoader(a),d=new Core(a,b,c);return d.add("core/bootstrap"),d.add("core/console"),d.add("core/schema"),d.add("core/data-structure"),d.add("core/channel"),d.add("core/bus"),d.add("core"),d}},{key:"createLocator",value:function createLocator(){var a=new Locator,b=new Deepclone,c=new Deepfreeze,d=new Deepmerge,e=new Deepfind,f=new DeepAssign(b),g=new Configuration(b,d,e,c);return a.set("core/deepclone",b),a.set("core/deepfreeze",c),a.set("core/deepmerge",d),a.set("core/deepfind",e),a.set("core/deepassign",f),a.set("core/configuration",g),a}}]),a}();module.exports=CoreFactory;

/***/ }),

/***/ "./src/core/browser-service-loader/index.js":
/*!**************************************************!*\
  !*** ./src/core/browser-service-loader/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ServiceUnmetDependencyError=__webpack_require__(/*! ../error/service-unmet-dependency */ "./src/core/error/service-unmet-dependency.js"),ServiceLocatorNotFoundError=__webpack_require__(/*! ../error/service-locator-not-found */ "./src/core/error/service-locator-not-found.js"),BrowserServiceLoader=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"loadService",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(d,e){var f,g,h,i,j;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,f=c.locator.locate("core/configuration"),g=f.find("core.locator")[b],h=__webpack_require__("./src sync recursive ^\\.\\/.*\\/locator$")("./".concat(g,"/locator")),i=new h(c.locator),a.prev=2,j=i.locate(),c.locator.set(b,j),d(),a.next=16;break;case 8:a.prev=8,a.t0=a["catch"](2),a.t1=a.t0.code,a.next="E_SERVICE_UNDEFINED"===a.t1?13:15;break;case 13:return e(new ServiceUnmetDependencyError("An unmet dependency was found for service \"".concat(b,"\", error: ").concat(a.t0.message))),a.abrupt("break",16);case 15:e(a.t0);case 16:a.next=21;break;case 18:a.prev=18,a.t2=a["catch"](0),e(new ServiceLocatorNotFoundError("locator could not be found for ".concat(b)));case 21:case"end":return a.stop();}},a,null,[[0,18],[2,8]])}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a)}));return function loadService(){return a.apply(this,arguments)}}()}]),a}();module.exports=BrowserServiceLoader;

/***/ }),

/***/ "./src/core/bus/bootstrap/error/observer-contract-not-honered.js":
/*!***********************************************************************!*\
  !*** ./src/core/bus/bootstrap/error/observer-contract-not-honered.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ObserverContractNotHoneredError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_BUS_OBSERVER_CONTRACT_NOT_HONERED",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=ObserverContractNotHoneredError;

/***/ }),

/***/ "./src/core/bus/bootstrap/index.js":
/*!*****************************************!*\
  !*** ./src/core/bus/bootstrap/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ObserverContractNotHoneredError=__webpack_require__(/*! ./error/observer-contract-not-honered */ "./src/core/bus/bootstrap/error/observer-contract-not-honered.js"),BusBootstrap=function(){function a(b,c,d){_classCallCheck(this,a),this.configuration=b,this.busFactory=c,this.locator=d}return _createClass(a,[{key:"bootstrap",value:function bootstrap(){var a=this.configuration.find("core.bus.channels"),b=this.busFactory.create();for(var d in a){b.addChannel(d);var e=this.configuration.find("core.bus.channels.".concat(d,".observers"));for(var f in e)for(var g in e[f])if(e[f][g]){var c=this.locator.locate(g);if("function"!=typeof c.observe)throw new ObserverContractNotHoneredError("\"".concat(g,"\" does not implement the BusObserver interface"));b.on({channelId:d,observer:c.observe.bind(c),event:f})}this.locator.set("core/bus",b)}}}]),a}();module.exports=BusBootstrap;

/***/ }),

/***/ "./src/core/bus/bootstrap/locator.js":
/*!*******************************************!*\
  !*** ./src/core/bus/bootstrap/locator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var BusBootstrap=__webpack_require__(/*! . */ "./src/core/bus/bootstrap/index.js"),BusBootstrapLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/configuration"),b=this.locator.locate("core/bus/factory");return new BusBootstrap(a,b,this.locator)}}]),a}();module.exports=BusBootstrapLocator;

/***/ }),

/***/ "./src/core/bus/config.js":
/*!********************************!*\
  !*** ./src/core/bus/config.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/bus";module.exports={core:{bootstrap:{bus:"core/bus/bootstrap"},bus:{options:{},channels:{"domain-events":{observers:{logged:{"core/bus/log":!0}}}}},schema:{composer:{"core/bus":"".concat(dirname,"/schema/entity/bus")}},locator:{"core/bus/factory":"".concat(dirname,"/factory"),"core/bus/bootstrap":"".concat(dirname,"/bootstrap"),"core/bus/log":"".concat(dirname,"/log")}}};

/***/ }),

/***/ "./src/core/bus/factory/index.js":
/*!***************************************!*\
  !*** ./src/core/bus/factory/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Bus=__webpack_require__(/*! .. */ "./src/core/bus/index.js"),BusFactory=function(){function a(b){var c=b.channelFactory,d=b.associativeArrayFactory;_classCallCheck(this,a),this.channelFactory=c,this.associativeArrayFactory=d}return _createClass(a,[{key:"createAssociativeArray",value:function createAssociativeArray(){return this.associativeArrayFactory.create()}},{key:"create",value:function create(){var a=new Bus({channelFactory:this.channelFactory,channels:this.createAssociativeArray()});return a}}]),a}();module.exports=BusFactory;

/***/ }),

/***/ "./src/core/bus/factory/locator.js":
/*!*****************************************!*\
  !*** ./src/core/bus/factory/locator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var BusFactory=__webpack_require__(/*! . */ "./src/core/bus/factory/index.js"),BusFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return new BusFactory({channelFactory:this.locator.locate("core/channel/factory"),associativeArrayFactory:this.locator.locate("data-structure/associative-array/factory")})}}]),a}();module.exports=BusFactoryLocator;

/***/ }),

/***/ "./src/core/bus/index.js":
/*!*******************************!*\
  !*** ./src/core/bus/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Bus=function(){function a(b){var c=b.channelFactory,d=b.channels;_classCallCheck(this,a),this.channelFactory=c,this.channels=d}return _createClass(a,[{key:"addChannel",value:function addChannel(a){this.channels.add({id:a,element:this.channelFactory.create(a)})}},{key:"deleteChannel",value:function deleteChannel(a){this.channels.remove(a)}},{key:"getChannel",value:function getChannel(a){return this.channels.get(a)}},{key:"emit",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e,f=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.channelId,d=b.name,e=b.data,a.abrupt("return",new Promise(function(a,b){f.getChannel(c).emit({name:d,data:e}).then(function(){a()})["catch"](function(a){b(a)})}));case 2:case"end":return a.stop();}},a)}));return function emit(){return a.apply(this,arguments)}}()},{key:"on",value:function on(a){var b=a.channelId,c=a.event,d=a.observer;return this.getChannel(b).on({event:c,observer:d})}},{key:"once",value:function once(a){var b=a.channelId,c=a.event,d=a.observer;this.getChannel(b).once({event:c,observer:d})}},{key:"onAllEvents",value:function onAllEvents(a){var b=a.channelId,c=a.observer;this.getChannel(b).onAllEvents(c)}},{key:"removeListener",value:function removeListener(a){var b=a.channelId,c=a.event,d=a.observer;this.getChannel(b).removeListener({event:c,observer:d})}},{key:"removeAllListeners",value:function removeAllListeners(a){var b=a.channelId,c=a.event;this.getChannel(b).removeAllListeners(c)}},{key:"reset",value:function reset(a){this.getChannel(a).reset()}},{key:Symbol.toStringTag,get:function get(){return"Bus"}}]),a}();module.exports=Bus;

/***/ }),

/***/ "./src/core/bus/log/index.js":
/*!***********************************!*\
  !*** ./src/core/bus/log/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var LogObserver=function(){function a(b){_classCallCheck(this,a),this.logConsole=b}return _createClass(a,[{key:"observe",value:function observe(a){this.logConsole.log(a)}}]),a}();module.exports=LogObserver;

/***/ }),

/***/ "./src/core/bus/log/locator.js":
/*!*************************************!*\
  !*** ./src/core/bus/log/locator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var LogObserver=__webpack_require__(/*! . */ "./src/core/bus/log/index.js"),LogObserverLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/console/factory"),b=a.create();return new LogObserver(b)}}]),a}();module.exports=LogObserverLocator;

/***/ }),

/***/ "./src/core/bus/schema/entity/bus.js":
/*!*******************************************!*\
  !*** ./src/core/bus/schema/entity/bus.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={channels:{type:"data-structure/multiple-associative-array"}};

/***/ }),

/***/ "./src/core/channel/config.js":
/*!************************************!*\
  !*** ./src/core/channel/config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/channel";module.exports={core:{schema:{composer:{"core/channel/event-meta":"".concat(dirname,"/schema/dto/event-meta"),"core/channel/event":"".concat(dirname,"/schema/dto/event"),"core/channel":"".concat(dirname,"/schema/entity/channel")}},locator:{"core/channel/factory":"".concat(dirname,"/factory"),"core/channel":dirname}}};

/***/ }),

/***/ "./src/core/channel/factory/index.js":
/*!*******************************************!*\
  !*** ./src/core/channel/factory/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var BusChannel=__webpack_require__(/*! .. */ "./src/core/channel/index.js"),BusChannelFactory=function(){function a(b){var c=b.composer,d=b.multipleAssociativeArrayFactory;_classCallCheck(this,a),this.composer=c,this.multipleAssociativeArrayFactory=d}return _createClass(a,[{key:"createMultipleAssociativeArray",value:function createMultipleAssociativeArray(){return this.multipleAssociativeArrayFactory.create()}},{key:"create",value:function create(a){return new BusChannel({id:a,observers:this.createMultipleAssociativeArray(),composer:this.composer})}}]),a}();module.exports=BusChannelFactory;

/***/ }),

/***/ "./src/core/channel/factory/locator.js":
/*!*********************************************!*\
  !*** ./src/core/channel/factory/locator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var BusChannelFactory=__webpack_require__(/*! . */ "./src/core/channel/factory/index.js"),BusChannelFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/schema/composer"),b=this.locator.locate("data-structure/multiple-associative-array/factory");return new BusChannelFactory({composer:a,multipleAssociativeArrayFactory:b})}}]),a}();module.exports=BusChannelFactoryLocator;

/***/ }),

/***/ "./src/core/channel/index.js":
/*!***********************************!*\
  !*** ./src/core/channel/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var BusChannel=function(){function a(b){var c=b.id,d=b.observers,e=b.composer;_classCallCheck(this,a),this.observers=d,this.composer=e,this.warnings=[],this[Symbol["for"]("id")]=c}return _createClass(a,[{key:"on",value:function on(a){var b=this,c=a.event,d=a.observer;return this.observers.add({id:c,element:d}),function(){b.removeListener({event:c,observer:d})}}},{key:"onAll",value:function onAll(a){return this.on({event:"*",observer:a})}},{key:"removeListener",value:function removeListener(a){var b=a.event,c=a.observer;this.observers.removeElement({id:b,element:c})}},{key:"removeAllListeners",value:function removeAllListeners(a){this.observers.remove(a)}},{key:"hasobservers",value:function hasobservers(a){return this.observers.hasElements(a)}},{key:"createEvent",value:function createEvent(a){var b=a.name,c=a.data,d=new Date().toISOString(),e=this[Symbol["for"]("id")],f=this.composer.compose("core/channel/event-meta",{name:b,timestamp:d,emitter:e}),g=this.composer.compose("core/channel/event",{meta:f,data:c});return g}},{key:"emit",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e,f,g,h,i=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.name,d=b.data,e=this.createEvent({name:c,data:d}),f=this.observers.get("*")||[],g=this.observers.get(c)||[],h=f.concat(g),0!==g.length||this.warnings.includes(c)||(this.warnings.push(e),console.log("event: \"".concat(e,"\" does not have a defined observer"))),a.abrupt("return",new Promise(function(a,b){i.executeObservers(h,e).then(function(){a()})["catch"](function(a){b(a)})}));case 4:case"end":return a.stop();}},a,this)}));return function emit(){return a.apply(this,arguments)}}()},{key:"listenerCount",value:function listenerCount(a){var b=this.observers.get(a.meta.name)||[];return b.length}},{key:"executeObservers",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(a,e){Promise.all(b.map(d.executeObserver.bind(d,c))).then(function(){a()})["catch"](function(a){e(a)})}));case 1:case"end":return a.stop();}},a)}));return function executeObservers(){return a.apply(this,arguments)}}()},{key:"executeObserver",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",c.call(this,b));case 1:case"end":return a.stop();}},a,this)}));return function executeObserver(){return a.apply(this,arguments)}}()},{key:"once",value:function once(a){var b=this,c=a.event,d=a.observer,e=this.observers.on({event:c,observer:function observer(){e();for(var a=arguments.length,c=Array(a),f=0;f<a;f++)c[f]=arguments[f];d(b,c)}})}},{key:Symbol.toStringTag,get:function get(){return"BusChannel"}}]),a}();module.exports=BusChannel;

/***/ }),

/***/ "./src/core/channel/locator.js":
/*!*************************************!*\
  !*** ./src/core/channel/locator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var BusChannel=__webpack_require__(/*! . */ "./src/core/channel/index.js"),BusChannelLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return BusChannel}}]),a}();module.exports=BusChannelLocator;

/***/ }),

/***/ "./src/core/channel/schema/dto/event-meta.js":
/*!***************************************************!*\
  !*** ./src/core/channel/schema/dto/event-meta.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={name:{type:"string","not-empty":!0},emitter:{type:"string","not-empty":!0},timestamp:{type:"timestamp"}};

/***/ }),

/***/ "./src/core/channel/schema/dto/event.js":
/*!**********************************************!*\
  !*** ./src/core/channel/schema/dto/event.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={meta:{type:"schema",schema:"core/channel/event-meta","not-empty":!0},data:{type:"json"}};

/***/ }),

/***/ "./src/core/channel/schema/entity/channel.js":
/*!***************************************************!*\
  !*** ./src/core/channel/schema/entity/channel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={id:{type:"string","not-empty":!0},observers:{type:"data-structure/multiple-associative-array"}};

/***/ }),

/***/ "./src/core/config-fetcher/index.js":
/*!******************************************!*\
  !*** ./src/core/config-fetcher/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ConfigFetcher=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"fetchComponentConfig",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented");case 1:case"end":return a.stop();}},a)}));return function fetchComponentConfig(){return a.apply(this,arguments)}}()}]),a}();module.exports=ConfigFetcher;

/***/ }),

/***/ "./src/core/config.js":
/*!****************************!*\
  !*** ./src/core/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={core:{}};

/***/ }),

/***/ "./src/core/configuration/config.js":
/*!******************************************!*\
  !*** ./src/core/configuration/config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/configuration";module.exports={core:{locator:{"core/configuration":dirname}}};

/***/ }),

/***/ "./src/core/configuration/index.js":
/*!*****************************************!*\
  !*** ./src/core/configuration/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Configuration=function(){function a(b,c,d,e){_classCallCheck(this,a),this.deepclone=b,this.deepmerge=c,this.deepfind=d,this.deepfreeze=e,this.config={}}return _createClass(a,[{key:"extend",value:function extend(a){var b=this.deepclone.clone(a);this.config=this.deepmerge.merge(this.config,b)}},{key:"find",value:function find(a){return this.deepfind.find(a,this.config)}},{key:"freeze",value:function freeze(){this.config=this.deepfreeze.freeze(this.config)}}]),a}();module.exports=Configuration;

/***/ }),

/***/ "./src/core/configuration/locator.js":
/*!*******************************************!*\
  !*** ./src/core/configuration/locator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Configuration=__webpack_require__(/*! . */ "./src/core/configuration/index.js"),ConfigurationLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/deepclone"),b=this.locator.locate("core/deepmerge"),c=this.locator.locate("core/deepfind"),d=new Configuration(a,b,c);return d}}]),a}();module.exports=ConfigurationLocator;

/***/ }),

/***/ "./src/core/console/config.js":
/*!************************************!*\
  !*** ./src/core/console/config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/console";module.exports={core:{console:{default:{maxArrayLength:10,maxObjectDepth:10,maxStringLength:300,date:!0,dateFormat:"yyyy-mm-dd HH:MM:ss",debug:!0,index:!1,prefix:!1,inspect:!0,separator:"\t",colors:!0,showHidden:!1,styles:{special:"cyan",number:"yellow",bigint:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",symbol:"green",date:"magenta",regexp:"red"}}},locator:{"core/console/factory":"".concat(dirname,"/factory")}}};

/***/ }),

/***/ "./src/core/console/factory/index.js":
/*!*******************************************!*\
  !*** ./src/core/console/factory/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Console=__webpack_require__(/*! .. */ "./src/core/console/index.js"),ConsoleFactory=function(){function a(b){var c=b.util,d=b.dateformat,e=b.console,f=b.defaults,g=b.availableColors;_classCallCheck(this,a),this.util=c,this.dateformat=d,this.console=e,this.defaults=f,this.availableColors=g}return _createClass(a,[{key:"create",value:function create(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Console({util:this.util,dateformat:this.dateformat,console:this.console,availableColors:this.availableColors,config:_objectSpread({},this.defaults,a)})}}]),a}();module.exports=ConsoleFactory;

/***/ }),

/***/ "./src/core/console/factory/locator.js":
/*!*********************************************!*\
  !*** ./src/core/console/factory/locator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ConsoleFactory=__webpack_require__(/*! . */ "./src/core/console/factory/index.js"),ConsoleFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=__webpack_require__(/*! util */ "./node_modules/util/util.js"),b=__webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js"),c=this.locator.locate("core/configuration").find("core.console"),d=c["default"],e=c.colors,f=console;return new ConsoleFactory({util:a,dateformat:b,defaults:d,availableColors:e,console:f})}}]),a}();module.exports=ConsoleFactoryLocator;

/***/ }),

/***/ "./src/core/console/index.js":
/*!***********************************!*\
  !*** ./src/core/console/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Console=function(){function a(b){var c=b.util,d=b.dateformat,e=b.config,f=b.console;_classCallCheck(this,a),this.sn=0,this.util=c,this.dateformat=d,this.config=e,this.console=f,this.util.inspect.styles=_objectSpread({},this.config.styles)}return _createClass(a,[{key:"getInspectOptions",value:function getInspectOptions(){var a={depth:this.config.maxObjectDepth,showHidden:this.config.showHidden,colors:this.config.colors,maxArrayLength:this.config.maxArrayLength};return a}},{key:"escape",value:function escape(a){var b=Math.floor,c=a;if(this.config.maxStringLength&&a.length>this.config.maxStringLength){var d=b(this.config.maxStringLength/2);c=[a.substr(0,d).trim(),a.substr(-d).trim()].join("...")}return c}},{key:"buildOutput",value:function buildOutput(a){var b=[];this.config.date&&b.push(this.dateformat(new Date,this.config.dateFormat)),this.config.prefix&&b.push(this.config.prefix),this.config.index&&b.push(this.sn);var c=!0,d=!1,e=void 0;try{for(var f,g,h=a[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,"object"===_typeof(g)&&this.config.inspect?b.push(this.util.inspect(g,this.getInspectOptions())):"string"==typeof x?b.push(this.escape(g)):b.push(g)}catch(a){d=!0,e=a}finally{try{c||null==h["return"]||h["return"]()}finally{if(d)throw e}}return b.join(this.config.separator)}},{key:"output",value:function output(a,b){var c=Number.MAX_SAFE_INTEGER;if(this.sn=this.sn<c?this.sn+1:0,this.config.debug){var d=this.buildOutput(a);b(d)}}},{key:"log",value:function log(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];this.output(b,this.console.log)}},{key:"info",value:function info(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];this.output.call(b,this.console.log)}},{key:"error",value:function error(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];this.output.call(b,this.console.error)}},{key:"trace",value:function trace(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];this.output.call(b,this.console.trace)}},{key:"table",value:function table(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];this.output.call(b,this.console.table)}},{key:"startTimer",value:function startTimer(a){this.console.time(a)}},{key:"getTimeLog",value:function getTimeLog(a){this.console.timeLog(a)}},{key:"finishTimer",value:function finishTimer(a){this.console.timeEnd(a)}},{key:"group",value:function group(a){a?this.console.groupCollapsed():this.console.group()}},{key:"clear",value:function clear(){this.console.clear()}},{key:"groupEnd",value:function groupEnd(){this.console.groupEnd()}},{key:"measureTime",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d,e,f,g=this,h=arguments;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:for(d=h.length,e=Array(2<d?d-2:0),f=2;f<d;f++)e[f-2]=h[f];return a.abrupt("return",new Promise(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(d,f){var h;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,g.trace(e),g.startTimer(b),a.next=5,c(e);case 5:h=a.sent,g.finishTimer(b),d(h),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),g.finishTimer(b),f(a.t0);case 14:case"end":return a.stop();}},a,null,[[0,10]])}));return function(){return a.apply(this,arguments)}}()));case 2:case"end":return a.stop();}},a)}));return function measureTime(){return a.apply(this,arguments)}}()}]),a}();module.exports=Console;

/***/ }),

/***/ "./src/core/data-structure/associative-array/factory/index.js":
/*!********************************************************************!*\
  !*** ./src/core/data-structure/associative-array/factory/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var AssociativeArray=__webpack_require__(/*! .. */ "./src/core/data-structure/associative-array/index.js"),AssociativeArrayFactory=function(){function a(b){var c=b.composer;_classCallCheck(this,a),this.composer=c}return _createClass(a,[{key:"create",value:function create(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=this.composer.compose("data-structure/associative-array",{items:a});return new AssociativeArray(_objectSpread({},b))}}]),a}();module.exports=AssociativeArrayFactory;

/***/ }),

/***/ "./src/core/data-structure/associative-array/factory/locator.js":
/*!**********************************************************************!*\
  !*** ./src/core/data-structure/associative-array/factory/locator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var AssociativeArrayFactory=__webpack_require__(/*! . */ "./src/core/data-structure/associative-array/factory/index.js"),AssociativeArrayFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/schema/composer");return new AssociativeArrayFactory({composer:a})}}]),a}();module.exports=AssociativeArrayFactoryLocator;

/***/ }),

/***/ "./src/core/data-structure/associative-array/index.js":
/*!************************************************************!*\
  !*** ./src/core/data-structure/associative-array/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var AssociativeArray=function(){function a(b){var c=b.items;_classCallCheck(this,a),this.items=c,this[Symbol["for"]("schema")]="data-structure/associative-array"}return _createClass(a,[{key:"get",value:function get(a){return this.items[a]}},{key:"add",value:function add(a){var b=a.id,c=a.element;this.items[b]=c}},{key:"remove",value:function remove(a){delete this.items[a]}},{key:"reset",value:function reset(){this.items={}}},{key:"toJSON",value:function toJSON(){return this.items}},{key:"toArray",value:function toArray(){var a=[],b=[];for(var c in this.items)a.push(c),b.push(this.get(c));return{keys:a,values:b}}},{key:"count",value:function count(){return Object.keys(this.items).length}},{key:Symbol.iterator,value:function value(){var a=this,b=Object.keys(this.items),c=0;return{next:function next(){if(c<b.length){var d=b[c++];return{value:a.items[d],done:!1}}return{done:!0}}}}},{key:Symbol.toStringTag,get:function get(){return"AssociativeArray"}}]),a}();module.exports=AssociativeArray;

/***/ }),

/***/ "./src/core/data-structure/associative-array/locator.js":
/*!**************************************************************!*\
  !*** ./src/core/data-structure/associative-array/locator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var AssociativeArray=__webpack_require__(/*! . */ "./src/core/data-structure/associative-array/index.js"),AssociativeArrayLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return AssociativeArray}}]),a}();module.exports=AssociativeArrayLocator;

/***/ }),

/***/ "./src/core/data-structure/config.js":
/*!*******************************************!*\
  !*** ./src/core/data-structure/config.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/data-structure";module.exports={core:{schema:{composer:{"data-structure/associative-array":"".concat(dirname,"/schema/value-object/associative-array"),"data-structure/multiple-associative-array":"".concat(dirname,"/schema/value-object/multiple-associative-array"),"data-structure/queue":"".concat(dirname,"/schema/value-object/queue"),"data-structure/stack":"".concat(dirname,"/schema/value-object/stack"),"data-structure/edge":"".concat(dirname,"/schema/value-object/edge"),"data-structure/graph":"".concat(dirname,"/schema/value-object/graph"),"data-structure/node":"".concat(dirname,"/schema/value-object/node"),"data-structure/tree":"".concat(dirname,"/schema/value-object/tree")},validator:{collection:"core/schema/validator/collection","custom-json":"core/schema/validator/custom-json","data-structure/associative-array":"core/schema/validator/data-structure/associative-array","data-structure/multiple-associative-array":"core/schema/validator/data-structure/multiple-associative-array"}},locator:{"core/schema/validator/collection":"".concat(dirname,"/schema/validator/collection"),"core/schema/validator/custom-json":"".concat(dirname,"/schema/validator/custom-json"),"core/schema/validator/data-structure/associative-array":"".concat(dirname,"/schema/validator/associative-array"),"core/schema/validator/data-structure/multiple-associative-array":"".concat(dirname,"/schema/validator/multiple-associative-array"),"data-structure/associative-array/factory":"".concat(dirname,"/associative-array/factory"),"data-structure/multiple-associative-array/factory":"".concat(dirname,"/multiple-associative-array/factory"),"data-structure/queue/factory":"".concat(dirname,"/queue/factory"),"data-structure/stack/factory":"".concat(dirname,"/stack/factory"),"data-structure/graph/factory":"".concat(dirname,"/graph/factory"),"data-structure/tree/factory":"".concat(dirname,"/tree/factory")}}};

/***/ }),

/***/ "./src/core/data-structure/graph/error/node-not-exists.js":
/*!****************************************************************!*\
  !*** ./src/core/data-structure/graph/error/node-not-exists.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var NodeNotExists=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.code="E_NODE_NOT_EXISTS",c}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=NodeNotExists;

/***/ }),

/***/ "./src/core/data-structure/graph/factory/index.js":
/*!********************************************************!*\
  !*** ./src/core/data-structure/graph/factory/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Graph=__webpack_require__(/*! .. */ "./src/core/data-structure/graph/index.js"),GraphFactory=function(){function a(b){var c=b.composer,d=b.associativeArrayFactory,e=b.multipleAssociativeArrayFactory,f=b.queueFactory;_classCallCheck(this,a),this.composer=c,this.associativeArrayFactory=d,this.multipleAssociativeArrayFactory=e,this.queueFactory=f,this[Symbol["for"]("schema")]="data-structure/graph"}return _createClass(a,[{key:"createEdges",value:function createEdges(a){var b=a.edges,c=b.items;return this.multipleAssociativeArrayFactory.create(c)}},{key:"createNodes",value:function createNodes(a){var b=a.nodes,c=b.items;return this.associativeArrayFactory.create(c)}},{key:"createQueue",value:function createQueue(){return this.queueFactory.create()}},{key:"create",value:function create(a){var b=this.composer.compose(this[Symbol["for"]("schema")],a);return new Graph(_objectSpread({},b,{composer:this.composer,edges:this.createEdges(b),nodes:this.createNodes(b),queue:this.createQueue()}))}},{key:Symbol.toStringTag,get:function get(){return"GraphFactory"}}]),a}();module.exports=GraphFactory;

/***/ }),

/***/ "./src/core/data-structure/graph/factory/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/data-structure/graph/factory/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var GraphFactory=__webpack_require__(/*! . */ "./src/core/data-structure/graph/factory/index.js"),GraphLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("data-structure/associative-array/factory"),b=this.locator.locate("data-structure/multiple-associative-array/factory"),c=this.locator.locate("data-structure/queue/factory"),d=this.locator.locate("core/schema/composer");return new GraphFactory({composer:d,associativeArrayFactory:a,multipleAssociativeArrayFactory:b,queueFactory:c})}}]),a}();module.exports=GraphLocator;

/***/ }),

/***/ "./src/core/data-structure/graph/index.js":
/*!************************************************!*\
  !*** ./src/core/data-structure/graph/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var NodeNotExist=__webpack_require__(/*! ./error/node-not-exists */ "./src/core/data-structure/graph/error/node-not-exists.js"),Graph=function(){function a(b){var c=b.composer,d=b.edges,e=b.nodes,f=b.queue,g=b.isDirected;_classCallCheck(this,a),this.composer=c,this.edges=d,this.nodes=e,this.queue=f,this.isDirected=g}return _createClass(a,[{key:"totalNodes",value:function totalNodes(){return this.nodes.count()}},{key:"printGraph",value:function printGraph(){var a=this.edges.toJSON();for(var i in a){var b="".concat(i," ->"),c=!0,d=!1,e=void 0;try{for(var f,g,h=a[i][Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,b+=" ".concat(g.target," (").concat(JSON.stringify(g.payload),")")}catch(a){d=!0,e=a}finally{try{c||null==h["return"]||h["return"]()}finally{if(d)throw e}}console.log(b)}}},{key:"addNode",value:function addNode(a){this.nodes.add({id:a.id,element:this.composer.compose("data-structure/node",a)})}},{key:"addEdge",value:function addEdge(a){var b=a.source,c=a.target,d=a.payload;if(!this.nodes.get(b))throw new NodeNotExist("Source node does not exists");else if(!this.nodes.get(c))throw new NodeNotExist("Target node does not exists");var e=this.composer.compose("data-structure/edge",{source:b,target:c,payload:d});if(this.edges.add({id:b,element:e}),!this.isDirected){var f=this.composer.compose("data-structure/edge",{source:c,target:b,payload:d});this.edges.add({id:c,element:f})}}},{key:"bfs",value:function bfs(a){var b={},c=[];if(this.queue.reset(),!this.nodes.get(a))throw new NodeNotExist("Start node does not exists");for(b[a]=!0,this.queue.enqueue(a);!this.queue.isEmpty();){var k=this.queue.dequeue();c.push(k);var l=this.edges.get(k);if(l){var d=!0,e=!1,f=void 0;try{for(var g,h=l[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=i.target;b[j]||this.queue.enqueue(j)}}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}}}return c}},{key:"dfs",value:function dfs(a){var b=[];if(!this.nodes.get(a))throw new NodeNotExist("Start node does not exists");return this.recursiveDFS(a,{},b),b}},{key:"recursiveDFS",value:function recursiveDFS(a,b,c){b[a]=!0,c.push(a);var d=this.edges.get(a);if(d){var e=!0,f=!1,g=void 0;try{for(var h,i=d[Symbol.iterator]();!(e=(h=i.next()).done);e=!0){var j=h.value,k=j.target;b[k]||this.recursiveDFS(k,b,c)}}catch(a){f=!0,g=a}finally{try{e||null==i["return"]||i["return"]()}finally{if(f)throw g}}}}},{key:"reduceEdgeArrayToLinks",value:function reduceEdgeArrayToLinks(a,b,c){var d=Object.keys(this.edges)[c],e=b.map(function(a){return a.source?_objectSpread({source:d},a):a});return a.concat(e)}},{key:"edgesToLinks",value:function edgesToLinks(){var a=this.edges.toArray().values,b=a.reduce(this.reduceEdgeArrayToLinks.bind(this),[]);return b}},{key:"serialize",value:function serialize(){var a=this.nodes.toArray().values,b=this.edgesToLinks();return{nodes:a,links:b}}},{key:Symbol.toStringTag,get:function get(){return"Graph"}}]),a}();module.exports=Graph;

/***/ }),

/***/ "./src/core/data-structure/graph/locator.js":
/*!**************************************************!*\
  !*** ./src/core/data-structure/graph/locator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Graph=__webpack_require__(/*! . */ "./src/core/data-structure/graph/index.js"),GraphLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return Graph}}]),a}();module.exports=GraphLocator;

/***/ }),

/***/ "./src/core/data-structure/multiple-associative-array/factory/index.js":
/*!*****************************************************************************!*\
  !*** ./src/core/data-structure/multiple-associative-array/factory/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var MultipleAssociativeArray=__webpack_require__(/*! .. */ "./src/core/data-structure/multiple-associative-array/index.js"),MultipleAssociativeArrayFactory=function(){function a(b){var c=b.composer;_classCallCheck(this,a),this.composer=c}return _createClass(a,[{key:"create",value:function create(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=this.composer.compose("data-structure/multiple-associative-array",{items:a});return new MultipleAssociativeArray(_objectSpread({},b))}}]),a}();module.exports=MultipleAssociativeArrayFactory;

/***/ }),

/***/ "./src/core/data-structure/multiple-associative-array/factory/locator.js":
/*!*******************************************************************************!*\
  !*** ./src/core/data-structure/multiple-associative-array/factory/locator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var MultipleAssociativeArrayFactory=__webpack_require__(/*! . */ "./src/core/data-structure/multiple-associative-array/factory/index.js"),MultipleAssociativeArrayFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/schema/composer");return new MultipleAssociativeArrayFactory({composer:a})}}]),a}();module.exports=MultipleAssociativeArrayFactoryLocator;

/***/ }),

/***/ "./src/core/data-structure/multiple-associative-array/index.js":
/*!*********************************************************************!*\
  !*** ./src/core/data-structure/multiple-associative-array/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _get(a,b,c){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c):e.value}},_get(a,b,c||a)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var AssociativeArray=__webpack_require__(/*! ../associative-array */ "./src/core/data-structure/associative-array/index.js"),MultipleAssociativeArray=function(a){function b(a){var c,d=a.items;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,{items:d})),c[Symbol["for"]("schema")]="data-structure/multiple-associative-array",c}return _inherits(b,a),_createClass(b,[{key:"add",value:function add(a){var c=a.id,d=a.element;if(_get(_getPrototypeOf(b.prototype),"get",this).call(this,c)){var e=_get(_getPrototypeOf(b.prototype),"get",this).call(this,c);e.push(d),_get(_getPrototypeOf(b.prototype),"add",this).call(this,{id:c,element:e})}else _get(_getPrototypeOf(b.prototype),"add",this).call(this,{id:c,element:[d]})}},{key:"hasElements",value:function hasElements(a){return Array.isArray(_get(_getPrototypeOf(b.prototype),"get",this).call(this,a))&&0!==_get(_getPrototypeOf(b.prototype),"get",this).call(this,a).length}},{key:"getElementIndex",value:function getElementIndex(a){var c=a.id,d=a.element,e=this.hasElements(c);return e?_get(_getPrototypeOf(b.prototype),"get",this).call(this,c).indexOf(d):-1}},{key:"removeElement",value:function removeElement(a){var c=a.id,d=a.element,e=this.getElementIndex({id:c,element:d});if(-1<e){var f=_get(_getPrototypeOf(b.prototype),"get",this).call(this,c);f.splice(e,1),_get(_getPrototypeOf(b.prototype),"add",this).call(this,{id:c,element:f})}}},{key:Symbol.toStringTag,get:function get(){return"MultipleAssociativeArray"}}]),b}(AssociativeArray);module.exports=MultipleAssociativeArray;

/***/ }),

/***/ "./src/core/data-structure/multiple-associative-array/locator.js":
/*!***********************************************************************!*\
  !*** ./src/core/data-structure/multiple-associative-array/locator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var MultipleAssociativeArray=__webpack_require__(/*! . */ "./src/core/data-structure/multiple-associative-array/index.js"),MultipleAssociativeArrayLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return MultipleAssociativeArray}}]),a}();module.exports=MultipleAssociativeArrayLocator;

/***/ }),

/***/ "./src/core/data-structure/object/config.js":
/*!**************************************************!*\
  !*** ./src/core/data-structure/object/config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={core:{locator:{"core/object":"superhero/core/object"}}};

/***/ }),

/***/ "./src/core/data-structure/object/index.js":
/*!*************************************************!*\
  !*** ./src/core/data-structure/object/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CoreObject=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"composeLowerCaseKeyedObject",value:function composeLowerCaseKeyedObject(a){var b=a||{},c=Object.keys(b),d=c.reduce(function(a,c){return a[c.toLowerCase()]=b[c],a},{});return d}},{key:"composeObjectWithoutKeys",value:function composeObjectWithoutKeys(a){for(var b=a||{},c=_objectSpread({},b),d=arguments.length,e=Array(1<d?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];for(var g,h=0,i=e;h<i.length;h++)g=i[h],delete c[g];return c}}]),a}();module.exports=CoreObject;

/***/ }),

/***/ "./src/core/data-structure/object/locator.js":
/*!***************************************************!*\
  !*** ./src/core/data-structure/object/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CoreObject=__webpack_require__(/*! . */ "./src/core/data-structure/object/index.js"),CoreObjectLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return CoreObject}}]),a}();module.exports=CoreObjectLocator;

/***/ }),

/***/ "./src/core/data-structure/queue/factory/index.js":
/*!********************************************************!*\
  !*** ./src/core/data-structure/queue/factory/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Queue=__webpack_require__(/*! .. */ "./src/core/data-structure/queue/index.js"),QueueFactory=function(){function a(b){var c=b.composer;_classCallCheck(this,a),this.composer=c}return _createClass(a,[{key:"create",value:function create(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],b=this.composer.compose("data-structure/queue",{items:a});return new Queue(b)}}]),a}();module.exports=QueueFactory;

/***/ }),

/***/ "./src/core/data-structure/queue/factory/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/data-structure/queue/factory/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var QueueFactory=__webpack_require__(/*! . */ "./src/core/data-structure/queue/factory/index.js"),QueueFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/schema/composer");return new QueueFactory({composer:a})}}]),a}();module.exports=QueueFactoryLocator;

/***/ }),

/***/ "./src/core/data-structure/queue/index.js":
/*!************************************************!*\
  !*** ./src/core/data-structure/queue/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Queue=function(){function a(b){var c=b.items;_classCallCheck(this,a),this.items=c,this[Symbol["for"]("schema")]="data-structure/queue"}return _createClass(a,[{key:"enqueue",value:function enqueue(a){this.items.push(a)}},{key:"dequeue",value:function dequeue(){return this.isEmpty()?void 0:this.items.shift()}},{key:"front",value:function front(){return this.isEmpty()?void 0:this.items[0]}},{key:"isEmpty",value:function isEmpty(){return 0===this.items.length}},{key:"reset",value:function reset(){this.items=[]}},{key:Symbol.toStringTag,get:function get(){return"Queue"}}]),a}();module.exports=Queue;

/***/ }),

/***/ "./src/core/data-structure/queue/locator.js":
/*!**************************************************!*\
  !*** ./src/core/data-structure/queue/locator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Queue=__webpack_require__(/*! . */ "./src/core/data-structure/queue/index.js"),QueueLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return Queue}}]),a}();module.exports=QueueLocator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/associative-array/error/invalid-associative-array.js":
/*!*******************************************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/associative-array/error/invalid-associative-array.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidAssociativeArrayError=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.code="E_INVALID_ASSOCIATIVE_ARRAY",c}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidAssociativeArrayError;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/associative-array/index.js":
/*!*****************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/associative-array/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidAssociativeArray=__webpack_require__(/*! ./error/invalid-associative-array */ "./src/core/data-structure/schema/validator/associative-array/error/invalid-associative-array.js"),AssociativeArrayValidator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"valid",value:function valid(a,b){a.collection?this.validCollection(a,b):this.validSingle(a,b)}},{key:"validCollection",value:function validCollection(a,b){if(!Array.isArray(b))throw new InvalidAssociativeArray("Invalid type: \"".concat(_typeof(b),"\", array expected"));var c=!0,d=!1,e=void 0;try{for(var f,g,h=b[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,this.validSingle(a,g)}catch(a){d=!0,e=a}finally{try{c||null==h["return"]||h["return"]()}finally{if(d)throw e}}}},{key:"validArrayProperty",value:function validArrayProperty(a,b){var c=this.locator.locate("core/schema/validator/custom-json"),d={"custom-json":b["associative-array"]};c.valid(d,a)}},{key:"validSingle",value:function validSingle(a,b){if("object"!==_typeof(b))throw new InvalidAssociativeArray("Invalid type: \"".concat(_typeof(b),"\", object expected"));if("object"!==_typeof(b.items))throw new InvalidAssociativeArray("Invalid items property: \"".concat(_typeof(b),"\", object expected"));a["associative-array"]&&this.validArrayProperty(b.items,a)}}]),a}();module.exports=AssociativeArrayValidator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/associative-array/locator.js":
/*!*******************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/associative-array/locator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var AssociativeArrayValidator=__webpack_require__(/*! . */ "./src/core/data-structure/schema/validator/associative-array/index.js"),AssociativeArrayValidatorLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator;return new AssociativeArrayValidator(a)}}]),a}();module.exports=AssociativeArrayValidatorLocator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/collection/error/invalid-collection.js":
/*!*****************************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/collection/error/invalid-collection.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidCollectionError=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.code="E_INVALID_COLLECTION",c}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidCollectionError;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/collection/index.js":
/*!**********************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/collection/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidArray=__webpack_require__(/*! ./error/invalid-collection */ "./src/core/data-structure/schema/validator/collection/error/invalid-collection.js"),CollectionValidator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"valid",value:function valid(a,b){a.collection?this.validCollection(a,b):this.validSingle(a,b)}},{key:"validCollection",value:function validCollection(a,b){if(!Array.isArray(b))throw new InvalidArray("Invalid type: \"".concat(_typeof(b),"\", array expected"));var c=!0,d=!1,e=void 0;try{for(var f,g,h=b[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,this.validSingle(a,g)}catch(a){d=!0,e=a}finally{try{c||null==h["return"]||h["return"]()}finally{if(d)throw e}}}},{key:"validCollectionElements",value:function validCollectionElements(a,b){var c=b["collection-type"],d=this.locator.locate("core/schema/validator/".concat(c)),e=b["collection-options"]||{},f=!0,g=!1,h=void 0;try{for(var i,j,k=a[Symbol.iterator]();!(f=(i=k.next()).done);f=!0)j=i.value,d.valid(e,j)}catch(a){g=!0,h=a}finally{try{f||null==k["return"]||k["return"]()}finally{if(g)throw h}}}},{key:"validSingle",value:function validSingle(a,b){if(!Array.isArray(b))throw new InvalidArray("Invalid type: \"".concat(_typeof(b),"\", array expected"));else a["collection-type"]&&this.validCollectionElements(b,a)}}]),a}();module.exports=CollectionValidator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/collection/locator.js":
/*!************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/collection/locator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CollectionValidator=__webpack_require__(/*! . */ "./src/core/data-structure/schema/validator/collection/index.js"),CollectionValidatorLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator;return new CollectionValidator(a)}}]),a}();module.exports=CollectionValidatorLocator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/custom-json/error/invalid-json.js":
/*!************************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/custom-json/error/invalid-json.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidJSONError=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.code="E_INVALID_JSON",c}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidJSONError;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/custom-json/index.js":
/*!***********************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/custom-json/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidJSON=__webpack_require__(/*! ./error/invalid-json */ "./src/core/data-structure/schema/validator/custom-json/error/invalid-json.js"),CustomJSONValidator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"valid",value:function valid(a,b){a.collection?this.validCollection(a,b):this.validSingle(a,b)}},{key:"validCollection",value:function validCollection(a,b){if(!Array.isArray(b))throw new InvalidJSON("Invalid type: \"".concat(_typeof(b),"\", array expected"));var c=!0,d=!1,e=void 0;try{for(var f,g,h=b[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,this.validSingle(a,g)}catch(a){d=!0,e=a}finally{try{c||null==h["return"]||h["return"]()}finally{if(d)throw e}}}},{key:"validProperties",value:function validProperties(a,b){var c=b["custom-json"].type,d=this.locator.locate("core/schema/validator/".concat(c)),e=b["custom-json"].options||{};for(var f in a)try{d.valid(e,a[f])}catch(b){throw new InvalidJSON("Invalid property \"".concat(f,"\": got ").concat(_typeof(a[f]),", ").concat(c," expected"))}}},{key:"validSingle",value:function validSingle(a,b){var c=this.locator.locate("core/schema/validator/json");if(c.valid(a,b),"object"!==_typeof(b))throw new InvalidJSON("Invalid type: \"".concat(_typeof(b),"\", object expected"));a["custom-json"]&&this.validProperties(b,a)}}]),a}();module.exports=CustomJSONValidator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/custom-json/locator.js":
/*!*************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/custom-json/locator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CustomJSONValidator=__webpack_require__(/*! . */ "./src/core/data-structure/schema/validator/custom-json/index.js"),CustomJSONValidatorLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator;return new CustomJSONValidator(a)}}]),a}();module.exports=CustomJSONValidatorLocator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/index.js":
/*!***********************************************************!*\
  !*** ./src/core/data-structure/schema/validator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/core/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js":
/*!*************************************************************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidMultipleAssociativeArrayError=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.code="E_INVALID_MULTIPLE_ASSOCIATIVE_ARRAY",c}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidMultipleAssociativeArrayError;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/multiple-associative-array/index.js":
/*!**************************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/multiple-associative-array/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidMultipleAssociativeArray=__webpack_require__(/*! ./error/invalid-multiple-associative-array */ "./src/core/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js"),MultipleAssociativeArrayValidator=function(){function a(b){_classCallCheck(this,a),this.associativeArrayValidator=b}return _createClass(a,[{key:"valid",value:function valid(a,b){a.collection?this.validCollection(a,b):this.validSingle(a,b)}},{key:"validCollection",value:function validCollection(a,b){if(!Array.isArray(b))throw new InvalidMultipleAssociativeArray("Invalid type: \"".concat(_typeof(b),"\", array expected"));var c=!0,d=!1,e=void 0;try{for(var f,g,h=b[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,this.validSingle(a,g)}catch(a){d=!0,e=a}finally{try{c||null==h["return"]||h["return"]()}finally{if(d)throw e}}}},{key:"validSingle",value:function validSingle(a,b){if("object"!==_typeof(b))throw new InvalidMultipleAssociativeArray("Invalid type: \"".concat(_typeof(b),"\", object expected"));var c={"associative-array":{type:a["associative-array"]&&a["associative-array"].type?a["associative-array"].type:"collection",options:a["associative-array"]&&a["associative-array"].options?a["associative-array"].options:{}}};this.associativeArrayValidator.valid(c,b)}}]),a}();module.exports=MultipleAssociativeArrayValidator;

/***/ }),

/***/ "./src/core/data-structure/schema/validator/multiple-associative-array/locator.js":
/*!****************************************************************************************!*\
  !*** ./src/core/data-structure/schema/validator/multiple-associative-array/locator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var MultipleAssociativeArrayValidator=__webpack_require__(/*! . */ "./src/core/data-structure/schema/validator/multiple-associative-array/index.js"),MultipleAssociativeArrayValidatorLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/schema/validator/data-structure/associative-array");return new MultipleAssociativeArrayValidator(a)}}]),a}();module.exports=MultipleAssociativeArrayValidatorLocator;

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/associative-array.js":
/*!**************************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/associative-array.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={items:{type:"custom-json",default:{}}};

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/edge.js":
/*!*************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/edge.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={source:{type:"string","not-empty":!1,optional:!0},target:{type:"string","not-empty":!1},payload:{type:"json"}};

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/graph.js":
/*!**************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/graph.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={isDirected:{type:"boolean"},nodes:{type:"data-structure/associative-array","associative-array-type":"schema","associative-array-type-options":{schema:"data-structure/node"}},edges:{type:"data-structure/multiple-associative-array","associative-array-type-options":{"array-type":"schema","array-type-options":{schema:"data-structure/edge"}}}};

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/multiple-associative-array.js":
/*!***********************************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/multiple-associative-array.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={"@meta":{immutable:!1,extends:["data-structure/associative-array"]},items:{type:"custom-json","custom-json":{type:"collection"},default:{}}};

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/node.js":
/*!*************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/node.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={id:{type:"string","not-empty":!1},name:{type:"string","not-empty":!1}};

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/queue.js":
/*!**************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/queue.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={items:{type:"collection",default:[]}};

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/stack.js":
/*!**************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/stack.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={items:{type:"collection",default:[]}};

/***/ }),

/***/ "./src/core/data-structure/schema/value-object/tree.js":
/*!*************************************************************!*\
  !*** ./src/core/data-structure/schema/value-object/tree.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={"@meta":{immutable:!1,extends:["data-structure/graph"]},root:{type:"string",optional:!0,nullable:!0}};

/***/ }),

/***/ "./src/core/data-structure/stack/factory/index.js":
/*!********************************************************!*\
  !*** ./src/core/data-structure/stack/factory/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Stack=__webpack_require__(/*! .. */ "./src/core/data-structure/stack/index.js"),StackFactory=function(){function a(b){var c=b.composer;_classCallCheck(this,a),this.composer=c}return _createClass(a,[{key:"create",value:function create(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],b=this.composer.compose("data-structure/stack",{items:a});return new Stack(b)}}]),a}();module.exports=StackFactory;

/***/ }),

/***/ "./src/core/data-structure/stack/factory/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/data-structure/stack/factory/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var StackFactory=__webpack_require__(/*! . */ "./src/core/data-structure/stack/factory/index.js"),StackFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/schema/composer");return new StackFactory({composer:a})}}]),a}();module.exports=StackFactoryLocator;

/***/ }),

/***/ "./src/core/data-structure/stack/index.js":
/*!************************************************!*\
  !*** ./src/core/data-structure/stack/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Stack=function(){function a(b){var c=b.items;_classCallCheck(this,a),this.items=c,this[Symbol["for"]("schema")]="data-structurestack"}return _createClass(a,[{key:"stack",value:function stack(a){this.items.push(a)}},{key:"pop",value:function pop(){return this.isEmpty()?void 0:this.items.pop()}},{key:"peek",value:function peek(){return this.items[this.items.length-1]}},{key:"isEmpty",value:function isEmpty(){return 0===this.items.length}},{key:"reset",value:function reset(){this.items=[]}},{key:Symbol.toStringTag,get:function get(){return"Stack"}}]),a}();module.exports=Stack;

/***/ }),

/***/ "./src/core/data-structure/stack/locator.js":
/*!**************************************************!*\
  !*** ./src/core/data-structure/stack/locator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Stack=__webpack_require__(/*! . */ "./src/core/data-structure/stack/index.js"),StackLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return Stack}}]),a}();module.exports=StackLocator;

/***/ }),

/***/ "./src/core/data-structure/tree/factory/index.js":
/*!*******************************************************!*\
  !*** ./src/core/data-structure/tree/factory/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Tree=__webpack_require__(/*! .. */ "./src/core/data-structure/tree/index.js"),TreeFactory=function(){function a(b){var c=b.composer,d=b.associativeArrayFactory,e=b.multipleAssociativeArrayFactory,f=b.queueFactory,g=b.deepassign;_classCallCheck(this,a),this.composer=c,this.associativeArrayFactory=d,this.multipleAssociativeArrayFactory=e,this.queueFactory=f,this.deepassign=g,this[Symbol["for"]("schema")]="data-structure/tree"}return _createClass(a,[{key:"createEdges",value:function createEdges(a){var b=a.edges,c=b.items;return this.multipleAssociativeArrayFactory.create(c)}},{key:"createNodes",value:function createNodes(a){var b=a.nodes,c=b.items;return this.associativeArrayFactory.create(c)}},{key:"createQueue",value:function createQueue(){return this.queueFactory.create()}},{key:"create",value:function create(a){var b=this.composer.compose(this[Symbol["for"]("schema")],a);return new Tree(_objectSpread({},b,{composer:this.composer,edges:this.createEdges(b),nodes:this.createNodes(b),queue:this.createQueue(),deepassign:this.deepassign}))}},{key:Symbol.toStringTag,get:function get(){return"TreeFactory"}}]),a}();module.exports=TreeFactory;

/***/ }),

/***/ "./src/core/data-structure/tree/factory/locator.js":
/*!*********************************************************!*\
  !*** ./src/core/data-structure/tree/factory/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var TreeFactory=__webpack_require__(/*! . */ "./src/core/data-structure/tree/factory/index.js"),TreeFactoryLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("data-structure/associative-array/factory"),b=this.locator.locate("data-structure/multiple-associative-array/factory"),c=this.locator.locate("data-structure/queue/factory"),d=this.locator.locate("core/schema/composer"),e=this.locator.locate("core/deepassign");return new TreeFactory({composer:d,associativeArrayFactory:a,multipleAssociativeArrayFactory:b,queueFactory:c,deepassign:e})}}]),a}();module.exports=TreeFactoryLocator;

/***/ }),

/***/ "./src/core/data-structure/tree/index.js":
/*!***********************************************!*\
  !*** ./src/core/data-structure/tree/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var Graph=__webpack_require__(/*! ../graph */ "./src/core/data-structure/graph/index.js"),NodeNotExist=__webpack_require__(/*! ../graph/error/node-not-exists */ "./src/core/data-structure/graph/error/node-not-exists.js"),Tree=function(a){function b(a){var c,d=a.root,e=a.deepassign,f=_objectWithoutProperties(a,["root","deepassign"]);return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,f)),c.deepassign=e,c.root=d,c}return _inherits(b,a),_createClass(b,[{key:"setRoot",value:function setRoot(a){if(!this.nodes.get(a))throw new NodeNotExist("Node does not exists");this.root=a}},{key:"getLeaves",value:function getLeaves(){var a=this,b=Object.keys(this.nodes.items),c=b.filter(function(b){return!a.edges.get(b)});return c}},{key:"getJSON",value:function getJSON(a){var b=this;if(!this.nodes.get(this.root))throw new NodeNotExist("Root does not exists");var c=this.bfs(this.root),d={};return c.forEach(function(e,f){var g=b.nodes.get(e),h=b.getJSONPath(e,f,c,g.name);a?d[h]=_objectSpread({},g):d=b.deepassign.assign(d,h,_objectSpread({},g))}),d}},{key:"getJSONPath",value:function getJSONPath(a,b,c,d){for(var e,f=b-1;0<=f;f--){var g=c[f],h=this.edges.get(g);if(h){var j=h.find(function(b){return b.target===a});if(j){e=g;break}}}if(e){var k=this.nodes.get(e),l=c.findIndex(function(a){return a===e});return this.getJSONPath(e,l,c,"".concat(k.name,".").concat(d))}return d}},{key:Symbol.toStringTag,get:function get(){return"Tree"}}]),b}(Graph);module.exports=Tree;

/***/ }),

/***/ "./src/core/data-structure/tree/locator.js":
/*!*************************************************!*\
  !*** ./src/core/data-structure/tree/locator.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Tree=__webpack_require__(/*! . */ "./src/core/data-structure/tree/index.js"),TreeLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return Tree}}]),a}();module.exports=TreeLocator;

/***/ }),

/***/ "./src/core/deepassign/config.js":
/*!***************************************!*\
  !*** ./src/core/deepassign/config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/deepassign";module.exports={core:{locator:{"core/deepassign":dirname}}};

/***/ }),

/***/ "./src/core/deepassign/error/not-an-object.js":
/*!****************************************************!*\
  !*** ./src/core/deepassign/error/not-an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var NotAnObjectError=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.code="E_NOT_AN_OBJECT",c}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=NotAnObjectError;

/***/ }),

/***/ "./src/core/deepassign/index.js":
/*!**************************************!*\
  !*** ./src/core/deepassign/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var NotAnObjectError=__webpack_require__(/*! ./error/not-an-object */ "./src/core/deepassign/error/not-an-object.js"),DeepAssign=function(){function a(b){_classCallCheck(this,a),this.deepclone=b,this.arrayPropertyRegexp=/(\w+)\[([0-9]+)\]/i}return _createClass(a,[{key:"getPath",value:function getPath(a,b){for(var c="",d=0;d<b;d++)c+="".concat(a[d],".");return"".concat(c).concat(a[b])}},{key:"isAssignableObject",value:function isAssignableObject(a){return a&&"object"===_typeof(a)}},{key:"isArrayProperty",value:function isArrayProperty(a){var b=this.arrayPropertyRegexp.exec(a);return!!b}},{key:"getArrayPropertyIndex",value:function getArrayPropertyIndex(a){var b=this.arrayPropertyRegexp.exec(a);return{name:b[1],position:+b[2]}}},{key:"isLastKey",value:function isLastKey(a,b){return b===a.length-1}},{key:"objectProperty",value:function objectProperty(a,b,c,d,e){return this.isAssignableObject(a[c])||this.isLastKey(e,d)?this.isLastKey(e,d)?a[c]=b:a=a[c]:(a[c]={},a=a[c]),a}},{key:"arrayProperty",value:function arrayProperty(a,b,c,d,e){var f=this.getArrayPropertyIndex(c),g=f.name,h=f.position;if(!this.isAssignableObject(a[g][h])&&!this.isLastKey(e,d))throw new NotAnObjectError("Expected and object for assigning properties: ".concat(this.getPath(e,d)));else this.isLastKey(e,d)?a[g][h]=b:a=a[g][h];return a}},{key:"assignPath",value:function assignPath(a,b,c){var d=this,e=a;return b.forEach(function(a,f){e=d.isArrayProperty(a)?d.arrayProperty(e,c,a,f,b):d.objectProperty(e,c,a,f,b)}),a}},{key:"assign",value:function assign(a,b,c){var d=b.split(/\.|\//),e=this.deepclone.clone(a);return this.assignPath(e,d,c)}}]),a}();module.exports=DeepAssign;

/***/ }),

/***/ "./src/core/deepassign/locator.js":
/*!****************************************!*\
  !*** ./src/core/deepassign/locator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepAssign=__webpack_require__(/*! . */ "./src/core/deepassign/index.js"),DeepAssignLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/deepclone");return new DeepAssign(a)}}]),a}();module.exports=DeepAssignLocator;

/***/ }),

/***/ "./src/core/deepclone/config.js":
/*!**************************************!*\
  !*** ./src/core/deepclone/config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/deepclone";module.exports={core:{locator:{"core/deepclone":dirname}}};

/***/ }),

/***/ "./src/core/deepclone/error/failed-to-clone.js":
/*!*****************************************************!*\
  !*** ./src/core/deepclone/error/failed-to-clone.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var FailedToCloneError=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.code="E_FAILED_TO_CLONE",c}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=FailedToCloneError;

/***/ }),

/***/ "./src/core/deepclone/index.js":
/*!*************************************!*\
  !*** ./src/core/deepclone/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var FailedToCloneError=__webpack_require__(/*! ./error/failed-to-clone */ "./src/core/deepclone/error/failed-to-clone.js"),DeepClone=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"clone",value:function clone(a){try{return JSON.parse(JSON.stringify(a))}catch(a){throw new FailedToCloneError(a.message)}}}]),a}();module.exports=DeepClone;

/***/ }),

/***/ "./src/core/deepclone/locator.js":
/*!***************************************!*\
  !*** ./src/core/deepclone/locator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepClone=__webpack_require__(/*! . */ "./src/core/deepclone/index.js"),DeepCloneLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new DeepClone}}]),a}();module.exports=DeepCloneLocator;

/***/ }),

/***/ "./src/core/deepfind/config.js":
/*!*************************************!*\
  !*** ./src/core/deepfind/config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/deepfind";module.exports={core:{locator:{"core/deepfind":dirname}}};

/***/ }),

/***/ "./src/core/deepfind/index.js":
/*!************************************!*\
  !*** ./src/core/deepfind/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepFind=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"find",value:function find(a,b){var c=a.split(/\.|\//);return c.reduce(function(a,b){return a&&a[b]},b)}}]),a}();module.exports=DeepFind;

/***/ }),

/***/ "./src/core/deepfind/locator.js":
/*!**************************************!*\
  !*** ./src/core/deepfind/locator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepFind=__webpack_require__(/*! . */ "./src/core/deepfind/index.js"),DeepFindLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new DeepFind}}]),a}();module.exports=DeepFindLocator;

/***/ }),

/***/ "./src/core/deepfreeze/config.js":
/*!***************************************!*\
  !*** ./src/core/deepfreeze/config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/deepfreeze";module.exports={core:{locator:{"core/deepfreeze":dirname}}};

/***/ }),

/***/ "./src/core/deepfreeze/index.js":
/*!**************************************!*\
  !*** ./src/core/deepfreeze/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepFreeze=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"freeze",value:function freeze(a){var b=Object.getOwnPropertyNames(a),c=!0,d=!1,e=void 0;try{for(var f,g=b[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=a[h];a[h]=i&&"object"===_typeof(i)?this.freeze(i):i}}catch(a){d=!0,e=a}finally{try{c||null==g["return"]||g["return"]()}finally{if(d)throw e}}return Object.freeze(a)}}]),a}();module.exports=DeepFreeze;

/***/ }),

/***/ "./src/core/deepfreeze/locator.js":
/*!****************************************!*\
  !*** ./src/core/deepfreeze/locator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepFreeze=__webpack_require__(/*! . */ "./src/core/deepfreeze/index.js"),DeepFreezeLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new DeepFreeze}}]),a}();module.exports=DeepFreezeLocator;

/***/ }),

/***/ "./src/core/deepmerge/config.js":
/*!**************************************!*\
  !*** ./src/core/deepmerge/config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/deepmerge";module.exports={core:{locator:{"core/deepmerge":dirname}}};

/***/ }),

/***/ "./src/core/deepmerge/index.js":
/*!*************************************!*\
  !*** ./src/core/deepmerge/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepMerge=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"merge",value:function merge(d,a){for(var b=this._merge(d,a),e=arguments.length,f=Array(2<e?e-2:0),c=2;c<e;c++)f[c-2]=arguments[c];return f.length?this.merge.apply(this,[b,f[0]].concat(_toConsumableArray(f.slice(1)))):b}},{key:"_merge",value:function _merge(c,a){return"object"!==_typeof(c)||null===c?a:Array.isArray(c)?this._mergeArray(c,a):this._mergeObject(c,a)}},{key:"_mergeArray",value:function _mergeArray(c,a){return Array.isArray(a)?(c.push.apply(c,_toConsumableArray(a)),c):a}},{key:"_mergeObject",value:function _mergeObject(c,a){for(var b in a)c[b]=b in c?this._merge(c[b],a[b]):a[b];return c}}]),a}();module.exports=DeepMerge;

/***/ }),

/***/ "./src/core/deepmerge/locator.js":
/*!***************************************!*\
  !*** ./src/core/deepmerge/locator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepMerge=__webpack_require__(/*! . */ "./src/core/deepmerge/index.js"),DeepMergeLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new DeepMerge}}]),a}();module.exports=DeepMergeLocator;

/***/ }),

/***/ "./src/core/error/component-not-resolvable.js":
/*!****************************************************!*\
  !*** ./src/core/error/component-not-resolvable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ComponentNotResolvableError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_COMPONENT_NOT_RESOLVABLE",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=ComponentNotResolvableError;

/***/ }),

/***/ "./src/core/error/service-locator-not-found.js":
/*!*****************************************************!*\
  !*** ./src/core/error/service-locator-not-found.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ServiceLocatorNotFoundError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SERVICE_LOCATOR_NOT_FOUND",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=ServiceLocatorNotFoundError;

/***/ }),

/***/ "./src/core/error/service-unable-to-resolve-dependencies.js":
/*!******************************************************************!*\
  !*** ./src/core/error/service-unable-to-resolve-dependencies.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ServiceUnableToResolveDependenciesError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SERVICE_UNABLE_TO_RESOLVE_DEPENDENCIES",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=ServiceUnableToResolveDependenciesError;

/***/ }),

/***/ "./src/core/error/service-unmet-dependency.js":
/*!****************************************************!*\
  !*** ./src/core/error/service-unmet-dependency.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ServiceUnmetDependencyError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SERVICE_UNMET_DEPENDENCY",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=ServiceUnmetDependencyError;

/***/ }),

/***/ "./src/core/locator/constituent.js":
/*!*****************************************!*\
  !*** ./src/core/locator/constituent.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var LocatorNotImplementedError=__webpack_require__(/*! ./error/locator-not-implemented */ "./src/core/locator/error/locator-not-implemented.js"),LocatorConstituent=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){throw new LocatorNotImplementedError("the \"locate\" method was not overwritten")}}]),a}();module.exports=LocatorConstituent;

/***/ }),

/***/ "./src/core/locator/error/locator-not-implemented.js":
/*!***********************************************************!*\
  !*** ./src/core/locator/error/locator-not-implemented.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var LocatorNotImplementedError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_LOCATOR_NOT_IMPLEMENTED",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=LocatorNotImplementedError;

/***/ }),

/***/ "./src/core/locator/error/service-undefined.js":
/*!*****************************************************!*\
  !*** ./src/core/locator/error/service-undefined.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ServiceUndefinedError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SERVICE_UNDEFINED",d}return _inherits(b,a),b}(_wrapNativeSuper(ReferenceError));module.exports=ServiceUndefinedError;

/***/ }),

/***/ "./src/core/locator/index.js":
/*!***********************************!*\
  !*** ./src/core/locator/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ServiceUndefinedError=__webpack_require__(/*! ./error/service-undefined */ "./src/core/locator/error/service-undefined.js"),Locator=function(){function a(){_classCallCheck(this,a),this.services={}}return _createClass(a,[{key:"set",value:function set(a,b){this.services[a]=b}},{key:"has",value:function has(a){return a in this.services}},{key:"locate",value:function locate(a){if(a in this.services)return this.services[a];throw new ServiceUndefinedError("\"".concat(a,"\" can not be located"))}}]),a}();module.exports=Locator;

/***/ }),

/***/ "./src/core/object/config.js":
/*!***********************************!*\
  !*** ./src/core/object/config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/object";module.exports={core:{locator:{"core/object":dirname}}};

/***/ }),

/***/ "./src/core/object/index.js":
/*!**********************************!*\
  !*** ./src/core/object/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CoreObject=function(){function a(b){_classCallCheck(this,a),this.coreString=b}return _createClass(a,[{key:"trimKeys",value:function trimKeys(a){return this.transformKeys(a,this.coreString.trim)}},{key:"hyphenateKeys",value:function hyphenateKeys(a,b){return this.transformKeys(a,this.coreString.hyphenate,b)}},{key:"lowercaseKeys",value:function lowercaseKeys(a){return this.transformKeys(a,this.coreString.lowercase)}},{key:"upppercaseKeys",value:function upppercaseKeys(a){return this.transformKeys(a,this.coreString.uppercase)}},{key:"camelcaseKeys",value:function camelcaseKeys(a){return this.transformKeys(a,this.coreString.camelCase)}},{key:"transformKeys",value:function transformKeys(a,b){for(var c=arguments.length,d=Array(2<c?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];var f=a||{},g=Object.keys(f),h=g.reduce(function(a,c){return a[b.apply(void 0,[c].concat(d))]=f[c],a},{});return h}},{key:"removeKeys",value:function removeKeys(a){for(var b=a||{},c=_objectSpread({},b),d=arguments.length,e=Array(1<d?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];for(var g,h=0,i=e;h<i.length;h++)g=i[h],delete c[g];return c}},{key:"removeKeysWithSpecificValues",value:function removeKeysWithSpecificValues(a){for(var b,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=a||{},e=_objectSpread({},d),f=Object.keys(e),g=0,h=f;g<h.length;g++)b=h[g],c.includes(e[b])&&delete e[b];return e}}]),a}();module.exports=CoreObject;

/***/ }),

/***/ "./src/core/object/locator.js":
/*!************************************!*\
  !*** ./src/core/object/locator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CoreObject=__webpack_require__(/*! . */ "./src/core/object/index.js"),CoreObjectLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/string");return new CoreObject(a)}}]),a}();module.exports=CoreObjectLocator;

/***/ }),

/***/ "./src/core/schema/browser-bootstrap/error/schema-not-resolvable.js":
/*!**************************************************************************!*\
  !*** ./src/core/schema/browser-bootstrap/error/schema-not-resolvable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var SchemaNotResolvableError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SCHEMA_NOT_RESOLVABLE",d}return _inherits(b,a),b}(_wrapNativeSuper(ReferenceError));module.exports=SchemaNotResolvableError;

/***/ }),

/***/ "./src/core/schema/browser-bootstrap/index.js":
/*!****************************************************!*\
  !*** ./src/core/schema/browser-bootstrap/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaNotResolvable=__webpack_require__(/*! ./error/schema-not-resolvable */ "./src/core/schema/browser-bootstrap/error/schema-not-resolvable.js"),SchemaBootstrap=function(){function a(b,c){_classCallCheck(this,a),this.locator=b,this.configuration=c}return _createClass(a,[{key:"bootstrap",value:function bootstrap(){var a=this.locator.locate("core/schema/composer"),b=this.configuration.find("core.schema.composer"),c=this.configuration.find("core.schema.filter"),d=this.configuration.find("core.schema.validator");this.addSchemas(a,b),this.addFilters(a,c),this.addValidators(a,d)}},{key:"addSchemas",value:function addSchemas(a,b){for(var c in b||[])try{var d=__webpack_require__("./src sync recursive ^\\.\\/.*$")("./".concat(b[c]));a.addSchema(c,d)}catch(a){throw new SchemaNotResolvable("Could not resolve path for schema: \"".concat(c,"\", path: \"").concat(b[c],"\""))}}},{key:"addFilters",value:function addFilters(a,b){for(var c in b||[]){var d=this.locator.locate(b[c]);a.addFilter(c,d)}}},{key:"addValidators",value:function addValidators(a,b){for(var c in b||[]){var d=this.locator.locate(b[c]);a.addValidator(c,d)}}}]),a}();module.exports=SchemaBootstrap;

/***/ }),

/***/ "./src/core/schema/browser-bootstrap/locator.js":
/*!******************************************************!*\
  !*** ./src/core/schema/browser-bootstrap/locator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaBootstrap=__webpack_require__(/*! . */ "./src/core/schema/browser-bootstrap/index.js"),SchemaBootstrapLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/configuration");return new SchemaBootstrap(this.locator,a)}}]),a}();module.exports=SchemaBootstrapLocator;

/***/ }),

/***/ "./src/core/schema/composer/error/filter-is-not-honering-contract.js":
/*!***************************************************************************!*\
  !*** ./src/core/schema/composer/error/filter-is-not-honering-contract.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var FilterIsNotHoneringContractError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_FILTER_IS_NOT_HONERING_CONTRACT",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=FilterIsNotHoneringContractError;

/***/ }),

/***/ "./src/core/schema/composer/error/invalid-attribute.js":
/*!*************************************************************!*\
  !*** ./src/core/schema/composer/error/invalid-attribute.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidAttributeError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SCHEMA_INVALID_ATTRIBUTE",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidAttributeError;

/***/ }),

/***/ "./src/core/schema/composer/error/invalid-collection.js":
/*!**************************************************************!*\
  !*** ./src/core/schema/composer/error/invalid-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidCollectionError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_COLLECTION",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidCollectionError;

/***/ }),

/***/ "./src/core/schema/composer/error/invalid-schema.js":
/*!**********************************************************!*\
  !*** ./src/core/schema/composer/error/invalid-schema.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidSchemaError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SCHEMA_INVALID_SCHEMA",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidSchemaError;

/***/ }),

/***/ "./src/core/schema/composer/error/schema-not-found.js":
/*!************************************************************!*\
  !*** ./src/core/schema/composer/error/schema-not-found.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var SchemaNotFoundError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SCHEMA_NOT_FOUND",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=SchemaNotFoundError;

/***/ }),

/***/ "./src/core/schema/composer/error/validator-is-not-honering-contract.js":
/*!******************************************************************************!*\
  !*** ./src/core/schema/composer/error/validator-is-not-honering-contract.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ValidatorIsNotHoneringContractError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_VALIDATOR_IS_NOT_HONERING_CONTRACT",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=ValidatorIsNotHoneringContractError;

/***/ }),

/***/ "./src/core/schema/composer/error/validator-not-found.js":
/*!***************************************************************!*\
  !*** ./src/core/schema/composer/error/validator-not-found.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var ValidatorNotFoundError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_VALIDATOR_NOT_FOUND",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=ValidatorNotFoundError;

/***/ }),

/***/ "./src/core/schema/composer/index.js":
/*!*******************************************!*\
  !*** ./src/core/schema/composer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidAttributeError=__webpack_require__(/*! ./error/invalid-attribute */ "./src/core/schema/composer/error/invalid-attribute.js"),InvalidCollectionError=__webpack_require__(/*! ./error/invalid-collection */ "./src/core/schema/composer/error/invalid-collection.js"),InvalidSchemaError=__webpack_require__(/*! ./error/invalid-schema */ "./src/core/schema/composer/error/invalid-schema.js"),SchemaNotFoundError=__webpack_require__(/*! ./error/schema-not-found */ "./src/core/schema/composer/error/schema-not-found.js"),FilterIsNotHoneringContractError=__webpack_require__(/*! ./error/filter-is-not-honering-contract */ "./src/core/schema/composer/error/filter-is-not-honering-contract.js"),ValidatorIsNotHoneringContractError=__webpack_require__(/*! ./error/validator-is-not-honering-contract */ "./src/core/schema/composer/error/validator-is-not-honering-contract.js"),ValidatorNotFoundError=__webpack_require__(/*! ./error/validator-not-found */ "./src/core/schema/composer/error/validator-not-found.js"),SchemaComposer=function(){function a(b,c,d){_classCallCheck(this,a),this.deepmerge=b,this.deepclone=c,this.deepfreeze=d,this.schemas={},this.filters={},this.validators={}}return _createClass(a,[{key:"compose",value:function compose(a,b){var c;if(!1==a in this.schemas)throw new SchemaNotFoundError("Schema: \"".concat(a,"\" not found"));Array.isArray(b)&&(b=(c=this.deepmerge).merge.apply(c,[{}].concat(_toConsumableArray(b))));var d=this.buildSchema(this.schemas[a]),e={};for(var f in d)e[f]=this.attribute(a,d,f,b[f]);return Object.isFrozen(d)&&this.deepfreeze.freeze(e),e}},{key:"trait",value:function trait(a,b,c){if(!1==a in this.schemas)throw new SchemaNotFoundError("Schema: \"".concat(a,"\" not found"));var d=this.schemas[a],e=this.attribute(a,d,b,c);return e}},{key:"attribute",value:function attribute(a,b,c,d){var e=b[c];if("default"in e&&void 0===d&&(d=e["default"]),!0===e.optional&&void 0===d)return d;if(!0===e.nullable&&null===d)return d;if(e.type in this.filters){var l=this.filters[e.type];d=l.filter(e,d)}if(!1==e.type in this.validators)throw new ValidatorNotFoundError("In schema: \"".concat(a,"\", validator: \"").concat(e.type,"\" not found"));try{var m=this.validators[e.type];if(e.collection){if(!Array.isArray(d))throw new InvalidCollectionError("In schema: \"".concat(a,"\", invalid type: \"").concat(_typeof(d),"\", array expected"));var f=!0,g=!1,h=void 0;try{for(var i,j,k=d[Symbol.iterator]();!(f=(i=k.next()).done);f=!0)j=i.value,m.valid(e,j)}catch(a){g=!0,h=a}finally{try{f||null==k["return"]||k["return"]()}finally{if(g)throw h}}}else m.valid(e,d)}catch(b){throw new InvalidAttributeError("Invalid attribute: \"".concat(c,"\", schema: \"").concat(a,"\", error: ").concat(b.message))}return d}},{key:"buildSchema",value:function buildSchema(a){if("@meta"in a){if("extends"in a["@meta"]||"extend"in a["@meta"]){var b=a["@meta"]["extends"]||a["@meta"].extend,c=!0,d=!1,e=void 0;try{for(var f,g=(Array.isArray(b)?b:[b])[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=this.buildSchema(this.schemas[h]);this.deepmerge.merge(a,i)}}catch(a){d=!0,e=a}finally{try{c||null==g["return"]||g["return"]()}finally{if(d)throw e}}}a["@meta"].immutable||void 0===a["@meta"].immutable?(delete a["@meta"],Object.freeze(a)):delete a["@meta"]}return a}},{key:"addSchema",value:function addSchema(a,b){if("object"!==_typeof(b))throw new InvalidSchemaError("Schema \"".concat(a,"\" must be an object"));this.schemas[a]=this.deepclone.clone(b)}},{key:"addFilter",value:function addFilter(a,b){if("function"!=typeof b.filter)throw new FilterIsNotHoneringContractError("Filter \"".concat(a,"\" not honering contract"));this.filters[a]=b}},{key:"addValidator",value:function addValidator(a,b){if("function"!=typeof b.valid)throw new ValidatorIsNotHoneringContractError("Validator \"".concat(a,"\" not honering contract"));this.validators[a]=b}}]),a}();module.exports=SchemaComposer;

/***/ }),

/***/ "./src/core/schema/composer/locator.js":
/*!*********************************************!*\
  !*** ./src/core/schema/composer/locator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Schema=__webpack_require__(/*! . */ "./src/core/schema/composer/index.js"),SchemaLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/deepmerge"),b=this.locator.locate("core/deepclone"),c=this.locator.locate("core/deepfreeze");return new Schema(a,b,c)}}]),a}();module.exports=SchemaLocator;

/***/ }),

/***/ "./src/core/schema/config.js":
/*!***********************************!*\
  !*** ./src/core/schema/config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/schema";module.exports={core:{bootstrap:{schema:"core/schema/bootstrap"},schema:{filter:{boolean:"core/schema/filter/boolean",csv:"core/schema/filter/csv",decimal:"core/schema/filter/decimal",integer:"core/schema/filter/integer",json:"core/schema/filter/json",schema:"core/schema/filter/schema",string:"core/schema/filter/string",timestamp:"core/schema/filter/timestamp"},validator:{boolean:"core/schema/validator/boolean",csv:"core/schema/validator/csv",decimal:"core/schema/validator/decimal",integer:"core/schema/validator/integer",json:"core/schema/validator/json",schema:"core/schema/validator/schema",string:"core/schema/validator/string",timestamp:"core/schema/validator/timestamp"}},locator:{"core/schema/composer":"".concat(dirname,"/composer"),"core/schema/bootstrap":"".concat(dirname,"/browser-bootstrap"),"core/schema/filter/boolean":"".concat(dirname,"/filter/boolean"),"core/schema/filter/csv":"".concat(dirname,"/filter/csv"),"core/schema/filter/decimal":"".concat(dirname,"/filter/decimal"),"core/schema/filter/integer":"".concat(dirname,"/filter/integer"),"core/schema/filter/json":"".concat(dirname,"/filter/json"),"core/schema/filter/schema":"".concat(dirname,"/filter/schema"),"core/schema/filter/string":"".concat(dirname,"/filter/string"),"core/schema/filter/timestamp":"".concat(dirname,"/filter/timestamp"),"core/schema/validator/boolean":"".concat(dirname,"/validator/boolean"),"core/schema/validator/csv":"".concat(dirname,"/validator/csv"),"core/schema/validator/decimal":"".concat(dirname,"/validator/decimal"),"core/schema/validator/integer":"".concat(dirname,"/validator/integer"),"core/schema/validator/json":"".concat(dirname,"/validator/json"),"core/schema/validator/schema":"".concat(dirname,"/validator/schema"),"core/schema/validator/string":"".concat(dirname,"/validator/string"),"core/schema/validator/timestamp":"".concat(dirname,"/validator/timestamp")}}};

/***/ }),

/***/ "./src/core/schema/filter/boolean/index.js":
/*!*************************************************!*\
  !*** ./src/core/schema/filter/boolean/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterBoolean=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(b):this.filterSingle(b)}},{key:"filterCollection",value:function filterCollection(a){if(!Array.isArray(a))return a;var b=[],c=!0,d=!1,e=void 0;try{for(var f,g=a[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=this.filterSingle(h);b.push(i)}}catch(a){d=!0,e=a}finally{try{c||null==g["return"]||g["return"]()}finally{if(d)throw e}}return b}},{key:"filterSingle",value:function filterSingle(a){if("string"==typeof a){if("true"===a.toLowerCase())return!0;if("false"===a.toLowerCase())return!1}return a}}]),a}();module.exports=SchemaFilterBoolean;

/***/ }),

/***/ "./src/core/schema/filter/boolean/locator.js":
/*!***************************************************!*\
  !*** ./src/core/schema/filter/boolean/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterBoolean=__webpack_require__(/*! . */ "./src/core/schema/filter/boolean/index.js"),SchemaFilterBooleanLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaFilterBoolean}}]),a}();module.exports=SchemaFilterBooleanLocator;

/***/ }),

/***/ "./src/core/schema/filter/csv/index.js":
/*!*********************************************!*\
  !*** ./src/core/schema/filter/csv/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterCsv=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(a,b):this.filterSingle(a,b)}},{key:"filterCollection",value:function filterCollection(a,b){if(!Array.isArray(b))return b;var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=b[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=this.filterSingle(a,i);c.push(j)}}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}},{key:"filterSingle",value:function filterSingle(a,b){return"string"==typeof b&&(a.uppercase&&(b=b.toUpperCase()),a.lowercase&&(b=b.toLowerCase()),b=b.split(",")),b}}]),a}();module.exports=SchemaFilterCsv;

/***/ }),

/***/ "./src/core/schema/filter/csv/locator.js":
/*!***********************************************!*\
  !*** ./src/core/schema/filter/csv/locator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterCsv=__webpack_require__(/*! . */ "./src/core/schema/filter/csv/index.js"),SchemaFilterCsvLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaFilterCsv}}]),a}();module.exports=SchemaFilterCsvLocator;

/***/ }),

/***/ "./src/core/schema/filter/decimal/index.js":
/*!*************************************************!*\
  !*** ./src/core/schema/filter/decimal/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterDecimal=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(b):this.filterSingle(b)}},{key:"filterCollection",value:function filterCollection(a){if(!Array.isArray(a))return a;var b=[],c=!0,d=!1,e=void 0;try{for(var f,g=a[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=this.filterSingle(h);b.push(i)}}catch(a){d=!0,e=a}finally{try{c||null==g["return"]||g["return"]()}finally{if(d)throw e}}return b}},{key:"filterSingle",value:function filterSingle(a){return!1===isNaN(a)?+a:a}}]),a}();module.exports=SchemaFilterDecimal;

/***/ }),

/***/ "./src/core/schema/filter/decimal/locator.js":
/*!***************************************************!*\
  !*** ./src/core/schema/filter/decimal/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterDecimal=__webpack_require__(/*! . */ "./src/core/schema/filter/decimal/index.js"),SchemaFilterDecimalLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaFilterDecimal}}]),a}();module.exports=SchemaFilterDecimalLocator;

/***/ }),

/***/ "./src/core/schema/filter/index.js":
/*!*****************************************!*\
  !*** ./src/core/schema/filter/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/core/schema/filter/integer/index.js":
/*!*************************************************!*\
  !*** ./src/core/schema/filter/integer/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterInteger=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(b):this.filterSingle(b)}},{key:"filterCollection",value:function filterCollection(a){if(!Array.isArray(a))return a;var b=[],c=!0,d=!1,e=void 0;try{for(var f,g=a[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=this.filterSingle(h);b.push(i)}}catch(a){d=!0,e=a}finally{try{c||null==g["return"]||g["return"]()}finally{if(d)throw e}}return b}},{key:"filterSingle",value:function filterSingle(a){return!1===isNaN(a)?+a:a}}]),a}();module.exports=SchemaFilterInteger;

/***/ }),

/***/ "./src/core/schema/filter/integer/locator.js":
/*!***************************************************!*\
  !*** ./src/core/schema/filter/integer/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterInteger=__webpack_require__(/*! . */ "./src/core/schema/filter/integer/index.js"),SchemaFilterIntegerLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaFilterInteger}}]),a}();module.exports=SchemaFilterIntegerLocator;

/***/ }),

/***/ "./src/core/schema/filter/json/index.js":
/*!**********************************************!*\
  !*** ./src/core/schema/filter/json/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterJson=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){try{return a.stringified?JSON.stringify(b,null,a.indentation):b}catch(a){return b}}}]),a}();module.exports=SchemaFilterJson;

/***/ }),

/***/ "./src/core/schema/filter/json/locator.js":
/*!************************************************!*\
  !*** ./src/core/schema/filter/json/locator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterJson=__webpack_require__(/*! . */ "./src/core/schema/filter/json/index.js"),SchemaFilterJsonLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaFilterJson}}]),a}();module.exports=SchemaFilterJsonLocator;

/***/ }),

/***/ "./src/core/schema/filter/schema/error/missing-schema-definition.js":
/*!**************************************************************************!*\
  !*** ./src/core/schema/filter/schema/error/missing-schema-definition.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var MissingSchemaDefinitionError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_MISSING_SCHEMA_DEFINITION",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=MissingSchemaDefinitionError;

/***/ }),

/***/ "./src/core/schema/filter/schema/index.js":
/*!************************************************!*\
  !*** ./src/core/schema/filter/schema/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var MissingSchemaDefinitionError=__webpack_require__(/*! ./error/missing-schema-definition */ "./src/core/schema/filter/schema/error/missing-schema-definition.js"),SchemaFilterSchema=function(){function a(b){_classCallCheck(this,a),this.composer=b}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(a,b):this.filterSingle(a,b)}},{key:"filterCollection",value:function filterCollection(a,b){if(!Array.isArray(b))return b;var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=b[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=this.filterSingle(a,i);c.push(j)}}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}},{key:"filterSingle",value:function filterSingle(a,b){if("string"==typeof a.schema)return a.trait?this.composer.trait(a.schema,a.trait,b):this.composer.compose(a.schema,b);throw new MissingSchemaDefinitionError("Expected the attribute \"schema\" to declare what type of schema ")}}]),a}();module.exports=SchemaFilterSchema;

/***/ }),

/***/ "./src/core/schema/filter/schema/locator.js":
/*!**************************************************!*\
  !*** ./src/core/schema/filter/schema/locator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterSchema=__webpack_require__(/*! . */ "./src/core/schema/filter/schema/index.js"),SchemaFilterSchemaLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/schema/composer");return new SchemaFilterSchema(a)}}]),a}();module.exports=SchemaFilterSchemaLocator;

/***/ }),

/***/ "./src/core/schema/filter/string/index.js":
/*!************************************************!*\
  !*** ./src/core/schema/filter/string/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterString=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(a,b):this.filterSingle(a,b)}},{key:"filterCollection",value:function filterCollection(a,b){if(!Array.isArray(b))return b;var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=b[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=this.filterSingle(a,i);c.push(j)}}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}},{key:"filterSingle",value:function filterSingle(a,b){return"number"==typeof b&&(b="".concat(b)),"boolean"==typeof b&&(b="".concat(b)),"string"==typeof b&&(a.uppercase&&(b=b.toUpperCase()),a.lowercase&&(b=b.toLowerCase())),b}}]),a}();module.exports=SchemaFilterString;

/***/ }),

/***/ "./src/core/schema/filter/string/locator.js":
/*!**************************************************!*\
  !*** ./src/core/schema/filter/string/locator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterString=__webpack_require__(/*! . */ "./src/core/schema/filter/string/index.js"),SchemaFilterStringLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaFilterString}}]),a}();module.exports=SchemaFilterStringLocator;

/***/ }),

/***/ "./src/core/schema/filter/timestamp/index.js":
/*!***************************************************!*\
  !*** ./src/core/schema/filter/timestamp/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterTimestamp=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(a,b):this.filterSingle(a,b)}},{key:"filterCollection",value:function filterCollection(a,b){if(!Array.isArray(b))return b;var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=b[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=this.filterSingle(a,i);c.push(j)}}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}},{key:"filterSingle",value:function filterSingle(a,b){var c=parseInt(b);return c==b&&(b=c),a.utc&&(b=new Date(b).toUTCString()),a.json&&(b=new Date(b).toJSON()),b}}]),a}();module.exports=SchemaFilterTimestamp;

/***/ }),

/***/ "./src/core/schema/filter/timestamp/locator.js":
/*!*****************************************************!*\
  !*** ./src/core/schema/filter/timestamp/locator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterTimestamp=__webpack_require__(/*! . */ "./src/core/schema/filter/timestamp/index.js"),SchemaFilterTimestampLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaFilterTimestamp}}]),a}();module.exports=SchemaFilterTimestampLocator;

/***/ }),

/***/ "./src/core/schema/node-bootstrap/error/schema-not-resolvable.js":
/*!***********************************************************************!*\
  !*** ./src/core/schema/node-bootstrap/error/schema-not-resolvable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var SchemaNotResolvableError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_SCHEMA_NOT_RESOLVABLE",d}return _inherits(b,a),b}(_wrapNativeSuper(ReferenceError));module.exports=SchemaNotResolvableError;

/***/ }),

/***/ "./src/core/schema/node-bootstrap/index.js":
/*!*************************************************!*\
  !*** ./src/core/schema/node-bootstrap/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaNotResolvable=__webpack_require__(/*! ./error/schema-not-resolvable */ "./src/core/schema/node-bootstrap/error/schema-not-resolvable.js"),SchemaBootstrap=function(){function a(b,c,d){_classCallCheck(this,a),this.locator=b,this.configuration=c,this.path=d}return _createClass(a,[{key:"bootstrap",value:function bootstrap(){var a=this.locator.locate("core/schema/composer"),b=this.configuration.find("core.schema.composer"),c=this.configuration.find("core.schema.filter"),d=this.configuration.find("core.schema.validator");this.addSchemas(a,b),this.addFilters(a,c),this.addValidators(a,d)}},{key:"addSchemas",value:function addSchemas(a,b){for(var c in b||[])if(this.path.isResolvable(b[c])){var d=__webpack_require__("./src sync recursive ^\\.\\/.*$")("./".concat(b[c]));a.addSchema(c,d)}else throw new SchemaNotResolvable("Could not resolve path for schema: \"".concat(c,"\", path: \"").concat(b[c],"\""))}},{key:"addFilters",value:function addFilters(a,b){for(var c in b||[]){var d=this.locator.locate(b[c]);a.addFilter(c,d)}}},{key:"addValidators",value:function addValidators(a,b){for(var c in b||[]){var d=this.locator.locate(b[c]);a.addValidator(c,d)}}}]),a}();module.exports=SchemaBootstrap;

/***/ }),

/***/ "./src/core/schema/node-bootstrap/locator.js":
/*!***************************************************!*\
  !*** ./src/core/schema/node-bootstrap/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaBootstrap=__webpack_require__(/*! . */ "./src/core/schema/node-bootstrap/index.js"),SchemaBootstrapLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/configuration"),b=this.locator.locate("core/path");return new SchemaBootstrap(this.locator,a,b)}}]),a}();module.exports=SchemaBootstrapLocator;

/***/ }),

/***/ "./src/core/schema/validator/boolean/error/invalid.js":
/*!************************************************************!*\
  !*** ./src/core/schema/validator/boolean/error/invalid.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidBooleanError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_BOOLEAN",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidBooleanError;

/***/ }),

/***/ "./src/core/schema/validator/boolean/index.js":
/*!****************************************************!*\
  !*** ./src/core/schema/validator/boolean/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidBooleanError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/boolean/error/invalid.js"),SchemaValidatorBoolean=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){if("boolean"!=typeof b){var c="Invalid type: \"".concat(_typeof(b),"\", boolean expected");throw new InvalidBooleanError(c)}}}]),a}();module.exports=SchemaValidatorBoolean;

/***/ }),

/***/ "./src/core/schema/validator/boolean/locator.js":
/*!******************************************************!*\
  !*** ./src/core/schema/validator/boolean/locator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorBoolean=__webpack_require__(/*! . */ "./src/core/schema/validator/boolean/index.js"),SchemaValidatorBooleanLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorBoolean}}]),a}();module.exports=SchemaValidatorBooleanLocator;

/***/ }),

/***/ "./src/core/schema/validator/csv/error/invalid.js":
/*!********************************************************!*\
  !*** ./src/core/schema/validator/csv/error/invalid.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidCsvError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_CSV",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidCsvError;

/***/ }),

/***/ "./src/core/schema/validator/csv/index.js":
/*!************************************************!*\
  !*** ./src/core/schema/validator/csv/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidCsvError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/csv/error/invalid.js"),SchemaValidatorCsv=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){if(!1===Array.isArray(b)){var c="Invalid type: \"".concat(_typeof(b),"\", csv (comma seperated values) string expected");throw new InvalidCsvError(c)}if(a["not-empty"]&&!b.length){throw new InvalidCsvError("Must not be empty")}if("min"in a&&b.length<a.min){var d="Length of values must be minimum: \"".concat(a.min,"\" long");throw new InvalidCsvError(d)}if("max"in a&&b.length>a.max){var e="Length of values can't be more then: \"".concat(a.max,"\" long");throw new InvalidCsvError(e)}if(a["enum"]&&!b.every(function(b){return a["enum"].includes(b)})){var f="Expected all values of the csv to be one of the enumeral values: \"".concat(a["enum"],"\"");throw new InvalidCsvError(f)}if(a.uppercase&&!b.every(function(a){return a===b.toUpperCase()})){throw new InvalidCsvError("Upper case string expected")}if(a.lowercase&&!b.every(function(a){return a===b.toLowerCase()})){throw new InvalidCsvError("Lower case string expected")}}}]),a}();module.exports=SchemaValidatorCsv;

/***/ }),

/***/ "./src/core/schema/validator/csv/locator.js":
/*!**************************************************!*\
  !*** ./src/core/schema/validator/csv/locator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorString=__webpack_require__(/*! . */ "./src/core/schema/validator/csv/index.js"),SchemaValidatorStringLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorString}}]),a}();module.exports=SchemaValidatorStringLocator;

/***/ }),

/***/ "./src/core/schema/validator/decimal/error/invalid.js":
/*!************************************************************!*\
  !*** ./src/core/schema/validator/decimal/error/invalid.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidDecimalError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_DECIMAL",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidDecimalError;

/***/ }),

/***/ "./src/core/schema/validator/decimal/index.js":
/*!****************************************************!*\
  !*** ./src/core/schema/validator/decimal/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidDecimalError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/decimal/error/invalid.js"),SchemaValidatorDecimal=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){if("number"!=typeof b){var c="Invalid type: \"".concat(_typeof(b),"\", number expected");throw new InvalidDecimalError(c)}if(a.unsigned&&0>b){throw new InvalidDecimalError("Expected an unsigned decimal")}if("min"in a&&b<a.min){var d="Decimal must be minimum: \"".concat(a.min,"\"");throw new InvalidDecimalError(d)}if("max"in a&&b>a.max){var e="Decimal can't be more then: \"".concat(a.max,"\"");throw new InvalidDecimalError(e)}if("gt"in a&&b>a.gt){var f="Decimal must be more then: \"".concat(a.gt,"\"");throw new InvalidDecimalError(f)}if("lt"in a&&b<a.lt){var g="Decimal must be less then: \"".concat(a.lt,"\"");throw new InvalidDecimalError(g)}if(a["enum"]&&!a["enum"].includes(b)){var h="Expected one of the enumeral values: \"".concat(a["enum"],"\"");throw new InvalidDecimalError(h)}}}]),a}();module.exports=SchemaValidatorDecimal;

/***/ }),

/***/ "./src/core/schema/validator/decimal/locator.js":
/*!******************************************************!*\
  !*** ./src/core/schema/validator/decimal/locator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorDecimal=__webpack_require__(/*! . */ "./src/core/schema/validator/decimal/index.js"),SchemaValidatorDecimalLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorDecimal}}]),a}();module.exports=SchemaValidatorDecimalLocator;

/***/ }),

/***/ "./src/core/schema/validator/index.js":
/*!********************************************!*\
  !*** ./src/core/schema/validator/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/core/schema/validator/integer/error/invalid.js":
/*!************************************************************!*\
  !*** ./src/core/schema/validator/integer/error/invalid.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidIntegerError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_INTEGER",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidIntegerError;

/***/ }),

/***/ "./src/core/schema/validator/integer/index.js":
/*!****************************************************!*\
  !*** ./src/core/schema/validator/integer/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidIntegerError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/integer/error/invalid.js"),SchemaValidatorInteger=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){if("number"!=typeof b){var c="Invalid type: \"".concat(_typeof(b),"\", number expected");throw new InvalidIntegerError(c)}if(b!==parseInt(b)){throw new InvalidIntegerError("Integer expected, found decimals")}if(a.unsigned&&0>b){throw new InvalidIntegerError("Expected an unsigned integer ")}if("min"in a&&b<a.min){var d="Integer must be minimum: \"".concat(a.min,"\"");throw new InvalidIntegerError(d)}if("max"in a&&b>a.max){var e="Integer can't be more then: \"".concat(a.max,"\"");throw new InvalidIntegerError(e)}if("gt"in a&&b<a.gt){var f="Integer must be more then: \"".concat(a.gt,"\"");throw new InvalidIntegerError(f)}if("lt"in a&&b>a.lt){var g="Integer must be less then: \"".concat(a.lt,"\"");throw new InvalidIntegerError(g)}if(a["enum"]&&!a["enum"].includes(b)){var h="Expected one of the enumeral values: \"".concat(a["enum"],"\"");throw new InvalidIntegerError(h)}}}]),a}();module.exports=SchemaValidatorInteger;

/***/ }),

/***/ "./src/core/schema/validator/integer/locator.js":
/*!******************************************************!*\
  !*** ./src/core/schema/validator/integer/locator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorInteger=__webpack_require__(/*! . */ "./src/core/schema/validator/integer/index.js"),SchemaValidatorIntegerLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorInteger}}]),a}();module.exports=SchemaValidatorIntegerLocator;

/***/ }),

/***/ "./src/core/schema/validator/json/error/invalid.js":
/*!*********************************************************!*\
  !*** ./src/core/schema/validator/json/error/invalid.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidJsonError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_JSON",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidJsonError;

/***/ }),

/***/ "./src/core/schema/validator/json/index.js":
/*!*************************************************!*\
  !*** ./src/core/schema/validator/json/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidJsonError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/json/error/invalid.js"),SchemaValidatorJson=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){try{a.stringified?JSON.parse(b):JSON.stringify(b)}catch(a){throw new InvalidJsonError("Unparsable JSON provided")}}}]),a}();module.exports=SchemaValidatorJson;

/***/ }),

/***/ "./src/core/schema/validator/json/locator.js":
/*!***************************************************!*\
  !*** ./src/core/schema/validator/json/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorJson=__webpack_require__(/*! . */ "./src/core/schema/validator/json/index.js"),SchemaValidatorJsonLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorJson}}]),a}();module.exports=SchemaValidatorJsonLocator;

/***/ }),

/***/ "./src/core/schema/validator/schema/error/invalid.js":
/*!***********************************************************!*\
  !*** ./src/core/schema/validator/schema/error/invalid.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidSchemaError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_SCHEMA",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidSchemaError;

/***/ }),

/***/ "./src/core/schema/validator/schema/index.js":
/*!***************************************************!*\
  !*** ./src/core/schema/validator/schema/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidSchemaError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/schema/error/invalid.js"),SchemaValidatorSchema=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(){}}]),a}();module.exports=SchemaValidatorSchema;

/***/ }),

/***/ "./src/core/schema/validator/schema/locator.js":
/*!*****************************************************!*\
  !*** ./src/core/schema/validator/schema/locator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorSchema=__webpack_require__(/*! . */ "./src/core/schema/validator/schema/index.js"),SchemaValidatorSchemaLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorSchema}}]),a}();module.exports=SchemaValidatorSchemaLocator;

/***/ }),

/***/ "./src/core/schema/validator/string/error/invalid.js":
/*!***********************************************************!*\
  !*** ./src/core/schema/validator/string/error/invalid.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidStringError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_STRING",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidStringError;

/***/ }),

/***/ "./src/core/schema/validator/string/index.js":
/*!***************************************************!*\
  !*** ./src/core/schema/validator/string/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidStringError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/string/error/invalid.js"),SchemaValidatorString=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){if("string"!=typeof b){var c="Invalid type: \"".concat(_typeof(b),"\", string expected");throw new InvalidStringError(c)}if(a["not-empty"]&&!b.length){throw new InvalidStringError("Must not be empty")}if("min"in a&&b.length<a.min){var d="String length must be minimum: \"".concat(a.min,"\" long");throw new InvalidStringError(d)}if("max"in a&&b.length>a.max){var e="String length can't be more then: \"".concat(a.max,"\" long");throw new InvalidStringError(e)}if(a["enum"]&&!a["enum"].includes(b)){var f="Expected one of the enumeral values: \"".concat(a["enum"],"\"");throw new InvalidStringError(f)}if(a.uppercase&&b!==b.toUpperCase()){throw new InvalidStringError("Upper case string expected")}if(a.lowercase&&b!==b.toLowerCase()){throw new InvalidStringError("Lower case string expected")}}}]),a}();module.exports=SchemaValidatorString;

/***/ }),

/***/ "./src/core/schema/validator/string/locator.js":
/*!*****************************************************!*\
  !*** ./src/core/schema/validator/string/locator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorString=__webpack_require__(/*! . */ "./src/core/schema/validator/string/index.js"),SchemaValidatorStringLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorString}}]),a}();module.exports=SchemaValidatorStringLocator;

/***/ }),

/***/ "./src/core/schema/validator/timestamp/error/invalid.js":
/*!**************************************************************!*\
  !*** ./src/core/schema/validator/timestamp/error/invalid.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _wrapNativeSuper(a){var b="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var InvalidTimestampError=function(a){function b(){var c,d;_classCallCheck(this,b);for(var e=arguments.length,f=Array(e),a=0;a<e;a++)f[a]=arguments[a];return d=_possibleConstructorReturn(this,(c=_getPrototypeOf(b)).call.apply(c,[this].concat(f))),d.code="E_INVALID_TIMESTAMP",d}return _inherits(b,a),b}(_wrapNativeSuper(Error));module.exports=InvalidTimestampError;

/***/ }),

/***/ "./src/core/schema/validator/timestamp/index.js":
/*!******************************************************!*\
  !*** ./src/core/schema/validator/timestamp/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidTimestampError=__webpack_require__(/*! ./error/invalid */ "./src/core/schema/validator/timestamp/error/invalid.js"),SchemaValidatorTimestamp=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){if("string"!=typeof b){var d="Invalid type: \"".concat(_typeof(b),"\", string expected");throw new InvalidTimestampError(d)}var c=new Date(b);if("min"in a&&c.getTime()<new Date(a.min).getTime()){var e="Timestamp must be at least: \"".concat(a.min,"\"");throw new InvalidTimestampError(e)}if("max"in a&&c.getTime()>new Date(a.max).getTime()){var f="Timestamp can't be more then: \"".concat(a.max,"\"");throw new InvalidTimestampError(f)}if("gt"in a&&c.getTime()>new Date(a.gt).getTime()){var g="Timestamp must be more then: \"".concat(a.gt,"\" long");throw new InvalidTimestampError(g)}if("lt"in a&&c.getTime()<new Date(a.lt).getTime()){var h="Timestamp must be less then: \"".concat(a.lt,"\" long");throw new InvalidTimestampError(h)}if(a["enum"]&&!a["enum"].includes(b)){var i="Expected one of the enumeral values: \"".concat(a["enum"],"\"");throw new InvalidTimestampError(i)}}}]),a}();module.exports=SchemaValidatorTimestamp;

/***/ }),

/***/ "./src/core/schema/validator/timestamp/locator.js":
/*!********************************************************!*\
  !*** ./src/core/schema/validator/timestamp/locator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaValidatorString=__webpack_require__(/*! . */ "./src/core/schema/validator/timestamp/index.js"),SchemaValidatorStringLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new SchemaValidatorString}}]),a}();module.exports=SchemaValidatorStringLocator;

/***/ }),

/***/ "./src/core/service-loader/index.js":
/*!******************************************!*\
  !*** ./src/core/service-loader/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ServiceLoader=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"loadService",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:throw new Error("Method not implemented");case 1:case"end":return a.stop();}},a)}));return function loadService(){return a.apply(this,arguments)}}()}]),a}();module.exports=ServiceLoader;

/***/ }),

/***/ "./src/core/string/config.js":
/*!***********************************!*\
  !*** ./src/core/string/config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname= false||"core/string";module.exports={core:{locator:{"core/string":dirname}}};

/***/ }),

/***/ "./src/core/string/index.js":
/*!**********************************!*\
  !*** ./src/core/string/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CoreString=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"trim",value:function trim(a){return a.trim()}},{key:"capitalize",value:function capitalize(a){return a[0].toUpperCase()+a.slice(1)}},{key:"hyphenate",value:function hyphenate(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"-";return a.replace(/\W+/g,b).toLowerCase()}},{key:"camelCase",value:function camelCase(a){var b=this;return a=this.lowercase(a),a=a.split("-").map(function(a,c){return 0===c?a:b.capitalize(a)}).join(""),a}},{key:"lowercase",value:function lowercase(a){return a.toLowerCase()}},{key:"uppercase",value:function uppercase(a){return a.toLowerCase()}}]),a}();module.exports=CoreString;

/***/ }),

/***/ "./src/core/string/locator.js":
/*!************************************!*\
  !*** ./src/core/string/locator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CoreString=__webpack_require__(/*! . */ "./src/core/string/index.js"),CoreStringLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){return new CoreString}}]),a}();module.exports=CoreStringLocator;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ServiceUnableToResolveDependenciesError=__webpack_require__(/*! ./core/error/service-unable-to-resolve-dependencies */ "./src/core/error/service-unable-to-resolve-dependencies.js"),Core=function(){function a(b,c,d){_classCallCheck(this,a),this.locator=b,this.configFetcher=c,this.serviceLoader=d,this.components={}}return _createClass(a,[{key:"add",value:function add(a,b){this.components[a]=b}},{key:"remove",value:function remove(a){delete this.components[a]}},{key:"load",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c,d,e,f;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:b=this.locate("core/configuration"),a.t0=regeneratorRuntime.keys(this.components);case 2:if((a.t1=a.t0()).done){a.next=10;break}return c=a.t1.value,a.next=6,this.configFetcher.fetchComponentConfig(c,this.components[c]);case 6:d=a.sent,b.extend(d),a.next=2;break;case 10:return b.freeze(),e=b.find("core.locator"),f=Object.keys(e),a.next=14,this.loadServiceRecursion(f);case 14:case"end":return a.stop();}},a,this)}));return function load(){return a.apply(this,arguments)}}()},{key:"loadServiceRecursion",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e,f,g,h,i;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==b.length){a.next=2;break}return a.abrupt("return");case 2:c=[],d=!0,e=!1,f=void 0,a.prev=6,g=b[Symbol.iterator]();case 8:if(d=(h=g.next()).done){a.next=26;break}return i=h.value,a.prev=10,a.next=13,this.serviceLoader.loadService(i);case 13:a.next=23;break;case 15:a.prev=15,a.t0=a["catch"](10),a.t1=a.t0.code,a.next="E_SERVICE_UNMET_DEPENDENCY"===a.t1?20:22;break;case 20:return c.push(i),a.abrupt("break",23);case 22:throw a.t0;case 23:d=!0,a.next=8;break;case 26:a.next=32;break;case 28:a.prev=28,a.t2=a["catch"](6),e=!0,f=a.t2;case 32:a.prev=32,a.prev=33,d||null==g["return"]||g["return"]();case 35:if(a.prev=35,!e){a.next=38;break}throw f;case 38:return a.finish(35);case 39:return a.finish(32);case 40:if(b.length!==c.length){a.next=42;break}throw new ServiceUnableToResolveDependenciesError("Unmet dependencies found, could not resolve dependencies for ".concat(c.join(", ")));case 42:return a.next=44,this.loadServiceRecursion(c);case 44:case"end":return a.stop();}},a,this,[[6,28,32,40],[10,15],[33,,35,39]])}));return function loadServiceRecursion(){return a.apply(this,arguments)}}()},{key:"locate",value:function locate(a){return this.locator.locate(a)}}]),a}();module.exports=Core;

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map
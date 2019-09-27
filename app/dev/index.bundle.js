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

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(document, window)
{
  const domIsReady = __webpack_require__(/*! core/browser/dom-ready */ "./src/core/browser/dom-ready/index.js")

  const callback = async function()
  {
    const
    CoreFactory = __webpack_require__(/*! core/browser/factory */ "./src/core/browser/factory.js"),
    coreFactory = new CoreFactory(),
    core        = coreFactory.create()

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        const bus = core.locator.locate('core/bus')
        bus.emit({
          channelId : 'domain-events',
          name      : 'logged',
          data      : 'que paso parce'
        })
      })
    })
  }

  domIsReady(callback)
})(document, window)


/***/ }),

/***/ "./src sync recursive ^\\.\\/.*$":
/*!***************************!*\
  !*** ./src sync ^\.\/.*$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core": "./src/core/index.js",
	"./core/": "./src/core/index.js",
	"./core/browser/bus": "./src/core/browser/bus/index.js",
	"./core/browser/bus/": "./src/core/browser/bus/index.js",
	"./core/browser/bus/bootstrap": "./src/core/browser/bus/bootstrap/index.js",
	"./core/browser/bus/bootstrap/": "./src/core/browser/bus/bootstrap/index.js",
	"./core/browser/bus/bootstrap/index": "./src/core/browser/bus/bootstrap/index.js",
	"./core/browser/bus/bootstrap/index.js": "./src/core/browser/bus/bootstrap/index.js",
	"./core/browser/bus/bootstrap/locator": "./src/core/browser/bus/bootstrap/locator.js",
	"./core/browser/bus/bootstrap/locator.js": "./src/core/browser/bus/bootstrap/locator.js",
	"./core/browser/bus/config": "./src/core/browser/bus/config.js",
	"./core/browser/bus/config.js": "./src/core/browser/bus/config.js",
	"./core/browser/bus/factory": "./src/core/browser/bus/factory/index.js",
	"./core/browser/bus/factory/": "./src/core/browser/bus/factory/index.js",
	"./core/browser/bus/factory/index": "./src/core/browser/bus/factory/index.js",
	"./core/browser/bus/factory/index.js": "./src/core/browser/bus/factory/index.js",
	"./core/browser/bus/factory/locator": "./src/core/browser/bus/factory/locator.js",
	"./core/browser/bus/factory/locator.js": "./src/core/browser/bus/factory/locator.js",
	"./core/browser/bus/index": "./src/core/browser/bus/index.js",
	"./core/browser/bus/index.js": "./src/core/browser/bus/index.js",
	"./core/browser/bus/log": "./src/core/browser/bus/log/index.js",
	"./core/browser/bus/log/": "./src/core/browser/bus/log/index.js",
	"./core/browser/bus/log/index": "./src/core/browser/bus/log/index.js",
	"./core/browser/bus/log/index.js": "./src/core/browser/bus/log/index.js",
	"./core/browser/bus/log/locator": "./src/core/browser/bus/log/locator.js",
	"./core/browser/bus/log/locator.js": "./src/core/browser/bus/log/locator.js",
	"./core/browser/bus/schema/entity/bus": "./src/core/browser/bus/schema/entity/bus.js",
	"./core/browser/bus/schema/entity/bus.js": "./src/core/browser/bus/schema/entity/bus.js",
	"./core/browser/channel": "./src/core/browser/channel/index.js",
	"./core/browser/channel/": "./src/core/browser/channel/index.js",
	"./core/browser/channel/config": "./src/core/browser/channel/config.js",
	"./core/browser/channel/config.js": "./src/core/browser/channel/config.js",
	"./core/browser/channel/factory": "./src/core/browser/channel/factory/index.js",
	"./core/browser/channel/factory/": "./src/core/browser/channel/factory/index.js",
	"./core/browser/channel/factory/index": "./src/core/browser/channel/factory/index.js",
	"./core/browser/channel/factory/index.js": "./src/core/browser/channel/factory/index.js",
	"./core/browser/channel/factory/locator": "./src/core/browser/channel/factory/locator.js",
	"./core/browser/channel/factory/locator.js": "./src/core/browser/channel/factory/locator.js",
	"./core/browser/channel/index": "./src/core/browser/channel/index.js",
	"./core/browser/channel/index.js": "./src/core/browser/channel/index.js",
	"./core/browser/channel/schema/dto/event": "./src/core/browser/channel/schema/dto/event.js",
	"./core/browser/channel/schema/dto/event-meta": "./src/core/browser/channel/schema/dto/event-meta.js",
	"./core/browser/channel/schema/dto/event-meta.js": "./src/core/browser/channel/schema/dto/event-meta.js",
	"./core/browser/channel/schema/dto/event.js": "./src/core/browser/channel/schema/dto/event.js",
	"./core/browser/channel/schema/entity/channel": "./src/core/browser/channel/schema/entity/channel.js",
	"./core/browser/channel/schema/entity/channel.js": "./src/core/browser/channel/schema/entity/channel.js",
	"./core/browser/config-fetcher": "./src/core/browser/config-fetcher/index.js",
	"./core/browser/config-fetcher/": "./src/core/browser/config-fetcher/index.js",
	"./core/browser/config-fetcher/index": "./src/core/browser/config-fetcher/index.js",
	"./core/browser/config-fetcher/index.js": "./src/core/browser/config-fetcher/index.js",
	"./core/browser/dom-ready": "./src/core/browser/dom-ready/index.js",
	"./core/browser/dom-ready/": "./src/core/browser/dom-ready/index.js",
	"./core/browser/dom-ready/index": "./src/core/browser/dom-ready/index.js",
	"./core/browser/dom-ready/index.js": "./src/core/browser/dom-ready/index.js",
	"./core/browser/factory": "./src/core/browser/factory.js",
	"./core/browser/factory.js": "./src/core/browser/factory.js",
	"./core/browser/is-ie": "./src/core/browser/is-ie/index.js",
	"./core/browser/is-ie/": "./src/core/browser/is-ie/index.js",
	"./core/browser/is-ie/index": "./src/core/browser/is-ie/index.js",
	"./core/browser/is-ie/index.js": "./src/core/browser/is-ie/index.js",
	"./core/browser/schema/bootstrap": "./src/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/": "./src/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/config": "./src/core/browser/schema/bootstrap/config.js",
	"./core/browser/schema/bootstrap/config.js": "./src/core/browser/schema/bootstrap/config.js",
	"./core/browser/schema/bootstrap/index": "./src/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/index.js": "./src/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/locator": "./src/core/browser/schema/bootstrap/locator.js",
	"./core/browser/schema/bootstrap/locator.js": "./src/core/browser/schema/bootstrap/locator.js",
	"./core/browser/service-loader": "./src/core/browser/service-loader/index.js",
	"./core/browser/service-loader/": "./src/core/browser/service-loader/index.js",
	"./core/browser/service-loader/index": "./src/core/browser/service-loader/index.js",
	"./core/browser/service-loader/index.js": "./src/core/browser/service-loader/index.js",
	"./core/common/bootstrap": "./src/core/common/bootstrap/index.js",
	"./core/common/bootstrap/": "./src/core/common/bootstrap/index.js",
	"./core/common/bootstrap/config": "./src/core/common/bootstrap/config.js",
	"./core/common/bootstrap/config.js": "./src/core/common/bootstrap/config.js",
	"./core/common/bootstrap/index": "./src/core/common/bootstrap/index.js",
	"./core/common/bootstrap/index.js": "./src/core/common/bootstrap/index.js",
	"./core/common/bootstrap/locator": "./src/core/common/bootstrap/locator.js",
	"./core/common/bootstrap/locator.js": "./src/core/common/bootstrap/locator.js",
	"./core/common/config-fetcher": "./src/core/common/config-fetcher/index.js",
	"./core/common/config-fetcher/": "./src/core/common/config-fetcher/index.js",
	"./core/common/config-fetcher/error/component-not-resolvable": "./src/core/common/config-fetcher/error/component-not-resolvable.js",
	"./core/common/config-fetcher/error/component-not-resolvable.js": "./src/core/common/config-fetcher/error/component-not-resolvable.js",
	"./core/common/config-fetcher/index": "./src/core/common/config-fetcher/index.js",
	"./core/common/config-fetcher/index.js": "./src/core/common/config-fetcher/index.js",
	"./core/common/configuration": "./src/core/common/configuration/index.js",
	"./core/common/configuration/": "./src/core/common/configuration/index.js",
	"./core/common/configuration/config": "./src/core/common/configuration/config.js",
	"./core/common/configuration/config.js": "./src/core/common/configuration/config.js",
	"./core/common/configuration/index": "./src/core/common/configuration/index.js",
	"./core/common/configuration/index.js": "./src/core/common/configuration/index.js",
	"./core/common/configuration/locator": "./src/core/common/configuration/locator.js",
	"./core/common/configuration/locator.js": "./src/core/common/configuration/locator.js",
	"./core/common/console": "./src/core/common/console/index.js",
	"./core/common/console/": "./src/core/common/console/index.js",
	"./core/common/console/config": "./src/core/common/console/config.js",
	"./core/common/console/config.js": "./src/core/common/console/config.js",
	"./core/common/console/factory": "./src/core/common/console/factory/index.js",
	"./core/common/console/factory/": "./src/core/common/console/factory/index.js",
	"./core/common/console/factory/index": "./src/core/common/console/factory/index.js",
	"./core/common/console/factory/index.js": "./src/core/common/console/factory/index.js",
	"./core/common/console/factory/locator": "./src/core/common/console/factory/locator.js",
	"./core/common/console/factory/locator.js": "./src/core/common/console/factory/locator.js",
	"./core/common/console/index": "./src/core/common/console/index.js",
	"./core/common/console/index.js": "./src/core/common/console/index.js",
	"./core/common/data-structure/associative-array": "./src/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/": "./src/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/factory": "./src/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/": "./src/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/index": "./src/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/index.js": "./src/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/locator": "./src/core/common/data-structure/associative-array/factory/locator.js",
	"./core/common/data-structure/associative-array/factory/locator.js": "./src/core/common/data-structure/associative-array/factory/locator.js",
	"./core/common/data-structure/associative-array/index": "./src/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/index.js": "./src/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/locator": "./src/core/common/data-structure/associative-array/locator.js",
	"./core/common/data-structure/associative-array/locator.js": "./src/core/common/data-structure/associative-array/locator.js",
	"./core/common/data-structure/config": "./src/core/common/data-structure/config.js",
	"./core/common/data-structure/config.js": "./src/core/common/data-structure/config.js",
	"./core/common/data-structure/graph": "./src/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/": "./src/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/error/node-not-exists": "./src/core/common/data-structure/graph/error/node-not-exists.js",
	"./core/common/data-structure/graph/error/node-not-exists.js": "./src/core/common/data-structure/graph/error/node-not-exists.js",
	"./core/common/data-structure/graph/factory": "./src/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/": "./src/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/index": "./src/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/index.js": "./src/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/locator": "./src/core/common/data-structure/graph/factory/locator.js",
	"./core/common/data-structure/graph/factory/locator.js": "./src/core/common/data-structure/graph/factory/locator.js",
	"./core/common/data-structure/graph/index": "./src/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/index.js": "./src/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/locator": "./src/core/common/data-structure/graph/locator.js",
	"./core/common/data-structure/graph/locator.js": "./src/core/common/data-structure/graph/locator.js",
	"./core/common/data-structure/multiple-associative-array": "./src/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/": "./src/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/factory": "./src/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/": "./src/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/index": "./src/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/index.js": "./src/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/locator": "./src/core/common/data-structure/multiple-associative-array/factory/locator.js",
	"./core/common/data-structure/multiple-associative-array/factory/locator.js": "./src/core/common/data-structure/multiple-associative-array/factory/locator.js",
	"./core/common/data-structure/multiple-associative-array/index": "./src/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/index.js": "./src/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/locator": "./src/core/common/data-structure/multiple-associative-array/locator.js",
	"./core/common/data-structure/multiple-associative-array/locator.js": "./src/core/common/data-structure/multiple-associative-array/locator.js",
	"./core/common/data-structure/object": "./src/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/": "./src/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/config": "./src/core/common/data-structure/object/config.js",
	"./core/common/data-structure/object/config.js": "./src/core/common/data-structure/object/config.js",
	"./core/common/data-structure/object/index": "./src/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/index.js": "./src/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/locator": "./src/core/common/data-structure/object/locator.js",
	"./core/common/data-structure/object/locator.js": "./src/core/common/data-structure/object/locator.js",
	"./core/common/data-structure/queue": "./src/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/": "./src/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/factory": "./src/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/": "./src/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/index": "./src/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/index.js": "./src/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/locator": "./src/core/common/data-structure/queue/factory/locator.js",
	"./core/common/data-structure/queue/factory/locator.js": "./src/core/common/data-structure/queue/factory/locator.js",
	"./core/common/data-structure/queue/index": "./src/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/index.js": "./src/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/locator": "./src/core/common/data-structure/queue/locator.js",
	"./core/common/data-structure/queue/locator.js": "./src/core/common/data-structure/queue/locator.js",
	"./core/common/data-structure/schema/validator": "./src/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/": "./src/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/associative-array": "./src/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/": "./src/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array": "./src/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js",
	"./core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js": "./src/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js",
	"./core/common/data-structure/schema/validator/associative-array/index": "./src/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/index.js": "./src/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/locator": "./src/core/common/data-structure/schema/validator/associative-array/locator.js",
	"./core/common/data-structure/schema/validator/associative-array/locator.js": "./src/core/common/data-structure/schema/validator/associative-array/locator.js",
	"./core/common/data-structure/schema/validator/collection": "./src/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/": "./src/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/error/invalid-collection": "./src/core/common/data-structure/schema/validator/collection/error/invalid-collection.js",
	"./core/common/data-structure/schema/validator/collection/error/invalid-collection.js": "./src/core/common/data-structure/schema/validator/collection/error/invalid-collection.js",
	"./core/common/data-structure/schema/validator/collection/index": "./src/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/index.js": "./src/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/locator": "./src/core/common/data-structure/schema/validator/collection/locator.js",
	"./core/common/data-structure/schema/validator/collection/locator.js": "./src/core/common/data-structure/schema/validator/collection/locator.js",
	"./core/common/data-structure/schema/validator/custom-json": "./src/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/": "./src/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/error/invalid-json": "./src/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js",
	"./core/common/data-structure/schema/validator/custom-json/error/invalid-json.js": "./src/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js",
	"./core/common/data-structure/schema/validator/custom-json/index": "./src/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/index.js": "./src/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/locator": "./src/core/common/data-structure/schema/validator/custom-json/locator.js",
	"./core/common/data-structure/schema/validator/custom-json/locator.js": "./src/core/common/data-structure/schema/validator/custom-json/locator.js",
	"./core/common/data-structure/schema/validator/index": "./src/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/index.js": "./src/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array": "./src/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/": "./src/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array": "./src/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js": "./src/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/index": "./src/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/index.js": "./src/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/locator": "./src/core/common/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/locator.js": "./src/core/common/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/common/data-structure/schema/value-object/associative-array": "./src/core/common/data-structure/schema/value-object/associative-array.js",
	"./core/common/data-structure/schema/value-object/associative-array.js": "./src/core/common/data-structure/schema/value-object/associative-array.js",
	"./core/common/data-structure/schema/value-object/edge": "./src/core/common/data-structure/schema/value-object/edge.js",
	"./core/common/data-structure/schema/value-object/edge.js": "./src/core/common/data-structure/schema/value-object/edge.js",
	"./core/common/data-structure/schema/value-object/graph": "./src/core/common/data-structure/schema/value-object/graph.js",
	"./core/common/data-structure/schema/value-object/graph.js": "./src/core/common/data-structure/schema/value-object/graph.js",
	"./core/common/data-structure/schema/value-object/multiple-associative-array": "./src/core/common/data-structure/schema/value-object/multiple-associative-array.js",
	"./core/common/data-structure/schema/value-object/multiple-associative-array.js": "./src/core/common/data-structure/schema/value-object/multiple-associative-array.js",
	"./core/common/data-structure/schema/value-object/node": "./src/core/common/data-structure/schema/value-object/node.js",
	"./core/common/data-structure/schema/value-object/node.js": "./src/core/common/data-structure/schema/value-object/node.js",
	"./core/common/data-structure/schema/value-object/queue": "./src/core/common/data-structure/schema/value-object/queue.js",
	"./core/common/data-structure/schema/value-object/queue.js": "./src/core/common/data-structure/schema/value-object/queue.js",
	"./core/common/data-structure/schema/value-object/stack": "./src/core/common/data-structure/schema/value-object/stack.js",
	"./core/common/data-structure/schema/value-object/stack.js": "./src/core/common/data-structure/schema/value-object/stack.js",
	"./core/common/data-structure/schema/value-object/tree": "./src/core/common/data-structure/schema/value-object/tree.js",
	"./core/common/data-structure/schema/value-object/tree.js": "./src/core/common/data-structure/schema/value-object/tree.js",
	"./core/common/data-structure/stack": "./src/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/": "./src/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/factory": "./src/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/": "./src/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/index": "./src/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/index.js": "./src/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/locator": "./src/core/common/data-structure/stack/factory/locator.js",
	"./core/common/data-structure/stack/factory/locator.js": "./src/core/common/data-structure/stack/factory/locator.js",
	"./core/common/data-structure/stack/index": "./src/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/index.js": "./src/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/locator": "./src/core/common/data-structure/stack/locator.js",
	"./core/common/data-structure/stack/locator.js": "./src/core/common/data-structure/stack/locator.js",
	"./core/common/data-structure/tree": "./src/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/": "./src/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/factory": "./src/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/": "./src/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/index": "./src/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/index.js": "./src/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/locator": "./src/core/common/data-structure/tree/factory/locator.js",
	"./core/common/data-structure/tree/factory/locator.js": "./src/core/common/data-structure/tree/factory/locator.js",
	"./core/common/data-structure/tree/index": "./src/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/index.js": "./src/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/locator": "./src/core/common/data-structure/tree/locator.js",
	"./core/common/data-structure/tree/locator.js": "./src/core/common/data-structure/tree/locator.js",
	"./core/common/deepassign": "./src/core/common/deepassign/index.js",
	"./core/common/deepassign/": "./src/core/common/deepassign/index.js",
	"./core/common/deepassign/config": "./src/core/common/deepassign/config.js",
	"./core/common/deepassign/config.js": "./src/core/common/deepassign/config.js",
	"./core/common/deepassign/error/not-an-object": "./src/core/common/deepassign/error/not-an-object.js",
	"./core/common/deepassign/error/not-an-object.js": "./src/core/common/deepassign/error/not-an-object.js",
	"./core/common/deepassign/index": "./src/core/common/deepassign/index.js",
	"./core/common/deepassign/index.js": "./src/core/common/deepassign/index.js",
	"./core/common/deepassign/locator": "./src/core/common/deepassign/locator.js",
	"./core/common/deepassign/locator.js": "./src/core/common/deepassign/locator.js",
	"./core/common/deepclone": "./src/core/common/deepclone/index.js",
	"./core/common/deepclone/": "./src/core/common/deepclone/index.js",
	"./core/common/deepclone/config": "./src/core/common/deepclone/config.js",
	"./core/common/deepclone/config.js": "./src/core/common/deepclone/config.js",
	"./core/common/deepclone/error/failed-to-clone": "./src/core/common/deepclone/error/failed-to-clone.js",
	"./core/common/deepclone/error/failed-to-clone.js": "./src/core/common/deepclone/error/failed-to-clone.js",
	"./core/common/deepclone/index": "./src/core/common/deepclone/index.js",
	"./core/common/deepclone/index.js": "./src/core/common/deepclone/index.js",
	"./core/common/deepclone/locator": "./src/core/common/deepclone/locator.js",
	"./core/common/deepclone/locator.js": "./src/core/common/deepclone/locator.js",
	"./core/common/deepfind": "./src/core/common/deepfind/index.js",
	"./core/common/deepfind/": "./src/core/common/deepfind/index.js",
	"./core/common/deepfind/config": "./src/core/common/deepfind/config.js",
	"./core/common/deepfind/config.js": "./src/core/common/deepfind/config.js",
	"./core/common/deepfind/index": "./src/core/common/deepfind/index.js",
	"./core/common/deepfind/index.js": "./src/core/common/deepfind/index.js",
	"./core/common/deepfind/locator": "./src/core/common/deepfind/locator.js",
	"./core/common/deepfind/locator.js": "./src/core/common/deepfind/locator.js",
	"./core/common/deepfreeze": "./src/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/": "./src/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/config": "./src/core/common/deepfreeze/config.js",
	"./core/common/deepfreeze/config.js": "./src/core/common/deepfreeze/config.js",
	"./core/common/deepfreeze/index": "./src/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/index.js": "./src/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/locator": "./src/core/common/deepfreeze/locator.js",
	"./core/common/deepfreeze/locator.js": "./src/core/common/deepfreeze/locator.js",
	"./core/common/deepmerge": "./src/core/common/deepmerge/index.js",
	"./core/common/deepmerge/": "./src/core/common/deepmerge/index.js",
	"./core/common/deepmerge/config": "./src/core/common/deepmerge/config.js",
	"./core/common/deepmerge/config.js": "./src/core/common/deepmerge/config.js",
	"./core/common/deepmerge/index": "./src/core/common/deepmerge/index.js",
	"./core/common/deepmerge/index.js": "./src/core/common/deepmerge/index.js",
	"./core/common/deepmerge/locator": "./src/core/common/deepmerge/locator.js",
	"./core/common/deepmerge/locator.js": "./src/core/common/deepmerge/locator.js",
	"./core/common/locator": "./src/core/common/locator/index.js",
	"./core/common/locator/": "./src/core/common/locator/index.js",
	"./core/common/locator/constituent": "./src/core/common/locator/constituent.js",
	"./core/common/locator/constituent.js": "./src/core/common/locator/constituent.js",
	"./core/common/locator/error/locator-not-implemented": "./src/core/common/locator/error/locator-not-implemented.js",
	"./core/common/locator/error/locator-not-implemented.js": "./src/core/common/locator/error/locator-not-implemented.js",
	"./core/common/locator/error/service-undefined": "./src/core/common/locator/error/service-undefined.js",
	"./core/common/locator/error/service-undefined.js": "./src/core/common/locator/error/service-undefined.js",
	"./core/common/locator/index": "./src/core/common/locator/index.js",
	"./core/common/locator/index.js": "./src/core/common/locator/index.js",
	"./core/common/object": "./src/core/common/object/index.js",
	"./core/common/object/": "./src/core/common/object/index.js",
	"./core/common/object/config": "./src/core/common/object/config.js",
	"./core/common/object/config.js": "./src/core/common/object/config.js",
	"./core/common/object/index": "./src/core/common/object/index.js",
	"./core/common/object/index.js": "./src/core/common/object/index.js",
	"./core/common/object/locator": "./src/core/common/object/locator.js",
	"./core/common/object/locator.js": "./src/core/common/object/locator.js",
	"./core/common/observer/error/observer-contract-not-honered": "./src/core/common/observer/error/observer-contract-not-honered.js",
	"./core/common/observer/error/observer-contract-not-honered.js": "./src/core/common/observer/error/observer-contract-not-honered.js",
	"./core/common/observer/observer": "./src/core/common/observer/observer.js",
	"./core/common/observer/observer.js": "./src/core/common/observer/observer.js",
	"./core/common/schema/composer": "./src/core/common/schema/composer/index.js",
	"./core/common/schema/composer/": "./src/core/common/schema/composer/index.js",
	"./core/common/schema/composer/error/filter-is-not-honering-contract": "./src/core/common/schema/composer/error/filter-is-not-honering-contract.js",
	"./core/common/schema/composer/error/filter-is-not-honering-contract.js": "./src/core/common/schema/composer/error/filter-is-not-honering-contract.js",
	"./core/common/schema/composer/error/invalid-attribute": "./src/core/common/schema/composer/error/invalid-attribute.js",
	"./core/common/schema/composer/error/invalid-attribute.js": "./src/core/common/schema/composer/error/invalid-attribute.js",
	"./core/common/schema/composer/error/invalid-collection": "./src/core/common/schema/composer/error/invalid-collection.js",
	"./core/common/schema/composer/error/invalid-collection.js": "./src/core/common/schema/composer/error/invalid-collection.js",
	"./core/common/schema/composer/error/invalid-schema": "./src/core/common/schema/composer/error/invalid-schema.js",
	"./core/common/schema/composer/error/invalid-schema.js": "./src/core/common/schema/composer/error/invalid-schema.js",
	"./core/common/schema/composer/error/schema-not-found": "./src/core/common/schema/composer/error/schema-not-found.js",
	"./core/common/schema/composer/error/schema-not-found.js": "./src/core/common/schema/composer/error/schema-not-found.js",
	"./core/common/schema/composer/error/validator-is-not-honering-contract": "./src/core/common/schema/composer/error/validator-is-not-honering-contract.js",
	"./core/common/schema/composer/error/validator-is-not-honering-contract.js": "./src/core/common/schema/composer/error/validator-is-not-honering-contract.js",
	"./core/common/schema/composer/error/validator-not-found": "./src/core/common/schema/composer/error/validator-not-found.js",
	"./core/common/schema/composer/error/validator-not-found.js": "./src/core/common/schema/composer/error/validator-not-found.js",
	"./core/common/schema/composer/index": "./src/core/common/schema/composer/index.js",
	"./core/common/schema/composer/index.js": "./src/core/common/schema/composer/index.js",
	"./core/common/schema/composer/locator": "./src/core/common/schema/composer/locator.js",
	"./core/common/schema/composer/locator.js": "./src/core/common/schema/composer/locator.js",
	"./core/common/schema/config": "./src/core/common/schema/config.js",
	"./core/common/schema/config.js": "./src/core/common/schema/config.js",
	"./core/common/schema/error/schema-not-resolvable": "./src/core/common/schema/error/schema-not-resolvable.js",
	"./core/common/schema/error/schema-not-resolvable.js": "./src/core/common/schema/error/schema-not-resolvable.js",
	"./core/common/schema/filter": "./src/core/common/schema/filter/index.js",
	"./core/common/schema/filter/": "./src/core/common/schema/filter/index.js",
	"./core/common/schema/filter/boolean": "./src/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/": "./src/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/index": "./src/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/index.js": "./src/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/locator": "./src/core/common/schema/filter/boolean/locator.js",
	"./core/common/schema/filter/boolean/locator.js": "./src/core/common/schema/filter/boolean/locator.js",
	"./core/common/schema/filter/csv": "./src/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/": "./src/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/index": "./src/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/index.js": "./src/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/locator": "./src/core/common/schema/filter/csv/locator.js",
	"./core/common/schema/filter/csv/locator.js": "./src/core/common/schema/filter/csv/locator.js",
	"./core/common/schema/filter/decimal": "./src/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/": "./src/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/index": "./src/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/index.js": "./src/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/locator": "./src/core/common/schema/filter/decimal/locator.js",
	"./core/common/schema/filter/decimal/locator.js": "./src/core/common/schema/filter/decimal/locator.js",
	"./core/common/schema/filter/index": "./src/core/common/schema/filter/index.js",
	"./core/common/schema/filter/index.js": "./src/core/common/schema/filter/index.js",
	"./core/common/schema/filter/integer": "./src/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/": "./src/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/index": "./src/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/index.js": "./src/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/locator": "./src/core/common/schema/filter/integer/locator.js",
	"./core/common/schema/filter/integer/locator.js": "./src/core/common/schema/filter/integer/locator.js",
	"./core/common/schema/filter/json": "./src/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/": "./src/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/index": "./src/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/index.js": "./src/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/locator": "./src/core/common/schema/filter/json/locator.js",
	"./core/common/schema/filter/json/locator.js": "./src/core/common/schema/filter/json/locator.js",
	"./core/common/schema/filter/schema": "./src/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/": "./src/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/error/missing-schema-definition": "./src/core/common/schema/filter/schema/error/missing-schema-definition.js",
	"./core/common/schema/filter/schema/error/missing-schema-definition.js": "./src/core/common/schema/filter/schema/error/missing-schema-definition.js",
	"./core/common/schema/filter/schema/index": "./src/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/index.js": "./src/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/locator": "./src/core/common/schema/filter/schema/locator.js",
	"./core/common/schema/filter/schema/locator.js": "./src/core/common/schema/filter/schema/locator.js",
	"./core/common/schema/filter/string": "./src/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/": "./src/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/index": "./src/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/index.js": "./src/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/locator": "./src/core/common/schema/filter/string/locator.js",
	"./core/common/schema/filter/string/locator.js": "./src/core/common/schema/filter/string/locator.js",
	"./core/common/schema/filter/timestamp": "./src/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/": "./src/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/index": "./src/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/index.js": "./src/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/locator": "./src/core/common/schema/filter/timestamp/locator.js",
	"./core/common/schema/filter/timestamp/locator.js": "./src/core/common/schema/filter/timestamp/locator.js",
	"./core/common/schema/validator": "./src/core/common/schema/validator/index.js",
	"./core/common/schema/validator/": "./src/core/common/schema/validator/index.js",
	"./core/common/schema/validator/boolean": "./src/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/": "./src/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/error/invalid": "./src/core/common/schema/validator/boolean/error/invalid.js",
	"./core/common/schema/validator/boolean/error/invalid.js": "./src/core/common/schema/validator/boolean/error/invalid.js",
	"./core/common/schema/validator/boolean/index": "./src/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/index.js": "./src/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/locator": "./src/core/common/schema/validator/boolean/locator.js",
	"./core/common/schema/validator/boolean/locator.js": "./src/core/common/schema/validator/boolean/locator.js",
	"./core/common/schema/validator/csv": "./src/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/": "./src/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/error/invalid": "./src/core/common/schema/validator/csv/error/invalid.js",
	"./core/common/schema/validator/csv/error/invalid.js": "./src/core/common/schema/validator/csv/error/invalid.js",
	"./core/common/schema/validator/csv/index": "./src/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/index.js": "./src/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/locator": "./src/core/common/schema/validator/csv/locator.js",
	"./core/common/schema/validator/csv/locator.js": "./src/core/common/schema/validator/csv/locator.js",
	"./core/common/schema/validator/decimal": "./src/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/": "./src/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/error/invalid": "./src/core/common/schema/validator/decimal/error/invalid.js",
	"./core/common/schema/validator/decimal/error/invalid.js": "./src/core/common/schema/validator/decimal/error/invalid.js",
	"./core/common/schema/validator/decimal/index": "./src/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/index.js": "./src/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/locator": "./src/core/common/schema/validator/decimal/locator.js",
	"./core/common/schema/validator/decimal/locator.js": "./src/core/common/schema/validator/decimal/locator.js",
	"./core/common/schema/validator/index": "./src/core/common/schema/validator/index.js",
	"./core/common/schema/validator/index.js": "./src/core/common/schema/validator/index.js",
	"./core/common/schema/validator/integer": "./src/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/": "./src/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/error/invalid": "./src/core/common/schema/validator/integer/error/invalid.js",
	"./core/common/schema/validator/integer/error/invalid.js": "./src/core/common/schema/validator/integer/error/invalid.js",
	"./core/common/schema/validator/integer/index": "./src/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/index.js": "./src/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/locator": "./src/core/common/schema/validator/integer/locator.js",
	"./core/common/schema/validator/integer/locator.js": "./src/core/common/schema/validator/integer/locator.js",
	"./core/common/schema/validator/json": "./src/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/": "./src/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/error/invalid": "./src/core/common/schema/validator/json/error/invalid.js",
	"./core/common/schema/validator/json/error/invalid.js": "./src/core/common/schema/validator/json/error/invalid.js",
	"./core/common/schema/validator/json/index": "./src/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/index.js": "./src/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/locator": "./src/core/common/schema/validator/json/locator.js",
	"./core/common/schema/validator/json/locator.js": "./src/core/common/schema/validator/json/locator.js",
	"./core/common/schema/validator/schema": "./src/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/": "./src/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/error/invalid": "./src/core/common/schema/validator/schema/error/invalid.js",
	"./core/common/schema/validator/schema/error/invalid.js": "./src/core/common/schema/validator/schema/error/invalid.js",
	"./core/common/schema/validator/schema/index": "./src/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/index.js": "./src/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/locator": "./src/core/common/schema/validator/schema/locator.js",
	"./core/common/schema/validator/schema/locator.js": "./src/core/common/schema/validator/schema/locator.js",
	"./core/common/schema/validator/string": "./src/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/": "./src/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/error/invalid": "./src/core/common/schema/validator/string/error/invalid.js",
	"./core/common/schema/validator/string/error/invalid.js": "./src/core/common/schema/validator/string/error/invalid.js",
	"./core/common/schema/validator/string/index": "./src/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/index.js": "./src/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/locator": "./src/core/common/schema/validator/string/locator.js",
	"./core/common/schema/validator/string/locator.js": "./src/core/common/schema/validator/string/locator.js",
	"./core/common/schema/validator/timestamp": "./src/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/": "./src/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/error/invalid": "./src/core/common/schema/validator/timestamp/error/invalid.js",
	"./core/common/schema/validator/timestamp/error/invalid.js": "./src/core/common/schema/validator/timestamp/error/invalid.js",
	"./core/common/schema/validator/timestamp/index": "./src/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/index.js": "./src/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/locator": "./src/core/common/schema/validator/timestamp/locator.js",
	"./core/common/schema/validator/timestamp/locator.js": "./src/core/common/schema/validator/timestamp/locator.js",
	"./core/common/service-loader": "./src/core/common/service-loader/index.js",
	"./core/common/service-loader/": "./src/core/common/service-loader/index.js",
	"./core/common/service-loader/error/service-locator-not-found": "./src/core/common/service-loader/error/service-locator-not-found.js",
	"./core/common/service-loader/error/service-locator-not-found.js": "./src/core/common/service-loader/error/service-locator-not-found.js",
	"./core/common/service-loader/error/service-unable-to-resolve-dependencies": "./src/core/common/service-loader/error/service-unable-to-resolve-dependencies.js",
	"./core/common/service-loader/error/service-unable-to-resolve-dependencies.js": "./src/core/common/service-loader/error/service-unable-to-resolve-dependencies.js",
	"./core/common/service-loader/error/service-unmet-dependency": "./src/core/common/service-loader/error/service-unmet-dependency.js",
	"./core/common/service-loader/error/service-unmet-dependency.js": "./src/core/common/service-loader/error/service-unmet-dependency.js",
	"./core/common/service-loader/index": "./src/core/common/service-loader/index.js",
	"./core/common/service-loader/index.js": "./src/core/common/service-loader/index.js",
	"./core/common/string": "./src/core/common/string/index.js",
	"./core/common/string/": "./src/core/common/string/index.js",
	"./core/common/string/config": "./src/core/common/string/config.js",
	"./core/common/string/config.js": "./src/core/common/string/config.js",
	"./core/common/string/index": "./src/core/common/string/index.js",
	"./core/common/string/index.js": "./src/core/common/string/index.js",
	"./core/common/string/locator": "./src/core/common/string/locator.js",
	"./core/common/string/locator.js": "./src/core/common/string/locator.js",
	"./core/config": "./src/core/config.js",
	"./core/config.js": "./src/core/config.js",
	"./core/index": "./src/core/index.js",
	"./core/index.js": "./src/core/index.js",
	"./core/node/config-fetcher": "./src/core/node/config-fetcher/index.js",
	"./core/node/config-fetcher/": "./src/core/node/config-fetcher/index.js",
	"./core/node/config-fetcher/index": "./src/core/node/config-fetcher/index.js",
	"./core/node/config-fetcher/index.js": "./src/core/node/config-fetcher/index.js",
	"./core/node/eventbus": "./src/core/node/eventbus/index.js",
	"./core/node/eventbus/": "./src/core/node/eventbus/index.js",
	"./core/node/eventbus/bootstrap": "./src/core/node/eventbus/bootstrap/index.js",
	"./core/node/eventbus/bootstrap/": "./src/core/node/eventbus/bootstrap/index.js",
	"./core/node/eventbus/bootstrap/index": "./src/core/node/eventbus/bootstrap/index.js",
	"./core/node/eventbus/bootstrap/index.js": "./src/core/node/eventbus/bootstrap/index.js",
	"./core/node/eventbus/bootstrap/locator": "./src/core/node/eventbus/bootstrap/locator.js",
	"./core/node/eventbus/bootstrap/locator.js": "./src/core/node/eventbus/bootstrap/locator.js",
	"./core/node/eventbus/config": "./src/core/node/eventbus/config.js",
	"./core/node/eventbus/config.js": "./src/core/node/eventbus/config.js",
	"./core/node/eventbus/index": "./src/core/node/eventbus/index.js",
	"./core/node/eventbus/index.js": "./src/core/node/eventbus/index.js",
	"./core/node/eventbus/locator": "./src/core/node/eventbus/locator.js",
	"./core/node/eventbus/locator.js": "./src/core/node/eventbus/locator.js",
	"./core/node/factory": "./src/core/node/factory.js",
	"./core/node/factory.js": "./src/core/node/factory.js",
	"./core/node/path": "./src/core/node/path/index.js",
	"./core/node/path/": "./src/core/node/path/index.js",
	"./core/node/path/config": "./src/core/node/path/config.js",
	"./core/node/path/config.js": "./src/core/node/path/config.js",
	"./core/node/path/index": "./src/core/node/path/index.js",
	"./core/node/path/index.js": "./src/core/node/path/index.js",
	"./core/node/path/locator": "./src/core/node/path/locator.js",
	"./core/node/path/locator.js": "./src/core/node/path/locator.js",
	"./core/node/process": "./src/core/node/process/index.js",
	"./core/node/process/": "./src/core/node/process/index.js",
	"./core/node/process/bootstrap": "./src/core/node/process/bootstrap/index.js",
	"./core/node/process/bootstrap/": "./src/core/node/process/bootstrap/index.js",
	"./core/node/process/bootstrap/index": "./src/core/node/process/bootstrap/index.js",
	"./core/node/process/bootstrap/index.js": "./src/core/node/process/bootstrap/index.js",
	"./core/node/process/bootstrap/locator": "./src/core/node/process/bootstrap/locator.js",
	"./core/node/process/bootstrap/locator.js": "./src/core/node/process/bootstrap/locator.js",
	"./core/node/process/config": "./src/core/node/process/config.js",
	"./core/node/process/config.js": "./src/core/node/process/config.js",
	"./core/node/process/index": "./src/core/node/process/index.js",
	"./core/node/process/index.js": "./src/core/node/process/index.js",
	"./core/node/process/locator": "./src/core/node/process/locator.js",
	"./core/node/process/locator.js": "./src/core/node/process/locator.js",
	"./core/node/schema/bootstrap": "./src/core/node/schema/bootstrap/index.js",
	"./core/node/schema/bootstrap/": "./src/core/node/schema/bootstrap/index.js",
	"./core/node/schema/bootstrap/config": "./src/core/node/schema/bootstrap/config.js",
	"./core/node/schema/bootstrap/config.js": "./src/core/node/schema/bootstrap/config.js",
	"./core/node/schema/bootstrap/index": "./src/core/node/schema/bootstrap/index.js",
	"./core/node/schema/bootstrap/index.js": "./src/core/node/schema/bootstrap/index.js",
	"./core/node/schema/bootstrap/locator": "./src/core/node/schema/bootstrap/locator.js",
	"./core/node/schema/bootstrap/locator.js": "./src/core/node/schema/bootstrap/locator.js",
	"./core/node/service-loader": "./src/core/node/service-loader/index.js",
	"./core/node/service-loader/": "./src/core/node/service-loader/index.js",
	"./core/node/service-loader/index": "./src/core/node/service-loader/index.js",
	"./core/node/service-loader/index.js": "./src/core/node/service-loader/index.js"
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
	"./core/browser/bus/config": "./src/core/browser/bus/config.js",
	"./core/browser/channel/config": "./src/core/browser/channel/config.js",
	"./core/browser/schema/bootstrap/config": "./src/core/browser/schema/bootstrap/config.js",
	"./core/common/bootstrap/config": "./src/core/common/bootstrap/config.js",
	"./core/common/configuration/config": "./src/core/common/configuration/config.js",
	"./core/common/console/config": "./src/core/common/console/config.js",
	"./core/common/data-structure/config": "./src/core/common/data-structure/config.js",
	"./core/common/data-structure/object/config": "./src/core/common/data-structure/object/config.js",
	"./core/common/deepassign/config": "./src/core/common/deepassign/config.js",
	"./core/common/deepclone/config": "./src/core/common/deepclone/config.js",
	"./core/common/deepfind/config": "./src/core/common/deepfind/config.js",
	"./core/common/deepfreeze/config": "./src/core/common/deepfreeze/config.js",
	"./core/common/deepmerge/config": "./src/core/common/deepmerge/config.js",
	"./core/common/object/config": "./src/core/common/object/config.js",
	"./core/common/schema/config": "./src/core/common/schema/config.js",
	"./core/common/string/config": "./src/core/common/string/config.js",
	"./core/config": "./src/core/config.js",
	"./core/node/eventbus/config": "./src/core/node/eventbus/config.js",
	"./core/node/path/config": "./src/core/node/path/config.js",
	"./core/node/process/config": "./src/core/node/process/config.js",
	"./core/node/schema/bootstrap/config": "./src/core/node/schema/bootstrap/config.js"
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
	"./core/browser/bus/bootstrap/locator": "./src/core/browser/bus/bootstrap/locator.js",
	"./core/browser/bus/factory/locator": "./src/core/browser/bus/factory/locator.js",
	"./core/browser/bus/log/locator": "./src/core/browser/bus/log/locator.js",
	"./core/browser/channel/factory/locator": "./src/core/browser/channel/factory/locator.js",
	"./core/browser/schema/bootstrap/locator": "./src/core/browser/schema/bootstrap/locator.js",
	"./core/common/bootstrap/locator": "./src/core/common/bootstrap/locator.js",
	"./core/common/configuration/locator": "./src/core/common/configuration/locator.js",
	"./core/common/console/factory/locator": "./src/core/common/console/factory/locator.js",
	"./core/common/data-structure/associative-array/factory/locator": "./src/core/common/data-structure/associative-array/factory/locator.js",
	"./core/common/data-structure/associative-array/locator": "./src/core/common/data-structure/associative-array/locator.js",
	"./core/common/data-structure/graph/factory/locator": "./src/core/common/data-structure/graph/factory/locator.js",
	"./core/common/data-structure/graph/locator": "./src/core/common/data-structure/graph/locator.js",
	"./core/common/data-structure/multiple-associative-array/factory/locator": "./src/core/common/data-structure/multiple-associative-array/factory/locator.js",
	"./core/common/data-structure/multiple-associative-array/locator": "./src/core/common/data-structure/multiple-associative-array/locator.js",
	"./core/common/data-structure/object/locator": "./src/core/common/data-structure/object/locator.js",
	"./core/common/data-structure/queue/factory/locator": "./src/core/common/data-structure/queue/factory/locator.js",
	"./core/common/data-structure/queue/locator": "./src/core/common/data-structure/queue/locator.js",
	"./core/common/data-structure/schema/validator/associative-array/locator": "./src/core/common/data-structure/schema/validator/associative-array/locator.js",
	"./core/common/data-structure/schema/validator/collection/locator": "./src/core/common/data-structure/schema/validator/collection/locator.js",
	"./core/common/data-structure/schema/validator/custom-json/locator": "./src/core/common/data-structure/schema/validator/custom-json/locator.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/locator": "./src/core/common/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/common/data-structure/stack/factory/locator": "./src/core/common/data-structure/stack/factory/locator.js",
	"./core/common/data-structure/stack/locator": "./src/core/common/data-structure/stack/locator.js",
	"./core/common/data-structure/tree/factory/locator": "./src/core/common/data-structure/tree/factory/locator.js",
	"./core/common/data-structure/tree/locator": "./src/core/common/data-structure/tree/locator.js",
	"./core/common/deepassign/locator": "./src/core/common/deepassign/locator.js",
	"./core/common/deepclone/locator": "./src/core/common/deepclone/locator.js",
	"./core/common/deepfind/locator": "./src/core/common/deepfind/locator.js",
	"./core/common/deepfreeze/locator": "./src/core/common/deepfreeze/locator.js",
	"./core/common/deepmerge/locator": "./src/core/common/deepmerge/locator.js",
	"./core/common/locator": "./src/core/common/locator/index.js",
	"./core/common/object/locator": "./src/core/common/object/locator.js",
	"./core/common/schema/composer/locator": "./src/core/common/schema/composer/locator.js",
	"./core/common/schema/filter/boolean/locator": "./src/core/common/schema/filter/boolean/locator.js",
	"./core/common/schema/filter/csv/locator": "./src/core/common/schema/filter/csv/locator.js",
	"./core/common/schema/filter/decimal/locator": "./src/core/common/schema/filter/decimal/locator.js",
	"./core/common/schema/filter/integer/locator": "./src/core/common/schema/filter/integer/locator.js",
	"./core/common/schema/filter/json/locator": "./src/core/common/schema/filter/json/locator.js",
	"./core/common/schema/filter/schema/locator": "./src/core/common/schema/filter/schema/locator.js",
	"./core/common/schema/filter/string/locator": "./src/core/common/schema/filter/string/locator.js",
	"./core/common/schema/filter/timestamp/locator": "./src/core/common/schema/filter/timestamp/locator.js",
	"./core/common/schema/validator/boolean/locator": "./src/core/common/schema/validator/boolean/locator.js",
	"./core/common/schema/validator/csv/locator": "./src/core/common/schema/validator/csv/locator.js",
	"./core/common/schema/validator/decimal/locator": "./src/core/common/schema/validator/decimal/locator.js",
	"./core/common/schema/validator/integer/locator": "./src/core/common/schema/validator/integer/locator.js",
	"./core/common/schema/validator/json/locator": "./src/core/common/schema/validator/json/locator.js",
	"./core/common/schema/validator/schema/locator": "./src/core/common/schema/validator/schema/locator.js",
	"./core/common/schema/validator/string/locator": "./src/core/common/schema/validator/string/locator.js",
	"./core/common/schema/validator/timestamp/locator": "./src/core/common/schema/validator/timestamp/locator.js",
	"./core/common/string/locator": "./src/core/common/string/locator.js",
	"./core/node/eventbus/bootstrap/locator": "./src/core/node/eventbus/bootstrap/locator.js",
	"./core/node/eventbus/locator": "./src/core/node/eventbus/locator.js",
	"./core/node/path/locator": "./src/core/node/path/locator.js",
	"./core/node/process/bootstrap/locator": "./src/core/node/process/bootstrap/locator.js",
	"./core/node/process/locator": "./src/core/node/process/locator.js",
	"./core/node/schema/bootstrap/locator": "./src/core/node/schema/bootstrap/locator.js"
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

/***/ "./src/core/browser/bus/bootstrap/index.js":
/*!*************************************************!*\
  !*** ./src/core/browser/bus/bootstrap/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ObserverContractNotHoneredError = __webpack_require__(/*! core/common/observer/error/observer-contract-not-honered */ "./src/core/common/observer/error/observer-contract-not-honered.js")

class BusBootstrap
{
  constructor(configuration, busFactory, locator)
  {
    this.configuration  = configuration
    this.busFactory     = busFactory
    this.locator        = locator
  }

  bootstrap()
  {
    const
    channels = this.configuration.find('core.bus.channels'),
    bus      = this.busFactory.create()

    for(const channel in channels)
    {
      bus.addChannel(channel)

      const observers = this.configuration.find(`core.bus.channels.${channel}.observers`)

      for(const event in observers)
      {
        for(const observerPath in observers[event])
        {
          if(!observers[event][observerPath])
            continue

          const observer = this.locator.locate(observerPath)

          if(typeof observer.observe !== 'function')
            throw new ObserverContractNotHoneredError(`"${observerPath}" does not implement the BusObserver interface`)

          bus.on({
            channelId : channel,
            observer  : observer.observe.bind(observer),
            event
          })
        }
      }

      this.locator.set('core/bus', bus)
    }
  }
}

module.exports = BusBootstrap


/***/ }),

/***/ "./src/core/browser/bus/bootstrap/locator.js":
/*!***************************************************!*\
  !*** ./src/core/browser/bus/bootstrap/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BusBootstrap = __webpack_require__(/*! . */ "./src/core/browser/bus/bootstrap/index.js")

class BusBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    busFactory    = this.locator.locate('core/bus/factory')

    return new BusBootstrap(configuration, busFactory, this.locator)
  }
}

module.exports = BusBootstrapLocator


/***/ }),

/***/ "./src/core/browser/bus/config.js":
/*!****************************************!*\
  !*** ./src/core/browser/bus/config.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =  false || 'core/browser/bus'

module.exports = {
  'core' :
  {
    // 'factories' :
    // {
    //   'core/bus' : {
    //     'busChannelFactory'       : 'core/channel/factory',
    //     'associativeArrayFactory' : 'data-structure/associative-array/factory'
    //   }
    // },
    'bootstrap' :
    {
      'bus' : 'core/bus/bootstrap'
    },
    'bus' :
    {
      'options'  : {},
      'channels' :
      {
        'domain-events' : {
          'observers' : {
            'logged' : { 'core/bus/log': true }
          }
        }
      }
    },
    'schema' :
    {
      'composer' :
      {
        'core/bus' : `${dirname}/schema/entity/bus`
      }
    },
    'locator' :
    {
      'core/bus/factory'   : `${dirname}/factory`,
      'core/bus/bootstrap' : `${dirname}/bootstrap`,
      'core/bus/log'       : `${dirname}/log`
    }
  }
}


/***/ }),

/***/ "./src/core/browser/bus/factory/index.js":
/*!***********************************************!*\
  !*** ./src/core/browser/bus/factory/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Bus = __webpack_require__(/*! .. */ "./src/core/browser/bus/index.js")

class BusFactory
{
  constructor({
    channelFactory,
    associativeArrayFactory
  })
  {
    this.channelFactory          = channelFactory
    this.associativeArrayFactory = associativeArrayFactory
  }

  createAssociativeArray()
  {
    return this.associativeArrayFactory.create()
  }

  create()
  {
    const bus = new Bus({
      channelFactory : this.channelFactory,
      channels       : this.createAssociativeArray()
    })

    return bus
  }
}

module.exports = BusFactory


/***/ }),

/***/ "./src/core/browser/bus/factory/locator.js":
/*!*************************************************!*\
  !*** ./src/core/browser/bus/factory/locator.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BusFactory = __webpack_require__(/*! . */ "./src/core/browser/bus/factory/index.js")

class BusFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new BusFactory({
      channelFactory          : this.locator.locate('core/channel/factory'),
      associativeArrayFactory : this.locator.locate('data-structure/associative-array/factory')
    })
  }
}

module.exports = BusFactoryLocator


/***/ }),

/***/ "./src/core/browser/bus/index.js":
/*!***************************************!*\
  !*** ./src/core/browser/bus/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Bus
{
  constructor({
    channelFactory,
    channels
  })
  {
    this.channelFactory  = channelFactory
    this.channels        = channels
  }

  addChannel(id)
  {
    this.channels.add({
      id,
      element : this.channelFactory.create(id)
    })
  }

  deleteChannel(id)
  {
    this.channels.remove(id)
  }

  getChannel(id)
  {
    return this.channels.get(id)
  }

  async emit({
    channelId,
    name,
    data
  })
  {
    return new Promise((resolve, reject) =>
    {
      this.getChannel(channelId)
        .emit({
          name,
          data
        })
        .then(() =>
        {
          resolve()
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }

  on({
    channelId,
    event,
    observer
  })
  {
    return this.getChannel(channelId)
      .on({
        event,
        observer
      })
  }

  once({
    channelId,
    event,
    observer
  })
  {
    this.getChannel(channelId)
      .once({
        event,
        observer
      })
  }

  onAllEvents({
    channelId,
    observer
  })
  {
    this.getChannel(channelId)
      .onAllEvents(observer)
  }

  removeListener({
    channelId,
    event,
    observer
  })
  {
    this.getChannel(channelId)
      .removeListener({
        event,
        observer
      })
  }

  removeAllListeners({
    channelId,
    event
  })
  {
    this.getChannel(channelId).removeAllListeners(event)
  }

  reset(channelId)
  {
    this.getChannel(channelId).reset()
  }

  get [Symbol.toStringTag]()
  {
    return 'Bus'
  }
}

module.exports = Bus


/***/ }),

/***/ "./src/core/browser/bus/log/index.js":
/*!*******************************************!*\
  !*** ./src/core/browser/bus/log/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {superhero/core/eventbus/observer}
 */
class LogObserver
{
  constructor(logConsole)
  {
    this.logConsole = logConsole
  }

  observe(data)
  {
    this.logConsole.log(data)
  }
}

module.exports = LogObserver


/***/ }),

/***/ "./src/core/browser/bus/log/locator.js":
/*!*********************************************!*\
  !*** ./src/core/browser/bus/log/locator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const LogObserver = __webpack_require__(/*! . */ "./src/core/browser/bus/log/index.js")

class LogObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    consoleFactory = this.locator.locate('core/console/factory'),
    logConsole     = consoleFactory.create()

    return new LogObserver(logConsole)
  }
}

module.exports = LogObserverLocator


/***/ }),

/***/ "./src/core/browser/bus/schema/entity/bus.js":
/*!***************************************************!*\
  !*** ./src/core/browser/bus/schema/entity/bus.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'channels' :
  {
    'type' : 'data-structure/multiple-associative-array'
  }
}


/***/ }),

/***/ "./src/core/browser/channel/config.js":
/*!********************************************!*\
  !*** ./src/core/browser/channel/config.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =  false || 'core/browser/channel'

module.exports = {
  'core' :
  {
    // 'factories' :
    // {
    //   'core/channel' : {
    //     'composer' : 'core/schema/composer'
    //   }
    // },
    'schema' :
    {
      'composer' :
      {
        'core/channel/event-meta' : `${dirname}/schema/dto/event-meta`,
        'core/channel/event'      : `${dirname}/schema/dto/event`,
        'core/channel'            : `${dirname}/schema/entity/channel`
      }
    },
    'locator' :
    {
      'core/channel/factory' : `${dirname}/factory`
    }
  }
}


/***/ }),

/***/ "./src/core/browser/channel/factory/index.js":
/*!***************************************************!*\
  !*** ./src/core/browser/channel/factory/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BusChannel = __webpack_require__(/*! .. */ "./src/core/browser/channel/index.js")

class BusChannelFactory
{
  constructor({
    composer,
    multipleAssociativeArrayFactory
  })
  {
    this.composer                        = composer
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory
  }

  createMultipleAssociativeArray()
  {
    return this.multipleAssociativeArrayFactory.create()
  }

  create(id)
  {
    return new BusChannel({
      id,
      observers : this.createMultipleAssociativeArray(),
      composer  : this.composer
    })
  }
}

module.exports = BusChannelFactory


/***/ }),

/***/ "./src/core/browser/channel/factory/locator.js":
/*!*****************************************************!*\
  !*** ./src/core/browser/channel/factory/locator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const BusChannelFactory = __webpack_require__(/*! . */ "./src/core/browser/channel/factory/index.js")

class BusChannelFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {BusChannelFactory}
   */
  locate()
  {
    const
    composer                        = this.locator.locate('core/schema/composer'),
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory')

    return new BusChannelFactory({
      composer,
      multipleAssociativeArrayFactory
    })
  }
}

module.exports = BusChannelFactoryLocator


/***/ }),

/***/ "./src/core/browser/channel/index.js":
/*!*******************************************!*\
  !*** ./src/core/browser/channel/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * BusChannel class
 * @class
 */
class BusChannel
{
  /**
   * Creates a basic BusChannel
   */
  constructor({
    id,
    observers,
    composer
  })
  {
    this.observers          = observers
    this.composer           = composer
    this.warnings           = []
    this[Symbol.for('id')]  = id
  }

  /**
   * Adds a observer to an event
   * @param {string} event - Event name
   * @param {function} observer - Observer function
   * @returns {function} - Returns its remove function
   */
  on({
    event,
    observer
  })
  {
    this.observers.add({
      id      : event,
      element : observer
    })

    return () =>
    {
      this.removeListener({
        event,
        observer
      })
    }
  }

  /**
   * Adds a observer to all events
   * @param {function} observer - Observer function
   * @returns {function} - Returns its remove function
   */
  onAll(observer)
  {
    return this.on({
      event : '*',
      observer
    })
  }

  /**
   * Removes the observer function for the specified event name
   * @param {string} event - Event name
   * @param {function} observer - Oserver function
   */
  removeListener({
    event,
    observer
  })
  {
    this.observers.removeElement({
      id      : event,
      element : observer
    })
  }

  /**
   * Removes all observers functions for the specified event name.
   * @param {string} event - Event name
   */
  removeAllListeners(event)
  {
    this.observers.remove(event)
  }

  /**
   * Checks if an event has observers
   * @param {string} event - Event name
   * @returns {boolean} - Flag indicating if the event has observers
   */
  hasobservers(event)
  {
    return this.observers.hasElements(event)
  }

  /**
   * Creates an event
   * @param {string} event - Event name
   * @param {Object} data - Event payload
   * @returns {Event} event
   */
  createEvent({
    name,
    data
  })
  {
    const
    timestamp = new Date().toISOString(),
    emitter   = this[Symbol.for('id')],
    meta      = this.composer.compose('core/channel/event-meta', {
      name,
      timestamp,
      emitter
    }),
    event     = this.composer.compose('core/channel/event', {
      meta,
      data
    })

    return event
  }

  /**
   * Publish an event
   * @param {string} event - Event name
   * @returns {boolean} - Flag indicating if the event has observers
   */
  async emit({
    name,
    data
  })
  {
    const
    event             = this.createEvent({ name, data }),
    globalobservers   = this.observers.get('*') || [],
    eventObservers    = this.observers.get(name) || [],
    observers         = globalobservers.concat(eventObservers)

    if(eventObservers.length === 0 && !this.warnings.includes(name))
    {
      this.warnings.push(event)
      console.log(`event: "${event}" does not have a defined observer`)
    }

    return new Promise((resolve, reject) =>
    {
      this.executeObservers(observers, event)
        .then(() =>
        {
          resolve()
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }

  listenerCount(event)
  {
    const observers = this.observers.get(event.meta.name) || []
    return observers.length
  }

  /**
   * Executes the observers of the specified event
   * @param {function} observer - observer
   * @param {Event} event - Event
   */
  async executeObservers(observers, event)
  {
    return new Promise((resolve, reject) =>
    {
      Promise.all(observers.map(this.executeObserver.bind(this, event)))
        .then(() =>
        {
          resolve()
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }

  /**
   * Executes the observer with the event
   * @param {function} observer - observer
   * @param {Event} event - Event
   */
  async executeObserver(event, observer)
  {
    return observer.call(this, event)
  }

  /**
   * Adds a listener to an event that only executes once
   * @param {string} event - Event name
   * @param {function} observer - Listener function
   */
  once({
    event,
    observer
  })
  {
    const remove = this.observers.on({
      event,
      observer : (...args) =>
      {
        remove()
        observer(this, args)
      }
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'BusChannel'
  }
}

module.exports = BusChannel


/***/ }),

/***/ "./src/core/browser/channel/schema/dto/event-meta.js":
/*!***********************************************************!*\
  !*** ./src/core/browser/channel/schema/dto/event-meta.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'name' :
  {
    'type'      : 'string',
    'not-empty' : true
  },
  'emitter' :
  {
    'type'      : 'string',
    'not-empty' : true
  },
  'timestamp' :
  {
    'type' : 'timestamp'
  }
}


/***/ }),

/***/ "./src/core/browser/channel/schema/dto/event.js":
/*!******************************************************!*\
  !*** ./src/core/browser/channel/schema/dto/event.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'meta' :
  {
    'type'      : 'schema',
    'schema'    : 'core/channel/event-meta',
    'not-empty' : true
  },
  'data' :
  {
    'type' : 'json'
  }
}


/***/ }),

/***/ "./src/core/browser/channel/schema/entity/channel.js":
/*!***********************************************************!*\
  !*** ./src/core/browser/channel/schema/entity/channel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'id' : {
    'type'      : 'string',
    'not-empty' : true
  },
  'observers' :
  {
    'type' : 'data-structure/multiple-associative-array'
  }
}


/***/ }),

/***/ "./src/core/browser/config-fetcher/index.js":
/*!**************************************************!*\
  !*** ./src/core/browser/config-fetcher/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const
ConfigFetcher               = __webpack_require__(/*! core/common/config-fetcher */ "./src/core/common/config-fetcher/index.js"),
ComponentNotResolvableError = __webpack_require__(/*! core/common/config-fetcher/error/component-not-resolvable */ "./src/core/common/config-fetcher/error/component-not-resolvable.js")

class BrowserConfigFetcher extends ConfigFetcher
{
  async fetchComponentConfig(component, path)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        const config = __webpack_require__("./src sync recursive ^\\.\\/.*\\/config$")(`./${path ? path : component}/config`)
        resolve(config)
      }
      catch(error)
      {
        reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
      }
    })
  }
}

module.exports = BrowserConfigFetcher


/***/ }),

/***/ "./src/core/browser/dom-ready/index.js":
/*!*********************************************!*\
  !*** ./src/core/browser/dom-ready/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isIE = __webpack_require__(/*! core/browser/is-ie */ "./src/core/browser/is-ie/index.js")

module.exports = function(callback)
{
  if(callback && typeof callback === 'function')
  {
    if(isIE())
    {
      document.attachEvent('onreadystatechange', function()
      {
        if(document.readyState === 'complete')
          return callback()
      })
    }
    else
    {
      document.addEventListener('DOMContentLoaded', function()
      {
        return callback()
      })
    }
  }
  else
  {
    console.error('The callback is not a function!')
  }
}


/***/ }),

/***/ "./src/core/browser/factory.js":
/*!*************************************!*\
  !*** ./src/core/browser/factory.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const
Core          = __webpack_require__(/*! core */ "./src/core/index.js"),
Locator       = __webpack_require__(/*! core/common/locator */ "./src/core/common/locator/index.js"),
Deepclone     = __webpack_require__(/*! core/common/deepclone */ "./src/core/common/deepclone/index.js"),
Deepfreeze    = __webpack_require__(/*! core/common/deepfreeze */ "./src/core/common/deepfreeze/index.js"),
Deepfind      = __webpack_require__(/*! core/common/deepfind */ "./src/core/common/deepfind/index.js"),
Deepmerge     = __webpack_require__(/*! core/common/deepmerge */ "./src/core/common/deepmerge/index.js"),
DeepAssign    = __webpack_require__(/*! core/common/deepassign */ "./src/core/common/deepassign/index.js"),
Configuration = __webpack_require__(/*! core/common/configuration */ "./src/core/common/configuration/index.js"),
ConfigFetcher = __webpack_require__(/*! core/browser/config-fetcher */ "./src/core/browser/config-fetcher/index.js"),
ServiceLoader = __webpack_require__(/*! core/browser/service-loader */ "./src/core/browser/service-loader/index.js")

class CoreFactory
{
  create()
  {
    const
    locator       = this.createLocator(),
    configFetcher = new ConfigFetcher(locator),
    serviceLoader = new ServiceLoader(locator),
    core          = new Core(locator, configFetcher, serviceLoader)

    core.add('core/bootstrap', 'core/common/bootstrap')
    core.add('core/console', 'core/common/console')
    core.add('core/schema', 'core/common/schema')
    core.add('data-structure', 'core/common/data-structure')
    core.add('core/schema/bootstrap', 'core/browser/schema/bootstrap')
    core.add('core/channel', 'core/browser/channel')
    core.add('core/bus', 'core/browser/bus')

    return core
  }

  createLocator()
  {
    const
    locator       = new Locator(),
    deepclone     = new Deepclone(),
    deepfreeze    = new Deepfreeze(),
    deepmerge     = new Deepmerge(),
    deepfind      = new Deepfind(),
    deepassign    = new DeepAssign(deepclone),
    configuration = new Configuration(deepclone, deepmerge, deepfind, deepfreeze)

    locator.set('core/deepclone', deepclone)
    locator.set('core/deepfreeze', deepfreeze)
    locator.set('core/deepmerge', deepmerge)
    locator.set('core/deepfind', deepfind)
    locator.set('core/deepassign', deepassign)
    locator.set('core/configuration', configuration)

    return locator
  }
}

module.exports = CoreFactory


/***/ }),

/***/ "./src/core/browser/is-ie/index.js":
/*!*****************************************!*\
  !*** ./src/core/browser/is-ie/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function()
{
  return !(!document.attachEvent || typeof document.attachEvent === 'undefined')
}


/***/ }),

/***/ "./src/core/browser/schema/bootstrap/config.js":
/*!*****************************************************!*\
  !*** ./src/core/browser/schema/bootstrap/config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =  false || 'core/browser/schema/bootstrap'

module.exports =
{
  'core' :
  {
    'bootstrap' :
    {
      'schema' : 'core/schema/bootstrap'
    },
    'locator' :
    {
      'core/schema/bootstrap' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/browser/schema/bootstrap/index.js":
/*!****************************************************!*\
  !*** ./src/core/browser/schema/bootstrap/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaNotResolvable = __webpack_require__(/*! core/common/schema/error/schema-not-resolvable */ "./src/core/common/schema/error/schema-not-resolvable.js")

class SchemaBootstrap
{
  constructor(locator, configuration)
  {
    this.locator        = locator
    this.configuration  = configuration
  }

  bootstrap()
  {
    const
    composer    = this.locator.locate('core/schema/composer'),
    schemas     = this.configuration.find('core.schema.composer'),
    filters     = this.configuration.find('core.schema.filter'),
    validators  = this.configuration.find('core.schema.validator')

    this.addSchemas(composer, schemas)
    this.addFilters(composer, filters)
    this.addValidators(composer, validators)
  }

  addSchemas(composer, schemas)
  {
    for(const schemaName in schemas || [])
    {
      try
      {
        const schema = __webpack_require__("./src sync recursive ^\\.\\/.*$")(`./${schemas[schemaName]}`)
        composer.addSchema(schemaName, schema)
      }
      catch(error)
      {
        throw new SchemaNotResolvable(`Could not resolve path for schema: "${schemaName}", path: "${schemas[schemaName]}"`)
      }
    }
  }

  addFilters(composer, filters)
  {
    for(const filterName in filters || [])
    {
      const filter = this.locator.locate(filters[filterName])
      composer.addFilter(filterName, filter)
    }
  }

  addValidators(composer, validators)
  {
    for(const validatorName in validators || [])
    {
      const validator = this.locator.locate(validators[validatorName])
      composer.addValidator(validatorName, validator)
    }
  }
}

module.exports = SchemaBootstrap


/***/ }),

/***/ "./src/core/browser/schema/bootstrap/locator.js":
/*!******************************************************!*\
  !*** ./src/core/browser/schema/bootstrap/locator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaBootstrap = __webpack_require__(/*! . */ "./src/core/browser/schema/bootstrap/index.js")

class SchemaBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')

    return new SchemaBootstrap(this.locator, configuration)
  }
}

module.exports = SchemaBootstrapLocator


/***/ }),

/***/ "./src/core/browser/service-loader/index.js":
/*!**************************************************!*\
  !*** ./src/core/browser/service-loader/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const
ServiceUnmetDependencyError = __webpack_require__(/*! core/common/service-loader/error/service-unmet-dependency */ "./src/core/common/service-loader/error/service-unmet-dependency.js"),
ServiceLocatorNotFoundError = __webpack_require__(/*! core/common/service-loader/error/service-locator-not-found */ "./src/core/common/service-loader/error/service-locator-not-found.js"),
ServiceLoader               = __webpack_require__(/*! core/common/service-loader */ "./src/core/common/service-loader/index.js")

class BrowserServiceLoader extends ServiceLoader
{
  async loadService(name)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        const
        configuration = this.locator.locate('core/configuration'),
        path          = configuration.find('core.locator')[name],
        Locator       = __webpack_require__("./src sync recursive ^\\.\\/.*\\/locator$")(`./${path}/locator`),
        locator       = new Locator(this.locator)

        try
        {
          const service = locator.locate()
          this.locator.set(name, service)
          resolve()
        }
        catch(error)
        {
          switch(error.code)
          {
          case 'E_SERVICE_UNDEFINED':
          {
            reject(new ServiceUnmetDependencyError(`An unmet dependency was found for service "${name}", error: ${error.message}`))
            break
          }
          default:
            reject(error)
          }
        }
      }
      catch(error)
      {
        reject(new ServiceLocatorNotFoundError(`locator could not be found for ${name}`))
      }
      // const
      // configuration = this.locator.locate('core/configuration'),
      // src           = `webpacked/${configuration.find('core.locator')[name]}/locator.js`,
      // response      = await fetch(src)

      // if(response.ok)
      // {
      //   const script = document.createElement('script')

      //   script.type = 'text/javascript'
      //   script.src  = src
      //   script.onload = function(locator)
      //   {
      //     try
      //     {
      //       const service = locator.locate()
      //       this.locator.set(name, service)
      //       resolve()
      //     }
      //     catch(error)
      //     {
      //       switch(error.code)
      //       {
      //       case 'E_SERVICE_UNDEFINED':
      //       {
      //         reject(new ServiceUnmetDependencyError(`An unmet dependency was found for service "${name}", error: ${error.message}`))
      //         break
      //       }
      //       default:
      //         reject(error)
      //       }
      //     }
      //     resolve()
      //   }
      //   document.body.appendChild(script)
      // }
      // else
      // {
      //   reject(new ServiceLocatorNotFoundError(`locator could not be found for ${name}`))
      // }
    })
  }
}

module.exports = BrowserServiceLoader


/***/ }),

/***/ "./src/core/common/bootstrap/config.js":
/*!*********************************************!*\
  !*** ./src/core/common/bootstrap/config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =  false || 'core/common/bootstrap'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/bootstrap' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/bootstrap/index.js":
/*!********************************************!*\
  !*** ./src/core/common/bootstrap/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Bootstrap
{
  constructor(locator)
  {
    this.locator = locator
  }

  async bootstrap()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    bootstrapMap  = configuration.find('core.bootstrap')

    for(const key in bootstrapMap)
    {
      const bootstrap = this.locator.locate(bootstrapMap[key])
      await bootstrap.bootstrap()
    }
  }
}

module.exports = Bootstrap


/***/ }),

/***/ "./src/core/common/bootstrap/locator.js":
/*!**********************************************!*\
  !*** ./src/core/common/bootstrap/locator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Bootstrap = __webpack_require__(/*! . */ "./src/core/common/bootstrap/index.js")

class BootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new Bootstrap(this.locator)
  }
}

module.exports = BootstrapLocator


/***/ }),

/***/ "./src/core/common/config-fetcher/error/component-not-resolvable.js":
/*!**************************************************************************!*\
  !*** ./src/core/common/config-fetcher/error/component-not-resolvable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ComponentNotResolvableError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_COMPONENT_NOT_RESOLVABLE'
  }
}

module.exports = ComponentNotResolvableError


/***/ }),

/***/ "./src/core/common/config-fetcher/index.js":
/*!*************************************************!*\
  !*** ./src/core/common/config-fetcher/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ConfigFetcher
{
  constructor(locator)
  {
    this.locator = locator
  }

  async fetchComponentConfig()
  {
    throw new Error('Method not implemented')
  }
}

module.exports = ConfigFetcher


/***/ }),

/***/ "./src/core/common/configuration/config.js":
/*!*************************************************!*\
  !*** ./src/core/common/configuration/config.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/configuration'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/configuration' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/configuration/index.js":
/*!************************************************!*\
  !*** ./src/core/common/configuration/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Configuration
{
  constructor(deepclone, deepmerge, deepfind, deepfreeze)
  {
    this.deepclone  = deepclone
    this.deepmerge  = deepmerge
    this.deepfind   = deepfind
    this.deepfreeze = deepfreeze
    this.config     = {}
  }

  extend(config)
  {
    const clone = this.deepclone.clone(config)
    this.config = this.deepmerge.merge(this.config, clone)
  }

  find(path)
  {
    return this.deepfind.find(path, this.config)
  }

  freeze()
  {
    this.config = this.deepfreeze.freeze(this.config)
  }
}

module.exports = Configuration


/***/ }),

/***/ "./src/core/common/configuration/locator.js":
/*!**************************************************!*\
  !*** ./src/core/common/configuration/locator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Configuration = __webpack_require__(/*! . */ "./src/core/common/configuration/index.js")

class ConfigurationLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    deepclone     = this.locator.locate('core/deepclone'),
    deepmerge     = this.locator.locate('core/deepmerge'),
    deepfind      = this.locator.locate('core/deepfind'),
    configuration = new Configuration(deepclone, deepmerge, deepfind)

    return configuration
  }
}

module.exports = ConfigurationLocator


/***/ }),

/***/ "./src/core/common/console/config.js":
/*!*******************************************!*\
  !*** ./src/core/common/console/config.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/console'

module.exports = {
  'core' :
  {
    // 'bootstrap' :
    // {
    //   'console' : 'core/console/bootstrap'
    // },
    'console' :
    {
      'default' :
      {
        'maxArrayLength'  : 10,
        'maxObjectDepth'  : 10,
        'maxStringLength' : 300,
        'date'            : true,
        'dateFormat'      : 'yyyy-mm-dd HH:MM:ss',
        'debug'           : true,
        'index'           : false,
        'prefix'          : false,
        'inspect'         : true,
        'separator'       : '\t',
        'colors'          : true,
        'showHidden'      : false,
        'styles'          : // white, grey, black, blue, cyan, green, magenta, red, yellow, bold, italic, underline, inverse
        {
          'special'   : 'cyan',
          'number'    : 'yellow',
          'bigint'    : 'yellow',
          'boolean'   : 'yellow',
          'undefined' : 'grey',
          'null'      : 'bold',
          'string'    : 'green',
          'symbol'    : 'green',
          'date'      : 'magenta',
          'regexp'    : 'red'
        }
      }
    },
    'locator' :
    {
      'core/console/factory' : `${dirname}/factory`
      // 'core/console/bootstrap' : `${dirname}/bootstrap`
    }
  }
}


/***/ }),

/***/ "./src/core/common/console/factory/index.js":
/*!**************************************************!*\
  !*** ./src/core/common/console/factory/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Console = __webpack_require__(/*! .. */ "./src/core/common/console/index.js")

class ConsoleFactory
{
  constructor({
    util,
    dateformat,
    console,
    defaults,
    availableColors
  })
  {
    this.util             = util
    this.dateformat       = dateformat
    this.console          = console
    this.defaults         = defaults
    this.availableColors  = availableColors
  }

  create(options = {})
  {
    return new Console({
      util            : this.util,
      dateformat      : this.dateformat,
      console         : this.console,
      availableColors : this.availableColors,
      config          : { ...this.defaults, ...options }
    })
  }
}

module.exports = ConsoleFactory


/***/ }),

/***/ "./src/core/common/console/factory/locator.js":
/*!****************************************************!*\
  !*** ./src/core/common/console/factory/locator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ConsoleFactory = __webpack_require__(/*! . */ "./src/core/common/console/factory/index.js")

class ConsoleFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    util            = __webpack_require__(/*! util */ "./node_modules/util/util.js"),
    dateformat      = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js"),
    configuration   = this.locator.locate('core/configuration').find('core.console'),
    defaults        = configuration.default,
    availableColors = configuration.colors,
    jsConsole       = console

    return new ConsoleFactory({
      util,
      dateformat,
      defaults,
      availableColors,
      console : jsConsole
    })
  }
}

module.exports = ConsoleFactoryLocator


/***/ }),

/***/ "./src/core/common/console/index.js":
/*!******************************************!*\
  !*** ./src/core/common/console/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Console
{
  constructor({
    util,
    dateformat,
    config,
    console
  })
  {
    this.sn         = 0
    this.util       = util
    this.dateformat = dateformat
    this.config     = config
    this.console    = console

    this.util.inspect.styles = { ...this.config.styles }
  }

  getInspectOptions()
  {
    const options =
    {
      depth          : this.config.maxObjectDepth,
      showHidden     : this.config.showHidden,
      colors         : this.config.colors,
      maxArrayLength : this.config.maxArrayLength
    }

    return options
  }

  escape(s)
  {
    let escaped = s
    if(this.config.maxStringLength && s.length > this.config.maxStringLength)
    {
      const segment = Math.floor(this.config.maxStringLength / 2)

      escaped = [ s.substr(0, segment).trim(),
        s.substr(-segment).trim()
      ].join('...')
    }

    return escaped
  }

  buildOutput(args)
  {
    let output = []

    if(this.config.date)
      output.push(this.dateformat(new Date(), this.config.dateFormat))

    if(this.config.prefix)
      output.push(this.config.prefix)

    if(this.config.index)
      output.push(this.sn)

    for(const arg of args)
    {
      if(typeof arg === 'object' && this.config.inspect)
        output.push(this.util.inspect(arg, this.getInspectOptions()))
      else if(typeof x === 'string')
        output.push(this.escape(arg)) // output.push(this.colorize(this.escape(arg)))
      else
        output.push(arg)
    }

    return output.join(this.config.separator)
  }

  output(args, cb)
  {
    this.sn = this.sn < Number.MAX_SAFE_INTEGER ? this.sn + 1 : 0
    if(this.config.debug)
    {
      const output = this.buildOutput(args)
      cb(output)
    }
  }

  log(...args)
  {
    this.output(args, this.console.log)
  }

  info(...args)
  {
    this.output.call(args, this.console.log)
  }

  error(...args)
  {
    this.output.call(args, this.console.error)
  }

  trace(...args)
  {
    this.output.call(args, this.console.trace)
  }

  table(...args)
  {
    this.output.call(args, this.console.table)
  }

  startTimer(label)
  {
    this.console.time(label)
  }

  getTimeLog(label)
  {
    this.console.timeLog(label)
  }

  finishTimer(label)
  {
    this.console.timeEnd(label)
  }

  group(collapsed)
  {
    if(collapsed)
      this.console.groupCollapsed()
    else
      this.console.group()
  }

  clear()
  {
    this.console.clear()
  }

  groupEnd()
  {
    this.console.groupEnd()
  }

  async measureTime(label, cb, ...args)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        this.trace(args)
        this.startTimer(label)

        const result = await cb(args)

        this.finishTimer(label)
        resolve(result)
      }
      catch(error)
      {
        this.finishTimer(label)
        reject(error)
      }
    })
  }
}

module.exports = Console


/***/ }),

/***/ "./src/core/common/data-structure/associative-array/factory/index.js":
/*!***************************************************************************!*\
  !*** ./src/core/common/data-structure/associative-array/factory/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const AssociativeArray = __webpack_require__(/*! .. */ "./src/core/common/data-structure/associative-array/index.js")

class AssociativeArrayFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = {})
  {
    const args = this.composer.compose('data-structure/associative-array', { items })
    return new AssociativeArray({ ...args })
  }
}

module.exports = AssociativeArrayFactory


/***/ }),

/***/ "./src/core/common/data-structure/associative-array/factory/locator.js":
/*!*****************************************************************************!*\
  !*** ./src/core/common/data-structure/associative-array/factory/locator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const AssociativeArrayFactory = __webpack_require__(/*! . */ "./src/core/common/data-structure/associative-array/factory/index.js")


class AssociativeArrayFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {AssociativeArrayFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')

    return new AssociativeArrayFactory({
      composer
    })
  }
}

module.exports = AssociativeArrayFactoryLocator


/***/ }),

/***/ "./src/core/common/data-structure/associative-array/index.js":
/*!*******************************************************************!*\
  !*** ./src/core/common/data-structure/associative-array/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class AssociativeArray
{
  constructor({ items })
  {
    this.items                  = items
    this[Symbol.for('schema')]  = 'data-structure/associative-array'
  }

  get(id)
  {
    return this.items[id]
  }

  add({
    id,
    element
  })
  {
    this.items[id] = element
  }

  remove(id)
  {
    delete this.items[id]
  }

  reset()
  {
    this.items = {}
  }

  toJSON()
  {
    return this.items
  }

  toArray()
  {
    const
    keys   = [],
    values = []

    for(let key in this.items)
    {
      keys.push(key)
      values.push(this.get(key))
    }

    return {
      keys,
      values
    }
  }

  count()
  {
    return Object.keys(this.items).length
  }

  [Symbol.iterator]()
  {
    const  keys = Object.keys(this.items)

    let  index = 0
    return {
      next : () =>
      {
        if(index < keys.length)
        {
          const key = keys[index++]
          return {
            value : this.items[key],
            done  : false
          }
        }
        else
        {
          return { done: true }
        }
      }
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'AssociativeArray'
  }
}

module.exports = AssociativeArray


/***/ }),

/***/ "./src/core/common/data-structure/associative-array/locator.js":
/*!*********************************************************************!*\
  !*** ./src/core/common/data-structure/associative-array/locator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const AssociativeArray  = __webpack_require__(/*! . */ "./src/core/common/data-structure/associative-array/index.js")

class AssociativeArrayLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {AssociativeArrayLocator}
   */
  locate()
  {
    return AssociativeArray
  }
}

module.exports = AssociativeArrayLocator


/***/ }),

/***/ "./src/core/common/data-structure/config.js":
/*!**************************************************!*\
  !*** ./src/core/common/data-structure/config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/data-structure'

module.exports = {
  'core' :
  {
    // 'factories' :
    // {
    //   'core/data-structure/multiple-associative-array' : {
    //     'composer' : 'core/schema/composer'
    //   },
    //   'core/data-structure/associative-array' : {
    //     'composer' : 'core/schema/composer'
    //   }
    // },
    'schema' :
    {
      'composer' :
      {
        'data-structure/associative-array'          : `${dirname}/schema/value-object/associative-array`,
        'data-structure/multiple-associative-array' : `${dirname}/schema/value-object/multiple-associative-array`,
        'data-structure/queue'                      : `${dirname}/schema/value-object/queue`,
        'data-structure/stack'                      : `${dirname}/schema/value-object/stack`,
        'data-structure/edge'                       : `${dirname}/schema/value-object/edge`,
        'data-structure/graph'                      : `${dirname}/schema/value-object/graph`,
        'data-structure/node'                       : `${dirname}/schema/value-object/node`,
        'data-structure/tree'                       : `${dirname}/schema/value-object/tree`
      },
      'validator' :
      {
        'collection'                                : 'core/schema/validator/collection',
        'custom-json'                               : 'core/schema/validator/custom-json',
        'data-structure/associative-array'          : 'core/schema/validator/data-structure/associative-array',
        'data-structure/multiple-associative-array' : 'core/schema/validator/data-structure/multiple-associative-array'
      }
    },
    'locator' :
    {
      'core/schema/validator/collection'                                : `${dirname}/schema/validator/collection`,
      'core/schema/validator/custom-json'                               : `${dirname}/schema/validator/custom-json`,
      'core/schema/validator/data-structure/associative-array'          : `${dirname}/schema/validator/associative-array`,
      'core/schema/validator/data-structure/multiple-associative-array' : `${dirname}/schema/validator/multiple-associative-array`,
      'data-structure/associative-array/factory'                        : `${dirname}/associative-array/factory`,
      'data-structure/multiple-associative-array/factory'               : `${dirname}/multiple-associative-array/factory`,
      'data-structure/queue/factory'                                    : `${dirname}/queue/factory`,
      'data-structure/stack/factory'                                    : `${dirname}/stack/factory`,
      'data-structure/graph/factory'                                    : `${dirname}/graph/factory`,
      'data-structure/tree/factory'                                     : `${dirname}/tree/factory`
    }
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/graph/error/node-not-exists.js":
/*!***********************************************************************!*\
  !*** ./src/core/common/data-structure/graph/error/node-not-exists.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class NodeNotExists extends Error
{
  constructor(...args)
  {
    super(...args)

    this.code = 'E_NODE_NOT_EXISTS'
  }
}
module.exports = NodeNotExists


/***/ }),

/***/ "./src/core/common/data-structure/graph/factory/index.js":
/*!***************************************************************!*\
  !*** ./src/core/common/data-structure/graph/factory/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Graph = __webpack_require__(/*! .. */ "./src/core/common/data-structure/graph/index.js")

class GraphFactory
{
  constructor({
    composer,
    associativeArrayFactory,
    multipleAssociativeArrayFactory,
    queueFactory
  })
  {
    this.composer                         = composer
    this.associativeArrayFactory          = associativeArrayFactory
    this.multipleAssociativeArrayFactory  = multipleAssociativeArrayFactory
    this.queueFactory                     = queueFactory

    this[Symbol.for('schema')]            = 'data-structure/graph'
  }

  createEdges({ edges })
  {
    const { items } = edges
    return this.multipleAssociativeArrayFactory.create(items)
  }

  createNodes({ nodes })
  {
    const { items } = nodes
    return this.associativeArrayFactory.create(items)
  }

  createQueue()
  {
    return this.queueFactory.create()
  }

  /**
   * @returns {Graph}
   */
  create(graph)
  {
    const composedGraph = this.composer.compose(this[Symbol.for('schema')], graph)

    return new Graph({
      ...composedGraph,
      composer : this.composer,
      edges    : this.createEdges(composedGraph),
      nodes    : this.createNodes(composedGraph),
      queue    : this.createQueue()
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'GraphFactory'
  }
}

module.exports = GraphFactory


/***/ }),

/***/ "./src/core/common/data-structure/graph/factory/locator.js":
/*!*****************************************************************!*\
  !*** ./src/core/common/data-structure/graph/factory/locator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const GraphFactory = __webpack_require__(/*! . */ "./src/core/common/data-structure/graph/factory/index.js")

class GraphLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Graph}
   */
  locate()
  {
    const
    associativeArrayFactory         = this.locator.locate('data-structure/associative-array/factory'),
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory'),
    queueFactory                    = this.locator.locate('data-structure/queue/factory'),
    composer                        = this.locator.locate('core/schema/composer')


    return new GraphFactory({
      composer,
      associativeArrayFactory,
      multipleAssociativeArrayFactory,
      queueFactory
    })
  }
}

module.exports = GraphLocator


/***/ }),

/***/ "./src/core/common/data-structure/graph/index.js":
/*!*******************************************************!*\
  !*** ./src/core/common/data-structure/graph/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NodeNotExist = __webpack_require__(/*! ./error/node-not-exists */ "./src/core/common/data-structure/graph/error/node-not-exists.js")
class Graph
{
  constructor({
    composer,
    edges,
    nodes,
    queue,
    isDirected
  })
  {
    this.composer   = composer
    this.edges      = edges
    this.nodes      = nodes
    this.queue      = queue
    this.isDirected = isDirected
  }

  totalNodes()
  {
    return this.nodes.count()
  }

  printGraph()
  {
    const edges = this.edges.toJSON()

    for(let node in edges)
    {
      let line = `${node} ->`
      for(let edge of edges[node])
        line += ` ${edge.target} (${JSON.stringify(edge.payload)})`

      console.log(line)
    }
  }

  addNode(node)
  {
    this.nodes.add({
      id      : node.id,
      element : this.composer.compose('data-structure/node', node)
    })
  }

  addEdge({
    source,
    target,
    payload
  })
  {
    if(!this.nodes.get(source))
      throw new NodeNotExist('Source node does not exists')
    else if(!this.nodes.get(target))
      throw new NodeNotExist('Target node does not exists')

    const sourceEdge = this.composer.compose('data-structure/edge', {
      source,
      target,
      payload
    })

    this.edges.add({
      id      : source,
      element : sourceEdge
    })

    if(!this.isDirected)
    {
      const targetEdge = this.composer.compose('data-structure/edge', {
        source : target,
        target : source,
        payload
      })

      this.edges.add({
        id      : target,
        element : targetEdge
      })
    }
  }

  bfs(startNodeId)
  {
    const
    visited = { },
    path    = []

    this.queue.reset()

    if(!this.nodes.get(startNodeId))
      throw new NodeNotExist('Start node does not exists')

    visited[startNodeId] = true
    this.queue.enqueue(startNodeId)

    while(!this.queue.isEmpty())
    {
      const sourceNodeId  = this.queue.dequeue()

      path.push(sourceNodeId)

      const adjacencyList = this.edges.get(sourceNodeId)
      if(adjacencyList)
      {
        for(let edge of adjacencyList)
        {
          const targetNodeId = edge.target

          if(!visited[targetNodeId])
            this.queue.enqueue(targetNodeId)
        }
      }
    }
    return path
  }

  dfs(startNodeId)
  {
    const
    visited = { },
    path    = []

    if(!this.nodes.get(startNodeId))
      throw new NodeNotExist('Start node does not exists')

    this.recursiveDFS(startNodeId, visited, path)

    return path
  }

  recursiveDFS(nodeId, visited, path)
  {
    visited[nodeId] = true

    path.push(nodeId)

    const adjacencyList = this.edges.get(nodeId)

    if(adjacencyList)
    {
      for(let edge of adjacencyList)
      {
        const targetNodeId = edge.target
        if(!visited[targetNodeId])
          this.recursiveDFS(targetNodeId, visited, path)
      }
    }
  }

  reduceEdgeArrayToLinks(acc, nodeEdges, index)
  {
    const
    source          = Object.keys(this.edges)[index],
    edgesWithSource = nodeEdges.map((nodeEdge) =>
    {
      if(nodeEdge.source)
        return { source, ...nodeEdge }
      else
        return nodeEdge
    })

    return acc.concat(edgesWithSource)
  }

  edgesToLinks()
  {
    const
    edgesArray = this.edges.toArray().values,
    links      = edgesArray.reduce(this.reduceEdgeArrayToLinks.bind(this), [])

    return links
  }

  serialize()
  {
    const
    nodes = this.nodes.toArray().values,
    links = this.edgesToLinks()

    return {
      nodes,
      links
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'Graph'
  }
}

module.exports = Graph


/***/ }),

/***/ "./src/core/common/data-structure/graph/locator.js":
/*!*********************************************************!*\
  !*** ./src/core/common/data-structure/graph/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Graph = __webpack_require__(/*! . */ "./src/core/common/data-structure/graph/index.js")

class GraphLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return Graph
  }
}

module.exports = GraphLocator


/***/ }),

/***/ "./src/core/common/data-structure/multiple-associative-array/factory/index.js":
/*!************************************************************************************!*\
  !*** ./src/core/common/data-structure/multiple-associative-array/factory/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MultipleAssociativeArray = __webpack_require__(/*! .. */ "./src/core/common/data-structure/multiple-associative-array/index.js")

class MultipleAssociativeArrayFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = {})
  {
    const args = this.composer.compose('data-structure/multiple-associative-array', { items })
    return new MultipleAssociativeArray({ ...args })
  }
}

module.exports = MultipleAssociativeArrayFactory


/***/ }),

/***/ "./src/core/common/data-structure/multiple-associative-array/factory/locator.js":
/*!**************************************************************************************!*\
  !*** ./src/core/common/data-structure/multiple-associative-array/factory/locator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MultipleAssociativeArrayFactory = __webpack_require__(/*! . */ "./src/core/common/data-structure/multiple-associative-array/factory/index.js")

class MultipleAssociativeArrayFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {MultipleAssociativeArrayFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')

    return new MultipleAssociativeArrayFactory({
      composer
    })
  }
}

module.exports = MultipleAssociativeArrayFactoryLocator


/***/ }),

/***/ "./src/core/common/data-structure/multiple-associative-array/index.js":
/*!****************************************************************************!*\
  !*** ./src/core/common/data-structure/multiple-associative-array/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const AssociativeArray = __webpack_require__(/*! ../associative-array */ "./src/core/common/data-structure/associative-array/index.js")

class MultipleAssociativeArray extends AssociativeArray
{
  constructor({ items })
  {
    super({ items })
    this[Symbol.for('schema')]  = 'data-structure/multiple-associative-array'
  }
  add({
    id,
    element
  })
  {
    if(super.get(id))
    {
      const elements = super.get(id)
      elements.push(element)

      super.add({
        id,
        element : elements
      })
    }
    else
    {
      super.add({
        id,
        element : [element]
      })
    }
  }

  hasElements(id)
  {
    return Array.isArray(super.get(id)) && super.get(id).length !== 0
  }

  getElementIndex({
    id,
    element
  })
  {
    const hasElements = this.hasElements(id)

    if(hasElements)
      return super.get(id).indexOf(element)

    return -1
  }

  removeElement({
    id,
    element
  })
  {
    const index = this.getElementIndex({
      id,
      element
    })

    if(index > -1)
    {
      const elements = super.get(id)

      elements.splice(index, 1)

      super.add({
        id,
        element : elements
      })
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'MultipleAssociativeArray'
  }
}

module.exports = MultipleAssociativeArray


/***/ }),

/***/ "./src/core/common/data-structure/multiple-associative-array/locator.js":
/*!******************************************************************************!*\
  !*** ./src/core/common/data-structure/multiple-associative-array/locator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MultipleAssociativeArray  = __webpack_require__(/*! . */ "./src/core/common/data-structure/multiple-associative-array/index.js")

class MultipleAssociativeArrayLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {MultipleAssociativeArrayLocator}
   */
  locate()
  {
    return MultipleAssociativeArray
  }
}

module.exports = MultipleAssociativeArrayLocator


/***/ }),

/***/ "./src/core/common/data-structure/object/config.js":
/*!*********************************************************!*\
  !*** ./src/core/common/data-structure/object/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/object' : 'superhero/core/object'
    }
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/object/index.js":
/*!********************************************************!*\
  !*** ./src/core/common/data-structure/object/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class CoreObject
{
  /**
   * @example { FooBar:'FooBar' } => { foobar:'FooBar' }
   * @param {object} o input to be manipulated
   * @returns {object}
   */
  composeLowerCaseKeyedObject(o)
  {
    const
    object      = o || {},
    objectKeys  = Object.keys(object),
    composed    = objectKeys.reduce((c, k) =>
    {
      c[k.toLowerCase()] = object[k]
      return c
    }, {})

    return composed
  }

  /**
   * Creates a copy of an object excluding some keys.
   * References are kept, so modifing Objects or arrays on the resulting object will modify the source one
   * To avoid this behaivour clone the input before using or clone the output after
   * @param {object} o source object to create a copy
   * @param {...string} keys Keys to remove
   * @returns Copy of object without the specified keys
   * @author Lleonard Subirana (arsu.leo@gmail.com)
   */
  composeObjectWithoutKeys(o, ...keys)
  {
    const
    object = o || {},
    result = { ...object }

    for(const key of keys)
      delete result[key]

    return result
  }
}

module.exports = CoreObject


/***/ }),

/***/ "./src/core/common/data-structure/object/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/common/data-structure/object/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CoreObject = __webpack_require__(/*! . */ "./src/core/common/data-structure/object/index.js")

class CoreObjectLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return CoreObject
  }
}

module.exports = CoreObjectLocator


/***/ }),

/***/ "./src/core/common/data-structure/queue/factory/index.js":
/*!***************************************************************!*\
  !*** ./src/core/common/data-structure/queue/factory/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Queue = __webpack_require__(/*! .. */ "./src/core/common/data-structure/queue/index.js")

class QueueFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = [])
  {
    const args = this.composer.compose('data-structure/queue', { items })
    return new Queue(args)
  }
}

module.exports = QueueFactory


/***/ }),

/***/ "./src/core/common/data-structure/queue/factory/locator.js":
/*!*****************************************************************!*\
  !*** ./src/core/common/data-structure/queue/factory/locator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const QueueFactory  = __webpack_require__(/*! . */ "./src/core/common/data-structure/queue/factory/index.js")

class QueueFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {QueueFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new QueueFactory({
      composer
    })
  }
}

module.exports = QueueFactoryLocator


/***/ }),

/***/ "./src/core/common/data-structure/queue/index.js":
/*!*******************************************************!*\
  !*** ./src/core/common/data-structure/queue/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Queue
{
  constructor({
    items
  })
  {
    this.items                  = items
    this[Symbol.for('schema')]  = 'data-structure/queue'
  }

  enqueue(element)
  {
    this.items.push(element)
  }

  dequeue()
  {
    if(!this.isEmpty())
      return this.items.shift()

    return undefined
  }

  front()
  {
    if(!this.isEmpty())
      return this.items[0]

    return undefined
  }

  isEmpty()
  {
    return this.items.length === 0
  }

  reset()
  {
    this.items = []
  }

  get [Symbol.toStringTag]()
  {
    return 'Queue'
  }
}

module.exports = Queue


/***/ }),

/***/ "./src/core/common/data-structure/queue/locator.js":
/*!*********************************************************!*\
  !*** ./src/core/common/data-structure/queue/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Queue = __webpack_require__(/*! . */ "./src/core/common/data-structure/queue/index.js")


class QueueLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Queue}
   */
  locate()
  {
    return Queue
  }
}

module.exports = QueueLocator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js":
/*!**************************************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @memberof Domain
 * @extends {Error}
 */
class InvalidAssociativeArrayError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'E_INVALID_ASSOCIATIVE_ARRAY'
  }
}

module.exports = InvalidAssociativeArrayError


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/associative-array/index.js":
/*!************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/associative-array/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidAssociativeArray = __webpack_require__(/*! ./error/invalid-associative-array */ "./src/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js")
/**
 * Validates Multiple Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */
class AssociativeArrayValidator
{
  constructor(locator)
  {
    this.locator = locator
  }

  valid(options, data)
  {
    options.collection
      ? this.validCollection(options, data)
      : this.validSingle(options, data)
  }

  validCollection(options, data)
  {
    if(!Array.isArray(data))
      throw new InvalidAssociativeArray(`Invalid type: "${typeof data}", array expected`)

    for(const item of data)
      this.validSingle(options, item)
  }

  validArrayProperty(data, options)
  {
    const
    customJSONValidator = this.locator.locate(`core/schema/validator/custom-json`),
    customJSONOptions   = {
      'custom-json' : options['associative-array']
    }

    customJSONValidator.valid(customJSONOptions, data)
  }

  validSingle(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidAssociativeArray(`Invalid type: "${typeof data}", object expected`)

    if(typeof data['items'] !== 'object')
      throw new InvalidAssociativeArray(`Invalid items property: "${typeof data}", object expected`)

    if(options['associative-array'])
      this.validArrayProperty(data['items'], options)
  }
}

module.exports = AssociativeArrayValidator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/associative-array/locator.js":
/*!**************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/associative-array/locator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const AssociativeArrayValidator = __webpack_require__(/*! . */ "./src/core/common/data-structure/schema/validator/associative-array/index.js")

class AssociativeArrayValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {AssociativeArrayValidator}
   */
  locate()
  {
    const locator = this.locator
    return new AssociativeArrayValidator(locator)
  }
}

module.exports = AssociativeArrayValidatorLocator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/collection/error/invalid-collection.js":
/*!************************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/collection/error/invalid-collection.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @memberof Domain
 * @extends {Error}
 */
class InvalidCollectionError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'E_INVALID_COLLECTION'
  }
}

module.exports = InvalidCollectionError


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/collection/index.js":
/*!*****************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/collection/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidArray = __webpack_require__(/*! ./error/invalid-collection */ "./src/core/common/data-structure/schema/validator/collection/error/invalid-collection.js")
/**
 * Validates Collection
 * @memberof Core
 * @implements {superhero/core/schema/validator}
 */
class CollectionValidator
{
  constructor(locator)
  {
    this.locator = locator
  }

  valid(options, data)
  {
    options.collection
      ? this.validCollection(options, data)
      : this.validSingle(options, data)
  }

  validCollection(options, data)
  {
    if(!Array.isArray(data))
      throw new InvalidArray(`Invalid type: "${typeof data}", array expected`)

    for(const item of data)
      this.validSingle(options, item)
  }

  validCollectionElements(data, options)
  {
    const
    type              = options['collection-type'],
    validator         = this.locator.locate(`core/schema/validator/${type}`),
    collectionOptions = options['collection-options'] || {}

    for(const element of data)
      validator.valid(collectionOptions, element)
  }

  validSingle(options, data)
  {
    if(!Array.isArray(data))
      throw new InvalidArray(`Invalid type: "${typeof data}", array expected`)
    else if(options['collection-type'])
      this.validCollectionElements(data, options)
  }
}

module.exports = CollectionValidator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/collection/locator.js":
/*!*******************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/collection/locator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CollectionValidator = __webpack_require__(/*! . */ "./src/core/common/data-structure/schema/validator/collection/index.js")

class CollectionValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CollectionValidator}
   */
  locate()
  {
    const locator = this.locator
    return new CollectionValidator(locator)
  }
}

module.exports = CollectionValidatorLocator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js":
/*!*******************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @memberof Domain
 * @extends {Error}
 */
class InvalidJSONError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'E_INVALID_JSON'
  }
}

module.exports = InvalidJSONError


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/custom-json/index.js":
/*!******************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/custom-json/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidJSON = __webpack_require__(/*! ./error/invalid-json */ "./src/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js")
/**
 * Validates Multiple Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */
class CustomJSONValidator
{
  constructor(locator)
  {
    this.locator = locator
  }

  valid(options, data)
  {
    options.collection
      ? this.validCollection(options, data)
      : this.validSingle(options, data)
  }

  validCollection(options, data)
  {
    if(!Array.isArray(data))
      throw new InvalidJSON(`Invalid type: "${typeof data}", array expected`)

    for(const item of data)
      this.validSingle(options, item)
  }

  validProperties(data, options)
  {
    const
    type              = options['custom-json'].type,
    validator         = this.locator.locate(`core/schema/validator/${type}`),
    validatorOptions  = options['custom-json'].options || {}

    for(const key in data)
    {
      try
      {
        validator.valid(validatorOptions, data[key])
      }
      catch(error)
      {
        throw new InvalidJSON(`Invalid property "${key}": got ${typeof data[key]}, ${type} expected`)
      }
    }
  }

  validSingle(options, data)
  {
    const jsonValidator = this.locator.locate(`core/schema/validator/json`)

    jsonValidator.valid(options, data)

    if(typeof data !== 'object')
      throw new InvalidJSON(`Invalid type: "${typeof data}", object expected`)

    if(options['custom-json'])
      this.validProperties(data, options)
  }
}

module.exports = CustomJSONValidator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/custom-json/locator.js":
/*!********************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/custom-json/locator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CustomJSONValidator = __webpack_require__(/*! . */ "./src/core/common/data-structure/schema/validator/custom-json/index.js")

class CustomJSONValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CustomJSONValidator}
   */
  locate()
  {
    const locator = this.locator
    return new CustomJSONValidator(locator)
  }
}

module.exports = CustomJSONValidatorLocator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/index.js":
/*!******************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @interface SchemaValidator
 */

/**
 * @function SchemaValidator#valid
 * @param {Object} options
 * @param {*} data
 * @returns {void}
 */


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js":
/*!********************************************************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @memberof Domain
 * @extends {Error}
 */
class InvalidMultipleAssociativeArrayError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'E_INVALID_MULTIPLE_ASSOCIATIVE_ARRAY'
  }
}

module.exports = InvalidMultipleAssociativeArrayError


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/multiple-associative-array/index.js":
/*!*********************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/multiple-associative-array/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidMultipleAssociativeArray = __webpack_require__(/*! ./error/invalid-multiple-associative-array */ "./src/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js")
/**
 * Validates Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */
class MultipleAssociativeArrayValidator
{
  constructor(associativeArrayValidator)
  {
    this.associativeArrayValidator = associativeArrayValidator
  }

  valid(options, data)
  {
    options.collection
      ? this.validCollection(options, data)
      : this.validSingle(options, data)
  }

  validCollection(options, data)
  {
    if(!Array.isArray(data))
      throw new InvalidMultipleAssociativeArray(`Invalid type: "${typeof data}", array expected`)

    for(const item of data)
      this.validSingle(options, item)
  }


  validSingle(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidMultipleAssociativeArray(`Invalid type: "${typeof data}", object expected`)

    const associativeArrayOptions = {
      'associative-array' :
      {
        'type'    : options['associative-array'] && options['associative-array'].type ? options['associative-array'].type : 'collection',
        'options' : options['associative-array'] && options['associative-array'].options ? options['associative-array'].options : {}
      }
    }

    this.associativeArrayValidator.valid(associativeArrayOptions, data)
  }
}

module.exports = MultipleAssociativeArrayValidator


/***/ }),

/***/ "./src/core/common/data-structure/schema/validator/multiple-associative-array/locator.js":
/*!***********************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/validator/multiple-associative-array/locator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MultipleAssociativeArrayValidator = __webpack_require__(/*! . */ "./src/core/common/data-structure/schema/validator/multiple-associative-array/index.js")

class MultipleAssociativeArrayValidatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {MultipleAssociativeArrayValidator}
   */
  locate()
  {
    const associateArrayValidator = this.locator.locate('core/schema/validator/data-structure/associative-array')

    return new MultipleAssociativeArrayValidator(associateArrayValidator)
  }
}

module.exports = MultipleAssociativeArrayValidatorLocator


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/associative-array.js":
/*!*********************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/associative-array.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'items' :
  {
    'type'    : 'custom-json',
    'default' : {}
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/edge.js":
/*!********************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/edge.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'source' :
  {
    'type'      : 'string',
    'not-empty' : false,
    'optional'  : true
  },
  'target' :
  {
    'type'      : 'string',
    'not-empty' : false
  },
  'payload' :
  {
    'type' : 'json'
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/graph.js":
/*!*********************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/graph.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'isDirected' :
  {
    'type' : 'boolean'
  },
  'nodes' :
  {
    'type'                           : 'data-structure/associative-array',
    'associative-array-type'         : 'schema',
    'associative-array-type-options' : {
      'schema' : 'data-structure/node'
    }
  },
  'edges' :
  {
    'type'                           : 'data-structure/multiple-associative-array',
    'associative-array-type-options' : {
      'array-type'         : 'schema',
      'array-type-options' : {
        'schema' : 'data-structure/edge'
      }
    }
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/multiple-associative-array.js":
/*!******************************************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/multiple-associative-array.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  '@meta' :
  {
    'immutable' : false,
    'extends'   : [
      'data-structure/associative-array'
    ]
  },
  'items' :
  {
    'type'        : 'custom-json',
    'custom-json' :
    {
      'type' : 'collection'
    },
    'default' : {}
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/node.js":
/*!********************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/node.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'id' :
  {
    'type'      : 'string',
    'not-empty' : false
  },
  'name' :
  {
    'type'      : 'string',
    'not-empty' : false
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/queue.js":
/*!*********************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/queue.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'items' :
  {
    'type'    : 'collection',
    'default' : []
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/stack.js":
/*!*********************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/stack.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'items' :
  {
    'type'    : 'collection',
    'default' : []
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/schema/value-object/tree.js":
/*!********************************************************************!*\
  !*** ./src/core/common/data-structure/schema/value-object/tree.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  '@meta' :
  {
    'immutable' : false,
    'extends'   : [
      'data-structure/graph'
    ]
  },
  'root' :
  {
    'type'     : 'string',
    'optional' : true,
    'nullable' : true
  }
}


/***/ }),

/***/ "./src/core/common/data-structure/stack/factory/index.js":
/*!***************************************************************!*\
  !*** ./src/core/common/data-structure/stack/factory/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Stack = __webpack_require__(/*! .. */ "./src/core/common/data-structure/stack/index.js")

class StackFactory
{
  constructor({
    composer
  })
  {
    this.composer = composer
  }

  create(items = [])
  {
    const args = this.composer.compose('data-structure/stack', { items })
    return new Stack(args)
  }
}

module.exports = StackFactory


/***/ }),

/***/ "./src/core/common/data-structure/stack/factory/locator.js":
/*!*****************************************************************!*\
  !*** ./src/core/common/data-structure/stack/factory/locator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const StackFactory = __webpack_require__(/*! . */ "./src/core/common/data-structure/stack/factory/index.js")

class StackFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {StackFactory}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new StackFactory({
      composer
    })
  }
}

module.exports = StackFactoryLocator


/***/ }),

/***/ "./src/core/common/data-structure/stack/index.js":
/*!*******************************************************!*\
  !*** ./src/core/common/data-structure/stack/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Stack
{
  constructor({
    items
  })
  {
    this.items                  = items
    this[Symbol.for('schema')]  = 'data-structurestack'
  }

  stack(element)
  {
    this.items.push(element)
  }

  pop()
  {
    if(!this.isEmpty())
      return this.items.pop()
    return undefined
  }

  peek()
  {
    return this.items[this.items.length - 1]
  }

  isEmpty()
  {
    return this.items.length === 0
  }

  reset()
  {
    this.items = []
  }

  get [Symbol.toStringTag]()
  {
    return 'Stack'
  }
}

module.exports = Stack


/***/ }),

/***/ "./src/core/common/data-structure/stack/locator.js":
/*!*********************************************************!*\
  !*** ./src/core/common/data-structure/stack/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Stack  = __webpack_require__(/*! . */ "./src/core/common/data-structure/stack/index.js")

class StackLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Stack}
   */
  locate()
  {
    return Stack
  }
}

module.exports = StackLocator


/***/ }),

/***/ "./src/core/common/data-structure/tree/factory/index.js":
/*!**************************************************************!*\
  !*** ./src/core/common/data-structure/tree/factory/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Tree = __webpack_require__(/*! .. */ "./src/core/common/data-structure/tree/index.js")

class TreeFactory
{
  constructor({
    composer,
    associativeArrayFactory,
    multipleAssociativeArrayFactory,
    queueFactory,
    deepassign
  })
  {
    this.composer                         = composer
    this.associativeArrayFactory          = associativeArrayFactory
    this.multipleAssociativeArrayFactory  = multipleAssociativeArrayFactory
    this.queueFactory                     = queueFactory
    this.deepassign                       = deepassign

    this[Symbol.for('schema')]            = 'data-structure/tree'
  }

  createEdges({ edges })
  {
    const { items } = edges
    return this.multipleAssociativeArrayFactory.create(items)
  }

  createNodes({ nodes })
  {
    const { items } = nodes
    return this.associativeArrayFactory.create(items)
  }

  createQueue()
  {
    return this.queueFactory.create()
  }

  /**
   * @returns {Tree}
   */
  create(tree)
  {
    const composedTree = this.composer.compose(this[Symbol.for('schema')], tree)

    return new Tree({
      ...composedTree,
      composer   : this.composer,
      edges      : this.createEdges(composedTree),
      nodes      : this.createNodes(composedTree),
      queue      : this.createQueue(),
      deepassign : this.deepassign
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'TreeFactory'
  }
}

module.exports = TreeFactory


/***/ }),

/***/ "./src/core/common/data-structure/tree/factory/locator.js":
/*!****************************************************************!*\
  !*** ./src/core/common/data-structure/tree/factory/locator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const TreeFactory = __webpack_require__(/*! . */ "./src/core/common/data-structure/tree/factory/index.js")

class TreeFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {TreeFactory}
   */
  locate()
  {
    const
    associativeArrayFactory         = this.locator.locate('data-structure/associative-array/factory'),
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory'),
    queueFactory                    = this.locator.locate('data-structure/queue/factory'),
    composer                        = this.locator.locate('core/schema/composer'),
    deepassign                      = this.locator.locate('core/deepassign')


    return new TreeFactory({
      composer,
      associativeArrayFactory,
      multipleAssociativeArrayFactory,
      queueFactory,
      deepassign
    })
  }
}

module.exports = TreeFactoryLocator


/***/ }),

/***/ "./src/core/common/data-structure/tree/index.js":
/*!******************************************************!*\
  !*** ./src/core/common/data-structure/tree/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const
Graph        = __webpack_require__(/*! ../graph */ "./src/core/common/data-structure/graph/index.js"),
NodeNotExist = __webpack_require__(/*! ../graph/error/node-not-exists */ "./src/core/common/data-structure/graph/error/node-not-exists.js")

class Tree extends Graph
{
  constructor({
    root,
    deepassign,
    ...args
  })
  {
    super(args)
    this.deepassign = deepassign
    this.root       = root
  }
  setRoot(rootNodeId)
  {
    if(!this.nodes.get(rootNodeId))
      throw new NodeNotExist('Node does not exists')

    this.root = rootNodeId
  }

  getLeaves()
  {
    const
    nodeIdList = Object.keys(this.nodes.items),
    leaves     = nodeIdList.filter((nodeId) =>
    {
      return !this.edges.get(nodeId)
    })

    return leaves
  }

  getJSON(flattened)
  {
    if(!this.nodes.get(this.root))
      throw new NodeNotExist('Root does not exists')

    const bfs = this.bfs(this.root)

    let json = {}

    bfs.forEach((nodeId, nodeIndex) =>
    {
      const
      node      = this.nodes.get(nodeId),
      jsonPath  = this.getJSONPath(nodeId, nodeIndex, bfs, node.name)

      if(flattened)
        json[jsonPath] = { ...node }
      else
        json = this.deepassign.assign(json, jsonPath, { ...node })
    })

    return json
  }

  getJSONPath(nodeId, nodeIndex, path, jsonPath)
  {
    const previousIndex = nodeIndex - 1

    let parent
    for(let i = previousIndex; i >= 0; i--)
    {
      const
      previousNodeId    = path[i],
      previousNodeEdges = this.edges.get(previousNodeId)

      if(previousNodeEdges)
      {
        const currentNodeEdge = previousNodeEdges.find((previousNodeEdge) =>
        {
          return previousNodeEdge.target === nodeId
        })

        if(currentNodeEdge)
        {
          parent = previousNodeId
          break
        }
      }
    }

    if(parent)
    {
      const
      parentNode  = this.nodes.get(parent),
      parentIndex = path.findIndex((element) =>
      {
        return element === parent
      })

      return this.getJSONPath(parent, parentIndex, path, `${parentNode.name}.${jsonPath}`)
    }
    else
    {
      return jsonPath
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'Tree'
  }
}

module.exports = Tree


/***/ }),

/***/ "./src/core/common/data-structure/tree/locator.js":
/*!********************************************************!*\
  !*** ./src/core/common/data-structure/tree/locator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Tree = __webpack_require__(/*! . */ "./src/core/common/data-structure/tree/index.js")

class TreeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return Tree
  }
}

module.exports = TreeLocator


/***/ }),

/***/ "./src/core/common/deepassign/config.js":
/*!**********************************************!*\
  !*** ./src/core/common/deepassign/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/deepassign'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/deepassign' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/deepassign/error/not-an-object.js":
/*!***********************************************************!*\
  !*** ./src/core/common/deepassign/error/not-an-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class NotAnObjectError extends Error
{
  constructor(...args)
  {
    super(...args)

    this.code = 'E_NOT_AN_OBJECT'
  }
}

module.exports = NotAnObjectError


/***/ }),

/***/ "./src/core/common/deepassign/index.js":
/*!*********************************************!*\
  !*** ./src/core/common/deepassign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NotAnObjectError = __webpack_require__(/*! ./error/not-an-object */ "./src/core/common/deepassign/error/not-an-object.js")

class DeepAssign
{
  constructor(deepclone)
  {
    this.deepclone            = deepclone
    this.arrayPropertyRegexp  = /(\w+)\[([0-9]+)\]/i
  }

  getPath(keys, index)
  {
    let path = ''

    for(let i = 0; i < index; i++)
      path += `${keys[i]}.`

    return `${path}${keys[index]}`
  }

  isAssignableObject(obj)
  {
    return obj && typeof obj === 'object'
  }

  isArrayProperty(key)
  {
    const match = this.arrayPropertyRegexp.exec(key)
    return !!match
  }

  getArrayPropertyIndex(key)
  {
    const match = this.arrayPropertyRegexp.exec(key)

    return {
      name     : match[1],
      position : Number(match[2])
    }
  }

  isLastKey(keys, index)
  {
    return index === keys.length - 1
  }

  objectProperty(obj, value, key, index, keys)
  {
    // if(!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index))
    //   throw new NotAnObjectError(`Expected and object for assigning properties: ${this.getPath(keys, index)}`)
    if(!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index))
    {
      obj[key] = { }
      obj      = obj[key]
    }
    else if(this.isLastKey(keys, index))
    {
      obj[key] = value
    }
    else
    {
      obj = obj[key]
    }

    return obj
  }

  arrayProperty(obj, value, key, index, keys)
  {
    const { name, position } = this.getArrayPropertyIndex(key)

    if(!this.isAssignableObject(obj[name][position]) && !this.isLastKey(keys, index))
      throw new NotAnObjectError(`Expected and object for assigning properties: ${this.getPath(keys, index)}`)
    else if(this.isLastKey(keys, index))
      obj[name][position] = value
    else
      obj = obj[name][position]

    return obj
  }

  assignPath(obj, keys, value)
  {
    let pointer = obj

    keys.forEach((key, index) =>
    {
      if(this.isArrayProperty(key))
        pointer = this.arrayProperty(pointer, value, key, index, keys)
      else
        pointer = this.objectProperty(pointer, value, key, index, keys)
    })

    return obj
  }

  assign(obj, path, value)
  {
    const
    keys  = path.split(/\.|\//),
    copy  = this.deepclone.clone(obj)

    return this.assignPath(copy, keys, value)
  }
}

module.exports = DeepAssign


/***/ }),

/***/ "./src/core/common/deepassign/locator.js":
/*!***********************************************!*\
  !*** ./src/core/common/deepassign/locator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DeepAssign = __webpack_require__(/*! . */ "./src/core/common/deepassign/index.js")

class DeepAssignLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {DeepAssign}
   */
  locate()
  {
    const deepclone = this.locator.locate('core/deepclone')

    return new DeepAssign(deepclone)
  }
}

module.exports = DeepAssignLocator


/***/ }),

/***/ "./src/core/common/deepclone/config.js":
/*!*********************************************!*\
  !*** ./src/core/common/deepclone/config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/deepclone'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/deepclone' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/deepclone/error/failed-to-clone.js":
/*!************************************************************!*\
  !*** ./src/core/common/deepclone/error/failed-to-clone.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class FailedToCloneError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'E_FAILED_TO_CLONE'
  }
}

module.exports = FailedToCloneError


/***/ }),

/***/ "./src/core/common/deepclone/index.js":
/*!********************************************!*\
  !*** ./src/core/common/deepclone/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FailedToCloneError = __webpack_require__(/*! ./error/failed-to-clone */ "./src/core/common/deepclone/error/failed-to-clone.js")

class DeepClone
{
  clone(obj)
  {
    try
    {
      return JSON.parse(JSON.stringify(obj))
    }
    catch(error)
    {
      throw new FailedToCloneError(error.message)
    }
  }
}

module.exports = DeepClone


/***/ }),

/***/ "./src/core/common/deepclone/locator.js":
/*!**********************************************!*\
  !*** ./src/core/common/deepclone/locator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DeepClone = __webpack_require__(/*! . */ "./src/core/common/deepclone/index.js")

class DeepCloneLocator
{
  locate()
  {
    return new DeepClone()
  }
}

module.exports = DeepCloneLocator


/***/ }),

/***/ "./src/core/common/deepfind/config.js":
/*!********************************************!*\
  !*** ./src/core/common/deepfind/config.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/deepfind'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/deepfind' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/deepfind/index.js":
/*!*******************************************!*\
  !*** ./src/core/common/deepfind/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class DeepFind
{
  find(path, obj)
  {
    // split on "." or "/"
    const keys = path.split(/\.|\//)
    return keys.reduce((obj, key) => obj && obj[key], obj)
  }
}

module.exports = DeepFind


/***/ }),

/***/ "./src/core/common/deepfind/locator.js":
/*!*********************************************!*\
  !*** ./src/core/common/deepfind/locator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DeepFind = __webpack_require__(/*! . */ "./src/core/common/deepfind/index.js")

class DeepFindLocator
{
  locate()
  {
    return new DeepFind()
  }
}

module.exports = DeepFindLocator


/***/ }),

/***/ "./src/core/common/deepfreeze/config.js":
/*!**********************************************!*\
  !*** ./src/core/common/deepfreeze/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/deepfreeze'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/deepfreeze' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/deepfreeze/index.js":
/*!*********************************************!*\
  !*** ./src/core/common/deepfreeze/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class DeepFreeze
{
  freeze(obj)
  {
    const propNames = Object.getOwnPropertyNames(obj)

    for(const name of propNames)
    {
      const value = obj[name]
      obj[name] = value && typeof value === 'object' ? this.freeze(value) : value
    }

    return Object.freeze(obj)
  }
}

module.exports = DeepFreeze


/***/ }),

/***/ "./src/core/common/deepfreeze/locator.js":
/*!***********************************************!*\
  !*** ./src/core/common/deepfreeze/locator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DeepFreeze = __webpack_require__(/*! . */ "./src/core/common/deepfreeze/index.js")

class DeepFreezeLocator
{
  locate()
  {
    return new DeepFreeze()
  }
}

module.exports = DeepFreezeLocator


/***/ }),

/***/ "./src/core/common/deepmerge/config.js":
/*!*********************************************!*\
  !*** ./src/core/common/deepmerge/config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/deepmerge'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/deepmerge' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/deepmerge/index.js":
/*!********************************************!*\
  !*** ./src/core/common/deepmerge/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class DeepMerge
{
  merge(a, b, ...c)
  {
    const result = this._merge(a, b)

    return c.length ? this.merge(result, c[0], ...c.slice(1)) : result
  }

  _merge(a, b)
  {
    if(typeof a !== 'object' || a === null)
      return b

    return Array.isArray(a) ? this._mergeArray(a, b) : this._mergeObject(a, b)
  }

  _mergeArray(a, b)
  {
    if(!Array.isArray(b))
      return b

    a.push(...b)
    return a
  }

  _mergeObject(a, b)
  {
    for(const key in b)
      a[key] = key in a ? this._merge(a[key], b[key]) : b[key]

    return a
  }
}

module.exports = DeepMerge


/***/ }),

/***/ "./src/core/common/deepmerge/locator.js":
/*!**********************************************!*\
  !*** ./src/core/common/deepmerge/locator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DeepMerge = __webpack_require__(/*! . */ "./src/core/common/deepmerge/index.js")

class DeepMergeLocator
{
  locate()
  {
    return new DeepMerge()
  }
}

module.exports = DeepMergeLocator


/***/ }),

/***/ "./src/core/common/locator/constituent.js":
/*!************************************************!*\
  !*** ./src/core/common/locator/constituent.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const LocatorNotImplementedError = __webpack_require__(/*! ./error/locator-not-implemented */ "./src/core/common/locator/error/locator-not-implemented.js")
/**
 * For classes that represent a locator constituent of a composite pattern.
 *
 * @abstract
 */
class LocatorConstituent
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * A factory method for a service
   * @returns {*} An instenace of the service that is being located
   * @abstract
   */
  locate()
  {
    throw new LocatorNotImplementedError('the "locate" method was not overwritten')
  }
}

module.exports = LocatorConstituent


/***/ }),

/***/ "./src/core/common/locator/error/locator-not-implemented.js":
/*!******************************************************************!*\
  !*** ./src/core/common/locator/error/locator-not-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class LocatorNotImplementedError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_LOCATOR_NOT_IMPLEMENTED'
  }
}

module.exports = LocatorNotImplementedError


/***/ }),

/***/ "./src/core/common/locator/error/service-undefined.js":
/*!************************************************************!*\
  !*** ./src/core/common/locator/error/service-undefined.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ServiceUndefinedError extends ReferenceError
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SERVICE_UNDEFINED'
  }
}

module.exports = ServiceUndefinedError


/***/ }),

/***/ "./src/core/common/locator/index.js":
/*!******************************************!*\
  !*** ./src/core/common/locator/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ServiceUndefinedError = __webpack_require__(/*! ./error/service-undefined */ "./src/core/common/locator/error/service-undefined.js")

class Locator
{
  constructor()
  {
    this.services = {}
  }

  set(name, service)
  {
    this.services[name] = service
  }

  has(name)
  {
    return name in this.services
  }

  locate(service)
  {
    if(service in this.services)
      return this.services[service]

    throw new ServiceUndefinedError(`"${service}" can not be located`)
  }
}

module.exports = Locator


/***/ }),

/***/ "./src/core/common/object/config.js":
/*!******************************************!*\
  !*** ./src/core/common/object/config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/object'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/object' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/object/index.js":
/*!*****************************************!*\
  !*** ./src/core/common/object/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class CoreObject
{
  constructor(coreString)
  {
    this.coreString = coreString
  }

  trimKeys(o)
  {
    return this.transformKeys(o, this.coreString.trim)
  }

  hyphenateKeys(o, separator)
  {
    return this.transformKeys(o, this.coreString.hyphenate, separator)
  }

  /**
   * @example { FooBar:'FooBar' } => { foobar:'FooBar' }
   * @param {object} o input to be manipulated
   * @returns {object}
   */
  lowercaseKeys(o)
  {
    return this.transformKeys(o, this.coreString.lowercase)
  }

  /**
   * @example { FooBar:'FooBar' } => { FOOBAR:'FooBar' }
   * @param {object} o input to be manipulated
   * @returns {object}
   */
  upppercaseKeys(o)
  {
    return this.transformKeys(o, this.coreString.uppercase)
  }

  /**
   * @example { FooBar:'FooBar' } => { FOOBAR:'FooBar' }
   * @param {object} o input to be manipulated
   * @returns {object}
   */
  camelcaseKeys(o)
  {
    return this.transformKeys(o, this.coreString.camelCase)
  }

  transformKeys(o, transformFunction, ...transformArgs)
  {
    const
    object   = o || {},
    keys     = Object.keys(object),
    composed = keys.reduce((c, k) =>
    {
      c[transformFunction(k, ...transformArgs)] = object[k]
      return c
    }, {})

    return composed
  }

  /**
   * Creates a copy of an object excluding some keys.
   * References are kept, so modifing Objects or arrays on the resulting object will modify the source one
   * To avoid this behaivour clone the input before using or clone the output after
   * @param {object} o source object to create a copy
   * @param {...string} keys Keys to remove
   * @returns Copy of object without the specified keys
   * @author Lleonard Subirana (arsu.leo@gmail.com)
   */
  removeKeys(o, ...keys)
  {
    const
    object = o || {},
    result = { ...object }

    for(const key of keys)
      delete result[key]

    return result
  }

  removeKeysWithSpecificValues(o, values = [])
  {
    const
    object = o || {},
    result = { ...object },
    keys   = Object.keys(result)

    for(const key of keys)
    {
      if(values.includes(result[key]))
        delete result[key]
    }

    return result
  }
}

module.exports = CoreObject


/***/ }),

/***/ "./src/core/common/object/locator.js":
/*!*******************************************!*\
  !*** ./src/core/common/object/locator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CoreObject = __webpack_require__(/*! . */ "./src/core/common/object/index.js")

class CoreObjectLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const coreString = this.locator.locate('core/string')

    return new CoreObject(coreString)
  }
}

module.exports = CoreObjectLocator


/***/ }),

/***/ "./src/core/common/observer/error/observer-contract-not-honered.js":
/*!*************************************************************************!*\
  !*** ./src/core/common/observer/error/observer-contract-not-honered.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ObserverContractNotHoneredError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_BUS_OBSERVER_CONTRACT_NOT_HONERED'
  }
}

module.exports = ObserverContractNotHoneredError


/***/ }),

/***/ "./src/core/common/observer/observer.js":
/*!**********************************************!*\
  !*** ./src/core/common/observer/observer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @interface Observer
 */

/**
 * @function Observer#observe
 * @param {*} data
 * @returns {void}
 */


/***/ }),

/***/ "./src/core/common/schema/composer/error/filter-is-not-honering-contract.js":
/*!**********************************************************************************!*\
  !*** ./src/core/common/schema/composer/error/filter-is-not-honering-contract.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class FilterIsNotHoneringContractError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_FILTER_IS_NOT_HONERING_CONTRACT'
  }
}

module.exports = FilterIsNotHoneringContractError


/***/ }),

/***/ "./src/core/common/schema/composer/error/invalid-attribute.js":
/*!********************************************************************!*\
  !*** ./src/core/common/schema/composer/error/invalid-attribute.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidAttributeError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SCHEMA_INVALID_ATTRIBUTE'
  }
}

module.exports = InvalidAttributeError


/***/ }),

/***/ "./src/core/common/schema/composer/error/invalid-collection.js":
/*!*********************************************************************!*\
  !*** ./src/core/common/schema/composer/error/invalid-collection.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidCollectionError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_COLLECTION'
  }
}

module.exports = InvalidCollectionError


/***/ }),

/***/ "./src/core/common/schema/composer/error/invalid-schema.js":
/*!*****************************************************************!*\
  !*** ./src/core/common/schema/composer/error/invalid-schema.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidSchemaError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SCHEMA_INVALID_SCHEMA'
  }
}

module.exports = InvalidSchemaError


/***/ }),

/***/ "./src/core/common/schema/composer/error/schema-not-found.js":
/*!*******************************************************************!*\
  !*** ./src/core/common/schema/composer/error/schema-not-found.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class SchemaNotFoundError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SCHEMA_NOT_FOUND'
  }
}

module.exports = SchemaNotFoundError


/***/ }),

/***/ "./src/core/common/schema/composer/error/validator-is-not-honering-contract.js":
/*!*************************************************************************************!*\
  !*** ./src/core/common/schema/composer/error/validator-is-not-honering-contract.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class ValidatorIsNotHoneringContractError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_VALIDATOR_IS_NOT_HONERING_CONTRACT'
  }
}

module.exports = ValidatorIsNotHoneringContractError


/***/ }),

/***/ "./src/core/common/schema/composer/error/validator-not-found.js":
/*!**********************************************************************!*\
  !*** ./src/core/common/schema/composer/error/validator-not-found.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class ValidatorNotFoundError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_VALIDATOR_NOT_FOUND'
  }
}

module.exports = ValidatorNotFoundError


/***/ }),

/***/ "./src/core/common/schema/composer/index.js":
/*!**************************************************!*\
  !*** ./src/core/common/schema/composer/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const
InvalidAttributeError               = __webpack_require__(/*! ./error/invalid-attribute */ "./src/core/common/schema/composer/error/invalid-attribute.js"),
InvalidCollectionError              = __webpack_require__(/*! ./error/invalid-collection */ "./src/core/common/schema/composer/error/invalid-collection.js"),
InvalidSchemaError                  = __webpack_require__(/*! ./error/invalid-schema */ "./src/core/common/schema/composer/error/invalid-schema.js"),
SchemaNotFoundError                 = __webpack_require__(/*! ./error/schema-not-found */ "./src/core/common/schema/composer/error/schema-not-found.js"),
FilterIsNotHoneringContractError    = __webpack_require__(/*! ./error/filter-is-not-honering-contract */ "./src/core/common/schema/composer/error/filter-is-not-honering-contract.js"),
ValidatorIsNotHoneringContractError = __webpack_require__(/*! ./error/validator-is-not-honering-contract */ "./src/core/common/schema/composer/error/validator-is-not-honering-contract.js"),
ValidatorNotFoundError              = __webpack_require__(/*! ./error/validator-not-found */ "./src/core/common/schema/composer/error/validator-not-found.js")

class SchemaComposer
{
  constructor(deepmerge, deepclone, deepfreeze)
  {
    this.deepmerge  = deepmerge
    this.deepclone  = deepclone
    this.deepfreeze = deepfreeze
    this.schemas    = {}
    this.filters    = {}
    this.validators = {}
  }

  /**
   * @param {string} schemaName
   * @param {Object|Array<Object>} dto
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {Object}
   */
  compose(schemaName, dto)
  {
    if(schemaName in this.schemas === false)
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    if(Array.isArray(dto))
      dto = this.deepmerge.merge({}, ...dto)

    const
    schema = this.buildSchema(this.schemas[schemaName]),
    output = {}

    for(const attribute in schema)
      output[attribute] = this.attribute(schemaName, schema, attribute, dto[attribute])

    if(Object.isFrozen(schema))
      this.deepfreeze.freeze(output)

    return output
  }

  /**
   * @param {string} schemaName
   * @param {string} attribute
   * @param {Object} data
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {*}
   */
  trait(schemaName, attribute, data)
  {
    if(schemaName in this.schemas === false)
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    const
    schema = this.schemas[schemaName],
    output = this.attribute(schemaName, schema, attribute, data)

    return output
  }

  /**
   * @private
   */
  attribute(schemaName, schema, attribute, data)
  {
    const options = schema[attribute]

    if('default' in options && data === undefined)
      data = options.default

    // if optional, and undefined or null, then we don't need to filter or validate
    if(options.optional === true && data === undefined)
      return data

    if(options.nullable === true && data === null)
      return data

    // Filtering attributes if a filter has been defined for the type
    if(options.type in this.filters)
    {
      const filter = this.filters[options.type]
      data = filter.filter(options, data)
    }

    // Validating type
    if(options.type in this.validators === false)
      throw new ValidatorNotFoundError(`In schema: "${schemaName}", validator: "${options.type}" not found`)

    try
    {
      const validator = this.validators[options.type]

      if(options.collection)
      {
        if(!Array.isArray(data))
          throw new InvalidCollectionError(`In schema: "${schemaName}", invalid type: "${typeof data}", array expected`)

        for(const item of data)
          validator.valid(options, item)
      }
      else
      {
        validator.valid(options, data)
      }
    }
    catch(error)
    {
      throw new InvalidAttributeError(`Invalid attribute: "${attribute}", schema: "${schemaName}", error: ${error.message}`)
    }

    return data
  }

  /**
   * The schema could have declared a meta field that requires a building process before used
   * The build process will alter the schema provided through an argument
   *
   * @param {Object} schema
   * @return {Object} Same instance as provided through argument
   */
  buildSchema(schema)
  {
    if('@meta' in schema)
    {
      if('extends' in schema['@meta'] || 'extend' in schema['@meta'])
      {
        const extendList = schema['@meta'].extends || schema['@meta'].extend

        for(const extendSchemaName of Array.isArray(extendList) ? extendList : [extendList])
        {
          const extend = this.buildSchema(this.schemas[extendSchemaName])
          this.deepmerge.merge(schema, extend)
        }
      }

      if(schema['@meta'].immutable || schema['@meta'].immutable === undefined) // TODO makes sense if not exist to make the schema frozen?
      {
        delete schema['@meta']
        Object.freeze(schema)
      }
      else
      {
        delete schema['@meta']
      }
    }

    return schema
  }

  /**
   * @param {string} schemaName
   * @param {Object} schema
   * @throws {E_SCHEMA_INVALID_SCHEMA}
   */
  addSchema(schemaName, schema)
  {
    if(typeof schema !== 'object')
      throw new InvalidSchemaError(`Schema "${schemaName}" must be an object`)

    // TODO: Improve validation of the schema when it's added
    // For the moment we can suffer unexpected errors when we start working with the schema
    // A better approach is to validate the schema structure as a value object
    // ...resulting in a garantee that the schema is of expected definition.

    this.schemas[schemaName] = this.deepclone.clone(schema)
  }

  /**
   * @param {string} filterName
   * @param {SchemaFilter} filter
   * @throws {E_FILTER_IS_NOT_HONERING_CONTRACT}
   */
  addFilter(filterName, filter)
  {
    if(typeof filter.filter !== 'function')
      throw new FilterIsNotHoneringContractError(`Filter "${filterName}" not honering contract`)

    this.filters[filterName] = filter
  }

  /**
   * @param {string} validatorName
   * @param {SchemaValidator} validator
   * @throws {E_VALIDATOR_IS_NOT_HONERING_CONTRACT}
   */
  addValidator(validatorName, validator)
  {
    if(typeof validator.valid !== 'function')
      throw new ValidatorIsNotHoneringContractError(`Validator "${validatorName}" not honering contract`)

    this.validators[validatorName] = validator
  }
}

module.exports = SchemaComposer


/***/ }),

/***/ "./src/core/common/schema/composer/locator.js":
/*!****************************************************!*\
  !*** ./src/core/common/schema/composer/locator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Schema = __webpack_require__(/*! . */ "./src/core/common/schema/composer/index.js")

class SchemaLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    deepmerge   = this.locator.locate('core/deepmerge'),
    deepclone   = this.locator.locate('core/deepclone'),
    deepfreeze  = this.locator.locate('core/deepfreeze')

    return new Schema(deepmerge, deepclone, deepfreeze)
  }
}

module.exports = SchemaLocator


/***/ }),

/***/ "./src/core/common/schema/config.js":
/*!******************************************!*\
  !*** ./src/core/common/schema/config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/schema'

module.exports =
{
  'core' :
  {
    'schema' :
    {
      'filter' :
      {
        'boolean'   : 'core/schema/filter/boolean',
        'csv'       : 'core/schema/filter/csv',
        'decimal'   : 'core/schema/filter/decimal',
        'integer'   : 'core/schema/filter/integer',
        'json'      : 'core/schema/filter/json',
        'schema'    : 'core/schema/filter/schema',
        'string'    : 'core/schema/filter/string',
        'timestamp' : 'core/schema/filter/timestamp'
      },
      'validator' :
      {
        'boolean'   : 'core/schema/validator/boolean',
        'csv'       : 'core/schema/validator/csv',
        'decimal'   : 'core/schema/validator/decimal',
        'integer'   : 'core/schema/validator/integer',
        'json'      : 'core/schema/validator/json',
        'schema'    : 'core/schema/validator/schema',
        'string'    : 'core/schema/validator/string',
        'timestamp' : 'core/schema/validator/timestamp'
      }
    },
    'locator' :
    {
      'core/schema/composer'            : `${dirname}/composer`,
      'core/schema/filter/boolean'      : `${dirname}/filter/boolean`,
      'core/schema/filter/csv'          : `${dirname}/filter/csv`,
      'core/schema/filter/decimal'      : `${dirname}/filter/decimal`,
      'core/schema/filter/integer'      : `${dirname}/filter/integer`,
      'core/schema/filter/json'         : `${dirname}/filter/json`,
      'core/schema/filter/schema'       : `${dirname}/filter/schema`,
      'core/schema/filter/string'       : `${dirname}/filter/string`,
      'core/schema/filter/timestamp'    : `${dirname}/filter/timestamp`,
      'core/schema/validator/boolean'   : `${dirname}/validator/boolean`,
      'core/schema/validator/csv'       : `${dirname}/validator/csv`,
      'core/schema/validator/decimal'   : `${dirname}/validator/decimal`,
      'core/schema/validator/integer'   : `${dirname}/validator/integer`,
      'core/schema/validator/json'      : `${dirname}/validator/json`,
      'core/schema/validator/schema'    : `${dirname}/validator/schema`,
      'core/schema/validator/string'    : `${dirname}/validator/string`,
      'core/schema/validator/timestamp' : `${dirname}/validator/timestamp`
    }
  }
}


/***/ }),

/***/ "./src/core/common/schema/error/schema-not-resolvable.js":
/*!***************************************************************!*\
  !*** ./src/core/common/schema/error/schema-not-resolvable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class SchemaNotResolvableError extends ReferenceError
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SCHEMA_NOT_RESOLVABLE'
  }
}

module.exports = SchemaNotResolvableError


/***/ }),

/***/ "./src/core/common/schema/filter/boolean/index.js":
/*!********************************************************!*\
  !*** ./src/core/common/schema/filter/boolean/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {SchemaFilter}
 */
class SchemaFilterBoolean
{
  filter(options, data)
  {
    return options.collection
    ? this.filterCollection(data)
    : this.filterSingle(data)
  }

  filterCollection(data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(data)
  {
    if(typeof data === 'string')
    {
      if(data.toLowerCase() === 'true')
        return true

      if(data.toLowerCase() === 'false')
        return false
    }

    return data
  }
}

module.exports = SchemaFilterBoolean


/***/ }),

/***/ "./src/core/common/schema/filter/boolean/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/common/schema/filter/boolean/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterBoolean = __webpack_require__(/*! . */ "./src/core/common/schema/filter/boolean/index.js")

class SchemaFilterBooleanLocator
{
  locate()
  {
    return new SchemaFilterBoolean
  }
}

module.exports = SchemaFilterBooleanLocator


/***/ }),

/***/ "./src/core/common/schema/filter/csv/index.js":
/*!****************************************************!*\
  !*** ./src/core/common/schema/filter/csv/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {SchemaFilter}
 */
class SchemaFilterCsv
{
  filter(options, data)
  {
    return options.collection
    ? this.filterCollection(options, data)
    : this.filterSingle(options, data)
  }

  filterCollection(options, data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(options, item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(options, data)
  {
    if(typeof data === 'string')
    {
      if(options.uppercase)
        data = data.toUpperCase()

      if(options.lowercase)
        data = data.toLowerCase()

      data = data.split(',')
    }

    return data
  }
}

module.exports = SchemaFilterCsv


/***/ }),

/***/ "./src/core/common/schema/filter/csv/locator.js":
/*!******************************************************!*\
  !*** ./src/core/common/schema/filter/csv/locator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterCsv = __webpack_require__(/*! . */ "./src/core/common/schema/filter/csv/index.js")

class SchemaFilterCsvLocator
{
  locate()
  {
    return new SchemaFilterCsv
  }
}

module.exports = SchemaFilterCsvLocator


/***/ }),

/***/ "./src/core/common/schema/filter/decimal/index.js":
/*!********************************************************!*\
  !*** ./src/core/common/schema/filter/decimal/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {SchemaFilter}
 */
class SchemaFilterDecimal
{
  filter(options, data)
  {
    return options.collection
    ? this.filterCollection(data)
    : this.filterSingle(data)
  }

  filterCollection(data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(data)
  {
    if(isNaN(data) === false)
      return +data

    return data
  }
}

module.exports = SchemaFilterDecimal


/***/ }),

/***/ "./src/core/common/schema/filter/decimal/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/common/schema/filter/decimal/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterDecimal = __webpack_require__(/*! . */ "./src/core/common/schema/filter/decimal/index.js")

class SchemaFilterDecimalLocator
{
  locate()
  {
    return new SchemaFilterDecimal
  }
}

module.exports = SchemaFilterDecimalLocator


/***/ }),

/***/ "./src/core/common/schema/filter/index.js":
/*!************************************************!*\
  !*** ./src/core/common/schema/filter/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @interface SchemaValidator
 */

/**
 * @function SchemaFilter#filter
 * @param {Object} options
 * @param {*} data
 * @returns {void}
 */


/***/ }),

/***/ "./src/core/common/schema/filter/integer/index.js":
/*!********************************************************!*\
  !*** ./src/core/common/schema/filter/integer/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {SchemaFilter}
 */
class SchemaFilterInteger
{
  filter(options, data)
  {
    return options.collection
    ? this.filterCollection(data)
    : this.filterSingle(data)
  }

  filterCollection(data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(data)
  {
    if(isNaN(data) === false)
      return +data

    return data
  }
}

module.exports = SchemaFilterInteger


/***/ }),

/***/ "./src/core/common/schema/filter/integer/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/common/schema/filter/integer/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterInteger = __webpack_require__(/*! . */ "./src/core/common/schema/filter/integer/index.js")

class SchemaFilterIntegerLocator
{
  locate()
  {
    return new SchemaFilterInteger
  }
}

module.exports = SchemaFilterIntegerLocator


/***/ }),

/***/ "./src/core/common/schema/filter/json/index.js":
/*!*****************************************************!*\
  !*** ./src/core/common/schema/filter/json/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {SchemaFilter}
 */
class SchemaFilterJson
{
  filter(options, data)
  {
    try
    {
      return options.stringified
      ? JSON.stringify(data, null, options.indentation)
      : data
    }
    catch(error)
    {
      // it's not up to the filter to validate
      // if we can't filter the data, then we simply pass the data forward
      return data
    }
  }
}

module.exports = SchemaFilterJson


/***/ }),

/***/ "./src/core/common/schema/filter/json/locator.js":
/*!*******************************************************!*\
  !*** ./src/core/common/schema/filter/json/locator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterJson = __webpack_require__(/*! . */ "./src/core/common/schema/filter/json/index.js")

class SchemaFilterJsonLocator
{
  locate()
  {
    return new SchemaFilterJson
  }
}

module.exports = SchemaFilterJsonLocator


/***/ }),

/***/ "./src/core/common/schema/filter/schema/error/missing-schema-definition.js":
/*!*********************************************************************************!*\
  !*** ./src/core/common/schema/filter/schema/error/missing-schema-definition.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class MissingSchemaDefinitionError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_MISSING_SCHEMA_DEFINITION'
  }
}

module.exports = MissingSchemaDefinitionError


/***/ }),

/***/ "./src/core/common/schema/filter/schema/index.js":
/*!*******************************************************!*\
  !*** ./src/core/common/schema/filter/schema/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MissingSchemaDefinitionError = __webpack_require__(/*! ./error/missing-schema-definition */ "./src/core/common/schema/filter/schema/error/missing-schema-definition.js")
/**
 * @implements {SchemaFilter}
 */
class SchemaFilterSchema
{
  constructor(composer)
  {
    this.composer = composer
  }

  filter(options, data)
  {
    return options.collection
      ? this.filterCollection(options, data)
      : this.filterSingle(options, data)
  }

  filterCollection(options, data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(options, item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(options, data)
  {
    if(typeof options.schema === 'string')
    {
      return options.trait
        ? this.composer.trait(options.schema, options.trait, data)
        : this.composer.compose(options.schema, data)
    }
    else
    {
      throw new MissingSchemaDefinitionError('Expected the attribute "schema" to declare what type of schema ')
    }
  }
}

module.exports = SchemaFilterSchema


/***/ }),

/***/ "./src/core/common/schema/filter/schema/locator.js":
/*!*********************************************************!*\
  !*** ./src/core/common/schema/filter/schema/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterSchema = __webpack_require__(/*! . */ "./src/core/common/schema/filter/schema/index.js")

class SchemaFilterSchemaLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new SchemaFilterSchema(composer)
  }
}

module.exports = SchemaFilterSchemaLocator


/***/ }),

/***/ "./src/core/common/schema/filter/string/index.js":
/*!*******************************************************!*\
  !*** ./src/core/common/schema/filter/string/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {SchemaFilter}
 */
class SchemaFilterString
{
  filter(options, data)
  {
    return options.collection
    ? this.filterCollection(options, data)
    : this.filterSingle(options, data)
  }

  filterCollection(options, data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(options, item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(options, data)
  {
    if(typeof data === 'number')
      data = `${data}`

    if(typeof data === 'boolean')
      data = `${data}`

    if(typeof data === 'string')
    {
      if(options.uppercase)
        data = data.toUpperCase()

      if(options.lowercase)
        data = data.toLowerCase()
    }

    return data
  }
}

module.exports = SchemaFilterString


/***/ }),

/***/ "./src/core/common/schema/filter/string/locator.js":
/*!*********************************************************!*\
  !*** ./src/core/common/schema/filter/string/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterString = __webpack_require__(/*! . */ "./src/core/common/schema/filter/string/index.js")

class SchemaFilterStringLocator
{
  locate()
  {
    return new SchemaFilterString
  }
}

module.exports = SchemaFilterStringLocator


/***/ }),

/***/ "./src/core/common/schema/filter/timestamp/index.js":
/*!**********************************************************!*\
  !*** ./src/core/common/schema/filter/timestamp/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @implements {SchemaFilter}
 */
class SchemaFilterTimestamp
{
  filter(options, data)
  {
    return options.collection
    ? this.filterCollection(options, data)
    : this.filterSingle(options, data)
  }

  filterCollection(options, data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(options, item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(options, data)
  {
    const intData = parseInt(data)
    if(intData == data)
      data = intData

    if(options.utc)
      data = new Date(data).toUTCString()

    if(options.json)
      data = new Date(data).toJSON()

    return data
  }
}

module.exports = SchemaFilterTimestamp


/***/ }),

/***/ "./src/core/common/schema/filter/timestamp/locator.js":
/*!************************************************************!*\
  !*** ./src/core/common/schema/filter/timestamp/locator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaFilterTimestamp = __webpack_require__(/*! . */ "./src/core/common/schema/filter/timestamp/index.js")

class SchemaFilterTimestampLocator
{
  locate()
  {
    return new SchemaFilterTimestamp
  }
}

module.exports = SchemaFilterTimestampLocator


/***/ }),

/***/ "./src/core/common/schema/validator/boolean/error/invalid.js":
/*!*******************************************************************!*\
  !*** ./src/core/common/schema/validator/boolean/error/invalid.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidBooleanError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_BOOLEAN'
  }
}

module.exports = InvalidBooleanError


/***/ }),

/***/ "./src/core/common/schema/validator/boolean/index.js":
/*!***********************************************************!*\
  !*** ./src/core/common/schema/validator/boolean/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidBooleanError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/boolean/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorBoolean
{
  valid(options, data)
  {
    if(typeof data !== 'boolean')
    {
      const msg = `Invalid type: "${typeof data}", boolean expected`
      throw new InvalidBooleanError(msg)
    }
  }
}

module.exports = SchemaValidatorBoolean


/***/ }),

/***/ "./src/core/common/schema/validator/boolean/locator.js":
/*!*************************************************************!*\
  !*** ./src/core/common/schema/validator/boolean/locator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorBoolean = __webpack_require__(/*! . */ "./src/core/common/schema/validator/boolean/index.js")

class SchemaValidatorBooleanLocator
{
  locate()
  {
    return new SchemaValidatorBoolean
  }
}

module.exports = SchemaValidatorBooleanLocator


/***/ }),

/***/ "./src/core/common/schema/validator/csv/error/invalid.js":
/*!***************************************************************!*\
  !*** ./src/core/common/schema/validator/csv/error/invalid.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidCsvError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_CSV'
  }
}

module.exports = InvalidCsvError


/***/ }),

/***/ "./src/core/common/schema/validator/csv/index.js":
/*!*******************************************************!*\
  !*** ./src/core/common/schema/validator/csv/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidCsvError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/csv/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorCsv
{
  valid(options, data)
  {
    if(Array.isArray(data) === false)
    {
      const msg = `Invalid type: "${typeof data}", csv (comma seperated values) string expected`
      throw new InvalidCsvError(msg)
    }

    if(options['not-empty']
    &&!data.length)
    {
      const msg = `Must not be empty`
      throw new InvalidCsvError(msg)
    }

    if('min' in options
    && data.length < options.min)
    {
      const msg = `Length of values must be minimum: "${options.min}" long`
      throw new InvalidCsvError(msg)
    }

    if('max' in options
    && data.length > options.max)
    {
      const msg = `Length of values can't be more then: "${options.max}" long`
      throw new InvalidCsvError(msg)
    }

    if(options.enum
    &&!data.every((value) => options.enum.includes(value)))
    {
      const msg = `Expected all values of the csv to be one of the enumeral values: "${options.enum}"`
      throw new InvalidCsvError(msg)
    }

    if(options.uppercase
    &&!data.every((value) => value === data.toUpperCase()))
    {
      const msg = `Upper case string expected`
      throw new InvalidCsvError(msg)
    }

    if(options.lowercase && !data.every((value) => value === data.toLowerCase()))
    {
      const msg = `Lower case string expected`
      throw new InvalidCsvError(msg)
    }
  }
}

module.exports = SchemaValidatorCsv


/***/ }),

/***/ "./src/core/common/schema/validator/csv/locator.js":
/*!*********************************************************!*\
  !*** ./src/core/common/schema/validator/csv/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorString = __webpack_require__(/*! . */ "./src/core/common/schema/validator/csv/index.js")

class SchemaValidatorStringLocator
{
  locate()
  {
    return new SchemaValidatorString
  }
}

module.exports = SchemaValidatorStringLocator


/***/ }),

/***/ "./src/core/common/schema/validator/decimal/error/invalid.js":
/*!*******************************************************************!*\
  !*** ./src/core/common/schema/validator/decimal/error/invalid.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidDecimalError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_DECIMAL'
  }
}

module.exports = InvalidDecimalError


/***/ }),

/***/ "./src/core/common/schema/validator/decimal/index.js":
/*!***********************************************************!*\
  !*** ./src/core/common/schema/validator/decimal/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidDecimalError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/decimal/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorDecimal
{
  valid(options, data)
  {
    if(typeof data !== 'number')
    {
      const msg = `Invalid type: "${typeof data}", number expected`
      throw new InvalidDecimalError(msg)
    }

    if(options.unsigned
    && data < 0)
    {
      const msg = `Expected an unsigned decimal`
      throw new InvalidDecimalError(msg)
    }

    if('min' in options
    && data < options.min)
    {
      const msg = `Decimal must be minimum: "${options.min}"`
      throw new InvalidDecimalError(msg)
    }

    if('max' in options
    && data > options.max)
    {
      const msg = `Decimal can't be more then: "${options.max}"`
      throw new InvalidDecimalError(msg)
    }

    if('gt' in options
    && data > options.gt)
    {
      const msg = `Decimal must be more then: "${options.gt}"`
      throw new InvalidDecimalError(msg)
    }

    if('lt' in options
    && data < options.lt)
    {
      const msg = `Decimal must be less then: "${options.lt}"`
      throw new InvalidDecimalError(msg)
    }

    if(options.enum
    &&!options.enum.includes(data))
    {
      const msg = `Expected one of the enumeral values: "${options.enum}"`
      throw new InvalidDecimalError(msg)
    }
  }
}

module.exports = SchemaValidatorDecimal


/***/ }),

/***/ "./src/core/common/schema/validator/decimal/locator.js":
/*!*************************************************************!*\
  !*** ./src/core/common/schema/validator/decimal/locator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorDecimal = __webpack_require__(/*! . */ "./src/core/common/schema/validator/decimal/index.js")

class SchemaValidatorDecimalLocator
{
  locate()
  {
    return new SchemaValidatorDecimal
  }
}

module.exports = SchemaValidatorDecimalLocator


/***/ }),

/***/ "./src/core/common/schema/validator/index.js":
/*!***************************************************!*\
  !*** ./src/core/common/schema/validator/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @interface SchemaValidator
 */

/**
 * @function SchemaValidator#valid
 * @param {Object} options
 * @param {*} data
 * @returns {void}
 */


/***/ }),

/***/ "./src/core/common/schema/validator/integer/error/invalid.js":
/*!*******************************************************************!*\
  !*** ./src/core/common/schema/validator/integer/error/invalid.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidIntegerError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_INTEGER'
  }
}

module.exports = InvalidIntegerError


/***/ }),

/***/ "./src/core/common/schema/validator/integer/index.js":
/*!***********************************************************!*\
  !*** ./src/core/common/schema/validator/integer/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidIntegerError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/integer/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorInteger
{
  valid(options, data)
  {
    if(typeof data !== 'number')
    {
      const msg = `Invalid type: "${typeof data}", number expected`
      throw new InvalidIntegerError(msg)
    }

    if(data !== parseInt(data))
    {
      const msg = `Integer expected, found decimals`
      throw new InvalidIntegerError(msg)
    }

    if(options.unsigned
    && data < 0)
    {
      const msg = `Expected an unsigned integer `
      throw new InvalidIntegerError(msg)
    }

    if('min' in options
    && data < options.min)
    {
      const msg = `Integer must be minimum: "${options.min}"`
      throw new InvalidIntegerError(msg)
    }

    if('max' in options
    && data > options.max)
    {
      const msg = `Integer can't be more then: "${options.max}"`
      throw new InvalidIntegerError(msg)
    }

    if('gt' in options
    && data < options.gt)
    {
      const msg = `Integer must be more then: "${options.gt}"`
      throw new InvalidIntegerError(msg)
    }

    if('lt' in options
    && data > options.lt)
    {
      const msg = `Integer must be less then: "${options.lt}"`
      throw new InvalidIntegerError(msg)
    }

    if(options.enum
    &&!options.enum.includes(data))
    {
      const msg = `Expected one of the enumeral values: "${options.enum}"`
      throw new InvalidIntegerError(msg)
    }
  }
}

module.exports = SchemaValidatorInteger


/***/ }),

/***/ "./src/core/common/schema/validator/integer/locator.js":
/*!*************************************************************!*\
  !*** ./src/core/common/schema/validator/integer/locator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorInteger = __webpack_require__(/*! . */ "./src/core/common/schema/validator/integer/index.js")

class SchemaValidatorIntegerLocator
{
  locate()
  {
    return new SchemaValidatorInteger
  }
}

module.exports = SchemaValidatorIntegerLocator


/***/ }),

/***/ "./src/core/common/schema/validator/json/error/invalid.js":
/*!****************************************************************!*\
  !*** ./src/core/common/schema/validator/json/error/invalid.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidJsonError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_JSON'
  }
}

module.exports = InvalidJsonError


/***/ }),

/***/ "./src/core/common/schema/validator/json/index.js":
/*!********************************************************!*\
  !*** ./src/core/common/schema/validator/json/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidJsonError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/json/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorJson
{
  valid(options, data)
  {
    try
    {
      options.stringified
        ? JSON.parse(data)
        : JSON.stringify(data)
    }
    catch(error)
    {
      const msg = `Unparsable JSON provided`
      throw new InvalidJsonError(msg)
    }
  }
}

module.exports = SchemaValidatorJson


/***/ }),

/***/ "./src/core/common/schema/validator/json/locator.js":
/*!**********************************************************!*\
  !*** ./src/core/common/schema/validator/json/locator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorJson = __webpack_require__(/*! . */ "./src/core/common/schema/validator/json/index.js")

class SchemaValidatorJsonLocator
{
  locate()
  {
    return new SchemaValidatorJson
  }
}

module.exports = SchemaValidatorJsonLocator


/***/ }),

/***/ "./src/core/common/schema/validator/schema/error/invalid.js":
/*!******************************************************************!*\
  !*** ./src/core/common/schema/validator/schema/error/invalid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidSchemaError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_SCHEMA'
  }
}

module.exports = InvalidSchemaError


/***/ }),

/***/ "./src/core/common/schema/validator/schema/index.js":
/*!**********************************************************!*\
  !*** ./src/core/common/schema/validator/schema/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidSchemaError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/schema/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorSchema
{
  valid(options, data)
  {
    // nothing to validate
  }
}

module.exports = SchemaValidatorSchema


/***/ }),

/***/ "./src/core/common/schema/validator/schema/locator.js":
/*!************************************************************!*\
  !*** ./src/core/common/schema/validator/schema/locator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorSchema = __webpack_require__(/*! . */ "./src/core/common/schema/validator/schema/index.js")

class SchemaValidatorSchemaLocator
{
  locate()
  {
    return new SchemaValidatorSchema
  }
}

module.exports = SchemaValidatorSchemaLocator


/***/ }),

/***/ "./src/core/common/schema/validator/string/error/invalid.js":
/*!******************************************************************!*\
  !*** ./src/core/common/schema/validator/string/error/invalid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidStringError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_STRING'
  }
}

module.exports = InvalidStringError


/***/ }),

/***/ "./src/core/common/schema/validator/string/index.js":
/*!**********************************************************!*\
  !*** ./src/core/common/schema/validator/string/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidStringError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/string/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorString
{
  valid(options, data)
  {
    if(typeof data !== 'string')
    {
      const msg = `Invalid type: "${typeof data}", string expected`
      throw new InvalidStringError(msg)
    }

    if(options['not-empty']
    && !data.length)
    {
      const msg = `Must not be empty`
      throw new InvalidStringError(msg)
    }

    if('min' in options
    && data.length < options.min)
    {
      const msg = `String length must be minimum: "${options.min}" long`
      throw new InvalidStringError(msg)
    }

    if('max' in options
    && data.length > options.max)
    {
      const msg = `String length can't be more then: "${options.max}" long`
      throw new InvalidStringError(msg)
    }

    if(options.enum
    &&!options.enum.includes(data))
    {
      const msg = `Expected one of the enumeral values: "${options.enum}"`
      throw new InvalidStringError(msg)
    }

    if(options.uppercase
    && data !== data.toUpperCase())
    {
      const msg = `Upper case string expected`
      throw new InvalidStringError(msg)
    }

    if(options.lowercase
    && data !== data.toLowerCase())
    {
      const msg = `Lower case string expected`
      throw new InvalidStringError(msg)
    }
  }
}

module.exports = SchemaValidatorString


/***/ }),

/***/ "./src/core/common/schema/validator/string/locator.js":
/*!************************************************************!*\
  !*** ./src/core/common/schema/validator/string/locator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorString = __webpack_require__(/*! . */ "./src/core/common/schema/validator/string/index.js")

class SchemaValidatorStringLocator
{
  locate()
  {
    return new SchemaValidatorString
  }
}

module.exports = SchemaValidatorStringLocator


/***/ }),

/***/ "./src/core/common/schema/validator/timestamp/error/invalid.js":
/*!*********************************************************************!*\
  !*** ./src/core/common/schema/validator/timestamp/error/invalid.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @extends {Error}
 */
class InvalidTimestampError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_TIMESTAMP'
  }
}

module.exports = InvalidTimestampError


/***/ }),

/***/ "./src/core/common/schema/validator/timestamp/index.js":
/*!*************************************************************!*\
  !*** ./src/core/common/schema/validator/timestamp/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const InvalidTimestampError = __webpack_require__(/*! ./error/invalid */ "./src/core/common/schema/validator/timestamp/error/invalid.js")
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorTimestamp
{
  valid(options, data)
  {
    if(typeof data !== 'string')
    {
      const msg = `Invalid type: "${typeof data}", string expected`
      throw new InvalidTimestampError(msg)
    }

    const date = new Date(data)

    if('min' in options
    && date.getTime() < new Date(options.min).getTime())
    {
      const msg = `Timestamp must be at least: "${options.min}"`
      throw new InvalidTimestampError(msg)
    }

    if('max' in options
    && date.getTime() > new Date(options.max).getTime())
    {
      const msg = `Timestamp can't be more then: "${options.max}"`
      throw new InvalidTimestampError(msg)
    }

    if('gt' in options
    && date.getTime() > new Date(options.gt).getTime())
    {
      const msg = `Timestamp must be more then: "${options.gt}" long`
      throw new InvalidTimestampError(msg)
    }

    if('lt' in options
    && date.getTime() < new Date(options.lt).getTime())
    {
      const msg = `Timestamp must be less then: "${options.lt}" long`
      throw new InvalidTimestampError(msg)
    }

    if(options.enum
    &&!options.enum.includes(data))
    {
      const msg = `Expected one of the enumeral values: "${options.enum}"`
      throw new InvalidTimestampError(msg)
    }
  }
}

module.exports = SchemaValidatorTimestamp


/***/ }),

/***/ "./src/core/common/schema/validator/timestamp/locator.js":
/*!***************************************************************!*\
  !*** ./src/core/common/schema/validator/timestamp/locator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SchemaValidatorString = __webpack_require__(/*! . */ "./src/core/common/schema/validator/timestamp/index.js")

class SchemaValidatorStringLocator
{
  locate()
  {
    return new SchemaValidatorString
  }
}

module.exports = SchemaValidatorStringLocator


/***/ }),

/***/ "./src/core/common/service-loader/error/service-locator-not-found.js":
/*!***************************************************************************!*\
  !*** ./src/core/common/service-loader/error/service-locator-not-found.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ServiceLocatorNotFoundError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SERVICE_LOCATOR_NOT_FOUND'
  }
}

module.exports = ServiceLocatorNotFoundError


/***/ }),

/***/ "./src/core/common/service-loader/error/service-unable-to-resolve-dependencies.js":
/*!****************************************************************************************!*\
  !*** ./src/core/common/service-loader/error/service-unable-to-resolve-dependencies.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ServiceUnableToResolveDependenciesError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SERVICE_UNABLE_TO_RESOLVE_DEPENDENCIES'
  }
}

module.exports = ServiceUnableToResolveDependenciesError


/***/ }),

/***/ "./src/core/common/service-loader/error/service-unmet-dependency.js":
/*!**************************************************************************!*\
  !*** ./src/core/common/service-loader/error/service-unmet-dependency.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ServiceUnmetDependencyError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_SERVICE_UNMET_DEPENDENCY'
  }
}

module.exports = ServiceUnmetDependencyError


/***/ }),

/***/ "./src/core/common/service-loader/index.js":
/*!*************************************************!*\
  !*** ./src/core/common/service-loader/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ServiceUnableToResolveDependenciesError = __webpack_require__(/*! ./error/service-unable-to-resolve-dependencies */ "./src/core/common/service-loader/error/service-unable-to-resolve-dependencies.js")

class ServiceLoader
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * Eager loading the services in the sevice locator.
   * Recursion queue to complete loading all services.
   * @param {Array<string>} services names of services
   */
  async loadServiceRecursion(services)
  {
    // when the queu is empty, then we are done
    if(services.length === 0)
      return

    // incomplete services that could not be loaded in the declared order
    const queue = []

    // looping through different service names in an attempt to eager load them
    // if an "unmet dependency" error is thrown, the service name is pushed to a queue to be located at a later stage
    // in hope that the earlier unmet dependency then is locatable
    for(const serviceName of services)
    {
      try
      {
        await this.loadService(serviceName)
      }
      catch(error)
      {
        switch(error.code)
        {
        case 'E_SERVICE_UNMET_DEPENDENCY':
          queue.push(serviceName)
          break
        default:
          throw error
        }
      }
    }

    // if the new queue is the same as the old queue, then no progress has taken place
    if(services.length === queue.length)
      throw new ServiceUnableToResolveDependenciesError(`Unmet dependencies found, could not resolve dependencies for ${queue.join(', ')}`)

    // recursion until the queue is empty
    await this.loadServiceRecursion(queue)
  }

  async loadService(name)
  {
    throw new Error('Method not implemented')
  }
}

module.exports = ServiceLoader


/***/ }),

/***/ "./src/core/common/string/config.js":
/*!******************************************!*\
  !*** ./src/core/common/string/config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dirname =   false || 'core/common/string'

module.exports = {
  'core' :
  {
    'locator' :
    {
      'core/string' : dirname
    }
  }
}


/***/ }),

/***/ "./src/core/common/string/index.js":
/*!*****************************************!*\
  !*** ./src/core/common/string/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class CoreString
{
  trim(s)
  {
    return s.trim()
  }

  /**
   * @example "foobar" => "Foobar"
   * @param {string} s input to be manipulated
   * @returns {string}
   */
  capitalize(s)
  {
    return s[0].toUpperCase() + s.slice(1)
  }

  /**
   * @example "Foo BAR baz" => "foo-bar-baz"
   * @param {string} s input to be manipulated
   * @param {string} [separator='-'] string to be used as the separator
   * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
   */
  hyphenate(
    s,
    separator = '-'
  )
  {
    return s.replace(/\W+/g, separator).toLowerCase()
  }

  /**
   * @example "Foo BAR baz" => "fooBarBaz"
   * @param {string} s input to be manipulated
   * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
   */
  camelCase(s)
  {
    s = this.lowercase(s)
    s = s.split('-').map((substring, i) =>
    {
      return i === 0 ? substring : this.capitalize(substring)
    }).join('')

    return s
  }

  lowercase(s)
  {
    return s.toLowerCase()
  }

  uppercase(s)
  {
    return s.toLowerCase()
  }
}

module.exports = CoreString


/***/ }),

/***/ "./src/core/common/string/locator.js":
/*!*******************************************!*\
  !*** ./src/core/common/string/locator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CoreString = __webpack_require__(/*! . */ "./src/core/common/string/index.js")

class CoreStringLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CoreString()
  }
}

module.exports = CoreStringLocator


/***/ }),

/***/ "./src/core/config.js":
/*!****************************!*\
  !*** ./src/core/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'core' : { }
}


/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Core
{
  constructor(locator, configFetcher, serviceLoader)
  {
    this.locator           = locator
    this.configFetcher     = configFetcher
    this.serviceLoader     = serviceLoader
    this.components        = {}
  }

  add(component, pathname)
  {
    this.components[component] = pathname
  }

  remove(component)
  {
    delete this.components[component]
  }

  async load()
  {
    const configuration = this.locate('core/configuration')

    // extending the configurations of every component
    for(const component in this.components)
    {
      const config = await this.configFetcher.fetchComponentConfig(component, this.components[component])
      configuration.extend(config)
    }

    configuration.freeze()

    const
    serviceMap    = configuration.find('core.locator'),
    serviceNames  = Object.keys(serviceMap)

    // eager loading the services in the sevice locator
    await this.serviceLoader.loadServiceRecursion(serviceNames)
  }

  locate(service)
  {
    return this.locator.locate(service)
  }
}

module.exports = Core


/***/ }),

/***/ "./src/core/node/config-fetcher sync recursive":
/*!*******************************************!*\
  !*** ./src/core/node/config-fetcher sync ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/core/node/config-fetcher sync recursive";

/***/ }),

/***/ "./src/core/node/config-fetcher/index.js":
/*!***********************************************!*\
  !*** ./src/core/node/config-fetcher/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var ConfigFetcher=__webpack_require__(/*! core/common/config-fetcher */ "./src/core/common/config-fetcher/index.js"),ComponentNotResolvableError=__webpack_require__(/*! core/common/config-fetcher/error/component-not-resolvable */ "./src/core/common/config-fetcher/error/component-not-resolvable.js"),NodeConfigFetcher=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"fetchComponentConfig",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(e,f){var g,h,i,j,k;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:g=d.locator.locate("core/node/path"),h="".concat(c,"/config"),i="".concat(g.main.dirname,"/").concat(b,"/config"),j="".concat(b,"/config"),k="".concat(g.resolve(false,"../.."),"/").concat(b,"/config"),g.isResolvable(h)?e(__webpack_require__("./src/core/node/config-fetcher sync recursive")(h)):g.isResolvable(i)?e(__webpack_require__("./src/core/node/config-fetcher sync recursive")(i)):g.isResolvable(j)?e(__webpack_require__("./src/core/node/config-fetcher sync recursive")(j)):g.isResolvable(k)?e(__webpack_require__("./src/core/node/config-fetcher sync recursive")(k)):f(new ComponentNotResolvableError("could not resolve path to component \"".concat(b,"\"")));case 2:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a)}));return function fetchComponentConfig(){return a.apply(this,arguments)}}()}]),b}(ConfigFetcher);module.exports=NodeConfigFetcher;

/***/ }),

/***/ "./src/core/node/eventbus/bootstrap/index.js":
/*!***************************************************!*\
  !*** ./src/core/node/eventbus/bootstrap/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ObserverContractNotHoneredError=__webpack_require__(/*! core/common/observer/error/observer-contract-not-honered */ "./src/core/common/observer/error/observer-contract-not-honered.js"),EventBusBootstrap=function(){function a(b,c,d){_classCallCheck(this,a),this.configuration=b,this.eventbus=c,this.locator=d}return _createClass(a,[{key:"bootstrap",value:function bootstrap(){var a=this.configuration.find("eventbus.observers");for(var i in a){var b=!0,c=!1,d=void 0;try{for(var e,f=a[i][Symbol.iterator]();!(b=(e=f.next()).done);b=!0){var g=e.value,h=this.locator.locate(g);if("function"!=typeof h.observe)throw new ObserverContractNotHoneredError("\"".concat(g,"\" does not implement the EventBusObserver interface"));var j=h.observe.bind(h);this.eventbus.on(i,j)}}catch(a){c=!0,d=a}finally{try{b||null==f["return"]||f["return"]()}finally{if(c)throw d}}}}}]),a}();module.exports=EventBusBootstrap;

/***/ }),

/***/ "./src/core/node/eventbus/bootstrap/locator.js":
/*!*****************************************************!*\
  !*** ./src/core/node/eventbus/bootstrap/locator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var EventBusBootstrap=__webpack_require__(/*! . */ "./src/core/node/eventbus/bootstrap/index.js"),EventBusBootstrapLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/configuration"),b=this.locator.locate("core/node/eventbus");return new EventBusBootstrap(a,b,this.locator)}}]),a}();module.exports=EventBusBootstrapLocator;

/***/ }),

/***/ "./src/core/node/eventbus/config.js":
/*!******************************************!*\
  !*** ./src/core/node/eventbus/config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={bootstrap:{eventbus:"core/node/eventbus/bootstrap"},locator:{"core/node/eventbus":false,"core/node/eventbus/bootstrap":"".concat(false,"/bootstrap")},eventbus:{options:{},observers:{}}};

/***/ }),

/***/ "./src/core/node/eventbus/index.js":
/*!*****************************************!*\
  !*** ./src/core/node/eventbus/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _get(a,b,c){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c):e.value}},_get(a,b,c||a)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var Events=__webpack_require__(/*! events */ "./node_modules/events/events.js"),EventBus=function(a){function b(a,c,d){var e;return _classCallCheck(this,b),e=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),e.observers=c,e.console=d,e}return _inherits(b,a),_createClass(b,[{key:"emit",value:function emit(a,c){this.observers.includes(a)||this.console.warning("event: \"".concat(a,"\" does not have a defined observer")),_get(_getPrototypeOf(b.prototype),"emit",this).call(this,a,{name:a,data:c})}}]),b}(Events);module.exports=EventBus;

/***/ }),

/***/ "./src/core/node/eventbus/locator.js":
/*!*******************************************!*\
  !*** ./src/core/node/eventbus/locator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var EventBus=__webpack_require__(/*! . */ "./src/core/node/eventbus/index.js"),EventBusLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/configuration"),b=a.find("eventbus.options"),c=a.find("eventbus.observers"),d=Object.keys(c||{}),e=this.locator.locate("core/console/factory"),f=e.create(),g=new EventBus(b,d,f);return g}}]),a}();module.exports=EventBusLocator;

/***/ }),

/***/ "./src/core/node/factory.js":
/*!**********************************!*\
  !*** ./src/core/node/factory.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Core=__webpack_require__(/*! .. */ "./src/core/index.js"),Locator=__webpack_require__(/*! core/common/locator */ "./src/core/common/locator/index.js"),Deepclone=__webpack_require__(/*! core/common/deepclone */ "./src/core/common/deepclone/index.js"),Deepfreeze=__webpack_require__(/*! core/common/deepfreeze */ "./src/core/common/deepfreeze/index.js"),Deepfind=__webpack_require__(/*! core/common/deepfind */ "./src/core/common/deepfind/index.js"),Deepmerge=__webpack_require__(/*! core/common/deepmerge */ "./src/core/common/deepmerge/index.js"),DeepAssign=__webpack_require__(/*! core/common/deepassign */ "./src/core/common/deepassign/index.js"),Configuration=__webpack_require__(/*! core/common/configuration */ "./src/core/common/configuration/index.js"),ConfigFetcher=__webpack_require__(/*! core/node/config-fetcher */ "./src/core/node/config-fetcher/index.js"),ServiceLoader=__webpack_require__(/*! core/node/service-loader */ "./src/core/node/service-loader/index.js"),Path=__webpack_require__(/*! core/node/path */ "./src/core/node/path/index.js"),CoreFactory=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"create",value:function create(){var a=this.createLocator(),b=new ConfigFetcher(a),c=new ServiceLoader(a),d=new Core(a,b,c);return d.add("core/bootstrap"),d.add("core/console"),d.add("core/object"),d.add("core/schema"),d.add("core/node/process"),d.add("core/node/schema/bootstrap"),d.add("core/string"),d.add("core/data-structure"),d.add("core/node/eventbus"),d.add("core"),d}},{key:"createLocator",value:function createLocator(){var a=new Locator,b=new Deepclone,c=new Deepfreeze,d=new Deepmerge,e=new Deepfind,f=__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js"),g=new Path(f),h=new DeepAssign(b),i=new Configuration(b,d,e,c);return a.set("core/node/path",g),a.set("core/deepclone",b),a.set("core/deepfreeze",c),a.set("core/deepmerge",d),a.set("core/deepfind",e),a.set("core/deepassign",h),a.set("core/configuration",i),a}}]),a}();module.exports=CoreFactory;

/***/ }),

/***/ "./src/core/node/path sync recursive":
/*!*********************************!*\
  !*** ./src/core/node/path sync ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/core/node/path sync recursive";

/***/ }),

/***/ "./src/core/node/path/config.js":
/*!**************************************!*\
  !*** ./src/core/node/path/config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={core:{locator:{"core/node/path":false}}};

/***/ }),

/***/ "./src/core/node/path/index.js":
/*!*************************************!*\
  !*** ./src/core/node/path/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Path=function(){function a(b){_classCallCheck(this,a);var c=__webpack_require__.c[__webpack_require__.s].filename,d=this.dirname(c);this.main={filename:c,dirname:d},this.path=b}return _createClass(a,[{key:"isResolvable",value:function isResolvable(a){try{return /*require.resolve*/(__webpack_require__("./src/core/node/path sync recursive").resolve(a)),!0}catch(a){return!1}}},{key:"dirname",value:function dirname(a){return this.path.dirname(a)}},{key:"normalize",value:function normalize(a){return this.path.normalize(a)}},{key:"extension",value:function extension(a){return this.path.extname(a)}},{key:"isAbsolute",value:function isAbsolute(a){return this.path.isAbsolute(a)}},{key:"resolve",value:function resolve(){var a;return(a=this.path).resolve.apply(a,arguments)}}]),a}();module.exports=Path;

/***/ }),

/***/ "./src/core/node/path/locator.js":
/*!***************************************!*\
  !*** ./src/core/node/path/locator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Path=__webpack_require__(/*! . */ "./src/core/node/path/index.js"),PathLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){var a=__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");return new Path(a)}}]),a}();module.exports=PathLocator;

/***/ }),

/***/ "./src/core/node/process/bootstrap/index.js":
/*!**************************************************!*\
  !*** ./src/core/node/process/bootstrap/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ProcessBootstrap=function(){function a(b){_classCallCheck(this,a),this.eventbus=b}return _createClass(a,[{key:"bootstrap",value:function bootstrap(){process.on("unhandledRejection",this.onError.bind(this)),process.on("uncaughtException",this.onError.bind(this))}},{key:"onError",value:function onError(a,b){b&&b.domain?b.domain.emit("error",a):process.domain?process.domain.emit("error",a):this.eventbus.emit("core.error",a)}}]),a}();module.exports=ProcessBootstrap;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/core/node/process/bootstrap/locator.js":
/*!****************************************************!*\
  !*** ./src/core/node/process/bootstrap/locator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ProcessBootstrap=__webpack_require__(/*! . */ "./src/core/node/process/bootstrap/index.js"),ProcessBootstrapLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/node/eventbus");return new ProcessBootstrap(a)}}]),a}();module.exports=ProcessBootstrapLocator;

/***/ }),

/***/ "./src/core/node/process/config.js":
/*!*****************************************!*\
  !*** ./src/core/node/process/config.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={bootstrap:{process:"process/bootstrap"},locator:{"core/node/process":false,"core/node/process/bootstrap":"".concat(false,"/bootstrap")}};

/***/ }),

/***/ "./src/core/node/process/index.js":
/*!****************************************!*\
  !*** ./src/core/node/process/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Process=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"exit",value:function exit(){var a;(a=process).exit.apply(a,arguments)}}]),a}();module.exports=Process;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/core/node/process/locator.js":
/*!******************************************!*\
  !*** ./src/core/node/process/locator.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Process=__webpack_require__(/*! . */ "./src/core/node/process/index.js"),ProcessLocator=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"locate",value:function locate(){return new Process}}]),a}();module.exports=ProcessLocator;

/***/ }),

/***/ "./src/core/node/schema/bootstrap sync recursive":
/*!*********************************************!*\
  !*** ./src/core/node/schema/bootstrap sync ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/core/node/schema/bootstrap sync recursive";

/***/ }),

/***/ "./src/core/node/schema/bootstrap/config.js":
/*!**************************************************!*\
  !*** ./src/core/node/schema/bootstrap/config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={core:{bootstrap:{schema:"core/schema/bootstrap"},locator:{"core/schema/bootstrap":false}}};

/***/ }),

/***/ "./src/core/node/schema/bootstrap/index.js":
/*!*************************************************!*\
  !*** ./src/core/node/schema/bootstrap/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaNotResolvable=__webpack_require__(/*! core/common/schema/error/schema-not-resolvable */ "./src/core/common/schema/error/schema-not-resolvable.js"),SchemaBootstrap=function(){function a(b,c,d){_classCallCheck(this,a),this.locator=b,this.configuration=c,this.path=d}return _createClass(a,[{key:"bootstrap",value:function bootstrap(){var a=this.locator.locate("core/schema/composer"),b=this.configuration.find("core.schema.composer"),c=this.configuration.find("core.schema.filter"),d=this.configuration.find("core.schema.validator");this.addSchemas(a,b),this.addFilters(a,c),this.addValidators(a,d)}},{key:"addSchemas",value:function addSchemas(a,b){for(var c in b||[])if(this.path.isResolvable(b[c])){var d=__webpack_require__("./src/core/node/schema/bootstrap sync recursive")(b[c]);a.addSchema(c,d)}else throw new SchemaNotResolvable("Could not resolve path for schema: \"".concat(c,"\", path: \"").concat(b[c],"\""))}},{key:"addFilters",value:function addFilters(a,b){for(var c in b||[]){var d=this.locator.locate(b[c]);a.addFilter(c,d)}}},{key:"addValidators",value:function addValidators(a,b){for(var c in b||[]){var d=this.locator.locate(b[c]);a.addValidator(c,d)}}}]),a}();module.exports=SchemaBootstrap;

/***/ }),

/***/ "./src/core/node/schema/bootstrap/locator.js":
/*!***************************************************!*\
  !*** ./src/core/node/schema/bootstrap/locator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaBootstrap=__webpack_require__(/*! . */ "./src/core/node/schema/bootstrap/index.js"),SchemaBootstrapLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/configuration"),b=this.locator.locate("core/node/path");return new SchemaBootstrap(this.locator,a,b)}}]),a}();module.exports=SchemaBootstrapLocator;

/***/ }),

/***/ "./src/core/node/service-loader sync recursive":
/*!*******************************************!*\
  !*** ./src/core/node/service-loader sync ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/core/node/service-loader sync recursive";

/***/ }),

/***/ "./src/core/node/service-loader/index.js":
/*!***********************************************!*\
  !*** ./src/core/node/service-loader/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var ServiceUnmetDependencyError=__webpack_require__(/*! core/common/service-loader/error/service-unmet-dependency */ "./src/core/common/service-loader/error/service-unmet-dependency.js"),ServiceLocatorNotFoundError=__webpack_require__(/*! core/common/service-loader/error/service-locator-not-found */ "./src/core/common/service-loader/error/service-locator-not-found.js"),ServiceLoader=__webpack_require__(/*! core/common/service-loader */ "./src/core/common/service-loader/index.js"),NodeServiceLoader=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"loadService",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(a,d){var e=c.locator.locate("core/configuration"),f=c.locator.locate("core/node/path"),g="".concat(e.find("core.locator")[b],"/locator");if(f.isResolvable(g)){var h=__webpack_require__("./src/core/node/service-loader sync recursive")(g),i=new h(c.locator);try{var j=i.locate();c.locator.set(b,j),a()}catch(a){switch(a.code){case"E_SERVICE_UNDEFINED":{d(new ServiceUnmetDependencyError("An unmet dependency was found for service \"".concat(b,"\", error: ").concat(a.message)));break}default:d(a);}}}else d(new ServiceLocatorNotFoundError("locator could not be found for ".concat(b)))}));case 1:case"end":return a.stop();}},a)}));return function loadService(){return a.apply(this,arguments)}}()}]),b}(ServiceLoader);module.exports=NodeServiceLoader;

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map
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
/******/ 	deferredModules.push(["./dist/browser/core/browser/app/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/browser sync recursive ^\\.\\/.*$":
/*!************************************!*\
  !*** ./dist/browser sync ^\.\/.*$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core": "./dist/browser/core/index.js",
	"./core/": "./dist/browser/core/index.js",
	"./core/browser/app": "./dist/browser/core/browser/app/index.js",
	"./core/browser/app/": "./dist/browser/core/browser/app/index.js",
	"./core/browser/app/index": "./dist/browser/core/browser/app/index.js",
	"./core/browser/app/index.js": "./dist/browser/core/browser/app/index.js",
	"./core/browser/config-fetcher": "./dist/browser/core/browser/config-fetcher/index.js",
	"./core/browser/config-fetcher/": "./dist/browser/core/browser/config-fetcher/index.js",
	"./core/browser/config-fetcher/error/component-not-resolvable": "./dist/browser/core/browser/config-fetcher/error/component-not-resolvable.js",
	"./core/browser/config-fetcher/error/component-not-resolvable.js": "./dist/browser/core/browser/config-fetcher/error/component-not-resolvable.js",
	"./core/browser/config-fetcher/index": "./dist/browser/core/browser/config-fetcher/index.js",
	"./core/browser/config-fetcher/index.js": "./dist/browser/core/browser/config-fetcher/index.js",
	"./core/browser/console": "./dist/browser/core/browser/console/index.js",
	"./core/browser/console/": "./dist/browser/core/browser/console/index.js",
	"./core/browser/console/config": "./dist/browser/core/browser/console/config.js",
	"./core/browser/console/config.js": "./dist/browser/core/browser/console/config.js",
	"./core/browser/console/factory": "./dist/browser/core/browser/console/factory/index.js",
	"./core/browser/console/factory/": "./dist/browser/core/browser/console/factory/index.js",
	"./core/browser/console/factory/index": "./dist/browser/core/browser/console/factory/index.js",
	"./core/browser/console/factory/index.js": "./dist/browser/core/browser/console/factory/index.js",
	"./core/browser/console/factory/locator": "./dist/browser/core/browser/console/factory/locator.js",
	"./core/browser/console/factory/locator.js": "./dist/browser/core/browser/console/factory/locator.js",
	"./core/browser/console/index": "./dist/browser/core/browser/console/index.js",
	"./core/browser/console/index.js": "./dist/browser/core/browser/console/index.js",
	"./core/browser/dom-ready": "./dist/browser/core/browser/dom-ready/index.js",
	"./core/browser/dom-ready/": "./dist/browser/core/browser/dom-ready/index.js",
	"./core/browser/dom-ready/index": "./dist/browser/core/browser/dom-ready/index.js",
	"./core/browser/dom-ready/index.js": "./dist/browser/core/browser/dom-ready/index.js",
	"./core/browser/eventbus/bootstrap": "./dist/browser/core/browser/eventbus/bootstrap/index.js",
	"./core/browser/eventbus/bootstrap/": "./dist/browser/core/browser/eventbus/bootstrap/index.js",
	"./core/browser/eventbus/bootstrap/error/observer-contract-not-honered": "./dist/browser/core/browser/eventbus/bootstrap/error/observer-contract-not-honered.js",
	"./core/browser/eventbus/bootstrap/error/observer-contract-not-honered.js": "./dist/browser/core/browser/eventbus/bootstrap/error/observer-contract-not-honered.js",
	"./core/browser/eventbus/bootstrap/index": "./dist/browser/core/browser/eventbus/bootstrap/index.js",
	"./core/browser/eventbus/bootstrap/index.js": "./dist/browser/core/browser/eventbus/bootstrap/index.js",
	"./core/browser/eventbus/bootstrap/locator": "./dist/browser/core/browser/eventbus/bootstrap/locator.js",
	"./core/browser/eventbus/bootstrap/locator.js": "./dist/browser/core/browser/eventbus/bootstrap/locator.js",
	"./core/browser/eventbus/config": "./dist/browser/core/browser/eventbus/config.js",
	"./core/browser/eventbus/config.js": "./dist/browser/core/browser/eventbus/config.js",
	"./core/browser/factory": "./dist/browser/core/browser/factory.js",
	"./core/browser/factory.js": "./dist/browser/core/browser/factory.js",
	"./core/browser/is-ie": "./dist/browser/core/browser/is-ie/index.js",
	"./core/browser/is-ie/": "./dist/browser/core/browser/is-ie/index.js",
	"./core/browser/is-ie/index": "./dist/browser/core/browser/is-ie/index.js",
	"./core/browser/is-ie/index.js": "./dist/browser/core/browser/is-ie/index.js",
	"./core/browser/schema/bootstrap": "./dist/browser/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/": "./dist/browser/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/config": "./dist/browser/core/browser/schema/bootstrap/config.js",
	"./core/browser/schema/bootstrap/config.js": "./dist/browser/core/browser/schema/bootstrap/config.js",
	"./core/browser/schema/bootstrap/index": "./dist/browser/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/index.js": "./dist/browser/core/browser/schema/bootstrap/index.js",
	"./core/browser/schema/bootstrap/locator": "./dist/browser/core/browser/schema/bootstrap/locator.js",
	"./core/browser/schema/bootstrap/locator.js": "./dist/browser/core/browser/schema/bootstrap/locator.js",
	"./core/browser/service-loader": "./dist/browser/core/browser/service-loader/index.js",
	"./core/browser/service-loader/": "./dist/browser/core/browser/service-loader/index.js",
	"./core/browser/service-loader/error/service-locator-not-found": "./dist/browser/core/browser/service-loader/error/service-locator-not-found.js",
	"./core/browser/service-loader/error/service-locator-not-found.js": "./dist/browser/core/browser/service-loader/error/service-locator-not-found.js",
	"./core/browser/service-loader/error/service-unable-to-resolve-dependencies": "./dist/browser/core/browser/service-loader/error/service-unable-to-resolve-dependencies.js",
	"./core/browser/service-loader/error/service-unable-to-resolve-dependencies.js": "./dist/browser/core/browser/service-loader/error/service-unable-to-resolve-dependencies.js",
	"./core/browser/service-loader/error/service-unmet-dependency": "./dist/browser/core/browser/service-loader/error/service-unmet-dependency.js",
	"./core/browser/service-loader/error/service-unmet-dependency.js": "./dist/browser/core/browser/service-loader/error/service-unmet-dependency.js",
	"./core/browser/service-loader/index": "./dist/browser/core/browser/service-loader/index.js",
	"./core/browser/service-loader/index.js": "./dist/browser/core/browser/service-loader/index.js",
	"./core/common/bootstrap": "./dist/browser/core/common/bootstrap/index.js",
	"./core/common/bootstrap/": "./dist/browser/core/common/bootstrap/index.js",
	"./core/common/bootstrap/config": "./dist/browser/core/common/bootstrap/config.js",
	"./core/common/bootstrap/config.js": "./dist/browser/core/common/bootstrap/config.js",
	"./core/common/bootstrap/index": "./dist/browser/core/common/bootstrap/index.js",
	"./core/common/bootstrap/index.js": "./dist/browser/core/common/bootstrap/index.js",
	"./core/common/bootstrap/locator": "./dist/browser/core/common/bootstrap/locator.js",
	"./core/common/bootstrap/locator.js": "./dist/browser/core/common/bootstrap/locator.js",
	"./core/common/bus": "./dist/browser/core/common/bus/index.js",
	"./core/common/bus/": "./dist/browser/core/common/bus/index.js",
	"./core/common/bus/bootstrap": "./dist/browser/core/common/bus/bootstrap/index.js",
	"./core/common/bus/bootstrap/": "./dist/browser/core/common/bus/bootstrap/index.js",
	"./core/common/bus/bootstrap/error/observer-contract-not-honered": "./dist/browser/core/common/bus/bootstrap/error/observer-contract-not-honered.js",
	"./core/common/bus/bootstrap/error/observer-contract-not-honered.js": "./dist/browser/core/common/bus/bootstrap/error/observer-contract-not-honered.js",
	"./core/common/bus/bootstrap/index": "./dist/browser/core/common/bus/bootstrap/index.js",
	"./core/common/bus/bootstrap/index.js": "./dist/browser/core/common/bus/bootstrap/index.js",
	"./core/common/bus/bootstrap/locator": "./dist/browser/core/common/bus/bootstrap/locator.js",
	"./core/common/bus/bootstrap/locator.js": "./dist/browser/core/common/bus/bootstrap/locator.js",
	"./core/common/bus/config": "./dist/browser/core/common/bus/config.js",
	"./core/common/bus/config.js": "./dist/browser/core/common/bus/config.js",
	"./core/common/bus/factory": "./dist/browser/core/common/bus/factory/index.js",
	"./core/common/bus/factory/": "./dist/browser/core/common/bus/factory/index.js",
	"./core/common/bus/factory/index": "./dist/browser/core/common/bus/factory/index.js",
	"./core/common/bus/factory/index.js": "./dist/browser/core/common/bus/factory/index.js",
	"./core/common/bus/factory/locator": "./dist/browser/core/common/bus/factory/locator.js",
	"./core/common/bus/factory/locator.js": "./dist/browser/core/common/bus/factory/locator.js",
	"./core/common/bus/index": "./dist/browser/core/common/bus/index.js",
	"./core/common/bus/index.js": "./dist/browser/core/common/bus/index.js",
	"./core/common/bus/log": "./dist/browser/core/common/bus/log/index.js",
	"./core/common/bus/log/": "./dist/browser/core/common/bus/log/index.js",
	"./core/common/bus/log/index": "./dist/browser/core/common/bus/log/index.js",
	"./core/common/bus/log/index.js": "./dist/browser/core/common/bus/log/index.js",
	"./core/common/bus/log/locator": "./dist/browser/core/common/bus/log/locator.js",
	"./core/common/bus/log/locator.js": "./dist/browser/core/common/bus/log/locator.js",
	"./core/common/bus/schema/entity/bus": "./dist/browser/core/common/bus/schema/entity/bus.js",
	"./core/common/bus/schema/entity/bus.js": "./dist/browser/core/common/bus/schema/entity/bus.js",
	"./core/common/channel": "./dist/browser/core/common/channel/index.js",
	"./core/common/channel/": "./dist/browser/core/common/channel/index.js",
	"./core/common/channel/config": "./dist/browser/core/common/channel/config.js",
	"./core/common/channel/config.js": "./dist/browser/core/common/channel/config.js",
	"./core/common/channel/factory": "./dist/browser/core/common/channel/factory/index.js",
	"./core/common/channel/factory/": "./dist/browser/core/common/channel/factory/index.js",
	"./core/common/channel/factory/index": "./dist/browser/core/common/channel/factory/index.js",
	"./core/common/channel/factory/index.js": "./dist/browser/core/common/channel/factory/index.js",
	"./core/common/channel/factory/locator": "./dist/browser/core/common/channel/factory/locator.js",
	"./core/common/channel/factory/locator.js": "./dist/browser/core/common/channel/factory/locator.js",
	"./core/common/channel/index": "./dist/browser/core/common/channel/index.js",
	"./core/common/channel/index.js": "./dist/browser/core/common/channel/index.js",
	"./core/common/channel/schema/dto/event": "./dist/browser/core/common/channel/schema/dto/event.js",
	"./core/common/channel/schema/dto/event-meta": "./dist/browser/core/common/channel/schema/dto/event-meta.js",
	"./core/common/channel/schema/dto/event-meta.js": "./dist/browser/core/common/channel/schema/dto/event-meta.js",
	"./core/common/channel/schema/dto/event.js": "./dist/browser/core/common/channel/schema/dto/event.js",
	"./core/common/channel/schema/entity/channel": "./dist/browser/core/common/channel/schema/entity/channel.js",
	"./core/common/channel/schema/entity/channel.js": "./dist/browser/core/common/channel/schema/entity/channel.js",
	"./core/common/config-fetcher": "./dist/browser/core/common/config-fetcher/index.js",
	"./core/common/config-fetcher/": "./dist/browser/core/common/config-fetcher/index.js",
	"./core/common/config-fetcher/index": "./dist/browser/core/common/config-fetcher/index.js",
	"./core/common/config-fetcher/index.js": "./dist/browser/core/common/config-fetcher/index.js",
	"./core/common/configuration": "./dist/browser/core/common/configuration/index.js",
	"./core/common/configuration/": "./dist/browser/core/common/configuration/index.js",
	"./core/common/configuration/config": "./dist/browser/core/common/configuration/config.js",
	"./core/common/configuration/config.js": "./dist/browser/core/common/configuration/config.js",
	"./core/common/configuration/index": "./dist/browser/core/common/configuration/index.js",
	"./core/common/configuration/index.js": "./dist/browser/core/common/configuration/index.js",
	"./core/common/configuration/locator": "./dist/browser/core/common/configuration/locator.js",
	"./core/common/configuration/locator.js": "./dist/browser/core/common/configuration/locator.js",
	"./core/common/console": "./dist/browser/core/common/console/index.js",
	"./core/common/console/": "./dist/browser/core/common/console/index.js",
	"./core/common/console/config": "./dist/browser/core/common/console/config.js",
	"./core/common/console/config.js": "./dist/browser/core/common/console/config.js",
	"./core/common/console/factory": "./dist/browser/core/common/console/factory/index.js",
	"./core/common/console/factory/": "./dist/browser/core/common/console/factory/index.js",
	"./core/common/console/factory/index": "./dist/browser/core/common/console/factory/index.js",
	"./core/common/console/factory/index.js": "./dist/browser/core/common/console/factory/index.js",
	"./core/common/console/factory/locator": "./dist/browser/core/common/console/factory/locator.js",
	"./core/common/console/factory/locator.js": "./dist/browser/core/common/console/factory/locator.js",
	"./core/common/console/index": "./dist/browser/core/common/console/index.js",
	"./core/common/console/index.js": "./dist/browser/core/common/console/index.js",
	"./core/common/data-structure/associative-array": "./dist/browser/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/": "./dist/browser/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/factory": "./dist/browser/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/": "./dist/browser/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/index": "./dist/browser/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/index.js": "./dist/browser/core/common/data-structure/associative-array/factory/index.js",
	"./core/common/data-structure/associative-array/factory/locator": "./dist/browser/core/common/data-structure/associative-array/factory/locator.js",
	"./core/common/data-structure/associative-array/factory/locator.js": "./dist/browser/core/common/data-structure/associative-array/factory/locator.js",
	"./core/common/data-structure/associative-array/index": "./dist/browser/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/index.js": "./dist/browser/core/common/data-structure/associative-array/index.js",
	"./core/common/data-structure/associative-array/locator": "./dist/browser/core/common/data-structure/associative-array/locator.js",
	"./core/common/data-structure/associative-array/locator.js": "./dist/browser/core/common/data-structure/associative-array/locator.js",
	"./core/common/data-structure/config": "./dist/browser/core/common/data-structure/config.js",
	"./core/common/data-structure/config.js": "./dist/browser/core/common/data-structure/config.js",
	"./core/common/data-structure/graph": "./dist/browser/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/": "./dist/browser/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/error/node-not-exists": "./dist/browser/core/common/data-structure/graph/error/node-not-exists.js",
	"./core/common/data-structure/graph/error/node-not-exists.js": "./dist/browser/core/common/data-structure/graph/error/node-not-exists.js",
	"./core/common/data-structure/graph/factory": "./dist/browser/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/": "./dist/browser/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/index": "./dist/browser/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/index.js": "./dist/browser/core/common/data-structure/graph/factory/index.js",
	"./core/common/data-structure/graph/factory/locator": "./dist/browser/core/common/data-structure/graph/factory/locator.js",
	"./core/common/data-structure/graph/factory/locator.js": "./dist/browser/core/common/data-structure/graph/factory/locator.js",
	"./core/common/data-structure/graph/index": "./dist/browser/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/index.js": "./dist/browser/core/common/data-structure/graph/index.js",
	"./core/common/data-structure/graph/locator": "./dist/browser/core/common/data-structure/graph/locator.js",
	"./core/common/data-structure/graph/locator.js": "./dist/browser/core/common/data-structure/graph/locator.js",
	"./core/common/data-structure/multiple-associative-array": "./dist/browser/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/": "./dist/browser/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/factory": "./dist/browser/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/": "./dist/browser/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/index": "./dist/browser/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/index.js": "./dist/browser/core/common/data-structure/multiple-associative-array/factory/index.js",
	"./core/common/data-structure/multiple-associative-array/factory/locator": "./dist/browser/core/common/data-structure/multiple-associative-array/factory/locator.js",
	"./core/common/data-structure/multiple-associative-array/factory/locator.js": "./dist/browser/core/common/data-structure/multiple-associative-array/factory/locator.js",
	"./core/common/data-structure/multiple-associative-array/index": "./dist/browser/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/index.js": "./dist/browser/core/common/data-structure/multiple-associative-array/index.js",
	"./core/common/data-structure/multiple-associative-array/locator": "./dist/browser/core/common/data-structure/multiple-associative-array/locator.js",
	"./core/common/data-structure/multiple-associative-array/locator.js": "./dist/browser/core/common/data-structure/multiple-associative-array/locator.js",
	"./core/common/data-structure/object": "./dist/browser/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/": "./dist/browser/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/config": "./dist/browser/core/common/data-structure/object/config.js",
	"./core/common/data-structure/object/config.js": "./dist/browser/core/common/data-structure/object/config.js",
	"./core/common/data-structure/object/index": "./dist/browser/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/index.js": "./dist/browser/core/common/data-structure/object/index.js",
	"./core/common/data-structure/object/locator": "./dist/browser/core/common/data-structure/object/locator.js",
	"./core/common/data-structure/object/locator.js": "./dist/browser/core/common/data-structure/object/locator.js",
	"./core/common/data-structure/queue": "./dist/browser/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/": "./dist/browser/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/factory": "./dist/browser/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/": "./dist/browser/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/index": "./dist/browser/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/index.js": "./dist/browser/core/common/data-structure/queue/factory/index.js",
	"./core/common/data-structure/queue/factory/locator": "./dist/browser/core/common/data-structure/queue/factory/locator.js",
	"./core/common/data-structure/queue/factory/locator.js": "./dist/browser/core/common/data-structure/queue/factory/locator.js",
	"./core/common/data-structure/queue/index": "./dist/browser/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/index.js": "./dist/browser/core/common/data-structure/queue/index.js",
	"./core/common/data-structure/queue/locator": "./dist/browser/core/common/data-structure/queue/locator.js",
	"./core/common/data-structure/queue/locator.js": "./dist/browser/core/common/data-structure/queue/locator.js",
	"./core/common/data-structure/schema/validator": "./dist/browser/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/": "./dist/browser/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/associative-array": "./dist/browser/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/": "./dist/browser/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array": "./dist/browser/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js",
	"./core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js": "./dist/browser/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js",
	"./core/common/data-structure/schema/validator/associative-array/index": "./dist/browser/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/index.js": "./dist/browser/core/common/data-structure/schema/validator/associative-array/index.js",
	"./core/common/data-structure/schema/validator/associative-array/locator": "./dist/browser/core/common/data-structure/schema/validator/associative-array/locator.js",
	"./core/common/data-structure/schema/validator/associative-array/locator.js": "./dist/browser/core/common/data-structure/schema/validator/associative-array/locator.js",
	"./core/common/data-structure/schema/validator/collection": "./dist/browser/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/": "./dist/browser/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/error/invalid-collection": "./dist/browser/core/common/data-structure/schema/validator/collection/error/invalid-collection.js",
	"./core/common/data-structure/schema/validator/collection/error/invalid-collection.js": "./dist/browser/core/common/data-structure/schema/validator/collection/error/invalid-collection.js",
	"./core/common/data-structure/schema/validator/collection/index": "./dist/browser/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/index.js": "./dist/browser/core/common/data-structure/schema/validator/collection/index.js",
	"./core/common/data-structure/schema/validator/collection/locator": "./dist/browser/core/common/data-structure/schema/validator/collection/locator.js",
	"./core/common/data-structure/schema/validator/collection/locator.js": "./dist/browser/core/common/data-structure/schema/validator/collection/locator.js",
	"./core/common/data-structure/schema/validator/custom-json": "./dist/browser/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/": "./dist/browser/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/error/invalid-json": "./dist/browser/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js",
	"./core/common/data-structure/schema/validator/custom-json/error/invalid-json.js": "./dist/browser/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js",
	"./core/common/data-structure/schema/validator/custom-json/index": "./dist/browser/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/index.js": "./dist/browser/core/common/data-structure/schema/validator/custom-json/index.js",
	"./core/common/data-structure/schema/validator/custom-json/locator": "./dist/browser/core/common/data-structure/schema/validator/custom-json/locator.js",
	"./core/common/data-structure/schema/validator/custom-json/locator.js": "./dist/browser/core/common/data-structure/schema/validator/custom-json/locator.js",
	"./core/common/data-structure/schema/validator/index": "./dist/browser/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/index.js": "./dist/browser/core/common/data-structure/schema/validator/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/index": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/index.js": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/index.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/locator": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/locator.js": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/common/data-structure/schema/value-object/associative-array": "./dist/browser/core/common/data-structure/schema/value-object/associative-array.js",
	"./core/common/data-structure/schema/value-object/associative-array.js": "./dist/browser/core/common/data-structure/schema/value-object/associative-array.js",
	"./core/common/data-structure/schema/value-object/edge": "./dist/browser/core/common/data-structure/schema/value-object/edge.js",
	"./core/common/data-structure/schema/value-object/edge.js": "./dist/browser/core/common/data-structure/schema/value-object/edge.js",
	"./core/common/data-structure/schema/value-object/graph": "./dist/browser/core/common/data-structure/schema/value-object/graph.js",
	"./core/common/data-structure/schema/value-object/graph.js": "./dist/browser/core/common/data-structure/schema/value-object/graph.js",
	"./core/common/data-structure/schema/value-object/multiple-associative-array": "./dist/browser/core/common/data-structure/schema/value-object/multiple-associative-array.js",
	"./core/common/data-structure/schema/value-object/multiple-associative-array.js": "./dist/browser/core/common/data-structure/schema/value-object/multiple-associative-array.js",
	"./core/common/data-structure/schema/value-object/node": "./dist/browser/core/common/data-structure/schema/value-object/node.js",
	"./core/common/data-structure/schema/value-object/node.js": "./dist/browser/core/common/data-structure/schema/value-object/node.js",
	"./core/common/data-structure/schema/value-object/queue": "./dist/browser/core/common/data-structure/schema/value-object/queue.js",
	"./core/common/data-structure/schema/value-object/queue.js": "./dist/browser/core/common/data-structure/schema/value-object/queue.js",
	"./core/common/data-structure/schema/value-object/stack": "./dist/browser/core/common/data-structure/schema/value-object/stack.js",
	"./core/common/data-structure/schema/value-object/stack.js": "./dist/browser/core/common/data-structure/schema/value-object/stack.js",
	"./core/common/data-structure/schema/value-object/tree": "./dist/browser/core/common/data-structure/schema/value-object/tree.js",
	"./core/common/data-structure/schema/value-object/tree.js": "./dist/browser/core/common/data-structure/schema/value-object/tree.js",
	"./core/common/data-structure/stack": "./dist/browser/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/": "./dist/browser/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/factory": "./dist/browser/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/": "./dist/browser/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/index": "./dist/browser/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/index.js": "./dist/browser/core/common/data-structure/stack/factory/index.js",
	"./core/common/data-structure/stack/factory/locator": "./dist/browser/core/common/data-structure/stack/factory/locator.js",
	"./core/common/data-structure/stack/factory/locator.js": "./dist/browser/core/common/data-structure/stack/factory/locator.js",
	"./core/common/data-structure/stack/index": "./dist/browser/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/index.js": "./dist/browser/core/common/data-structure/stack/index.js",
	"./core/common/data-structure/stack/locator": "./dist/browser/core/common/data-structure/stack/locator.js",
	"./core/common/data-structure/stack/locator.js": "./dist/browser/core/common/data-structure/stack/locator.js",
	"./core/common/data-structure/tree": "./dist/browser/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/": "./dist/browser/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/factory": "./dist/browser/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/": "./dist/browser/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/index": "./dist/browser/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/index.js": "./dist/browser/core/common/data-structure/tree/factory/index.js",
	"./core/common/data-structure/tree/factory/locator": "./dist/browser/core/common/data-structure/tree/factory/locator.js",
	"./core/common/data-structure/tree/factory/locator.js": "./dist/browser/core/common/data-structure/tree/factory/locator.js",
	"./core/common/data-structure/tree/index": "./dist/browser/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/index.js": "./dist/browser/core/common/data-structure/tree/index.js",
	"./core/common/data-structure/tree/locator": "./dist/browser/core/common/data-structure/tree/locator.js",
	"./core/common/data-structure/tree/locator.js": "./dist/browser/core/common/data-structure/tree/locator.js",
	"./core/common/deepassign": "./dist/browser/core/common/deepassign/index.js",
	"./core/common/deepassign/": "./dist/browser/core/common/deepassign/index.js",
	"./core/common/deepassign/config": "./dist/browser/core/common/deepassign/config.js",
	"./core/common/deepassign/config.js": "./dist/browser/core/common/deepassign/config.js",
	"./core/common/deepassign/error/not-an-object": "./dist/browser/core/common/deepassign/error/not-an-object.js",
	"./core/common/deepassign/error/not-an-object.js": "./dist/browser/core/common/deepassign/error/not-an-object.js",
	"./core/common/deepassign/index": "./dist/browser/core/common/deepassign/index.js",
	"./core/common/deepassign/index.js": "./dist/browser/core/common/deepassign/index.js",
	"./core/common/deepassign/locator": "./dist/browser/core/common/deepassign/locator.js",
	"./core/common/deepassign/locator.js": "./dist/browser/core/common/deepassign/locator.js",
	"./core/common/deepclone": "./dist/browser/core/common/deepclone/index.js",
	"./core/common/deepclone/": "./dist/browser/core/common/deepclone/index.js",
	"./core/common/deepclone/config": "./dist/browser/core/common/deepclone/config.js",
	"./core/common/deepclone/config.js": "./dist/browser/core/common/deepclone/config.js",
	"./core/common/deepclone/error/failed-to-clone": "./dist/browser/core/common/deepclone/error/failed-to-clone.js",
	"./core/common/deepclone/error/failed-to-clone.js": "./dist/browser/core/common/deepclone/error/failed-to-clone.js",
	"./core/common/deepclone/index": "./dist/browser/core/common/deepclone/index.js",
	"./core/common/deepclone/index.js": "./dist/browser/core/common/deepclone/index.js",
	"./core/common/deepclone/locator": "./dist/browser/core/common/deepclone/locator.js",
	"./core/common/deepclone/locator.js": "./dist/browser/core/common/deepclone/locator.js",
	"./core/common/deepfind": "./dist/browser/core/common/deepfind/index.js",
	"./core/common/deepfind/": "./dist/browser/core/common/deepfind/index.js",
	"./core/common/deepfind/config": "./dist/browser/core/common/deepfind/config.js",
	"./core/common/deepfind/config.js": "./dist/browser/core/common/deepfind/config.js",
	"./core/common/deepfind/index": "./dist/browser/core/common/deepfind/index.js",
	"./core/common/deepfind/index.js": "./dist/browser/core/common/deepfind/index.js",
	"./core/common/deepfind/locator": "./dist/browser/core/common/deepfind/locator.js",
	"./core/common/deepfind/locator.js": "./dist/browser/core/common/deepfind/locator.js",
	"./core/common/deepfreeze": "./dist/browser/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/": "./dist/browser/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/config": "./dist/browser/core/common/deepfreeze/config.js",
	"./core/common/deepfreeze/config.js": "./dist/browser/core/common/deepfreeze/config.js",
	"./core/common/deepfreeze/index": "./dist/browser/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/index.js": "./dist/browser/core/common/deepfreeze/index.js",
	"./core/common/deepfreeze/locator": "./dist/browser/core/common/deepfreeze/locator.js",
	"./core/common/deepfreeze/locator.js": "./dist/browser/core/common/deepfreeze/locator.js",
	"./core/common/deepmerge": "./dist/browser/core/common/deepmerge/index.js",
	"./core/common/deepmerge/": "./dist/browser/core/common/deepmerge/index.js",
	"./core/common/deepmerge/config": "./dist/browser/core/common/deepmerge/config.js",
	"./core/common/deepmerge/config.js": "./dist/browser/core/common/deepmerge/config.js",
	"./core/common/deepmerge/index": "./dist/browser/core/common/deepmerge/index.js",
	"./core/common/deepmerge/index.js": "./dist/browser/core/common/deepmerge/index.js",
	"./core/common/deepmerge/locator": "./dist/browser/core/common/deepmerge/locator.js",
	"./core/common/deepmerge/locator.js": "./dist/browser/core/common/deepmerge/locator.js",
	"./core/common/locator": "./dist/browser/core/common/locator/index.js",
	"./core/common/locator/": "./dist/browser/core/common/locator/index.js",
	"./core/common/locator/constituent": "./dist/browser/core/common/locator/constituent.js",
	"./core/common/locator/constituent.js": "./dist/browser/core/common/locator/constituent.js",
	"./core/common/locator/error/locator-not-implemented": "./dist/browser/core/common/locator/error/locator-not-implemented.js",
	"./core/common/locator/error/locator-not-implemented.js": "./dist/browser/core/common/locator/error/locator-not-implemented.js",
	"./core/common/locator/error/service-undefined": "./dist/browser/core/common/locator/error/service-undefined.js",
	"./core/common/locator/error/service-undefined.js": "./dist/browser/core/common/locator/error/service-undefined.js",
	"./core/common/locator/index": "./dist/browser/core/common/locator/index.js",
	"./core/common/locator/index.js": "./dist/browser/core/common/locator/index.js",
	"./core/common/object": "./dist/browser/core/common/object/index.js",
	"./core/common/object/": "./dist/browser/core/common/object/index.js",
	"./core/common/object/config": "./dist/browser/core/common/object/config.js",
	"./core/common/object/config.js": "./dist/browser/core/common/object/config.js",
	"./core/common/object/index": "./dist/browser/core/common/object/index.js",
	"./core/common/object/index.js": "./dist/browser/core/common/object/index.js",
	"./core/common/object/locator": "./dist/browser/core/common/object/locator.js",
	"./core/common/object/locator.js": "./dist/browser/core/common/object/locator.js",
	"./core/common/observer/config": "./dist/browser/core/common/observer/config.js",
	"./core/common/observer/config.js": "./dist/browser/core/common/observer/config.js",
	"./core/common/observer/error": "./dist/browser/core/common/observer/error/index.js",
	"./core/common/observer/error/": "./dist/browser/core/common/observer/error/index.js",
	"./core/common/observer/error/index": "./dist/browser/core/common/observer/error/index.js",
	"./core/common/observer/error/index.js": "./dist/browser/core/common/observer/error/index.js",
	"./core/common/observer/error/locator": "./dist/browser/core/common/observer/error/locator.js",
	"./core/common/observer/error/locator.js": "./dist/browser/core/common/observer/error/locator.js",
	"./core/common/observer/info": "./dist/browser/core/common/observer/info/index.js",
	"./core/common/observer/info/": "./dist/browser/core/common/observer/info/index.js",
	"./core/common/observer/info/index": "./dist/browser/core/common/observer/info/index.js",
	"./core/common/observer/info/index.js": "./dist/browser/core/common/observer/info/index.js",
	"./core/common/observer/info/locator": "./dist/browser/core/common/observer/info/locator.js",
	"./core/common/observer/info/locator.js": "./dist/browser/core/common/observer/info/locator.js",
	"./core/common/observer/observer": "./dist/browser/core/common/observer/observer.js",
	"./core/common/observer/observer.js": "./dist/browser/core/common/observer/observer.js",
	"./core/common/observer/warning": "./dist/browser/core/common/observer/warning/index.js",
	"./core/common/observer/warning/": "./dist/browser/core/common/observer/warning/index.js",
	"./core/common/observer/warning/index": "./dist/browser/core/common/observer/warning/index.js",
	"./core/common/observer/warning/index.js": "./dist/browser/core/common/observer/warning/index.js",
	"./core/common/observer/warning/locator": "./dist/browser/core/common/observer/warning/locator.js",
	"./core/common/observer/warning/locator.js": "./dist/browser/core/common/observer/warning/locator.js",
	"./core/common/schema/composer": "./dist/browser/core/common/schema/composer/index.js",
	"./core/common/schema/composer/": "./dist/browser/core/common/schema/composer/index.js",
	"./core/common/schema/composer/error/filter-is-not-honering-contract": "./dist/browser/core/common/schema/composer/error/filter-is-not-honering-contract.js",
	"./core/common/schema/composer/error/filter-is-not-honering-contract.js": "./dist/browser/core/common/schema/composer/error/filter-is-not-honering-contract.js",
	"./core/common/schema/composer/error/invalid-attribute": "./dist/browser/core/common/schema/composer/error/invalid-attribute.js",
	"./core/common/schema/composer/error/invalid-attribute.js": "./dist/browser/core/common/schema/composer/error/invalid-attribute.js",
	"./core/common/schema/composer/error/invalid-collection": "./dist/browser/core/common/schema/composer/error/invalid-collection.js",
	"./core/common/schema/composer/error/invalid-collection.js": "./dist/browser/core/common/schema/composer/error/invalid-collection.js",
	"./core/common/schema/composer/error/invalid-schema": "./dist/browser/core/common/schema/composer/error/invalid-schema.js",
	"./core/common/schema/composer/error/invalid-schema.js": "./dist/browser/core/common/schema/composer/error/invalid-schema.js",
	"./core/common/schema/composer/error/schema-not-found": "./dist/browser/core/common/schema/composer/error/schema-not-found.js",
	"./core/common/schema/composer/error/schema-not-found.js": "./dist/browser/core/common/schema/composer/error/schema-not-found.js",
	"./core/common/schema/composer/error/validator-is-not-honering-contract": "./dist/browser/core/common/schema/composer/error/validator-is-not-honering-contract.js",
	"./core/common/schema/composer/error/validator-is-not-honering-contract.js": "./dist/browser/core/common/schema/composer/error/validator-is-not-honering-contract.js",
	"./core/common/schema/composer/error/validator-not-found": "./dist/browser/core/common/schema/composer/error/validator-not-found.js",
	"./core/common/schema/composer/error/validator-not-found.js": "./dist/browser/core/common/schema/composer/error/validator-not-found.js",
	"./core/common/schema/composer/index": "./dist/browser/core/common/schema/composer/index.js",
	"./core/common/schema/composer/index.js": "./dist/browser/core/common/schema/composer/index.js",
	"./core/common/schema/composer/locator": "./dist/browser/core/common/schema/composer/locator.js",
	"./core/common/schema/composer/locator.js": "./dist/browser/core/common/schema/composer/locator.js",
	"./core/common/schema/config": "./dist/browser/core/common/schema/config.js",
	"./core/common/schema/config.js": "./dist/browser/core/common/schema/config.js",
	"./core/common/schema/error/schema-not-resolvable": "./dist/browser/core/common/schema/error/schema-not-resolvable.js",
	"./core/common/schema/error/schema-not-resolvable.js": "./dist/browser/core/common/schema/error/schema-not-resolvable.js",
	"./core/common/schema/filter": "./dist/browser/core/common/schema/filter/index.js",
	"./core/common/schema/filter/": "./dist/browser/core/common/schema/filter/index.js",
	"./core/common/schema/filter/boolean": "./dist/browser/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/": "./dist/browser/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/index": "./dist/browser/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/index.js": "./dist/browser/core/common/schema/filter/boolean/index.js",
	"./core/common/schema/filter/boolean/locator": "./dist/browser/core/common/schema/filter/boolean/locator.js",
	"./core/common/schema/filter/boolean/locator.js": "./dist/browser/core/common/schema/filter/boolean/locator.js",
	"./core/common/schema/filter/csv": "./dist/browser/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/": "./dist/browser/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/index": "./dist/browser/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/index.js": "./dist/browser/core/common/schema/filter/csv/index.js",
	"./core/common/schema/filter/csv/locator": "./dist/browser/core/common/schema/filter/csv/locator.js",
	"./core/common/schema/filter/csv/locator.js": "./dist/browser/core/common/schema/filter/csv/locator.js",
	"./core/common/schema/filter/decimal": "./dist/browser/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/": "./dist/browser/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/index": "./dist/browser/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/index.js": "./dist/browser/core/common/schema/filter/decimal/index.js",
	"./core/common/schema/filter/decimal/locator": "./dist/browser/core/common/schema/filter/decimal/locator.js",
	"./core/common/schema/filter/decimal/locator.js": "./dist/browser/core/common/schema/filter/decimal/locator.js",
	"./core/common/schema/filter/index": "./dist/browser/core/common/schema/filter/index.js",
	"./core/common/schema/filter/index.js": "./dist/browser/core/common/schema/filter/index.js",
	"./core/common/schema/filter/integer": "./dist/browser/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/": "./dist/browser/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/index": "./dist/browser/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/index.js": "./dist/browser/core/common/schema/filter/integer/index.js",
	"./core/common/schema/filter/integer/locator": "./dist/browser/core/common/schema/filter/integer/locator.js",
	"./core/common/schema/filter/integer/locator.js": "./dist/browser/core/common/schema/filter/integer/locator.js",
	"./core/common/schema/filter/json": "./dist/browser/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/": "./dist/browser/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/index": "./dist/browser/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/index.js": "./dist/browser/core/common/schema/filter/json/index.js",
	"./core/common/schema/filter/json/locator": "./dist/browser/core/common/schema/filter/json/locator.js",
	"./core/common/schema/filter/json/locator.js": "./dist/browser/core/common/schema/filter/json/locator.js",
	"./core/common/schema/filter/schema": "./dist/browser/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/": "./dist/browser/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/error/missing-schema-definition": "./dist/browser/core/common/schema/filter/schema/error/missing-schema-definition.js",
	"./core/common/schema/filter/schema/error/missing-schema-definition.js": "./dist/browser/core/common/schema/filter/schema/error/missing-schema-definition.js",
	"./core/common/schema/filter/schema/index": "./dist/browser/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/index.js": "./dist/browser/core/common/schema/filter/schema/index.js",
	"./core/common/schema/filter/schema/locator": "./dist/browser/core/common/schema/filter/schema/locator.js",
	"./core/common/schema/filter/schema/locator.js": "./dist/browser/core/common/schema/filter/schema/locator.js",
	"./core/common/schema/filter/string": "./dist/browser/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/": "./dist/browser/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/index": "./dist/browser/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/index.js": "./dist/browser/core/common/schema/filter/string/index.js",
	"./core/common/schema/filter/string/locator": "./dist/browser/core/common/schema/filter/string/locator.js",
	"./core/common/schema/filter/string/locator.js": "./dist/browser/core/common/schema/filter/string/locator.js",
	"./core/common/schema/filter/timestamp": "./dist/browser/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/": "./dist/browser/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/index": "./dist/browser/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/index.js": "./dist/browser/core/common/schema/filter/timestamp/index.js",
	"./core/common/schema/filter/timestamp/locator": "./dist/browser/core/common/schema/filter/timestamp/locator.js",
	"./core/common/schema/filter/timestamp/locator.js": "./dist/browser/core/common/schema/filter/timestamp/locator.js",
	"./core/common/schema/validator": "./dist/browser/core/common/schema/validator/index.js",
	"./core/common/schema/validator/": "./dist/browser/core/common/schema/validator/index.js",
	"./core/common/schema/validator/boolean": "./dist/browser/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/": "./dist/browser/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/error/invalid": "./dist/browser/core/common/schema/validator/boolean/error/invalid.js",
	"./core/common/schema/validator/boolean/error/invalid.js": "./dist/browser/core/common/schema/validator/boolean/error/invalid.js",
	"./core/common/schema/validator/boolean/index": "./dist/browser/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/index.js": "./dist/browser/core/common/schema/validator/boolean/index.js",
	"./core/common/schema/validator/boolean/locator": "./dist/browser/core/common/schema/validator/boolean/locator.js",
	"./core/common/schema/validator/boolean/locator.js": "./dist/browser/core/common/schema/validator/boolean/locator.js",
	"./core/common/schema/validator/csv": "./dist/browser/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/": "./dist/browser/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/error/invalid": "./dist/browser/core/common/schema/validator/csv/error/invalid.js",
	"./core/common/schema/validator/csv/error/invalid.js": "./dist/browser/core/common/schema/validator/csv/error/invalid.js",
	"./core/common/schema/validator/csv/index": "./dist/browser/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/index.js": "./dist/browser/core/common/schema/validator/csv/index.js",
	"./core/common/schema/validator/csv/locator": "./dist/browser/core/common/schema/validator/csv/locator.js",
	"./core/common/schema/validator/csv/locator.js": "./dist/browser/core/common/schema/validator/csv/locator.js",
	"./core/common/schema/validator/decimal": "./dist/browser/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/": "./dist/browser/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/error/invalid": "./dist/browser/core/common/schema/validator/decimal/error/invalid.js",
	"./core/common/schema/validator/decimal/error/invalid.js": "./dist/browser/core/common/schema/validator/decimal/error/invalid.js",
	"./core/common/schema/validator/decimal/index": "./dist/browser/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/index.js": "./dist/browser/core/common/schema/validator/decimal/index.js",
	"./core/common/schema/validator/decimal/locator": "./dist/browser/core/common/schema/validator/decimal/locator.js",
	"./core/common/schema/validator/decimal/locator.js": "./dist/browser/core/common/schema/validator/decimal/locator.js",
	"./core/common/schema/validator/index": "./dist/browser/core/common/schema/validator/index.js",
	"./core/common/schema/validator/index.js": "./dist/browser/core/common/schema/validator/index.js",
	"./core/common/schema/validator/integer": "./dist/browser/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/": "./dist/browser/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/error/invalid": "./dist/browser/core/common/schema/validator/integer/error/invalid.js",
	"./core/common/schema/validator/integer/error/invalid.js": "./dist/browser/core/common/schema/validator/integer/error/invalid.js",
	"./core/common/schema/validator/integer/index": "./dist/browser/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/index.js": "./dist/browser/core/common/schema/validator/integer/index.js",
	"./core/common/schema/validator/integer/locator": "./dist/browser/core/common/schema/validator/integer/locator.js",
	"./core/common/schema/validator/integer/locator.js": "./dist/browser/core/common/schema/validator/integer/locator.js",
	"./core/common/schema/validator/json": "./dist/browser/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/": "./dist/browser/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/error/invalid": "./dist/browser/core/common/schema/validator/json/error/invalid.js",
	"./core/common/schema/validator/json/error/invalid.js": "./dist/browser/core/common/schema/validator/json/error/invalid.js",
	"./core/common/schema/validator/json/index": "./dist/browser/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/index.js": "./dist/browser/core/common/schema/validator/json/index.js",
	"./core/common/schema/validator/json/locator": "./dist/browser/core/common/schema/validator/json/locator.js",
	"./core/common/schema/validator/json/locator.js": "./dist/browser/core/common/schema/validator/json/locator.js",
	"./core/common/schema/validator/schema": "./dist/browser/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/": "./dist/browser/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/error/invalid": "./dist/browser/core/common/schema/validator/schema/error/invalid.js",
	"./core/common/schema/validator/schema/error/invalid.js": "./dist/browser/core/common/schema/validator/schema/error/invalid.js",
	"./core/common/schema/validator/schema/index": "./dist/browser/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/index.js": "./dist/browser/core/common/schema/validator/schema/index.js",
	"./core/common/schema/validator/schema/locator": "./dist/browser/core/common/schema/validator/schema/locator.js",
	"./core/common/schema/validator/schema/locator.js": "./dist/browser/core/common/schema/validator/schema/locator.js",
	"./core/common/schema/validator/string": "./dist/browser/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/": "./dist/browser/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/error/invalid": "./dist/browser/core/common/schema/validator/string/error/invalid.js",
	"./core/common/schema/validator/string/error/invalid.js": "./dist/browser/core/common/schema/validator/string/error/invalid.js",
	"./core/common/schema/validator/string/index": "./dist/browser/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/index.js": "./dist/browser/core/common/schema/validator/string/index.js",
	"./core/common/schema/validator/string/locator": "./dist/browser/core/common/schema/validator/string/locator.js",
	"./core/common/schema/validator/string/locator.js": "./dist/browser/core/common/schema/validator/string/locator.js",
	"./core/common/schema/validator/timestamp": "./dist/browser/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/": "./dist/browser/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/error/invalid": "./dist/browser/core/common/schema/validator/timestamp/error/invalid.js",
	"./core/common/schema/validator/timestamp/error/invalid.js": "./dist/browser/core/common/schema/validator/timestamp/error/invalid.js",
	"./core/common/schema/validator/timestamp/index": "./dist/browser/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/index.js": "./dist/browser/core/common/schema/validator/timestamp/index.js",
	"./core/common/schema/validator/timestamp/locator": "./dist/browser/core/common/schema/validator/timestamp/locator.js",
	"./core/common/schema/validator/timestamp/locator.js": "./dist/browser/core/common/schema/validator/timestamp/locator.js",
	"./core/common/service-loader": "./dist/browser/core/common/service-loader/index.js",
	"./core/common/service-loader/": "./dist/browser/core/common/service-loader/index.js",
	"./core/common/service-loader/index": "./dist/browser/core/common/service-loader/index.js",
	"./core/common/service-loader/index.js": "./dist/browser/core/common/service-loader/index.js",
	"./core/common/string": "./dist/browser/core/common/string/index.js",
	"./core/common/string/": "./dist/browser/core/common/string/index.js",
	"./core/common/string/config": "./dist/browser/core/common/string/config.js",
	"./core/common/string/config.js": "./dist/browser/core/common/string/config.js",
	"./core/common/string/index": "./dist/browser/core/common/string/index.js",
	"./core/common/string/index.js": "./dist/browser/core/common/string/index.js",
	"./core/common/string/locator": "./dist/browser/core/common/string/locator.js",
	"./core/common/string/locator.js": "./dist/browser/core/common/string/locator.js",
	"./core/config": "./dist/browser/core/config.js",
	"./core/config.js": "./dist/browser/core/config.js",
	"./core/index": "./dist/browser/core/index.js",
	"./core/index.js": "./dist/browser/core/index.js"
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
webpackContext.id = "./dist/browser sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./dist/browser sync recursive ^\\.\\/.*\\/config$":
/*!********************************************!*\
  !*** ./dist/browser sync ^\.\/.*\/config$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core/browser/console/config": "./dist/browser/core/browser/console/config.js",
	"./core/browser/eventbus/config": "./dist/browser/core/browser/eventbus/config.js",
	"./core/browser/schema/bootstrap/config": "./dist/browser/core/browser/schema/bootstrap/config.js",
	"./core/common/bootstrap/config": "./dist/browser/core/common/bootstrap/config.js",
	"./core/common/bus/config": "./dist/browser/core/common/bus/config.js",
	"./core/common/channel/config": "./dist/browser/core/common/channel/config.js",
	"./core/common/configuration/config": "./dist/browser/core/common/configuration/config.js",
	"./core/common/console/config": "./dist/browser/core/common/console/config.js",
	"./core/common/data-structure/config": "./dist/browser/core/common/data-structure/config.js",
	"./core/common/data-structure/object/config": "./dist/browser/core/common/data-structure/object/config.js",
	"./core/common/deepassign/config": "./dist/browser/core/common/deepassign/config.js",
	"./core/common/deepclone/config": "./dist/browser/core/common/deepclone/config.js",
	"./core/common/deepfind/config": "./dist/browser/core/common/deepfind/config.js",
	"./core/common/deepfreeze/config": "./dist/browser/core/common/deepfreeze/config.js",
	"./core/common/deepmerge/config": "./dist/browser/core/common/deepmerge/config.js",
	"./core/common/object/config": "./dist/browser/core/common/object/config.js",
	"./core/common/observer/config": "./dist/browser/core/common/observer/config.js",
	"./core/common/schema/config": "./dist/browser/core/common/schema/config.js",
	"./core/common/string/config": "./dist/browser/core/common/string/config.js",
	"./core/config": "./dist/browser/core/config.js"
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
webpackContext.id = "./dist/browser sync recursive ^\\.\\/.*\\/config$";

/***/ }),

/***/ "./dist/browser sync recursive ^\\.\\/.*\\/locator$":
/*!*********************************************!*\
  !*** ./dist/browser sync ^\.\/.*\/locator$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./core/browser/console/factory/locator": "./dist/browser/core/browser/console/factory/locator.js",
	"./core/browser/eventbus/bootstrap/locator": "./dist/browser/core/browser/eventbus/bootstrap/locator.js",
	"./core/browser/schema/bootstrap/locator": "./dist/browser/core/browser/schema/bootstrap/locator.js",
	"./core/common/bootstrap/locator": "./dist/browser/core/common/bootstrap/locator.js",
	"./core/common/bus/bootstrap/locator": "./dist/browser/core/common/bus/bootstrap/locator.js",
	"./core/common/bus/factory/locator": "./dist/browser/core/common/bus/factory/locator.js",
	"./core/common/bus/log/locator": "./dist/browser/core/common/bus/log/locator.js",
	"./core/common/channel/factory/locator": "./dist/browser/core/common/channel/factory/locator.js",
	"./core/common/configuration/locator": "./dist/browser/core/common/configuration/locator.js",
	"./core/common/console/factory/locator": "./dist/browser/core/common/console/factory/locator.js",
	"./core/common/data-structure/associative-array/factory/locator": "./dist/browser/core/common/data-structure/associative-array/factory/locator.js",
	"./core/common/data-structure/associative-array/locator": "./dist/browser/core/common/data-structure/associative-array/locator.js",
	"./core/common/data-structure/graph/factory/locator": "./dist/browser/core/common/data-structure/graph/factory/locator.js",
	"./core/common/data-structure/graph/locator": "./dist/browser/core/common/data-structure/graph/locator.js",
	"./core/common/data-structure/multiple-associative-array/factory/locator": "./dist/browser/core/common/data-structure/multiple-associative-array/factory/locator.js",
	"./core/common/data-structure/multiple-associative-array/locator": "./dist/browser/core/common/data-structure/multiple-associative-array/locator.js",
	"./core/common/data-structure/object/locator": "./dist/browser/core/common/data-structure/object/locator.js",
	"./core/common/data-structure/queue/factory/locator": "./dist/browser/core/common/data-structure/queue/factory/locator.js",
	"./core/common/data-structure/queue/locator": "./dist/browser/core/common/data-structure/queue/locator.js",
	"./core/common/data-structure/schema/validator/associative-array/locator": "./dist/browser/core/common/data-structure/schema/validator/associative-array/locator.js",
	"./core/common/data-structure/schema/validator/collection/locator": "./dist/browser/core/common/data-structure/schema/validator/collection/locator.js",
	"./core/common/data-structure/schema/validator/custom-json/locator": "./dist/browser/core/common/data-structure/schema/validator/custom-json/locator.js",
	"./core/common/data-structure/schema/validator/multiple-associative-array/locator": "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/locator.js",
	"./core/common/data-structure/stack/factory/locator": "./dist/browser/core/common/data-structure/stack/factory/locator.js",
	"./core/common/data-structure/stack/locator": "./dist/browser/core/common/data-structure/stack/locator.js",
	"./core/common/data-structure/tree/factory/locator": "./dist/browser/core/common/data-structure/tree/factory/locator.js",
	"./core/common/data-structure/tree/locator": "./dist/browser/core/common/data-structure/tree/locator.js",
	"./core/common/deepassign/locator": "./dist/browser/core/common/deepassign/locator.js",
	"./core/common/deepclone/locator": "./dist/browser/core/common/deepclone/locator.js",
	"./core/common/deepfind/locator": "./dist/browser/core/common/deepfind/locator.js",
	"./core/common/deepfreeze/locator": "./dist/browser/core/common/deepfreeze/locator.js",
	"./core/common/deepmerge/locator": "./dist/browser/core/common/deepmerge/locator.js",
	"./core/common/locator": "./dist/browser/core/common/locator/index.js",
	"./core/common/object/locator": "./dist/browser/core/common/object/locator.js",
	"./core/common/observer/error/locator": "./dist/browser/core/common/observer/error/locator.js",
	"./core/common/observer/info/locator": "./dist/browser/core/common/observer/info/locator.js",
	"./core/common/observer/warning/locator": "./dist/browser/core/common/observer/warning/locator.js",
	"./core/common/schema/composer/locator": "./dist/browser/core/common/schema/composer/locator.js",
	"./core/common/schema/filter/boolean/locator": "./dist/browser/core/common/schema/filter/boolean/locator.js",
	"./core/common/schema/filter/csv/locator": "./dist/browser/core/common/schema/filter/csv/locator.js",
	"./core/common/schema/filter/decimal/locator": "./dist/browser/core/common/schema/filter/decimal/locator.js",
	"./core/common/schema/filter/integer/locator": "./dist/browser/core/common/schema/filter/integer/locator.js",
	"./core/common/schema/filter/json/locator": "./dist/browser/core/common/schema/filter/json/locator.js",
	"./core/common/schema/filter/schema/locator": "./dist/browser/core/common/schema/filter/schema/locator.js",
	"./core/common/schema/filter/string/locator": "./dist/browser/core/common/schema/filter/string/locator.js",
	"./core/common/schema/filter/timestamp/locator": "./dist/browser/core/common/schema/filter/timestamp/locator.js",
	"./core/common/schema/validator/boolean/locator": "./dist/browser/core/common/schema/validator/boolean/locator.js",
	"./core/common/schema/validator/csv/locator": "./dist/browser/core/common/schema/validator/csv/locator.js",
	"./core/common/schema/validator/decimal/locator": "./dist/browser/core/common/schema/validator/decimal/locator.js",
	"./core/common/schema/validator/integer/locator": "./dist/browser/core/common/schema/validator/integer/locator.js",
	"./core/common/schema/validator/json/locator": "./dist/browser/core/common/schema/validator/json/locator.js",
	"./core/common/schema/validator/schema/locator": "./dist/browser/core/common/schema/validator/schema/locator.js",
	"./core/common/schema/validator/string/locator": "./dist/browser/core/common/schema/validator/string/locator.js",
	"./core/common/schema/validator/timestamp/locator": "./dist/browser/core/common/schema/validator/timestamp/locator.js",
	"./core/common/string/locator": "./dist/browser/core/common/string/locator.js"
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
webpackContext.id = "./dist/browser sync recursive ^\\.\\/.*\\/locator$";

/***/ }),

/***/ "./dist/browser/core/browser/app/index.js":
/*!************************************************!*\
  !*** ./dist/browser/core/browser/app/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  var domIsReady = __webpack_require__(/*! core/browser/dom-ready */ "./dist/browser/core/browser/dom-ready/index.js");

  var callback =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var CoreFactory, coreFactory, core;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              CoreFactory = __webpack_require__(/*! core/browser/factory */ "./dist/browser/core/browser/factory.js"), coreFactory = new CoreFactory(), core = coreFactory.create();
              core.load().then(function () {
                core.locate('core/bootstrap').bootstrap().then(function () {
                  var bus = core.locator.locate('core/bus');
                  bus.emit({
                    channelId: 'domain-events',
                    name: 'logged',
                    data: 'que paso parce'
                  });
                  var eventbus = core.locator.locate('core/eventbus');
                  eventbus.emit({
                    name: 'logged',
                    data: 'que paso parce'
                  });
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function callback() {
      return _ref.apply(this, arguments);
    };
  }();

  domIsReady(callback);
})();

/***/ }),

/***/ "./dist/browser/core/browser/config-fetcher/error/component-not-resolvable.js":
/*!************************************************************************************!*\
  !*** ./dist/browser/core/browser/config-fetcher/error/component-not-resolvable.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ComponentNotResolvableError =
/*#__PURE__*/
function (_Error) {
  _inherits(ComponentNotResolvableError, _Error);

  function ComponentNotResolvableError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ComponentNotResolvableError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ComponentNotResolvableError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_COMPONENT_NOT_RESOLVABLE';
    return _this;
  }

  return ComponentNotResolvableError;
}(_wrapNativeSuper(Error));

module.exports = ComponentNotResolvableError;

/***/ }),

/***/ "./dist/browser/core/browser/config-fetcher/index.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/browser/config-fetcher/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentNotResolvableError = __webpack_require__(/*! ./error/component-not-resolvable */ "./dist/browser/core/browser/config-fetcher/error/component-not-resolvable.js");
/**
 * @implements {core/config-fetcher}
 */


var BrowserConfigFetcher =
/*#__PURE__*/
function () {
  function BrowserConfigFetcher(locator) {
    _classCallCheck(this, BrowserConfigFetcher);

    this.locator = locator;
  }

  _createClass(BrowserConfigFetcher, [{
    key: "fetchComponentConfig",
    value: function () {
      var _fetchComponentConfig = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(component, path) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(resolve, reject) {
                    var config;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            try {
                              config = __webpack_require__("./dist/browser sync recursive ^\\.\\/.*\\/config$")("./".concat(path ? path : component, "/config"));
                              resolve(config);
                            } catch (error) {
                              reject(new ComponentNotResolvableError("could not resolve path to component \"".concat(component, "\"")));
                            }

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchComponentConfig(_x, _x2) {
        return _fetchComponentConfig.apply(this, arguments);
      }

      return fetchComponentConfig;
    }()
  }]);

  return BrowserConfigFetcher;
}();

module.exports = BrowserConfigFetcher;

/***/ }),

/***/ "./dist/browser/core/browser/console/config.js":
/*!*****************************************************!*\
  !*** ./dist/browser/core/browser/console/config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/console';
module.exports = {
  'core': {
    // 'bootstrap' :
    // {
    //   'console' : 'core/console/bootstrap'
    // },
    'console': {
      'default': {
        'maxArrayLength': 10,
        'maxObjectDepth': 10,
        'maxStringLength': 300,
        'date': true,
        'dateFormat': 'yyyy-mm-dd HH:MM:ss',
        'debug': true,
        'index': false,
        'prefix': false,
        'inspect': true,
        'separator': '\t',
        'colors': true,
        'color': 'white',
        'background': 'black',
        'showHidden': false,
        'styles': // white, grey, black, blue, cyan, green, magenta, red, yellow, bold, italic, underline, inverse
        {
          'special': 'cyan',
          'number': 'yellow',
          'bigint': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'symbol': 'green',
          'date': 'magenta',
          'regexp': 'red'
        }
      }
    },
    'locator': {
      'core/console/factory': "".concat(dirname, "/factory") // 'core/console/bootstrap' : `${dirname}/bootstrap`

    }
  }
};

/***/ }),

/***/ "./dist/browser/core/browser/console/factory/index.js":
/*!************************************************************!*\
  !*** ./dist/browser/core/browser/console/factory/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Console = __webpack_require__(/*! .. */ "./dist/browser/core/browser/console/index.js");

var BrowserConsoleFactory =
/*#__PURE__*/
function () {
  function BrowserConsoleFactory(_ref) {
    var util = _ref.util,
        dateformat = _ref.dateformat,
        console = _ref.console,
        defaults = _ref.defaults,
        coreString = _ref.coreString;

    _classCallCheck(this, BrowserConsoleFactory);

    this.util = util;
    this.dateformat = dateformat;
    this.console = console;
    this.defaults = defaults;
    this.coreString = coreString;
  }

  _createClass(BrowserConsoleFactory, [{
    key: "create",
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Console({
        coreString: this.coreString,
        util: this.util,
        dateformat: this.dateformat,
        console: this.console,
        config: _objectSpread({}, this.defaults, {}, options)
      });
    }
  }]);

  return BrowserConsoleFactory;
}();

module.exports = BrowserConsoleFactory;

/***/ }),

/***/ "./dist/browser/core/browser/console/factory/locator.js":
/*!**************************************************************!*\
  !*** ./dist/browser/core/browser/console/factory/locator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BrowserConsoleFactory = __webpack_require__(/*! . */ "./dist/browser/core/browser/console/factory/index.js");

var BrowserConsoleFactoryLocator =
/*#__PURE__*/
function () {
  function BrowserConsoleFactoryLocator(locator) {
    _classCallCheck(this, BrowserConsoleFactoryLocator);

    this.locator = locator;
  }

  _createClass(BrowserConsoleFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var util = __webpack_require__(/*! util */ "./node_modules/util/util.js"),
          dateformat = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js"),
          configuration = this.locator.locate('core/configuration').find('core.console'),
          defaults = configuration.default,
          coreString = this.locator.locate('core/string'),
          jsConsole = console;

      return new BrowserConsoleFactory({
        coreString: coreString,
        util: util,
        dateformat: dateformat,
        defaults: defaults,
        console: jsConsole
      });
    }
  }]);

  return BrowserConsoleFactoryLocator;
}();

module.exports = BrowserConsoleFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/browser/console/index.js":
/*!****************************************************!*\
  !*** ./dist/browser/core/browser/console/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CoreConsole = __webpack_require__(/*! core/common/console */ "./dist/browser/core/common/console/index.js");

var BrowserConsole =
/*#__PURE__*/
function (_CoreConsole) {
  _inherits(BrowserConsole, _CoreConsole);

  function BrowserConsole(args) {
    var _this;

    _classCallCheck(this, BrowserConsole);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BrowserConsole).call(this, args));
    _this.color = _this.config.color;
    _this.bg = _this.config.background;
    return _this;
  }

  _createClass(BrowserConsole, [{
    key: "formatOutputString",
    value: function formatOutputString(s) {
      var formatted = _get(_getPrototypeOf(BrowserConsole.prototype), "formatOutputString", this).call(this, s),
          colorized = this.colorize(formatted);

      return colorized;
    }
  }, {
    key: "colorize",
    value: function colorize(s) {
      var css = '';
      if (this.color) css = "color:".concat(this.color, ";");
      if (this.background) css = "background-color:".concat(this.background, ";");
      if (this.config.css && typeof this.config.css === 'string') css = "".concat(css).concat(this.config.css);
      return this.coreString.trim(css) !== '' ? ["%c".concat(s), css] : s;
    }
  }]);

  return BrowserConsole;
}(CoreConsole);

module.exports = BrowserConsole;

/***/ }),

/***/ "./dist/browser/core/browser/dom-ready/index.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/browser/dom-ready/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isIE = __webpack_require__(/*! core/browser/is-ie */ "./dist/browser/core/browser/is-ie/index.js");

module.exports = function (callback) {
  if (callback && typeof callback === 'function') {
    if (isIE()) {
      document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') return callback();
      });
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        return callback();
      });
    }
  } else {
    console.error('The callback is not a function!');
  }
};

/***/ }),

/***/ "./dist/browser/core/browser/eventbus/bootstrap/error/observer-contract-not-honered.js":
/*!*********************************************************************************************!*\
  !*** ./dist/browser/core/browser/eventbus/bootstrap/error/observer-contract-not-honered.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ObserverContractNotHoneredError =
/*#__PURE__*/
function (_Error) {
  _inherits(ObserverContractNotHoneredError, _Error);

  function ObserverContractNotHoneredError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ObserverContractNotHoneredError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ObserverContractNotHoneredError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_BUS_OBSERVER_CONTRACT_NOT_HONERED';
    return _this;
  }

  return ObserverContractNotHoneredError;
}(_wrapNativeSuper(Error));

module.exports = ObserverContractNotHoneredError;

/***/ }),

/***/ "./dist/browser/core/browser/eventbus/bootstrap/index.js":
/*!***************************************************************!*\
  !*** ./dist/browser/core/browser/eventbus/bootstrap/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObserverContractNotHoneredError = __webpack_require__(/*! ./error/observer-contract-not-honered */ "./dist/browser/core/browser/eventbus/bootstrap/error/observer-contract-not-honered.js");

var EventbusBootstrap =
/*#__PURE__*/
function () {
  function EventbusBootstrap(_ref) {
    var configuration = _ref.configuration,
        busChannelFactory = _ref.busChannelFactory,
        locator = _ref.locator;

    _classCallCheck(this, EventbusBootstrap);

    this.configuration = configuration;
    this.busChannelFactory = busChannelFactory;
    this.locator = locator;
  }

  _createClass(EventbusBootstrap, [{
    key: "bootstrap",
    value: function bootstrap() {
      var eventbusConfig = this.configuration.find("core.eventbus"),
          consoleOptions = eventbusConfig.options.console,
          eventbus = this.busChannelFactory.create({
        id: 'eventbus',
        consoleOptions: consoleOptions
      }),
          observers = eventbusConfig.observers;

      for (var event in observers) {
        for (var observerPath in observers[event]) {
          if (!observers[event][observerPath]) continue;
          var observer = this.locator.locate(observerPath);
          if (typeof observer.observe !== 'function') throw new ObserverContractNotHoneredError("\"".concat(observerPath, "\" does not implement the BusObserver interface"));
          eventbus.on({
            observer: observer.observe.bind(observer),
            event: event
          });
        }
      }

      this.locator.set('core/eventbus', eventbus);
    }
  }]);

  return EventbusBootstrap;
}();

module.exports = EventbusBootstrap;

/***/ }),

/***/ "./dist/browser/core/browser/eventbus/bootstrap/locator.js":
/*!*****************************************************************!*\
  !*** ./dist/browser/core/browser/eventbus/bootstrap/locator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventBusBootstrap = __webpack_require__(/*! . */ "./dist/browser/core/browser/eventbus/bootstrap/index.js");

var EventBusBootstrapLocator =
/*#__PURE__*/
function () {
  function EventBusBootstrapLocator(locator) {
    _classCallCheck(this, EventBusBootstrapLocator);

    this.locator = locator;
  }

  _createClass(EventBusBootstrapLocator, [{
    key: "locate",
    value: function locate() {
      var configuration = this.locator.locate('core/configuration'),
          busChannelFactory = this.locator.locate('core/channel/factory');
      return new EventBusBootstrap({
        configuration: configuration,
        busChannelFactory: busChannelFactory,
        locator: this.locator
      });
    }
  }]);

  return EventBusBootstrapLocator;
}();

module.exports = EventBusBootstrapLocator;

/***/ }),

/***/ "./dist/browser/core/browser/eventbus/config.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/browser/eventbus/config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/browser/eventbus';
module.exports = {
  'core': {
    'bootstrap': {
      'eventbus': 'core/eventbus/bootstrap'
    },
    'locator': {
      'core/eventbus/bootstrap': "".concat(dirname, "/bootstrap")
    },
    'eventbus': {
      'options': {
        'console': {
          'prefix': 'WARN'
        }
      },
      'observers': {
        'core.error': {
          'core/observer/error': true
        },
        'core.warning': {
          'core/observer/warning': true
        },
        'core.info': {
          'core/observer/info': true
        }
      }
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/browser/factory.js":
/*!**********************************************!*\
  !*** ./dist/browser/core/browser/factory.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Core = __webpack_require__(/*! core */ "./dist/browser/core/index.js"),
    Locator = __webpack_require__(/*! core/common/locator */ "./dist/browser/core/common/locator/index.js"),
    Deepclone = __webpack_require__(/*! core/common/deepclone */ "./dist/browser/core/common/deepclone/index.js"),
    Deepfreeze = __webpack_require__(/*! core/common/deepfreeze */ "./dist/browser/core/common/deepfreeze/index.js"),
    Deepfind = __webpack_require__(/*! core/common/deepfind */ "./dist/browser/core/common/deepfind/index.js"),
    Deepmerge = __webpack_require__(/*! core/common/deepmerge */ "./dist/browser/core/common/deepmerge/index.js"),
    DeepAssign = __webpack_require__(/*! core/common/deepassign */ "./dist/browser/core/common/deepassign/index.js"),
    Configuration = __webpack_require__(/*! core/common/configuration */ "./dist/browser/core/common/configuration/index.js"),
    ConfigFetcher = __webpack_require__(/*! core/browser/config-fetcher */ "./dist/browser/core/browser/config-fetcher/index.js"),
    ServiceLoader = __webpack_require__(/*! core/browser/service-loader */ "./dist/browser/core/browser/service-loader/index.js");

var CoreFactory =
/*#__PURE__*/
function () {
  function CoreFactory() {
    _classCallCheck(this, CoreFactory);
  }

  _createClass(CoreFactory, [{
    key: "create",
    value: function create() {
      var locator = this.createLocator(),
          configFetcher = new ConfigFetcher(locator),
          serviceLoader = new ServiceLoader(locator),
          core = new Core(locator, configFetcher, serviceLoader);
      core.add('core/bootstrap', 'core/common/bootstrap');
      core.add('core/string', 'core/common/string');
      core.add('core/console', 'core/browser/console');
      core.add('core/schema', 'core/common/schema');
      core.add('core/observer', 'core/common/observer');
      core.add('data-structure', 'core/common/data-structure');
      core.add('core/schema/bootstrap', 'core/browser/schema/bootstrap');
      core.add('core/channel', 'core/common/channel');
      core.add('core/bus', 'core/common/bus');
      core.add('core/eventbus', 'core/browser/eventbus');
      return core;
    }
  }, {
    key: "createLocator",
    value: function createLocator() {
      var locator = new Locator(),
          deepclone = new Deepclone(),
          deepfreeze = new Deepfreeze(),
          deepmerge = new Deepmerge(),
          deepfind = new Deepfind(),
          deepassign = new DeepAssign(deepclone),
          configuration = new Configuration(deepclone, deepmerge, deepfind, deepfreeze);
      locator.set('core/deepclone', deepclone);
      locator.set('core/deepfreeze', deepfreeze);
      locator.set('core/deepmerge', deepmerge);
      locator.set('core/deepfind', deepfind);
      locator.set('core/deepassign', deepassign);
      locator.set('core/configuration', configuration);
      return locator;
    }
  }]);

  return CoreFactory;
}();

module.exports = CoreFactory;

/***/ }),

/***/ "./dist/browser/core/browser/is-ie/index.js":
/*!**************************************************!*\
  !*** ./dist/browser/core/browser/is-ie/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  return !(!document.attachEvent || typeof document.attachEvent === 'undefined');
};

/***/ }),

/***/ "./dist/browser/core/browser/schema/bootstrap/config.js":
/*!**************************************************************!*\
  !*** ./dist/browser/core/browser/schema/bootstrap/config.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/browser/schema/bootstrap';
module.exports = {
  'core': {
    'bootstrap': {
      'schema': 'core/schema/bootstrap'
    },
    'locator': {
      'core/schema/bootstrap': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/browser/schema/bootstrap/index.js":
/*!*************************************************************!*\
  !*** ./dist/browser/core/browser/schema/bootstrap/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaNotResolvable = __webpack_require__(/*! core/common/schema/error/schema-not-resolvable */ "./dist/browser/core/common/schema/error/schema-not-resolvable.js");

var SchemaBootstrap =
/*#__PURE__*/
function () {
  function SchemaBootstrap(locator, configuration) {
    _classCallCheck(this, SchemaBootstrap);

    this.locator = locator;
    this.configuration = configuration;
  }

  _createClass(SchemaBootstrap, [{
    key: "bootstrap",
    value: function bootstrap() {
      var composer = this.locator.locate('core/schema/composer'),
          schemas = this.configuration.find('core.schema.composer'),
          filters = this.configuration.find('core.schema.filter'),
          validators = this.configuration.find('core.schema.validator');
      this.addSchemas(composer, schemas);
      this.addFilters(composer, filters);
      this.addValidators(composer, validators);
    }
  }, {
    key: "addSchemas",
    value: function addSchemas(composer, schemas) {
      for (var schemaName in schemas || []) {
        try {
          var schema = __webpack_require__("./dist/browser sync recursive ^\\.\\/.*$")("./".concat(schemas[schemaName]));

          composer.addSchema(schemaName, schema);
        } catch (error) {
          throw new SchemaNotResolvable("Could not resolve path for schema: \"".concat(schemaName, "\", path: \"").concat(schemas[schemaName], "\""));
        }
      }
    }
  }, {
    key: "addFilters",
    value: function addFilters(composer, filters) {
      for (var filterName in filters || []) {
        var filter = this.locator.locate(filters[filterName]);
        composer.addFilter(filterName, filter);
      }
    }
  }, {
    key: "addValidators",
    value: function addValidators(composer, validators) {
      for (var validatorName in validators || []) {
        var validator = this.locator.locate(validators[validatorName]);
        composer.addValidator(validatorName, validator);
      }
    }
  }]);

  return SchemaBootstrap;
}();

module.exports = SchemaBootstrap;

/***/ }),

/***/ "./dist/browser/core/browser/schema/bootstrap/locator.js":
/*!***************************************************************!*\
  !*** ./dist/browser/core/browser/schema/bootstrap/locator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaBootstrap = __webpack_require__(/*! . */ "./dist/browser/core/browser/schema/bootstrap/index.js");

var SchemaBootstrapLocator =
/*#__PURE__*/
function () {
  function SchemaBootstrapLocator(locator) {
    _classCallCheck(this, SchemaBootstrapLocator);

    this.locator = locator;
  }

  _createClass(SchemaBootstrapLocator, [{
    key: "locate",
    value: function locate() {
      var configuration = this.locator.locate('core/configuration');
      return new SchemaBootstrap(this.locator, configuration);
    }
  }]);

  return SchemaBootstrapLocator;
}();

module.exports = SchemaBootstrapLocator;

/***/ }),

/***/ "./dist/browser/core/browser/service-loader/error/service-locator-not-found.js":
/*!*************************************************************************************!*\
  !*** ./dist/browser/core/browser/service-loader/error/service-locator-not-found.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ServiceLocatorNotFoundError =
/*#__PURE__*/
function (_Error) {
  _inherits(ServiceLocatorNotFoundError, _Error);

  function ServiceLocatorNotFoundError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ServiceLocatorNotFoundError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ServiceLocatorNotFoundError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SERVICE_LOCATOR_NOT_FOUND';
    return _this;
  }

  return ServiceLocatorNotFoundError;
}(_wrapNativeSuper(Error));

module.exports = ServiceLocatorNotFoundError;

/***/ }),

/***/ "./dist/browser/core/browser/service-loader/error/service-unable-to-resolve-dependencies.js":
/*!**************************************************************************************************!*\
  !*** ./dist/browser/core/browser/service-loader/error/service-unable-to-resolve-dependencies.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ServiceUnableToResolveDependenciesError =
/*#__PURE__*/
function (_Error) {
  _inherits(ServiceUnableToResolveDependenciesError, _Error);

  function ServiceUnableToResolveDependenciesError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ServiceUnableToResolveDependenciesError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ServiceUnableToResolveDependenciesError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SERVICE_UNABLE_TO_RESOLVE_DEPENDENCIES';
    return _this;
  }

  return ServiceUnableToResolveDependenciesError;
}(_wrapNativeSuper(Error));

module.exports = ServiceUnableToResolveDependenciesError;

/***/ }),

/***/ "./dist/browser/core/browser/service-loader/error/service-unmet-dependency.js":
/*!************************************************************************************!*\
  !*** ./dist/browser/core/browser/service-loader/error/service-unmet-dependency.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ServiceUnmetDependencyError =
/*#__PURE__*/
function (_Error) {
  _inherits(ServiceUnmetDependencyError, _Error);

  function ServiceUnmetDependencyError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ServiceUnmetDependencyError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ServiceUnmetDependencyError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SERVICE_UNMET_DEPENDENCY';
    return _this;
  }

  return ServiceUnmetDependencyError;
}(_wrapNativeSuper(Error));

module.exports = ServiceUnmetDependencyError;

/***/ }),

/***/ "./dist/browser/core/browser/service-loader/index.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/browser/service-loader/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServiceUnmetDependencyError = __webpack_require__(/*! ./error/service-unmet-dependency */ "./dist/browser/core/browser/service-loader/error/service-unmet-dependency.js"),
    ServiceLocatorNotFoundError = __webpack_require__(/*! ./error/service-locator-not-found */ "./dist/browser/core/browser/service-loader/error/service-locator-not-found.js"),
    ServiceUnableToResolveDependenciesError = __webpack_require__(/*! ./error/service-unable-to-resolve-dependencies */ "./dist/browser/core/browser/service-loader/error/service-unable-to-resolve-dependencies.js");
/**
 * @implements {core/service-loader}
 */


var BrowserServiceLoader =
/*#__PURE__*/
function () {
  function BrowserServiceLoader(locator) {
    _classCallCheck(this, BrowserServiceLoader);

    this.locator = locator;
  }
  /**
   * Eager loading the services in the sevice locator.
   * Recursion queue to complete loading all services.
   * @param {Array<string>} services names of services
   */


  _createClass(BrowserServiceLoader, [{
    key: "loadServiceRecursion",
    value: function () {
      var _loadServiceRecursion = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(services) {
        var queue, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, serviceName;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(services.length === 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                // incomplete services that could not be loaded in the declared order
                queue = []; // looping through different service names in an attempt to eager load them
                // if an "unmet dependency" error is thrown, the service name is pushed to a queue to be located at a later stage
                // in hope that the earlier unmet dependency then is locatable

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = services[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 26;
                  break;
                }

                serviceName = _step.value;
                _context.prev = 10;
                _context.next = 13;
                return this.loadService(serviceName);

              case 13:
                _context.next = 23;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](10);
                _context.t1 = _context.t0.code;
                _context.next = _context.t1 === 'E_SERVICE_UNMET_DEPENDENCY' ? 20 : 22;
                break;

              case 20:
                queue.push(serviceName);
                return _context.abrupt("break", 23);

              case 22:
                throw _context.t0;

              case 23:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 26:
                _context.next = 32;
                break;

              case 28:
                _context.prev = 28;
                _context.t2 = _context["catch"](6);
                _didIteratorError = true;
                _iteratorError = _context.t2;

              case 32:
                _context.prev = 32;
                _context.prev = 33;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 35:
                _context.prev = 35;

                if (!_didIteratorError) {
                  _context.next = 38;
                  break;
                }

                throw _iteratorError;

              case 38:
                return _context.finish(35);

              case 39:
                return _context.finish(32);

              case 40:
                if (!(services.length === queue.length)) {
                  _context.next = 42;
                  break;
                }

                throw new ServiceUnableToResolveDependenciesError("Unmet dependencies found, could not resolve dependencies for ".concat(queue.join(', ')));

              case 42:
                _context.next = 44;
                return this.loadServiceRecursion(queue);

              case 44:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 28, 32, 40], [10, 15], [33,, 35, 39]]);
      }));

      function loadServiceRecursion(_x) {
        return _loadServiceRecursion.apply(this, arguments);
      }

      return loadServiceRecursion;
    }()
  }, {
    key: "loadService",
    value: function () {
      var _loadService = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(name) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(resolve, reject) {
                    var configuration, path, Locator, locator, service;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            configuration = _this.locator.locate('core/configuration'), path = configuration.find('core.locator')[name], Locator = __webpack_require__("./dist/browser sync recursive ^\\.\\/.*\\/locator$")("./".concat(path, "/locator")), locator = new Locator(_this.locator);
                            _context2.prev = 2;
                            service = locator.locate();

                            _this.locator.set(name, service);

                            resolve();
                            _context2.next = 16;
                            break;

                          case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2["catch"](2);
                            _context2.t1 = _context2.t0.code;
                            _context2.next = _context2.t1 === 'E_SERVICE_UNDEFINED' ? 13 : 15;
                            break;

                          case 13:
                            reject(new ServiceUnmetDependencyError("An unmet dependency was found for service \"".concat(name, "\", error: ").concat(_context2.t0.message)));
                            return _context2.abrupt("break", 16);

                          case 15:
                            reject(_context2.t0);

                          case 16:
                            _context2.next = 21;
                            break;

                          case 18:
                            _context2.prev = 18;
                            _context2.t2 = _context2["catch"](0);
                            reject(new ServiceLocatorNotFoundError("locator could not be found for ".concat(name)));

                          case 21:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[0, 18], [2, 8]]);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function loadService(_x2) {
        return _loadService.apply(this, arguments);
      }

      return loadService;
    }()
  }]);

  return BrowserServiceLoader;
}();

module.exports = BrowserServiceLoader;

/***/ }),

/***/ "./dist/browser/core/common/bootstrap/config.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/common/bootstrap/config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/bootstrap';
module.exports = {
  'core': {
    'locator': {
      'core/bootstrap': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/bootstrap/index.js":
/*!*****************************************************!*\
  !*** ./dist/browser/core/common/bootstrap/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap(locator) {
    _classCallCheck(this, Bootstrap);

    this.locator = locator;
  }

  _createClass(Bootstrap, [{
    key: "bootstrap",
    value: function () {
      var _bootstrap = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var configuration, bootstrapMap, key, _bootstrap2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                configuration = this.locator.locate('core/configuration'), bootstrapMap = configuration.find('core.bootstrap');
                _context.t0 = regeneratorRuntime.keys(bootstrapMap);

              case 2:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 9;
                  break;
                }

                key = _context.t1.value;
                _bootstrap2 = this.locator.locate(bootstrapMap[key]);
                _context.next = 7;
                return _bootstrap2.bootstrap();

              case 7:
                _context.next = 2;
                break;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bootstrap() {
        return _bootstrap.apply(this, arguments);
      }

      return bootstrap;
    }()
  }]);

  return Bootstrap;
}();

module.exports = Bootstrap;

/***/ }),

/***/ "./dist/browser/core/common/bootstrap/locator.js":
/*!*******************************************************!*\
  !*** ./dist/browser/core/common/bootstrap/locator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bootstrap = __webpack_require__(/*! . */ "./dist/browser/core/common/bootstrap/index.js");

var BootstrapLocator =
/*#__PURE__*/
function () {
  function BootstrapLocator(locator) {
    _classCallCheck(this, BootstrapLocator);

    this.locator = locator;
  }

  _createClass(BootstrapLocator, [{
    key: "locate",
    value: function locate() {
      return new Bootstrap(this.locator);
    }
  }]);

  return BootstrapLocator;
}();

module.exports = BootstrapLocator;

/***/ }),

/***/ "./dist/browser/core/common/bus/bootstrap/error/observer-contract-not-honered.js":
/*!***************************************************************************************!*\
  !*** ./dist/browser/core/common/bus/bootstrap/error/observer-contract-not-honered.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ObserverContractNotHoneredError =
/*#__PURE__*/
function (_Error) {
  _inherits(ObserverContractNotHoneredError, _Error);

  function ObserverContractNotHoneredError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ObserverContractNotHoneredError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ObserverContractNotHoneredError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_BUS_OBSERVER_CONTRACT_NOT_HONERED';
    return _this;
  }

  return ObserverContractNotHoneredError;
}(_wrapNativeSuper(Error));

module.exports = ObserverContractNotHoneredError;

/***/ }),

/***/ "./dist/browser/core/common/bus/bootstrap/index.js":
/*!*********************************************************!*\
  !*** ./dist/browser/core/common/bus/bootstrap/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObserverContractNotHoneredError = __webpack_require__(/*! ./error/observer-contract-not-honered */ "./dist/browser/core/common/bus/bootstrap/error/observer-contract-not-honered.js");

var BusBootstrap =
/*#__PURE__*/
function () {
  function BusBootstrap(configuration, busFactory, locator) {
    _classCallCheck(this, BusBootstrap);

    this.configuration = configuration;
    this.busFactory = busFactory;
    this.locator = locator;
  }

  _createClass(BusBootstrap, [{
    key: "bootstrap",
    value: function bootstrap() {
      var channels = this.configuration.find('core.bus.channels'),
          bus = this.busFactory.create();

      for (var channel in channels) {
        bus.addChannel(channel);
        var observers = this.configuration.find("core.bus.channels.".concat(channel, ".observers"));

        for (var event in observers) {
          for (var observerPath in observers[event]) {
            if (!observers[event][observerPath]) continue;
            var observer = this.locator.locate(observerPath);
            if (typeof observer.observe !== 'function') throw new ObserverContractNotHoneredError("\"".concat(observerPath, "\" does not implement the BusObserver interface"));
            bus.on({
              channelId: channel,
              observer: observer.observe.bind(observer),
              event: event
            });
          }
        }

        this.locator.set('core/bus', bus);
      }
    }
  }]);

  return BusBootstrap;
}();

module.exports = BusBootstrap;

/***/ }),

/***/ "./dist/browser/core/common/bus/bootstrap/locator.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/bus/bootstrap/locator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BusBootstrap = __webpack_require__(/*! . */ "./dist/browser/core/common/bus/bootstrap/index.js");

var BusBootstrapLocator =
/*#__PURE__*/
function () {
  function BusBootstrapLocator(locator) {
    _classCallCheck(this, BusBootstrapLocator);

    this.locator = locator;
  }

  _createClass(BusBootstrapLocator, [{
    key: "locate",
    value: function locate() {
      var configuration = this.locator.locate('core/configuration'),
          busFactory = this.locator.locate('core/bus/factory');
      return new BusBootstrap(configuration, busFactory, this.locator);
    }
  }]);

  return BusBootstrapLocator;
}();

module.exports = BusBootstrapLocator;

/***/ }),

/***/ "./dist/browser/core/common/bus/config.js":
/*!************************************************!*\
  !*** ./dist/browser/core/common/bus/config.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/bus';
module.exports = {
  'core': {
    // 'factories' :
    // {
    //   'core/bus' : {
    //     'busChannelFactory'       : 'core/channel/factory',
    //     'associativeArrayFactory' : 'data-structure/associative-array/factory'
    //   }
    // },
    'bootstrap': {
      'bus': 'core/bus/bootstrap'
    },
    'bus': {
      'options': {},
      'channels': {
        'domain-events': {
          'observers': {
            'logged': {
              'core/bus/log': true
            }
          }
        }
      }
    },
    'schema': {
      'composer': {
        'core/bus': "".concat(dirname, "/schema/entity/bus")
      }
    },
    'locator': {
      'core/bus/factory': "".concat(dirname, "/factory"),
      'core/bus/bootstrap': "".concat(dirname, "/bootstrap"),
      'core/bus/log': "".concat(dirname, "/log")
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/bus/factory/index.js":
/*!*******************************************************!*\
  !*** ./dist/browser/core/common/bus/factory/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bus = __webpack_require__(/*! .. */ "./dist/browser/core/common/bus/index.js");

var BusFactory =
/*#__PURE__*/
function () {
  function BusFactory(_ref) {
    var channelFactory = _ref.channelFactory,
        associativeArrayFactory = _ref.associativeArrayFactory;

    _classCallCheck(this, BusFactory);

    this.channelFactory = channelFactory;
    this.associativeArrayFactory = associativeArrayFactory;
  }

  _createClass(BusFactory, [{
    key: "createAssociativeArray",
    value: function createAssociativeArray() {
      return this.associativeArrayFactory.create();
    }
  }, {
    key: "create",
    value: function create() {
      var bus = new Bus({
        channelFactory: this.channelFactory,
        channels: this.createAssociativeArray()
      });
      return bus;
    }
  }]);

  return BusFactory;
}();

module.exports = BusFactory;

/***/ }),

/***/ "./dist/browser/core/common/bus/factory/locator.js":
/*!*********************************************************!*\
  !*** ./dist/browser/core/common/bus/factory/locator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BusFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/bus/factory/index.js");

var BusFactoryLocator =
/*#__PURE__*/
function () {
  function BusFactoryLocator(locator) {
    _classCallCheck(this, BusFactoryLocator);

    this.locator = locator;
  }

  _createClass(BusFactoryLocator, [{
    key: "locate",
    value: function locate() {
      return new BusFactory({
        channelFactory: this.locator.locate('core/channel/factory'),
        associativeArrayFactory: this.locator.locate('data-structure/associative-array/factory')
      });
    }
  }]);

  return BusFactoryLocator;
}();

module.exports = BusFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/bus/index.js":
/*!***********************************************!*\
  !*** ./dist/browser/core/common/bus/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bus =
/*#__PURE__*/
function () {
  function Bus(_ref) {
    var channelFactory = _ref.channelFactory,
        channels = _ref.channels;

    _classCallCheck(this, Bus);

    this.channelFactory = channelFactory;
    this.channels = channels;
  }

  _createClass(Bus, [{
    key: "addChannel",
    value: function addChannel(id) {
      this.channels.add({
        id: id,
        element: this.channelFactory.create({
          id: id
        })
      });
    }
  }, {
    key: "deleteChannel",
    value: function deleteChannel(id) {
      this.channels.remove(id);
    }
  }, {
    key: "getChannel",
    value: function getChannel(id) {
      return this.channels.get(id);
    }
  }, {
    key: "emit",
    value: function () {
      var _emit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref2) {
        var _this = this;

        var channelId, name, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                channelId = _ref2.channelId, name = _ref2.name, data = _ref2.data;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this.getChannel(channelId).emit({
                    name: name,
                    data: data
                  }).then(function () {
                    resolve();
                  }).catch(function (error) {
                    reject(error);
                  });
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function emit(_x) {
        return _emit.apply(this, arguments);
      }

      return emit;
    }()
  }, {
    key: "on",
    value: function on(_ref3) {
      var channelId = _ref3.channelId,
          event = _ref3.event,
          observer = _ref3.observer;
      return this.getChannel(channelId).on({
        event: event,
        observer: observer
      });
    }
  }, {
    key: "once",
    value: function once(_ref4) {
      var channelId = _ref4.channelId,
          event = _ref4.event,
          observer = _ref4.observer;
      this.getChannel(channelId).once({
        event: event,
        observer: observer
      });
    }
  }, {
    key: "onAllEvents",
    value: function onAllEvents(_ref5) {
      var channelId = _ref5.channelId,
          observer = _ref5.observer;
      this.getChannel(channelId).onAllEvents(observer);
    }
  }, {
    key: "removeListener",
    value: function removeListener(_ref6) {
      var channelId = _ref6.channelId,
          event = _ref6.event,
          observer = _ref6.observer;
      this.getChannel(channelId).removeListener({
        event: event,
        observer: observer
      });
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(_ref7) {
      var channelId = _ref7.channelId,
          event = _ref7.event;
      this.getChannel(channelId).removeAllListeners(event);
    }
  }, {
    key: "reset",
    value: function reset(channelId) {
      this.getChannel(channelId).reset();
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'Bus';
    }
  }]);

  return Bus;
}();

module.exports = Bus;

/***/ }),

/***/ "./dist/browser/core/common/bus/log/index.js":
/*!***************************************************!*\
  !*** ./dist/browser/core/common/bus/log/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {superhero/core/eventbus/observer}
 */
var LogObserver =
/*#__PURE__*/
function () {
  function LogObserver(logConsole) {
    _classCallCheck(this, LogObserver);

    this.logConsole = logConsole;
  }

  _createClass(LogObserver, [{
    key: "observe",
    value: function observe(data) {
      this.logConsole.log(data);
    }
  }]);

  return LogObserver;
}();

module.exports = LogObserver;

/***/ }),

/***/ "./dist/browser/core/common/bus/log/locator.js":
/*!*****************************************************!*\
  !*** ./dist/browser/core/common/bus/log/locator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LogObserver = __webpack_require__(/*! . */ "./dist/browser/core/common/bus/log/index.js");

var LogObserverLocator =
/*#__PURE__*/
function () {
  function LogObserverLocator(locator) {
    _classCallCheck(this, LogObserverLocator);

    this.locator = locator;
  }

  _createClass(LogObserverLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          logConsole = consoleFactory.create();
      return new LogObserver(logConsole);
    }
  }]);

  return LogObserverLocator;
}();

module.exports = LogObserverLocator;

/***/ }),

/***/ "./dist/browser/core/common/bus/schema/entity/bus.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/bus/schema/entity/bus.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'channels': {
    'type': 'data-structure/multiple-associative-array'
  }
};

/***/ }),

/***/ "./dist/browser/core/common/channel/config.js":
/*!****************************************************!*\
  !*** ./dist/browser/core/common/channel/config.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/channel';
module.exports = {
  'core': {
    // 'factories' :
    // {
    //   'core/channel' : {
    //     'composer' : 'core/schema/composer'
    //   }
    // },
    'schema': {
      'composer': {
        'core/channel/event-meta': "".concat(dirname, "/schema/dto/event-meta"),
        'core/channel/event': "".concat(dirname, "/schema/dto/event"),
        'core/channel': "".concat(dirname, "/schema/entity/channel")
      }
    },
    'locator': {
      'core/channel/factory': "".concat(dirname, "/factory")
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/channel/factory/index.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/channel/factory/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BusChannel = __webpack_require__(/*! .. */ "./dist/browser/core/common/channel/index.js");

var BusChannelFactory =
/*#__PURE__*/
function () {
  function BusChannelFactory(_ref) {
    var composer = _ref.composer,
        consoleFactory = _ref.consoleFactory,
        multipleAssociativeArrayFactory = _ref.multipleAssociativeArrayFactory;

    _classCallCheck(this, BusChannelFactory);

    this.composer = composer;
    this.consoleFactory = consoleFactory;
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory;
  }

  _createClass(BusChannelFactory, [{
    key: "createMultipleAssociativeArray",
    value: function createMultipleAssociativeArray() {
      return this.multipleAssociativeArrayFactory.create();
    }
  }, {
    key: "createConsole",
    value: function createConsole() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.consoleFactory.create(options);
    }
  }, {
    key: "create",
    value: function create(_ref2) {
      var id = _ref2.id,
          consoleOptions = _ref2.consoleOptions;
      return new BusChannel({
        id: id,
        console: this.createConsole(consoleOptions),
        observers: this.createMultipleAssociativeArray(),
        composer: this.composer
      });
    }
  }]);

  return BusChannelFactory;
}();

module.exports = BusChannelFactory;

/***/ }),

/***/ "./dist/browser/core/common/channel/factory/locator.js":
/*!*************************************************************!*\
  !*** ./dist/browser/core/common/channel/factory/locator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BusChannelFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/channel/factory/index.js");

var BusChannelFactoryLocator =
/*#__PURE__*/
function () {
  function BusChannelFactoryLocator(locator) {
    _classCallCheck(this, BusChannelFactoryLocator);

    this.locator = locator;
  }
  /**
   * @returns {BusChannelFactory}
   */


  _createClass(BusChannelFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var composer = this.locator.locate('core/schema/composer'),
          consoleFactory = this.locator.locate('core/console/factory'),
          multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory');
      return new BusChannelFactory({
        composer: composer,
        consoleFactory: consoleFactory,
        multipleAssociativeArrayFactory: multipleAssociativeArrayFactory
      });
    }
  }]);

  return BusChannelFactoryLocator;
}();

module.exports = BusChannelFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/channel/index.js":
/*!***************************************************!*\
  !*** ./dist/browser/core/common/channel/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * BusChannel class
 * @class
 */
var BusChannel =
/*#__PURE__*/
function () {
  /**
   * Creates a basic BusChannel
   */
  function BusChannel(_ref) {
    var id = _ref.id,
        observers = _ref.observers,
        composer = _ref.composer,
        console = _ref.console;

    _classCallCheck(this, BusChannel);

    this.observers = observers;
    this.composer = composer;
    this.warnings = [];
    this.console = console;
    this[Symbol.for('id')] = id;
  }
  /**
   * Adds a observer to an event
   * @param {string} event - Event name
   * @param {function} observer - Observer function
   * @returns {function} - Returns its remove function
   */


  _createClass(BusChannel, [{
    key: "on",
    value: function on(_ref2) {
      var _this = this;

      var event = _ref2.event,
          observer = _ref2.observer;
      this.observers.add({
        id: event,
        element: observer
      });
      return function () {
        _this.removeListener({
          event: event,
          observer: observer
        });
      };
    }
    /**
     * Adds a observer to all events
     * @param {function} observer - Observer function
     * @returns {function} - Returns its remove function
     */

  }, {
    key: "onAll",
    value: function onAll(observer) {
      return this.on({
        event: '*',
        observer: observer
      });
    }
    /**
     * Removes the observer function for the specified event name
     * @param {string} event - Event name
     * @param {function} observer - Oserver function
     */

  }, {
    key: "removeListener",
    value: function removeListener(_ref3) {
      var event = _ref3.event,
          observer = _ref3.observer;
      this.observers.removeElement({
        id: event,
        element: observer
      });
    }
    /**
     * Removes all observers functions for the specified event name.
     * @param {string} event - Event name
     */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(event) {
      this.observers.remove(event);
    }
    /**
     * Checks if an event has observers
     * @param {string} event - Event name
     * @returns {boolean} - Flag indicating if the event has observers
     */

  }, {
    key: "hasobservers",
    value: function hasobservers(event) {
      return this.observers.hasElements(event);
    }
    /**
     * Creates an event
     * @param {string} event - Event name
     * @param {Object} data - Event payload
     * @returns {Event} event
     */

  }, {
    key: "createEvent",
    value: function createEvent(_ref4) {
      var name = _ref4.name,
          data = _ref4.data;
      var timestamp = new Date().toISOString(),
          emitter = this[Symbol.for('id')],
          meta = this.composer.compose('core/channel/event-meta', {
        name: name,
        timestamp: timestamp,
        emitter: emitter
      }),
          event = this.composer.compose('core/channel/event', {
        meta: meta,
        data: data
      });
      return event;
    }
    /**
     * Publish an event
     * @param {string} event - Event name
     * @returns {boolean} - Flag indicating if the event has observers
     */

  }, {
    key: "emit",
    value: function () {
      var _emit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref5) {
        var _this2 = this;

        var name, data, event, globalobservers, eventObservers, observers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref5.name, data = _ref5.data;
                event = this.createEvent({
                  name: name,
                  data: data
                }), globalobservers = this.observers.get('*') || [], eventObservers = this.observers.get(name) || [], observers = globalobservers.concat(eventObservers);

                if (eventObservers.length === 0 && !this.warnings.includes(name)) {
                  this.warnings.push(event);
                  this.console.warning("event: \"".concat(name, "\" does not have a defined observer"));
                }

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.executeObservers(observers, event).then(function () {
                    resolve();
                  }).catch(function (error) {
                    reject(error);
                  });
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function emit(_x) {
        return _emit.apply(this, arguments);
      }

      return emit;
    }()
  }, {
    key: "listenerCount",
    value: function listenerCount(event) {
      var observers = this.observers.get(event.meta.name) || [];
      return observers.length;
    }
    /**
     * Executes the observers of the specified event
     * @param {function} observer - observer
     * @param {Event} event - Event
     */

  }, {
    key: "executeObservers",
    value: function () {
      var _executeObservers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(observers, event) {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  Promise.all(observers.map(_this3.executeObserver.bind(_this3, event))).then(function () {
                    resolve();
                  }).catch(function (error) {
                    reject(error);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function executeObservers(_x2, _x3) {
        return _executeObservers.apply(this, arguments);
      }

      return executeObservers;
    }()
    /**
     * Executes the observer with the event
     * @param {function} observer - observer
     * @param {Event} event - Event
     */

  }, {
    key: "executeObserver",
    value: function () {
      var _executeObserver = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(event, observer) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", observer.call(this, event));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function executeObserver(_x4, _x5) {
        return _executeObserver.apply(this, arguments);
      }

      return executeObserver;
    }()
    /**
     * Adds a listener to an event that only executes once
     * @param {string} event - Event name
     * @param {function} observer - Listener function
     */

  }, {
    key: "once",
    value: function once(_ref6) {
      var _this4 = this;

      var event = _ref6.event,
          _observer = _ref6.observer;
      var remove = this.observers.on({
        event: event,
        observer: function observer() {
          remove();

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _observer(_this4, args);
        }
      });
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'BusChannel';
    }
  }]);

  return BusChannel;
}();

module.exports = BusChannel;

/***/ }),

/***/ "./dist/browser/core/common/channel/schema/dto/event-meta.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/channel/schema/dto/event-meta.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'name': {
    'type': 'string',
    'not-empty': true
  },
  'emitter': {
    'type': 'string',
    'not-empty': true
  },
  'timestamp': {
    'type': 'timestamp'
  }
};

/***/ }),

/***/ "./dist/browser/core/common/channel/schema/dto/event.js":
/*!**************************************************************!*\
  !*** ./dist/browser/core/common/channel/schema/dto/event.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'meta': {
    'type': 'schema',
    'schema': 'core/channel/event-meta',
    'not-empty': true
  },
  'data': {
    'type': 'json'
  }
};

/***/ }),

/***/ "./dist/browser/core/common/channel/schema/entity/channel.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/channel/schema/entity/channel.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'id': {
    'type': 'string',
    'not-empty': true
  },
  'observers': {
    'type': 'data-structure/multiple-associative-array'
  }
};

/***/ }),

/***/ "./dist/browser/core/common/config-fetcher/index.js":
/*!**********************************************************!*\
  !*** ./dist/browser/core/common/config-fetcher/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @interface ConfigFetcher
 */

/**
 * @function ConfigFetcher#fetchComponentConfig
 * @param {string} component
 * @param {string} path
 * @returns {Object} Component config
 */

/***/ }),

/***/ "./dist/browser/core/common/configuration/config.js":
/*!**********************************************************!*\
  !*** ./dist/browser/core/common/configuration/config.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/configuration';
module.exports = {
  'core': {
    'locator': {
      'core/configuration': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/configuration/index.js":
/*!*********************************************************!*\
  !*** ./dist/browser/core/common/configuration/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configuration =
/*#__PURE__*/
function () {
  function Configuration(deepclone, deepmerge, deepfind, deepfreeze) {
    _classCallCheck(this, Configuration);

    this.deepclone = deepclone;
    this.deepmerge = deepmerge;
    this.deepfind = deepfind;
    this.deepfreeze = deepfreeze;
    this.config = {};
  }

  _createClass(Configuration, [{
    key: "extend",
    value: function extend(config) {
      var clone = this.deepclone.clone(config);
      this.config = this.deepmerge.merge(this.config, clone);
    }
  }, {
    key: "find",
    value: function find(path) {
      return this.deepfind.find(path, this.config);
    }
  }, {
    key: "freeze",
    value: function freeze() {
      this.config = this.deepfreeze.freeze(this.config);
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;

/***/ }),

/***/ "./dist/browser/core/common/configuration/locator.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/configuration/locator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configuration = __webpack_require__(/*! . */ "./dist/browser/core/common/configuration/index.js");

var ConfigurationLocator =
/*#__PURE__*/
function () {
  function ConfigurationLocator(locator) {
    _classCallCheck(this, ConfigurationLocator);

    this.locator = locator;
  }

  _createClass(ConfigurationLocator, [{
    key: "locate",
    value: function locate() {
      var deepclone = this.locator.locate('core/deepclone'),
          deepmerge = this.locator.locate('core/deepmerge'),
          deepfind = this.locator.locate('core/deepfind'),
          configuration = new Configuration(deepclone, deepmerge, deepfind);
      return configuration;
    }
  }]);

  return ConfigurationLocator;
}();

module.exports = ConfigurationLocator;

/***/ }),

/***/ "./dist/browser/core/common/console/config.js":
/*!****************************************************!*\
  !*** ./dist/browser/core/common/console/config.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/console';
module.exports = {
  'core': {
    // 'bootstrap' :
    // {
    //   'console' : 'core/console/bootstrap'
    // },
    'console': {
      'default': {
        'maxArrayLength': 10,
        'maxObjectDepth': 10,
        'maxStringLength': 300,
        'date': true,
        'dateFormat': 'yyyy-mm-dd HH:MM:ss',
        'debug': true,
        'index': false,
        'prefix': false,
        'inspect': true,
        'separator': '\t',
        'colors': true,
        'color': 'white',
        'background': 'black',
        'tty': false,
        'showHidden': false,
        'styles': // white, grey, black, blue, cyan, green, magenta, red, yellow, bold, italic, underline, inverse
        {
          'special': 'cyan',
          'number': 'yellow',
          'bigint': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'symbol': 'green',
          'date': 'magenta',
          'regexp': 'red'
        }
      }
    },
    'locator': {
      'core/console/factory': "".concat(dirname, "/factory") // 'core/console/bootstrap' : `${dirname}/bootstrap`

    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/console/factory/index.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/console/factory/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Console = __webpack_require__(/*! .. */ "./dist/browser/core/common/console/index.js");

var ConsoleFactory =
/*#__PURE__*/
function () {
  function ConsoleFactory(_ref) {
    var util = _ref.util,
        dateformat = _ref.dateformat,
        console = _ref.console,
        defaults = _ref.defaults,
        coreString = _ref.coreString;

    _classCallCheck(this, ConsoleFactory);

    this.util = util;
    this.dateformat = dateformat;
    this.console = console;
    this.defaults = defaults;
    this.coreString = coreString;
  }

  _createClass(ConsoleFactory, [{
    key: "create",
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Console({
        coreString: this.coreString,
        util: this.util,
        dateformat: this.dateformat,
        console: this.console,
        config: _objectSpread({}, this.defaults, {}, options)
      });
    }
  }]);

  return ConsoleFactory;
}();

module.exports = ConsoleFactory;

/***/ }),

/***/ "./dist/browser/core/common/console/factory/locator.js":
/*!*************************************************************!*\
  !*** ./dist/browser/core/common/console/factory/locator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/console/factory/index.js");

var ConsoleFactoryLocator =
/*#__PURE__*/
function () {
  function ConsoleFactoryLocator(locator) {
    _classCallCheck(this, ConsoleFactoryLocator);

    this.locator = locator;
  }

  _createClass(ConsoleFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var util = __webpack_require__(/*! util */ "./node_modules/util/util.js"),
          dateformat = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js"),
          configuration = this.locator.locate('core/configuration').find('core.console'),
          defaults = configuration.default,
          coreString = this.locator.locate('core/string'),
          jsConsole = console;

      return new ConsoleFactory({
        coreString: coreString,
        util: util,
        dateformat: dateformat,
        defaults: defaults,
        console: jsConsole
      });
    }
  }]);

  return ConsoleFactoryLocator;
}();

module.exports = ConsoleFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/console/index.js":
/*!***************************************************!*\
  !*** ./dist/browser/core/common/console/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-control-regex */
var Console =
/*#__PURE__*/
function () {
  function Console(_ref) {
    var util = _ref.util,
        dateformat = _ref.dateformat,
        config = _ref.config,
        console = _ref.console,
        coreString = _ref.coreString;

    _classCallCheck(this, Console);

    this.sn = 0;
    this.coreString = coreString;
    this.util = util;
    this.dateformat = dateformat;
    this.config = config;
    this.console = console;
    this.util.inspect.styles = _objectSpread({}, this.config.styles);
  }

  _createClass(Console, [{
    key: "getInspectOptions",
    value: function getInspectOptions() {
      var options = {
        depth: this.config.maxObjectDepth,
        showHidden: this.config.showHidden,
        colors: this.config.colors,
        maxArrayLength: this.config.maxArrayLength
      };
      return options;
    }
  }, {
    key: "shortenString",
    value: function shortenString(s) {
      if (this.config.maxStringLength && s.length > this.config.maxStringLength) return this.coreString.shorten(s, this.config.maxStringLength);
      return s;
    }
  }, {
    key: "formatOutputString",
    value: function formatOutputString(s) {
      return this.shortenString(s);
    }
  }, {
    key: "getCurrentDate",
    value: function getCurrentDate() {
      return this.dateformat(new Date(), this.config.dateFormat);
    }
  }, {
    key: "buildOutput",
    value: function buildOutput(args) {
      var output = [];
      if (this.config.date) output.push(this.getCurrentDate());
      if (this.config.prefix) output.push(this.config.prefix);
      if (this.config.index) output.push(this.sn);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          if (_typeof(arg) === 'object' && this.config.inspect) {
            output = [].concat(_toConsumableArray(output), [this.inspectObject(arg)]);
          } else if (typeof arg === 'string') {
            var sFormatted = this.formatOutputString(arg);
            if (Array.isArray(sFormatted)) output = [].concat(_toConsumableArray(output), _toConsumableArray(sFormatted));else output = [].concat(_toConsumableArray(output), [sFormatted]);
          } else {
            output = [].concat(_toConsumableArray(output), [arg]);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return output.join(this.config.separator);
    }
  }, {
    key: "inspectObject",
    value: function inspectObject(o) {
      var inspectOptions = this.getInspectOptions(),
          inspectString = this.util.inspect(o, inspectOptions);
      return inspectString;
    }
  }, {
    key: "output",
    value: function output(args, cb) {
      this.sn = this.sn < Number.MAX_SAFE_INTEGER ? this.sn + 1 : 0;

      if (this.config.debug) {
        var output = this.buildOutput(args);
        cb(output);
      }
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.output(args, this.console.log);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.output(args, this.console.log);
    }
  }, {
    key: "warning",
    value: function warning() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.output(args, this.console.warn);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.output(args, this.console.error);
    }
  }, {
    key: "trace",
    value: function trace() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.output(args, this.console.trace);
    }
  }, {
    key: "table",
    value: function table() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      this.output(args, this.console.table);
    }
  }, {
    key: "startTimer",
    value: function startTimer(label) {
      this.console.time(label);
    }
  }, {
    key: "getTimeLog",
    value: function getTimeLog(label) {
      this.console.timeLog(label);
    }
  }, {
    key: "finishTimer",
    value: function finishTimer(label) {
      this.console.timeEnd(label);
    }
  }, {
    key: "group",
    value: function group(collapsed) {
      if (collapsed) this.console.groupCollapsed();else this.console.group();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.console.clear();
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      this.console.groupEnd();
    }
  }, {
    key: "measureTime",
    value: function () {
      var _measureTime = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(label, cb) {
        var _this = this;

        var _len7,
            args,
            _key7,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len7 = _args2.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
                  args[_key7 - 2] = _args2[_key7];
                }

                return _context2.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(resolve, reject) {
                    var result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;

                            _this.trace(args);

                            _this.startTimer(label);

                            _context.next = 5;
                            return cb(args);

                          case 5:
                            result = _context.sent;

                            _this.finishTimer(label);

                            resolve(result);
                            _context.next = 14;
                            break;

                          case 10:
                            _context.prev = 10;
                            _context.t0 = _context["catch"](0);

                            _this.finishTimer(label);

                            reject(_context.t0);

                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 10]]);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function measureTime(_x, _x2) {
        return _measureTime.apply(this, arguments);
      }

      return measureTime;
    }()
  }]);

  return Console;
}();

module.exports = Console;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/associative-array/factory/index.js":
/*!************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/associative-array/factory/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssociativeArray = __webpack_require__(/*! .. */ "./dist/browser/core/common/data-structure/associative-array/index.js");

var AssociativeArrayFactory =
/*#__PURE__*/
function () {
  function AssociativeArrayFactory(_ref) {
    var composer = _ref.composer;

    _classCallCheck(this, AssociativeArrayFactory);

    this.composer = composer;
  }

  _createClass(AssociativeArrayFactory, [{
    key: "create",
    value: function create() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var args = this.composer.compose('data-structure/associative-array', {
        items: items
      });
      return new AssociativeArray(_objectSpread({}, args));
    }
  }]);

  return AssociativeArrayFactory;
}();

module.exports = AssociativeArrayFactory;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/associative-array/factory/locator.js":
/*!**************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/associative-array/factory/locator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssociativeArrayFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/associative-array/factory/index.js");

var AssociativeArrayFactoryLocator =
/*#__PURE__*/
function () {
  function AssociativeArrayFactoryLocator(locator) {
    _classCallCheck(this, AssociativeArrayFactoryLocator);

    this.locator = locator;
  }
  /**
   * @returns {AssociativeArrayFactory}
   */


  _createClass(AssociativeArrayFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var composer = this.locator.locate('core/schema/composer');
      return new AssociativeArrayFactory({
        composer: composer
      });
    }
  }]);

  return AssociativeArrayFactoryLocator;
}();

module.exports = AssociativeArrayFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/associative-array/index.js":
/*!****************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/associative-array/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssociativeArray =
/*#__PURE__*/
function () {
  function AssociativeArray(_ref) {
    var items = _ref.items;

    _classCallCheck(this, AssociativeArray);

    this.items = items;
    this[Symbol.for('schema')] = 'data-structure/associative-array';
  }

  _createClass(AssociativeArray, [{
    key: "get",
    value: function get(id) {
      return this.items[id];
    }
  }, {
    key: "add",
    value: function add(_ref2) {
      var id = _ref2.id,
          element = _ref2.element;
      this.items[id] = element;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      delete this.items[id];
    }
  }, {
    key: "reset",
    value: function reset() {
      this.items = {};
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.items;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var keys = [],
          values = [];

      for (var key in this.items) {
        keys.push(key);
        values.push(this.get(key));
      }

      return {
        keys: keys,
        values: values
      };
    }
  }, {
    key: "count",
    value: function count() {
      return Object.keys(this.items).length;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      var _this = this;

      var keys = Object.keys(this.items);
      var index = 0;
      return {
        next: function next() {
          if (index < keys.length) {
            var key = keys[index++];
            return {
              value: _this.items[key],
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'AssociativeArray';
    }
  }]);

  return AssociativeArray;
}();

module.exports = AssociativeArray;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/associative-array/locator.js":
/*!******************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/associative-array/locator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssociativeArray = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/associative-array/index.js");

var AssociativeArrayLocator =
/*#__PURE__*/
function () {
  function AssociativeArrayLocator(locator) {
    _classCallCheck(this, AssociativeArrayLocator);

    this.locator = locator;
  }
  /**
   * @returns {AssociativeArrayLocator}
   */


  _createClass(AssociativeArrayLocator, [{
    key: "locate",
    value: function locate() {
      return AssociativeArray;
    }
  }]);

  return AssociativeArrayLocator;
}();

module.exports = AssociativeArrayLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/config.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/data-structure/config.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/data-structure';
module.exports = {
  'core': {
    // 'factories' :
    // {
    //   'core/data-structure/multiple-associative-array' : {
    //     'composer' : 'core/schema/composer'
    //   },
    //   'core/data-structure/associative-array' : {
    //     'composer' : 'core/schema/composer'
    //   }
    // },
    'schema': {
      'composer': {
        'data-structure/associative-array': "".concat(dirname, "/schema/value-object/associative-array"),
        'data-structure/multiple-associative-array': "".concat(dirname, "/schema/value-object/multiple-associative-array"),
        'data-structure/queue': "".concat(dirname, "/schema/value-object/queue"),
        'data-structure/stack': "".concat(dirname, "/schema/value-object/stack"),
        'data-structure/edge': "".concat(dirname, "/schema/value-object/edge"),
        'data-structure/graph': "".concat(dirname, "/schema/value-object/graph"),
        'data-structure/node': "".concat(dirname, "/schema/value-object/node"),
        'data-structure/tree': "".concat(dirname, "/schema/value-object/tree")
      },
      'validator': {
        'collection': 'core/schema/validator/collection',
        'custom-json': 'core/schema/validator/custom-json',
        'data-structure/associative-array': 'core/schema/validator/data-structure/associative-array',
        'data-structure/multiple-associative-array': 'core/schema/validator/data-structure/multiple-associative-array'
      }
    },
    'locator': {
      'core/schema/validator/collection': "".concat(dirname, "/schema/validator/collection"),
      'core/schema/validator/custom-json': "".concat(dirname, "/schema/validator/custom-json"),
      'core/schema/validator/data-structure/associative-array': "".concat(dirname, "/schema/validator/associative-array"),
      'core/schema/validator/data-structure/multiple-associative-array': "".concat(dirname, "/schema/validator/multiple-associative-array"),
      'data-structure/associative-array/factory': "".concat(dirname, "/associative-array/factory"),
      'data-structure/multiple-associative-array/factory': "".concat(dirname, "/multiple-associative-array/factory"),
      'data-structure/queue/factory': "".concat(dirname, "/queue/factory"),
      'data-structure/stack/factory': "".concat(dirname, "/stack/factory"),
      'data-structure/graph/factory': "".concat(dirname, "/graph/factory"),
      'data-structure/tree/factory': "".concat(dirname, "/tree/factory")
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/graph/error/node-not-exists.js":
/*!********************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/graph/error/node-not-exists.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NodeNotExists =
/*#__PURE__*/
function (_Error) {
  _inherits(NodeNotExists, _Error);

  function NodeNotExists() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NodeNotExists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NodeNotExists)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.code = 'E_NODE_NOT_EXISTS';
    return _this;
  }

  return NodeNotExists;
}(_wrapNativeSuper(Error));

module.exports = NodeNotExists;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/graph/factory/index.js":
/*!************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/graph/factory/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Graph = __webpack_require__(/*! .. */ "./dist/browser/core/common/data-structure/graph/index.js");

var GraphFactory =
/*#__PURE__*/
function () {
  function GraphFactory(_ref) {
    var composer = _ref.composer,
        associativeArrayFactory = _ref.associativeArrayFactory,
        multipleAssociativeArrayFactory = _ref.multipleAssociativeArrayFactory,
        queueFactory = _ref.queueFactory;

    _classCallCheck(this, GraphFactory);

    this.composer = composer;
    this.associativeArrayFactory = associativeArrayFactory;
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory;
    this.queueFactory = queueFactory;
    this[Symbol.for('schema')] = 'data-structure/graph';
  }

  _createClass(GraphFactory, [{
    key: "createEdges",
    value: function createEdges(_ref2) {
      var edges = _ref2.edges;
      var items = edges.items;
      return this.multipleAssociativeArrayFactory.create(items);
    }
  }, {
    key: "createNodes",
    value: function createNodes(_ref3) {
      var nodes = _ref3.nodes;
      var items = nodes.items;
      return this.associativeArrayFactory.create(items);
    }
  }, {
    key: "createQueue",
    value: function createQueue() {
      return this.queueFactory.create();
    }
    /**
     * @returns {Graph}
     */

  }, {
    key: "create",
    value: function create(graph) {
      var composedGraph = this.composer.compose(this[Symbol.for('schema')], graph);
      return new Graph(_objectSpread({}, composedGraph, {
        composer: this.composer,
        edges: this.createEdges(composedGraph),
        nodes: this.createNodes(composedGraph),
        queue: this.createQueue()
      }));
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'GraphFactory';
    }
  }]);

  return GraphFactory;
}();

module.exports = GraphFactory;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/graph/factory/locator.js":
/*!**************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/graph/factory/locator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GraphFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/graph/factory/index.js");

var GraphLocator =
/*#__PURE__*/
function () {
  function GraphLocator(locator) {
    _classCallCheck(this, GraphLocator);

    this.locator = locator;
  }
  /**
   * @returns {Graph}
   */


  _createClass(GraphLocator, [{
    key: "locate",
    value: function locate() {
      var associativeArrayFactory = this.locator.locate('data-structure/associative-array/factory'),
          multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory'),
          queueFactory = this.locator.locate('data-structure/queue/factory'),
          composer = this.locator.locate('core/schema/composer');
      return new GraphFactory({
        composer: composer,
        associativeArrayFactory: associativeArrayFactory,
        multipleAssociativeArrayFactory: multipleAssociativeArrayFactory,
        queueFactory: queueFactory
      });
    }
  }]);

  return GraphLocator;
}();

module.exports = GraphLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/graph/index.js":
/*!****************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/graph/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NodeNotExist = __webpack_require__(/*! ./error/node-not-exists */ "./dist/browser/core/common/data-structure/graph/error/node-not-exists.js");

var Graph =
/*#__PURE__*/
function () {
  function Graph(_ref) {
    var composer = _ref.composer,
        edges = _ref.edges,
        nodes = _ref.nodes,
        queue = _ref.queue,
        isDirected = _ref.isDirected;

    _classCallCheck(this, Graph);

    this.composer = composer;
    this.edges = edges;
    this.nodes = nodes;
    this.queue = queue;
    this.isDirected = isDirected;
  }

  _createClass(Graph, [{
    key: "totalNodes",
    value: function totalNodes() {
      return this.nodes.count();
    }
  }, {
    key: "printGraph",
    value: function printGraph() {
      var edges = this.edges.toJSON();

      for (var node in edges) {
        var line = "".concat(node, " ->");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = edges[node][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var edge = _step.value;
            line += " ".concat(edge.target, " (").concat(JSON.stringify(edge.payload), ")");
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        console.log(line);
      }
    }
  }, {
    key: "addNode",
    value: function addNode(node) {
      this.nodes.add({
        id: node.id,
        element: this.composer.compose('data-structure/node', node)
      });
    }
  }, {
    key: "addEdge",
    value: function addEdge(_ref2) {
      var source = _ref2.source,
          target = _ref2.target,
          payload = _ref2.payload;
      if (!this.nodes.get(source)) throw new NodeNotExist('Source node does not exists');else if (!this.nodes.get(target)) throw new NodeNotExist('Target node does not exists');
      var sourceEdge = this.composer.compose('data-structure/edge', {
        source: source,
        target: target,
        payload: payload
      });
      this.edges.add({
        id: source,
        element: sourceEdge
      });

      if (!this.isDirected) {
        var targetEdge = this.composer.compose('data-structure/edge', {
          source: target,
          target: source,
          payload: payload
        });
        this.edges.add({
          id: target,
          element: targetEdge
        });
      }
    }
  }, {
    key: "bfs",
    value: function bfs(startNodeId) {
      var visited = {},
          path = [];
      this.queue.reset();
      if (!this.nodes.get(startNodeId)) throw new NodeNotExist('Start node does not exists');
      visited[startNodeId] = true;
      this.queue.enqueue(startNodeId);

      while (!this.queue.isEmpty()) {
        var sourceNodeId = this.queue.dequeue();
        path.push(sourceNodeId);
        var adjacencyList = this.edges.get(sourceNodeId);

        if (adjacencyList) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = adjacencyList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var edge = _step2.value;
              var targetNodeId = edge.target;
              if (!visited[targetNodeId]) this.queue.enqueue(targetNodeId);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }

      return path;
    }
  }, {
    key: "dfs",
    value: function dfs(startNodeId) {
      var visited = {},
          path = [];
      if (!this.nodes.get(startNodeId)) throw new NodeNotExist('Start node does not exists');
      this.recursiveDFS(startNodeId, visited, path);
      return path;
    }
  }, {
    key: "recursiveDFS",
    value: function recursiveDFS(nodeId, visited, path) {
      visited[nodeId] = true;
      path.push(nodeId);
      var adjacencyList = this.edges.get(nodeId);

      if (adjacencyList) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = adjacencyList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var edge = _step3.value;
            var targetNodeId = edge.target;
            if (!visited[targetNodeId]) this.recursiveDFS(targetNodeId, visited, path);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }
  }, {
    key: "reduceEdgeArrayToLinks",
    value: function reduceEdgeArrayToLinks(acc, nodeEdges, index) {
      var source = Object.keys(this.edges)[index],
          edgesWithSource = nodeEdges.map(function (nodeEdge) {
        if (nodeEdge.source) return _objectSpread({
          source: source
        }, nodeEdge);else return nodeEdge;
      });
      return acc.concat(edgesWithSource);
    }
  }, {
    key: "edgesToLinks",
    value: function edgesToLinks() {
      var edgesArray = this.edges.toArray().values,
          links = edgesArray.reduce(this.reduceEdgeArrayToLinks.bind(this), []);
      return links;
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var nodes = this.nodes.toArray().values,
          links = this.edgesToLinks();
      return {
        nodes: nodes,
        links: links
      };
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'Graph';
    }
  }]);

  return Graph;
}();

module.exports = Graph;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/graph/locator.js":
/*!******************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/graph/locator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Graph = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/graph/index.js");

var GraphLocator =
/*#__PURE__*/
function () {
  function GraphLocator(locator) {
    _classCallCheck(this, GraphLocator);

    this.locator = locator;
  }

  _createClass(GraphLocator, [{
    key: "locate",
    value: function locate() {
      return Graph;
    }
  }]);

  return GraphLocator;
}();

module.exports = GraphLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/multiple-associative-array/factory/index.js":
/*!*********************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/multiple-associative-array/factory/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MultipleAssociativeArray = __webpack_require__(/*! .. */ "./dist/browser/core/common/data-structure/multiple-associative-array/index.js");

var MultipleAssociativeArrayFactory =
/*#__PURE__*/
function () {
  function MultipleAssociativeArrayFactory(_ref) {
    var composer = _ref.composer;

    _classCallCheck(this, MultipleAssociativeArrayFactory);

    this.composer = composer;
  }

  _createClass(MultipleAssociativeArrayFactory, [{
    key: "create",
    value: function create() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var args = this.composer.compose('data-structure/multiple-associative-array', {
        items: items
      });
      return new MultipleAssociativeArray(_objectSpread({}, args));
    }
  }]);

  return MultipleAssociativeArrayFactory;
}();

module.exports = MultipleAssociativeArrayFactory;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/multiple-associative-array/factory/locator.js":
/*!***********************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/multiple-associative-array/factory/locator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MultipleAssociativeArrayFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/multiple-associative-array/factory/index.js");

var MultipleAssociativeArrayFactoryLocator =
/*#__PURE__*/
function () {
  function MultipleAssociativeArrayFactoryLocator(locator) {
    _classCallCheck(this, MultipleAssociativeArrayFactoryLocator);

    this.locator = locator;
  }
  /**
   * @returns {MultipleAssociativeArrayFactory}
   */


  _createClass(MultipleAssociativeArrayFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var composer = this.locator.locate('core/schema/composer');
      return new MultipleAssociativeArrayFactory({
        composer: composer
      });
    }
  }]);

  return MultipleAssociativeArrayFactoryLocator;
}();

module.exports = MultipleAssociativeArrayFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/multiple-associative-array/index.js":
/*!*************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/multiple-associative-array/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AssociativeArray = __webpack_require__(/*! ../associative-array */ "./dist/browser/core/common/data-structure/associative-array/index.js");

var MultipleAssociativeArray =
/*#__PURE__*/
function (_AssociativeArray) {
  _inherits(MultipleAssociativeArray, _AssociativeArray);

  function MultipleAssociativeArray(_ref) {
    var _this;

    var items = _ref.items;

    _classCallCheck(this, MultipleAssociativeArray);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultipleAssociativeArray).call(this, {
      items: items
    }));
    _this[Symbol.for('schema')] = 'data-structure/multiple-associative-array';
    return _this;
  }

  _createClass(MultipleAssociativeArray, [{
    key: "add",
    value: function add(_ref2) {
      var id = _ref2.id,
          element = _ref2.element;

      if (_get(_getPrototypeOf(MultipleAssociativeArray.prototype), "get", this).call(this, id)) {
        var elements = _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "get", this).call(this, id);

        elements.push(element);

        _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "add", this).call(this, {
          id: id,
          element: elements
        });
      } else {
        _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "add", this).call(this, {
          id: id,
          element: [element]
        });
      }
    }
  }, {
    key: "hasElements",
    value: function hasElements(id) {
      return Array.isArray(_get(_getPrototypeOf(MultipleAssociativeArray.prototype), "get", this).call(this, id)) && _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "get", this).call(this, id).length !== 0;
    }
  }, {
    key: "getElementIndex",
    value: function getElementIndex(_ref3) {
      var id = _ref3.id,
          element = _ref3.element;
      var hasElements = this.hasElements(id);
      if (hasElements) return _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "get", this).call(this, id).indexOf(element);
      return -1;
    }
  }, {
    key: "removeElement",
    value: function removeElement(_ref4) {
      var id = _ref4.id,
          element = _ref4.element;
      var index = this.getElementIndex({
        id: id,
        element: element
      });

      if (index > -1) {
        var elements = _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "get", this).call(this, id);

        elements.splice(index, 1);

        _get(_getPrototypeOf(MultipleAssociativeArray.prototype), "add", this).call(this, {
          id: id,
          element: elements
        });
      }
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'MultipleAssociativeArray';
    }
  }]);

  return MultipleAssociativeArray;
}(AssociativeArray);

module.exports = MultipleAssociativeArray;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/multiple-associative-array/locator.js":
/*!***************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/multiple-associative-array/locator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MultipleAssociativeArray = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/multiple-associative-array/index.js");

var MultipleAssociativeArrayLocator =
/*#__PURE__*/
function () {
  function MultipleAssociativeArrayLocator(locator) {
    _classCallCheck(this, MultipleAssociativeArrayLocator);

    this.locator = locator;
  }
  /**
   * @returns {MultipleAssociativeArrayLocator}
   */


  _createClass(MultipleAssociativeArrayLocator, [{
    key: "locate",
    value: function locate() {
      return MultipleAssociativeArray;
    }
  }]);

  return MultipleAssociativeArrayLocator;
}();

module.exports = MultipleAssociativeArrayLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/object/config.js":
/*!******************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/object/config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'core': {
    'locator': {
      'core/object': 'superhero/core/object'
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/object/index.js":
/*!*****************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/object/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreObject =
/*#__PURE__*/
function () {
  function CoreObject() {
    _classCallCheck(this, CoreObject);
  }

  _createClass(CoreObject, [{
    key: "composeLowerCaseKeyedObject",

    /**
     * @example { FooBar:'FooBar' } => { foobar:'FooBar' }
     * @param {object} o input to be manipulated
     * @returns {object}
     */
    value: function composeLowerCaseKeyedObject(o) {
      var object = o || {},
          objectKeys = Object.keys(object),
          composed = objectKeys.reduce(function (c, k) {
        c[k.toLowerCase()] = object[k];
        return c;
      }, {});
      return composed;
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

  }, {
    key: "composeObjectWithoutKeys",
    value: function composeObjectWithoutKeys(o) {
      var object = o || {},
          result = _objectSpread({}, object);

      for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
      }

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];
        delete result[key];
      }

      return result;
    }
  }]);

  return CoreObject;
}();

module.exports = CoreObject;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/object/locator.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/object/locator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreObject = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/object/index.js");

var CoreObjectLocator =
/*#__PURE__*/
function () {
  function CoreObjectLocator(locator) {
    _classCallCheck(this, CoreObjectLocator);

    this.locator = locator;
  }

  _createClass(CoreObjectLocator, [{
    key: "locate",
    value: function locate() {
      return CoreObject;
    }
  }]);

  return CoreObjectLocator;
}();

module.exports = CoreObjectLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/queue/factory/index.js":
/*!************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/queue/factory/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = __webpack_require__(/*! .. */ "./dist/browser/core/common/data-structure/queue/index.js");

var QueueFactory =
/*#__PURE__*/
function () {
  function QueueFactory(_ref) {
    var composer = _ref.composer;

    _classCallCheck(this, QueueFactory);

    this.composer = composer;
  }

  _createClass(QueueFactory, [{
    key: "create",
    value: function create() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var args = this.composer.compose('data-structure/queue', {
        items: items
      });
      return new Queue(args);
    }
  }]);

  return QueueFactory;
}();

module.exports = QueueFactory;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/queue/factory/locator.js":
/*!**************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/queue/factory/locator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QueueFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/queue/factory/index.js");

var QueueFactoryLocator =
/*#__PURE__*/
function () {
  function QueueFactoryLocator(locator) {
    _classCallCheck(this, QueueFactoryLocator);

    this.locator = locator;
  }
  /**
   * @returns {QueueFactory}
   */


  _createClass(QueueFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var composer = this.locator.locate('core/schema/composer');
      return new QueueFactory({
        composer: composer
      });
    }
  }]);

  return QueueFactoryLocator;
}();

module.exports = QueueFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/queue/index.js":
/*!****************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/queue/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue =
/*#__PURE__*/
function () {
  function Queue(_ref) {
    var items = _ref.items;

    _classCallCheck(this, Queue);

    this.items = items;
    this[Symbol.for('schema')] = 'data-structure/queue';
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this.items.push(element);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (!this.isEmpty()) return this.items.shift();
      return undefined;
    }
  }, {
    key: "front",
    value: function front() {
      if (!this.isEmpty()) return this.items[0];
      return undefined;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.items = [];
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'Queue';
    }
  }]);

  return Queue;
}();

module.exports = Queue;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/queue/locator.js":
/*!******************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/queue/locator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/queue/index.js");

var QueueLocator =
/*#__PURE__*/
function () {
  function QueueLocator(locator) {
    _classCallCheck(this, QueueLocator);

    this.locator = locator;
  }
  /**
   * @returns {Queue}
   */


  _createClass(QueueLocator, [{
    key: "locate",
    value: function locate() {
      return Queue;
    }
  }]);

  return QueueLocator;
}();

module.exports = QueueLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js":
/*!***********************************************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @memberof Domain
 * @extends {Error}
 */
var InvalidAssociativeArrayError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidAssociativeArrayError, _Error);

  function InvalidAssociativeArrayError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidAssociativeArrayError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidAssociativeArrayError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.code = 'E_INVALID_ASSOCIATIVE_ARRAY';
    return _this;
  }

  return InvalidAssociativeArrayError;
}(_wrapNativeSuper(Error));

module.exports = InvalidAssociativeArrayError;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/associative-array/index.js":
/*!*********************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/associative-array/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidAssociativeArray = __webpack_require__(/*! ./error/invalid-associative-array */ "./dist/browser/core/common/data-structure/schema/validator/associative-array/error/invalid-associative-array.js");
/**
 * Validates Multiple Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */


var AssociativeArrayValidator =
/*#__PURE__*/
function () {
  function AssociativeArrayValidator(locator) {
    _classCallCheck(this, AssociativeArrayValidator);

    this.locator = locator;
  }

  _createClass(AssociativeArrayValidator, [{
    key: "valid",
    value: function valid(options, data) {
      options.collection ? this.validCollection(options, data) : this.validSingle(options, data);
    }
  }, {
    key: "validCollection",
    value: function validCollection(options, data) {
      if (!Array.isArray(data)) throw new InvalidAssociativeArray("Invalid type: \"".concat(_typeof(data), "\", array expected"));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          this.validSingle(options, item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "validArrayProperty",
    value: function validArrayProperty(data, options) {
      var customJSONValidator = this.locator.locate("core/schema/validator/custom-json"),
          customJSONOptions = {
        'custom-json': options['associative-array']
      };
      customJSONValidator.valid(customJSONOptions, data);
    }
  }, {
    key: "validSingle",
    value: function validSingle(options, data) {
      if (_typeof(data) !== 'object') throw new InvalidAssociativeArray("Invalid type: \"".concat(_typeof(data), "\", object expected"));
      if (_typeof(data['items']) !== 'object') throw new InvalidAssociativeArray("Invalid items property: \"".concat(_typeof(data), "\", object expected"));
      if (options['associative-array']) this.validArrayProperty(data['items'], options);
    }
  }]);

  return AssociativeArrayValidator;
}();

module.exports = AssociativeArrayValidator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/associative-array/locator.js":
/*!***********************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/associative-array/locator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AssociativeArrayValidator = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/schema/validator/associative-array/index.js");

var AssociativeArrayValidatorLocator =
/*#__PURE__*/
function () {
  function AssociativeArrayValidatorLocator(locator) {
    _classCallCheck(this, AssociativeArrayValidatorLocator);

    this.locator = locator;
  }
  /**
   * @returns {AssociativeArrayValidator}
   */


  _createClass(AssociativeArrayValidatorLocator, [{
    key: "locate",
    value: function locate() {
      var locator = this.locator;
      return new AssociativeArrayValidator(locator);
    }
  }]);

  return AssociativeArrayValidatorLocator;
}();

module.exports = AssociativeArrayValidatorLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/collection/error/invalid-collection.js":
/*!*********************************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/collection/error/invalid-collection.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @memberof Domain
 * @extends {Error}
 */
var InvalidCollectionError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidCollectionError, _Error);

  function InvalidCollectionError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidCollectionError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidCollectionError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.code = 'E_INVALID_COLLECTION';
    return _this;
  }

  return InvalidCollectionError;
}(_wrapNativeSuper(Error));

module.exports = InvalidCollectionError;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/collection/index.js":
/*!**************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/collection/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidArray = __webpack_require__(/*! ./error/invalid-collection */ "./dist/browser/core/common/data-structure/schema/validator/collection/error/invalid-collection.js");
/**
 * Validates Collection
 * @memberof Core
 * @implements {superhero/core/schema/validator}
 */


var CollectionValidator =
/*#__PURE__*/
function () {
  function CollectionValidator(locator) {
    _classCallCheck(this, CollectionValidator);

    this.locator = locator;
  }

  _createClass(CollectionValidator, [{
    key: "valid",
    value: function valid(options, data) {
      options.collection ? this.validCollection(options, data) : this.validSingle(options, data);
    }
  }, {
    key: "validCollection",
    value: function validCollection(options, data) {
      if (!Array.isArray(data)) throw new InvalidArray("Invalid type: \"".concat(_typeof(data), "\", array expected"));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          this.validSingle(options, item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "validCollectionElements",
    value: function validCollectionElements(data, options) {
      var type = options['collection-type'],
          validator = this.locator.locate("core/schema/validator/".concat(type)),
          collectionOptions = options['collection-options'] || {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;
          validator.valid(collectionOptions, element);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "validSingle",
    value: function validSingle(options, data) {
      if (!Array.isArray(data)) throw new InvalidArray("Invalid type: \"".concat(_typeof(data), "\", array expected"));else if (options['collection-type']) this.validCollectionElements(data, options);
    }
  }]);

  return CollectionValidator;
}();

module.exports = CollectionValidator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/collection/locator.js":
/*!****************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/collection/locator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CollectionValidator = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/schema/validator/collection/index.js");

var CollectionValidatorLocator =
/*#__PURE__*/
function () {
  function CollectionValidatorLocator(locator) {
    _classCallCheck(this, CollectionValidatorLocator);

    this.locator = locator;
  }
  /**
   * @returns {CollectionValidator}
   */


  _createClass(CollectionValidatorLocator, [{
    key: "locate",
    value: function locate() {
      var locator = this.locator;
      return new CollectionValidator(locator);
    }
  }]);

  return CollectionValidatorLocator;
}();

module.exports = CollectionValidatorLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js":
/*!****************************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @memberof Domain
 * @extends {Error}
 */
var InvalidJSONError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidJSONError, _Error);

  function InvalidJSONError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidJSONError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidJSONError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.code = 'E_INVALID_JSON';
    return _this;
  }

  return InvalidJSONError;
}(_wrapNativeSuper(Error));

module.exports = InvalidJSONError;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/custom-json/index.js":
/*!***************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/custom-json/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidJSON = __webpack_require__(/*! ./error/invalid-json */ "./dist/browser/core/common/data-structure/schema/validator/custom-json/error/invalid-json.js");
/**
 * Validates Multiple Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */


var CustomJSONValidator =
/*#__PURE__*/
function () {
  function CustomJSONValidator(locator) {
    _classCallCheck(this, CustomJSONValidator);

    this.locator = locator;
  }

  _createClass(CustomJSONValidator, [{
    key: "valid",
    value: function valid(options, data) {
      options.collection ? this.validCollection(options, data) : this.validSingle(options, data);
    }
  }, {
    key: "validCollection",
    value: function validCollection(options, data) {
      if (!Array.isArray(data)) throw new InvalidJSON("Invalid type: \"".concat(_typeof(data), "\", array expected"));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          this.validSingle(options, item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "validProperties",
    value: function validProperties(data, options) {
      var type = options['custom-json'].type,
          validator = this.locator.locate("core/schema/validator/".concat(type)),
          validatorOptions = options['custom-json'].options || {};

      for (var key in data) {
        try {
          validator.valid(validatorOptions, data[key]);
        } catch (error) {
          throw new InvalidJSON("Invalid property \"".concat(key, "\": got ").concat(_typeof(data[key]), ", ").concat(type, " expected"));
        }
      }
    }
  }, {
    key: "validSingle",
    value: function validSingle(options, data) {
      var jsonValidator = this.locator.locate("core/schema/validator/json");
      jsonValidator.valid(options, data);
      if (_typeof(data) !== 'object') throw new InvalidJSON("Invalid type: \"".concat(_typeof(data), "\", object expected"));
      if (options['custom-json']) this.validProperties(data, options);
    }
  }]);

  return CustomJSONValidator;
}();

module.exports = CustomJSONValidator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/custom-json/locator.js":
/*!*****************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/custom-json/locator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomJSONValidator = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/schema/validator/custom-json/index.js");

var CustomJSONValidatorLocator =
/*#__PURE__*/
function () {
  function CustomJSONValidatorLocator(locator) {
    _classCallCheck(this, CustomJSONValidatorLocator);

    this.locator = locator;
  }
  /**
   * @returns {CustomJSONValidator}
   */


  _createClass(CustomJSONValidatorLocator, [{
    key: "locate",
    value: function locate() {
      var locator = this.locator;
      return new CustomJSONValidator(locator);
    }
  }]);

  return CustomJSONValidatorLocator;
}();

module.exports = CustomJSONValidatorLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/index.js":
/*!***************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/index.js ***!
  \***************************************************************************/
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

/***/ "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @memberof Domain
 * @extends {Error}
 */
var InvalidMultipleAssociativeArrayError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidMultipleAssociativeArrayError, _Error);

  function InvalidMultipleAssociativeArrayError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidMultipleAssociativeArrayError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidMultipleAssociativeArrayError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.code = 'E_INVALID_MULTIPLE_ASSOCIATIVE_ARRAY';
    return _this;
  }

  return InvalidMultipleAssociativeArrayError;
}(_wrapNativeSuper(Error));

module.exports = InvalidMultipleAssociativeArrayError;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/index.js":
/*!******************************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidMultipleAssociativeArray = __webpack_require__(/*! ./error/invalid-multiple-associative-array */ "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/error/invalid-multiple-associative-array.js");
/**
 * Validates Associative Array
 * @memberof Domain
 * @implements {superhero/core/schema/validator}
 */


var MultipleAssociativeArrayValidator =
/*#__PURE__*/
function () {
  function MultipleAssociativeArrayValidator(associativeArrayValidator) {
    _classCallCheck(this, MultipleAssociativeArrayValidator);

    this.associativeArrayValidator = associativeArrayValidator;
  }

  _createClass(MultipleAssociativeArrayValidator, [{
    key: "valid",
    value: function valid(options, data) {
      options.collection ? this.validCollection(options, data) : this.validSingle(options, data);
    }
  }, {
    key: "validCollection",
    value: function validCollection(options, data) {
      if (!Array.isArray(data)) throw new InvalidMultipleAssociativeArray("Invalid type: \"".concat(_typeof(data), "\", array expected"));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          this.validSingle(options, item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "validSingle",
    value: function validSingle(options, data) {
      if (_typeof(data) !== 'object') throw new InvalidMultipleAssociativeArray("Invalid type: \"".concat(_typeof(data), "\", object expected"));
      var associativeArrayOptions = {
        'associative-array': {
          'type': options['associative-array'] && options['associative-array'].type ? options['associative-array'].type : 'collection',
          'options': options['associative-array'] && options['associative-array'].options ? options['associative-array'].options : {}
        }
      };
      this.associativeArrayValidator.valid(associativeArrayOptions, data);
    }
  }]);

  return MultipleAssociativeArrayValidator;
}();

module.exports = MultipleAssociativeArrayValidator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/locator.js":
/*!********************************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/locator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MultipleAssociativeArrayValidator = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/schema/validator/multiple-associative-array/index.js");

var MultipleAssociativeArrayValidatorLocator =
/*#__PURE__*/
function () {
  function MultipleAssociativeArrayValidatorLocator(locator) {
    _classCallCheck(this, MultipleAssociativeArrayValidatorLocator);

    this.locator = locator;
  }
  /**
   * @returns {MultipleAssociativeArrayValidator}
   */


  _createClass(MultipleAssociativeArrayValidatorLocator, [{
    key: "locate",
    value: function locate() {
      var associateArrayValidator = this.locator.locate('core/schema/validator/data-structure/associative-array');
      return new MultipleAssociativeArrayValidator(associateArrayValidator);
    }
  }]);

  return MultipleAssociativeArrayValidatorLocator;
}();

module.exports = MultipleAssociativeArrayValidatorLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/associative-array.js":
/*!******************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/associative-array.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'items': {
    'type': 'custom-json',
    'default': {}
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/edge.js":
/*!*****************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/edge.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'source': {
    'type': 'string',
    'not-empty': false,
    'optional': true
  },
  'target': {
    'type': 'string',
    'not-empty': false
  },
  'payload': {
    'type': 'json'
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/graph.js":
/*!******************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/graph.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'isDirected': {
    'type': 'boolean'
  },
  'nodes': {
    'type': 'data-structure/associative-array',
    'associative-array-type': 'schema',
    'associative-array-type-options': {
      'schema': 'data-structure/node'
    }
  },
  'edges': {
    'type': 'data-structure/multiple-associative-array',
    'associative-array-type-options': {
      'array-type': 'schema',
      'array-type-options': {
        'schema': 'data-structure/edge'
      }
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/multiple-associative-array.js":
/*!***************************************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/multiple-associative-array.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  '@meta': {
    'immutable': false,
    'extends': ['data-structure/associative-array']
  },
  'items': {
    'type': 'custom-json',
    'custom-json': {
      'type': 'collection'
    },
    'default': {}
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/node.js":
/*!*****************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/node.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'id': {
    'type': 'string',
    'not-empty': false
  },
  'name': {
    'type': 'string',
    'not-empty': false
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/queue.js":
/*!******************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/queue.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'items': {
    'type': 'collection',
    'default': []
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/stack.js":
/*!******************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/stack.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'items': {
    'type': 'collection',
    'default': []
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/schema/value-object/tree.js":
/*!*****************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/schema/value-object/tree.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  '@meta': {
    'immutable': false,
    'extends': ['data-structure/graph']
  },
  'root': {
    'type': 'string',
    'optional': true,
    'nullable': true
  }
};

/***/ }),

/***/ "./dist/browser/core/common/data-structure/stack/factory/index.js":
/*!************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/stack/factory/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack = __webpack_require__(/*! .. */ "./dist/browser/core/common/data-structure/stack/index.js");

var StackFactory =
/*#__PURE__*/
function () {
  function StackFactory(_ref) {
    var composer = _ref.composer;

    _classCallCheck(this, StackFactory);

    this.composer = composer;
  }

  _createClass(StackFactory, [{
    key: "create",
    value: function create() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var args = this.composer.compose('data-structure/stack', {
        items: items
      });
      return new Stack(args);
    }
  }]);

  return StackFactory;
}();

module.exports = StackFactory;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/stack/factory/locator.js":
/*!**************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/stack/factory/locator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StackFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/stack/factory/index.js");

var StackFactoryLocator =
/*#__PURE__*/
function () {
  function StackFactoryLocator(locator) {
    _classCallCheck(this, StackFactoryLocator);

    this.locator = locator;
  }
  /**
   * @returns {StackFactory}
   */


  _createClass(StackFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var composer = this.locator.locate('core/schema/composer');
      return new StackFactory({
        composer: composer
      });
    }
  }]);

  return StackFactoryLocator;
}();

module.exports = StackFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/stack/index.js":
/*!****************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/stack/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack(_ref) {
    var items = _ref.items;

    _classCallCheck(this, Stack);

    this.items = items;
    this[Symbol.for('schema')] = 'data-structurestack';
  }

  _createClass(Stack, [{
    key: "stack",
    value: function stack(element) {
      this.items.push(element);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (!this.isEmpty()) return this.items.pop();
      return undefined;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.items[this.items.length - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.items = [];
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'Stack';
    }
  }]);

  return Stack;
}();

module.exports = Stack;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/stack/locator.js":
/*!******************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/stack/locator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/stack/index.js");

var StackLocator =
/*#__PURE__*/
function () {
  function StackLocator(locator) {
    _classCallCheck(this, StackLocator);

    this.locator = locator;
  }
  /**
   * @returns {Stack}
   */


  _createClass(StackLocator, [{
    key: "locate",
    value: function locate() {
      return Stack;
    }
  }]);

  return StackLocator;
}();

module.exports = StackLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/tree/factory/index.js":
/*!***********************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/tree/factory/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tree = __webpack_require__(/*! .. */ "./dist/browser/core/common/data-structure/tree/index.js");

var TreeFactory =
/*#__PURE__*/
function () {
  function TreeFactory(_ref) {
    var composer = _ref.composer,
        associativeArrayFactory = _ref.associativeArrayFactory,
        multipleAssociativeArrayFactory = _ref.multipleAssociativeArrayFactory,
        queueFactory = _ref.queueFactory,
        deepassign = _ref.deepassign;

    _classCallCheck(this, TreeFactory);

    this.composer = composer;
    this.associativeArrayFactory = associativeArrayFactory;
    this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory;
    this.queueFactory = queueFactory;
    this.deepassign = deepassign;
    this[Symbol.for('schema')] = 'data-structure/tree';
  }

  _createClass(TreeFactory, [{
    key: "createEdges",
    value: function createEdges(_ref2) {
      var edges = _ref2.edges;
      var items = edges.items;
      return this.multipleAssociativeArrayFactory.create(items);
    }
  }, {
    key: "createNodes",
    value: function createNodes(_ref3) {
      var nodes = _ref3.nodes;
      var items = nodes.items;
      return this.associativeArrayFactory.create(items);
    }
  }, {
    key: "createQueue",
    value: function createQueue() {
      return this.queueFactory.create();
    }
    /**
     * @returns {Tree}
     */

  }, {
    key: "create",
    value: function create(tree) {
      var composedTree = this.composer.compose(this[Symbol.for('schema')], tree);
      return new Tree(_objectSpread({}, composedTree, {
        composer: this.composer,
        edges: this.createEdges(composedTree),
        nodes: this.createNodes(composedTree),
        queue: this.createQueue(),
        deepassign: this.deepassign
      }));
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'TreeFactory';
    }
  }]);

  return TreeFactory;
}();

module.exports = TreeFactory;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/tree/factory/locator.js":
/*!*************************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/tree/factory/locator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TreeFactory = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/tree/factory/index.js");

var TreeFactoryLocator =
/*#__PURE__*/
function () {
  function TreeFactoryLocator(locator) {
    _classCallCheck(this, TreeFactoryLocator);

    this.locator = locator;
  }
  /**
   * @returns {TreeFactory}
   */


  _createClass(TreeFactoryLocator, [{
    key: "locate",
    value: function locate() {
      var associativeArrayFactory = this.locator.locate('data-structure/associative-array/factory'),
          multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array/factory'),
          queueFactory = this.locator.locate('data-structure/queue/factory'),
          composer = this.locator.locate('core/schema/composer'),
          deepassign = this.locator.locate('core/deepassign');
      return new TreeFactory({
        composer: composer,
        associativeArrayFactory: associativeArrayFactory,
        multipleAssociativeArrayFactory: multipleAssociativeArrayFactory,
        queueFactory: queueFactory,
        deepassign: deepassign
      });
    }
  }]);

  return TreeFactoryLocator;
}();

module.exports = TreeFactoryLocator;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/tree/index.js":
/*!***************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/tree/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Graph = __webpack_require__(/*! ../graph */ "./dist/browser/core/common/data-structure/graph/index.js"),
    NodeNotExist = __webpack_require__(/*! ../graph/error/node-not-exists */ "./dist/browser/core/common/data-structure/graph/error/node-not-exists.js");

var Tree =
/*#__PURE__*/
function (_Graph) {
  _inherits(Tree, _Graph);

  function Tree(_ref) {
    var _this;

    var root = _ref.root,
        deepassign = _ref.deepassign,
        args = _objectWithoutProperties(_ref, ["root", "deepassign"]);

    _classCallCheck(this, Tree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tree).call(this, args));
    _this.deepassign = deepassign;
    _this.root = root;
    return _this;
  }

  _createClass(Tree, [{
    key: "setRoot",
    value: function setRoot(rootNodeId) {
      if (!this.nodes.get(rootNodeId)) throw new NodeNotExist('Node does not exists');
      this.root = rootNodeId;
    }
  }, {
    key: "getLeaves",
    value: function getLeaves() {
      var _this2 = this;

      var nodeIdList = Object.keys(this.nodes.items),
          leaves = nodeIdList.filter(function (nodeId) {
        return !_this2.edges.get(nodeId);
      });
      return leaves;
    }
  }, {
    key: "getJSON",
    value: function getJSON(flattened) {
      var _this3 = this;

      if (!this.nodes.get(this.root)) throw new NodeNotExist('Root does not exists');
      var bfs = this.bfs(this.root);
      var json = {};
      bfs.forEach(function (nodeId, nodeIndex) {
        var node = _this3.nodes.get(nodeId),
            jsonPath = _this3.getJSONPath(nodeId, nodeIndex, bfs, node.name);

        if (flattened) json[jsonPath] = _objectSpread({}, node);else json = _this3.deepassign.assign(json, jsonPath, _objectSpread({}, node));
      });
      return json;
    }
  }, {
    key: "getJSONPath",
    value: function getJSONPath(nodeId, nodeIndex, path, jsonPath) {
      var previousIndex = nodeIndex - 1;
      var parent;

      for (var i = previousIndex; i >= 0; i--) {
        var previousNodeId = path[i],
            previousNodeEdges = this.edges.get(previousNodeId);

        if (previousNodeEdges) {
          var currentNodeEdge = previousNodeEdges.find(function (previousNodeEdge) {
            return previousNodeEdge.target === nodeId;
          });

          if (currentNodeEdge) {
            parent = previousNodeId;
            break;
          }
        }
      }

      if (parent) {
        var parentNode = this.nodes.get(parent),
            parentIndex = path.findIndex(function (element) {
          return element === parent;
        });
        return this.getJSONPath(parent, parentIndex, path, "".concat(parentNode.name, ".").concat(jsonPath));
      } else {
        return jsonPath;
      }
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return 'Tree';
    }
  }]);

  return Tree;
}(Graph);

module.exports = Tree;

/***/ }),

/***/ "./dist/browser/core/common/data-structure/tree/locator.js":
/*!*****************************************************************!*\
  !*** ./dist/browser/core/common/data-structure/tree/locator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tree = __webpack_require__(/*! . */ "./dist/browser/core/common/data-structure/tree/index.js");

var TreeLocator =
/*#__PURE__*/
function () {
  function TreeLocator(locator) {
    _classCallCheck(this, TreeLocator);

    this.locator = locator;
  }

  _createClass(TreeLocator, [{
    key: "locate",
    value: function locate() {
      return Tree;
    }
  }]);

  return TreeLocator;
}();

module.exports = TreeLocator;

/***/ }),

/***/ "./dist/browser/core/common/deepassign/config.js":
/*!*******************************************************!*\
  !*** ./dist/browser/core/common/deepassign/config.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/deepassign';
module.exports = {
  'core': {
    'locator': {
      'core/deepassign': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/deepassign/error/not-an-object.js":
/*!********************************************************************!*\
  !*** ./dist/browser/core/common/deepassign/error/not-an-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NotAnObjectError =
/*#__PURE__*/
function (_Error) {
  _inherits(NotAnObjectError, _Error);

  function NotAnObjectError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NotAnObjectError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NotAnObjectError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.code = 'E_NOT_AN_OBJECT';
    return _this;
  }

  return NotAnObjectError;
}(_wrapNativeSuper(Error));

module.exports = NotAnObjectError;

/***/ }),

/***/ "./dist/browser/core/common/deepassign/index.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/common/deepassign/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NotAnObjectError = __webpack_require__(/*! ./error/not-an-object */ "./dist/browser/core/common/deepassign/error/not-an-object.js");

var DeepAssign =
/*#__PURE__*/
function () {
  function DeepAssign(deepclone) {
    _classCallCheck(this, DeepAssign);

    this.deepclone = deepclone;
    this.arrayPropertyRegexp = /(\w+)\[([0-9]+)\]/i;
  }

  _createClass(DeepAssign, [{
    key: "getPath",
    value: function getPath(keys, index) {
      var path = '';

      for (var i = 0; i < index; i++) {
        path += "".concat(keys[i], ".");
      }

      return "".concat(path).concat(keys[index]);
    }
  }, {
    key: "isAssignableObject",
    value: function isAssignableObject(obj) {
      return obj && _typeof(obj) === 'object';
    }
  }, {
    key: "isArrayProperty",
    value: function isArrayProperty(key) {
      var match = this.arrayPropertyRegexp.exec(key);
      return !!match;
    }
  }, {
    key: "getArrayPropertyIndex",
    value: function getArrayPropertyIndex(key) {
      var match = this.arrayPropertyRegexp.exec(key);
      return {
        name: match[1],
        position: Number(match[2])
      };
    }
  }, {
    key: "isLastKey",
    value: function isLastKey(keys, index) {
      return index === keys.length - 1;
    }
  }, {
    key: "objectProperty",
    value: function objectProperty(obj, value, key, index, keys) {
      // if(!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index))
      //   throw new NotAnObjectError(`Expected and object for assigning properties: ${this.getPath(keys, index)}`)
      if (!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index)) {
        obj[key] = {};
        obj = obj[key];
      } else if (this.isLastKey(keys, index)) {
        obj[key] = value;
      } else {
        obj = obj[key];
      }

      return obj;
    }
  }, {
    key: "arrayProperty",
    value: function arrayProperty(obj, value, key, index, keys) {
      var _this$getArrayPropert = this.getArrayPropertyIndex(key),
          name = _this$getArrayPropert.name,
          position = _this$getArrayPropert.position;

      if (!this.isAssignableObject(obj[name][position]) && !this.isLastKey(keys, index)) throw new NotAnObjectError("Expected and object for assigning properties: ".concat(this.getPath(keys, index)));else if (this.isLastKey(keys, index)) obj[name][position] = value;else obj = obj[name][position];
      return obj;
    }
  }, {
    key: "assignPath",
    value: function assignPath(obj, keys, value) {
      var _this = this;

      var pointer = obj;
      keys.forEach(function (key, index) {
        if (_this.isArrayProperty(key)) pointer = _this.arrayProperty(pointer, value, key, index, keys);else pointer = _this.objectProperty(pointer, value, key, index, keys);
      });
      return obj;
    }
  }, {
    key: "assign",
    value: function assign(obj, path, value) {
      var keys = path.split(/\.|\//),
          copy = this.deepclone.clone(obj);
      return this.assignPath(copy, keys, value);
    }
  }]);

  return DeepAssign;
}();

module.exports = DeepAssign;

/***/ }),

/***/ "./dist/browser/core/common/deepassign/locator.js":
/*!********************************************************!*\
  !*** ./dist/browser/core/common/deepassign/locator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepAssign = __webpack_require__(/*! . */ "./dist/browser/core/common/deepassign/index.js");

var DeepAssignLocator =
/*#__PURE__*/
function () {
  function DeepAssignLocator(locator) {
    _classCallCheck(this, DeepAssignLocator);

    this.locator = locator;
  }
  /**
   * @returns {DeepAssign}
   */


  _createClass(DeepAssignLocator, [{
    key: "locate",
    value: function locate() {
      var deepclone = this.locator.locate('core/deepclone');
      return new DeepAssign(deepclone);
    }
  }]);

  return DeepAssignLocator;
}();

module.exports = DeepAssignLocator;

/***/ }),

/***/ "./dist/browser/core/common/deepclone/config.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/common/deepclone/config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/deepclone';
module.exports = {
  'core': {
    'locator': {
      'core/deepclone': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/deepclone/error/failed-to-clone.js":
/*!*********************************************************************!*\
  !*** ./dist/browser/core/common/deepclone/error/failed-to-clone.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FailedToCloneError =
/*#__PURE__*/
function (_Error) {
  _inherits(FailedToCloneError, _Error);

  function FailedToCloneError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FailedToCloneError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FailedToCloneError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.code = 'E_FAILED_TO_CLONE';
    return _this;
  }

  return FailedToCloneError;
}(_wrapNativeSuper(Error));

module.exports = FailedToCloneError;

/***/ }),

/***/ "./dist/browser/core/common/deepclone/index.js":
/*!*****************************************************!*\
  !*** ./dist/browser/core/common/deepclone/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FailedToCloneError = __webpack_require__(/*! ./error/failed-to-clone */ "./dist/browser/core/common/deepclone/error/failed-to-clone.js");

var DeepClone =
/*#__PURE__*/
function () {
  function DeepClone() {
    _classCallCheck(this, DeepClone);
  }

  _createClass(DeepClone, [{
    key: "clone",
    value: function clone(obj) {
      try {
        return JSON.parse(JSON.stringify(obj));
      } catch (error) {
        throw new FailedToCloneError(error.message);
      }
    }
  }]);

  return DeepClone;
}();

module.exports = DeepClone;

/***/ }),

/***/ "./dist/browser/core/common/deepclone/locator.js":
/*!*******************************************************!*\
  !*** ./dist/browser/core/common/deepclone/locator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepClone = __webpack_require__(/*! . */ "./dist/browser/core/common/deepclone/index.js");

var DeepCloneLocator =
/*#__PURE__*/
function () {
  function DeepCloneLocator(locator) {
    _classCallCheck(this, DeepCloneLocator);

    this.locator = locator;
  }

  _createClass(DeepCloneLocator, [{
    key: "locate",
    value: function locate() {
      return new DeepClone();
    }
  }]);

  return DeepCloneLocator;
}();

module.exports = DeepCloneLocator;

/***/ }),

/***/ "./dist/browser/core/common/deepfind/config.js":
/*!*****************************************************!*\
  !*** ./dist/browser/core/common/deepfind/config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/deepfind';
module.exports = {
  'core': {
    'locator': {
      'core/deepfind': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/deepfind/index.js":
/*!****************************************************!*\
  !*** ./dist/browser/core/common/deepfind/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepFind =
/*#__PURE__*/
function () {
  function DeepFind() {
    _classCallCheck(this, DeepFind);
  }

  _createClass(DeepFind, [{
    key: "find",
    value: function find(path, obj) {
      // split on "." or "/"
      var keys = path.split(/\.|\//);
      return keys.reduce(function (obj, key) {
        return obj && obj[key];
      }, obj);
    }
  }]);

  return DeepFind;
}();

module.exports = DeepFind;

/***/ }),

/***/ "./dist/browser/core/common/deepfind/locator.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/common/deepfind/locator.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepFind = __webpack_require__(/*! . */ "./dist/browser/core/common/deepfind/index.js");

var DeepFindLocator =
/*#__PURE__*/
function () {
  function DeepFindLocator(locator) {
    _classCallCheck(this, DeepFindLocator);

    this.locator = locator;
  }

  _createClass(DeepFindLocator, [{
    key: "locate",
    value: function locate() {
      return new DeepFind();
    }
  }]);

  return DeepFindLocator;
}();

module.exports = DeepFindLocator;

/***/ }),

/***/ "./dist/browser/core/common/deepfreeze/config.js":
/*!*******************************************************!*\
  !*** ./dist/browser/core/common/deepfreeze/config.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/deepfreeze';
module.exports = {
  'core': {
    'locator': {
      'core/deepfreeze': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/deepfreeze/index.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/common/deepfreeze/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepFreeze =
/*#__PURE__*/
function () {
  function DeepFreeze() {
    _classCallCheck(this, DeepFreeze);
  }

  _createClass(DeepFreeze, [{
    key: "freeze",
    value: function freeze(obj) {
      var propNames = Object.getOwnPropertyNames(obj);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var name = _step.value;
          var value = obj[name];
          obj[name] = value && _typeof(value) === 'object' ? this.freeze(value) : value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Object.freeze(obj);
    }
  }]);

  return DeepFreeze;
}();

module.exports = DeepFreeze;

/***/ }),

/***/ "./dist/browser/core/common/deepfreeze/locator.js":
/*!********************************************************!*\
  !*** ./dist/browser/core/common/deepfreeze/locator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepFreeze = __webpack_require__(/*! . */ "./dist/browser/core/common/deepfreeze/index.js");

var DeepFreezeLocator =
/*#__PURE__*/
function () {
  function DeepFreezeLocator(locator) {
    _classCallCheck(this, DeepFreezeLocator);

    this.locator = locator;
  }

  _createClass(DeepFreezeLocator, [{
    key: "locate",
    value: function locate() {
      return new DeepFreeze();
    }
  }]);

  return DeepFreezeLocator;
}();

module.exports = DeepFreezeLocator;

/***/ }),

/***/ "./dist/browser/core/common/deepmerge/config.js":
/*!******************************************************!*\
  !*** ./dist/browser/core/common/deepmerge/config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/deepmerge';
module.exports = {
  'core': {
    'locator': {
      'core/deepmerge': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/deepmerge/index.js":
/*!*****************************************************!*\
  !*** ./dist/browser/core/common/deepmerge/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepMerge =
/*#__PURE__*/
function () {
  function DeepMerge() {
    _classCallCheck(this, DeepMerge);
  }

  _createClass(DeepMerge, [{
    key: "merge",
    value: function merge(a, b) {
      var result = this._merge(a, b);

      for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        c[_key - 2] = arguments[_key];
      }

      return c.length ? this.merge.apply(this, [result, c[0]].concat(_toConsumableArray(c.slice(1)))) : result;
    }
  }, {
    key: "_merge",
    value: function _merge(a, b) {
      if (_typeof(a) !== 'object' || a === null) return b;
      return Array.isArray(a) ? this._mergeArray(a, b) : this._mergeObject(a, b);
    }
  }, {
    key: "_mergeArray",
    value: function _mergeArray(a, b) {
      if (!Array.isArray(b)) return b;
      a.push.apply(a, _toConsumableArray(b));
      return a;
    }
  }, {
    key: "_mergeObject",
    value: function _mergeObject(a, b) {
      for (var key in b) {
        a[key] = key in a ? this._merge(a[key], b[key]) : b[key];
      }

      return a;
    }
  }]);

  return DeepMerge;
}();

module.exports = DeepMerge;

/***/ }),

/***/ "./dist/browser/core/common/deepmerge/locator.js":
/*!*******************************************************!*\
  !*** ./dist/browser/core/common/deepmerge/locator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DeepMerge = __webpack_require__(/*! . */ "./dist/browser/core/common/deepmerge/index.js");

var DeepMergeLocator =
/*#__PURE__*/
function () {
  function DeepMergeLocator(locator) {
    _classCallCheck(this, DeepMergeLocator);

    this.locator = locator;
  }

  _createClass(DeepMergeLocator, [{
    key: "locate",
    value: function locate() {
      return new DeepMerge();
    }
  }]);

  return DeepMergeLocator;
}();

module.exports = DeepMergeLocator;

/***/ }),

/***/ "./dist/browser/core/common/locator/constituent.js":
/*!*********************************************************!*\
  !*** ./dist/browser/core/common/locator/constituent.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocatorNotImplementedError = __webpack_require__(/*! ./error/locator-not-implemented */ "./dist/browser/core/common/locator/error/locator-not-implemented.js");
/**
 * For classes that represent a locator constituent of a composite pattern.
 *
 * @abstract
 */


var LocatorConstituent =
/*#__PURE__*/
function () {
  function LocatorConstituent(locator) {
    _classCallCheck(this, LocatorConstituent);

    this.locator = locator;
  }
  /**
   * A factory method for a service
   * @returns {*} An instenace of the service that is being located
   * @abstract
   */


  _createClass(LocatorConstituent, [{
    key: "locate",
    value: function locate() {
      throw new LocatorNotImplementedError('the "locate" method was not overwritten');
    }
  }]);

  return LocatorConstituent;
}();

module.exports = LocatorConstituent;

/***/ }),

/***/ "./dist/browser/core/common/locator/error/locator-not-implemented.js":
/*!***************************************************************************!*\
  !*** ./dist/browser/core/common/locator/error/locator-not-implemented.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LocatorNotImplementedError =
/*#__PURE__*/
function (_Error) {
  _inherits(LocatorNotImplementedError, _Error);

  function LocatorNotImplementedError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LocatorNotImplementedError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LocatorNotImplementedError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_LOCATOR_NOT_IMPLEMENTED';
    return _this;
  }

  return LocatorNotImplementedError;
}(_wrapNativeSuper(Error));

module.exports = LocatorNotImplementedError;

/***/ }),

/***/ "./dist/browser/core/common/locator/error/service-undefined.js":
/*!*********************************************************************!*\
  !*** ./dist/browser/core/common/locator/error/service-undefined.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ServiceUndefinedError =
/*#__PURE__*/
function (_ReferenceError) {
  _inherits(ServiceUndefinedError, _ReferenceError);

  function ServiceUndefinedError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ServiceUndefinedError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ServiceUndefinedError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SERVICE_UNDEFINED';
    return _this;
  }

  return ServiceUndefinedError;
}(_wrapNativeSuper(ReferenceError));

module.exports = ServiceUndefinedError;

/***/ }),

/***/ "./dist/browser/core/common/locator/index.js":
/*!***************************************************!*\
  !*** ./dist/browser/core/common/locator/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServiceUndefinedError = __webpack_require__(/*! ./error/service-undefined */ "./dist/browser/core/common/locator/error/service-undefined.js");

var Locator =
/*#__PURE__*/
function () {
  function Locator() {
    _classCallCheck(this, Locator);

    this.services = {};
  }

  _createClass(Locator, [{
    key: "set",
    value: function set(name, service) {
      this.services[name] = service;
    }
  }, {
    key: "has",
    value: function has(name) {
      return name in this.services;
    }
  }, {
    key: "locate",
    value: function locate(service) {
      if (service in this.services) return this.services[service];
      throw new ServiceUndefinedError("\"".concat(service, "\" can not be located"));
    }
  }]);

  return Locator;
}();

module.exports = Locator;

/***/ }),

/***/ "./dist/browser/core/common/object/config.js":
/*!***************************************************!*\
  !*** ./dist/browser/core/common/object/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/object';
module.exports = {
  'core': {
    'locator': {
      'core/object': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/object/index.js":
/*!**************************************************!*\
  !*** ./dist/browser/core/common/object/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreObject =
/*#__PURE__*/
function () {
  function CoreObject(coreString) {
    _classCallCheck(this, CoreObject);

    this.coreString = coreString;
  }

  _createClass(CoreObject, [{
    key: "trimKeys",
    value: function trimKeys(o) {
      return this.transformKeys(o, this.coreString.trim);
    }
  }, {
    key: "hyphenateKeys",
    value: function hyphenateKeys(o, separator) {
      return this.transformKeys(o, this.coreString.hyphenate, separator);
    }
    /**
     * @example { FooBar:'FooBar' } => { foobar:'FooBar' }
     * @param {object} o input to be manipulated
     * @returns {object}
     */

  }, {
    key: "lowercaseKeys",
    value: function lowercaseKeys(o) {
      return this.transformKeys(o, this.coreString.lowercase);
    }
    /**
     * @example { FooBar:'FooBar' } => { FOOBAR:'FooBar' }
     * @param {object} o input to be manipulated
     * @returns {object}
     */

  }, {
    key: "upppercaseKeys",
    value: function upppercaseKeys(o) {
      return this.transformKeys(o, this.coreString.uppercase);
    }
    /**
     * @example { FooBar:'FooBar' } => { FOOBAR:'FooBar' }
     * @param {object} o input to be manipulated
     * @returns {object}
     */

  }, {
    key: "camelcaseKeys",
    value: function camelcaseKeys(o) {
      return this.transformKeys(o, this.coreString.camelCase);
    }
  }, {
    key: "transformKeys",
    value: function transformKeys(o, transformFunction) {
      for (var _len = arguments.length, transformArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        transformArgs[_key - 2] = arguments[_key];
      }

      var object = o || {},
          keys = Object.keys(object),
          composed = keys.reduce(function (c, k) {
        c[transformFunction.apply(void 0, [k].concat(transformArgs))] = object[k];
        return c;
      }, {});
      return composed;
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

  }, {
    key: "removeKeys",
    value: function removeKeys(o) {
      var object = o || {},
          result = _objectSpread({}, object);

      for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        keys[_key2 - 1] = arguments[_key2];
      }

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];
        delete result[key];
      }

      return result;
    }
  }, {
    key: "removeKeysWithSpecificValues",
    value: function removeKeysWithSpecificValues(o) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var object = o || {},
          result = _objectSpread({}, object),
          keys = Object.keys(result);

      for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
        var key = _keys2[_i2];
        if (values.includes(result[key])) delete result[key];
      }

      return result;
    }
  }]);

  return CoreObject;
}();

module.exports = CoreObject;

/***/ }),

/***/ "./dist/browser/core/common/object/locator.js":
/*!****************************************************!*\
  !*** ./dist/browser/core/common/object/locator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreObject = __webpack_require__(/*! . */ "./dist/browser/core/common/object/index.js");

var CoreObjectLocator =
/*#__PURE__*/
function () {
  function CoreObjectLocator(locator) {
    _classCallCheck(this, CoreObjectLocator);

    this.locator = locator;
  }

  _createClass(CoreObjectLocator, [{
    key: "locate",
    value: function locate() {
      var coreString = this.locator.locate('core/string');
      return new CoreObject(coreString);
    }
  }]);

  return CoreObjectLocator;
}();

module.exports = CoreObjectLocator;

/***/ }),

/***/ "./dist/browser/core/common/observer/config.js":
/*!*****************************************************!*\
  !*** ./dist/browser/core/common/observer/config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/observer';
module.exports = {
  'core': {
    'locator': {
      'core/observer/error': "".concat(dirname, "/error"),
      'core/observer/info': "".concat(dirname, "/info"),
      'core/observer/warning': "".concat(dirname, "/warning")
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/observer/error/index.js":
/*!**********************************************************!*\
  !*** ./dist/browser/core/common/observer/error/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleObserverError =
/*#__PURE__*/
function () {
  function ConsoleObserverError(console) {
    _classCallCheck(this, ConsoleObserverError);

    this.console = console;
  }

  _createClass(ConsoleObserverError, [{
    key: "observe",
    value: function observe(event) {
      this.console.error(event.name, event.data);
    }
  }]);

  return ConsoleObserverError;
}();

module.exports = ConsoleObserverError;

/***/ }),

/***/ "./dist/browser/core/common/observer/error/locator.js":
/*!************************************************************!*\
  !*** ./dist/browser/core/common/observer/error/locator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleObserverError = __webpack_require__(/*! . */ "./dist/browser/core/common/observer/error/index.js");

var ConsoleObserverErrorLocator =
/*#__PURE__*/
function () {
  function ConsoleObserverErrorLocator(locator) {
    _classCallCheck(this, ConsoleObserverErrorLocator);

    this.locator = locator;
  }

  _createClass(ConsoleObserverErrorLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          console = consoleFactory.create({
        prefix: 'ERR'
      });
      return new ConsoleObserverError(console);
    }
  }]);

  return ConsoleObserverErrorLocator;
}();

module.exports = ConsoleObserverErrorLocator;

/***/ }),

/***/ "./dist/browser/core/common/observer/info/index.js":
/*!*********************************************************!*\
  !*** ./dist/browser/core/common/observer/info/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleObserverInfo =
/*#__PURE__*/
function () {
  function ConsoleObserverInfo(console) {
    _classCallCheck(this, ConsoleObserverInfo);

    this.console = console;
  }

  _createClass(ConsoleObserverInfo, [{
    key: "observe",
    value: function observe(event) {
      this.console.info(event.name, event.data);
    }
  }]);

  return ConsoleObserverInfo;
}();

module.exports = ConsoleObserverInfo;

/***/ }),

/***/ "./dist/browser/core/common/observer/info/locator.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/observer/info/locator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleObserverInfo = __webpack_require__(/*! . */ "./dist/browser/core/common/observer/info/index.js");

var ConsoleObserverInfoLocator =
/*#__PURE__*/
function () {
  function ConsoleObserverInfoLocator(locator) {
    _classCallCheck(this, ConsoleObserverInfoLocator);

    this.locator = locator;
  }

  _createClass(ConsoleObserverInfoLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          console = consoleFactory.create({
        prefix: 'INF'
      });
      return new ConsoleObserverInfo(console);
    }
  }]);

  return ConsoleObserverInfoLocator;
}();

module.exports = ConsoleObserverInfoLocator;

/***/ }),

/***/ "./dist/browser/core/common/observer/observer.js":
/*!*******************************************************!*\
  !*** ./dist/browser/core/common/observer/observer.js ***!
  \*******************************************************/
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

/***/ "./dist/browser/core/common/observer/warning/index.js":
/*!************************************************************!*\
  !*** ./dist/browser/core/common/observer/warning/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleObserverWarning =
/*#__PURE__*/
function () {
  function ConsoleObserverWarning(console) {
    _classCallCheck(this, ConsoleObserverWarning);

    this.console = console;
  }

  _createClass(ConsoleObserverWarning, [{
    key: "observe",
    value: function observe(event) {
      this.console.warning(event.name, event.data);
    }
  }]);

  return ConsoleObserverWarning;
}();

module.exports = ConsoleObserverWarning;

/***/ }),

/***/ "./dist/browser/core/common/observer/warning/locator.js":
/*!**************************************************************!*\
  !*** ./dist/browser/core/common/observer/warning/locator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConsoleObserverWarning = __webpack_require__(/*! . */ "./dist/browser/core/common/observer/warning/index.js");

var ConsoleObserverWarningLocator =
/*#__PURE__*/
function () {
  function ConsoleObserverWarningLocator(locator) {
    _classCallCheck(this, ConsoleObserverWarningLocator);

    this.locator = locator;
  }

  _createClass(ConsoleObserverWarningLocator, [{
    key: "locate",
    value: function locate() {
      var consoleFactory = this.locator.locate('core/console/factory'),
          console = consoleFactory.create({
        prefix: 'WARN'
      });
      return new ConsoleObserverWarning(console);
    }
  }]);

  return ConsoleObserverWarningLocator;
}();

module.exports = ConsoleObserverWarningLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/error/filter-is-not-honering-contract.js":
/*!*******************************************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/error/filter-is-not-honering-contract.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var FilterIsNotHoneringContractError =
/*#__PURE__*/
function (_Error) {
  _inherits(FilterIsNotHoneringContractError, _Error);

  function FilterIsNotHoneringContractError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FilterIsNotHoneringContractError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FilterIsNotHoneringContractError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_FILTER_IS_NOT_HONERING_CONTRACT';
    return _this;
  }

  return FilterIsNotHoneringContractError;
}(_wrapNativeSuper(Error));

module.exports = FilterIsNotHoneringContractError;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/error/invalid-attribute.js":
/*!*****************************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/error/invalid-attribute.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidAttributeError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidAttributeError, _Error);

  function InvalidAttributeError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidAttributeError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidAttributeError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SCHEMA_INVALID_ATTRIBUTE';
    return _this;
  }

  return InvalidAttributeError;
}(_wrapNativeSuper(Error));

module.exports = InvalidAttributeError;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/error/invalid-collection.js":
/*!******************************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/error/invalid-collection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidCollectionError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidCollectionError, _Error);

  function InvalidCollectionError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidCollectionError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidCollectionError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_COLLECTION';
    return _this;
  }

  return InvalidCollectionError;
}(_wrapNativeSuper(Error));

module.exports = InvalidCollectionError;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/error/invalid-schema.js":
/*!**************************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/error/invalid-schema.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidSchemaError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidSchemaError, _Error);

  function InvalidSchemaError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidSchemaError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidSchemaError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SCHEMA_INVALID_SCHEMA';
    return _this;
  }

  return InvalidSchemaError;
}(_wrapNativeSuper(Error));

module.exports = InvalidSchemaError;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/error/schema-not-found.js":
/*!****************************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/error/schema-not-found.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var SchemaNotFoundError =
/*#__PURE__*/
function (_Error) {
  _inherits(SchemaNotFoundError, _Error);

  function SchemaNotFoundError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SchemaNotFoundError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SchemaNotFoundError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SCHEMA_NOT_FOUND';
    return _this;
  }

  return SchemaNotFoundError;
}(_wrapNativeSuper(Error));

module.exports = SchemaNotFoundError;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/error/validator-is-not-honering-contract.js":
/*!**********************************************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/error/validator-is-not-honering-contract.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var ValidatorIsNotHoneringContractError =
/*#__PURE__*/
function (_Error) {
  _inherits(ValidatorIsNotHoneringContractError, _Error);

  function ValidatorIsNotHoneringContractError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ValidatorIsNotHoneringContractError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ValidatorIsNotHoneringContractError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_VALIDATOR_IS_NOT_HONERING_CONTRACT';
    return _this;
  }

  return ValidatorIsNotHoneringContractError;
}(_wrapNativeSuper(Error));

module.exports = ValidatorIsNotHoneringContractError;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/error/validator-not-found.js":
/*!*******************************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/error/validator-not-found.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var ValidatorNotFoundError =
/*#__PURE__*/
function (_Error) {
  _inherits(ValidatorNotFoundError, _Error);

  function ValidatorNotFoundError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ValidatorNotFoundError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ValidatorNotFoundError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_VALIDATOR_NOT_FOUND';
    return _this;
  }

  return ValidatorNotFoundError;
}(_wrapNativeSuper(Error));

module.exports = ValidatorNotFoundError;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/index.js":
/*!***********************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidAttributeError = __webpack_require__(/*! ./error/invalid-attribute */ "./dist/browser/core/common/schema/composer/error/invalid-attribute.js"),
    InvalidCollectionError = __webpack_require__(/*! ./error/invalid-collection */ "./dist/browser/core/common/schema/composer/error/invalid-collection.js"),
    InvalidSchemaError = __webpack_require__(/*! ./error/invalid-schema */ "./dist/browser/core/common/schema/composer/error/invalid-schema.js"),
    SchemaNotFoundError = __webpack_require__(/*! ./error/schema-not-found */ "./dist/browser/core/common/schema/composer/error/schema-not-found.js"),
    FilterIsNotHoneringContractError = __webpack_require__(/*! ./error/filter-is-not-honering-contract */ "./dist/browser/core/common/schema/composer/error/filter-is-not-honering-contract.js"),
    ValidatorIsNotHoneringContractError = __webpack_require__(/*! ./error/validator-is-not-honering-contract */ "./dist/browser/core/common/schema/composer/error/validator-is-not-honering-contract.js"),
    ValidatorNotFoundError = __webpack_require__(/*! ./error/validator-not-found */ "./dist/browser/core/common/schema/composer/error/validator-not-found.js");

var SchemaComposer =
/*#__PURE__*/
function () {
  function SchemaComposer(deepmerge, deepclone, deepfreeze) {
    _classCallCheck(this, SchemaComposer);

    this.deepmerge = deepmerge;
    this.deepclone = deepclone;
    this.deepfreeze = deepfreeze;
    this.schemas = {};
    this.filters = {};
    this.validators = {};
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


  _createClass(SchemaComposer, [{
    key: "compose",
    value: function compose(schemaName, dto) {
      var _this$deepmerge;

      if (schemaName in this.schemas === false) throw new SchemaNotFoundError("Schema: \"".concat(schemaName, "\" not found"));
      if (Array.isArray(dto)) dto = (_this$deepmerge = this.deepmerge).merge.apply(_this$deepmerge, [{}].concat(_toConsumableArray(dto)));
      var schema = this.buildSchema(this.schemas[schemaName]),
          output = {};

      for (var attribute in schema) {
        output[attribute] = this.attribute(schemaName, schema, attribute, dto[attribute]);
      }

      if (Object.isFrozen(schema)) this.deepfreeze.freeze(output);
      return output;
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

  }, {
    key: "trait",
    value: function trait(schemaName, attribute, data) {
      if (schemaName in this.schemas === false) throw new SchemaNotFoundError("Schema: \"".concat(schemaName, "\" not found"));
      var schema = this.schemas[schemaName],
          output = this.attribute(schemaName, schema, attribute, data);
      return output;
    }
    /**
     * @private
     */

  }, {
    key: "attribute",
    value: function attribute(schemaName, schema, _attribute, data) {
      var options = schema[_attribute];
      if ('default' in options && data === undefined) data = options.default; // if optional, and undefined or null, then we don't need to filter or validate

      if (options.optional === true && data === undefined) return data;
      if (options.nullable === true && data === null) return data; // Filtering attributes if a filter has been defined for the type

      if (options.type in this.filters) {
        var filter = this.filters[options.type];
        data = filter.filter(options, data);
      } // Validating type


      if (options.type in this.validators === false) throw new ValidatorNotFoundError("In schema: \"".concat(schemaName, "\", validator: \"").concat(options.type, "\" not found"));

      try {
        var validator = this.validators[options.type];

        if (options.collection) {
          if (!Array.isArray(data)) throw new InvalidCollectionError("In schema: \"".concat(schemaName, "\", invalid type: \"").concat(_typeof(data), "\", array expected"));
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              validator.valid(options, item);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          validator.valid(options, data);
        }
      } catch (error) {
        throw new InvalidAttributeError("Invalid attribute: \"".concat(_attribute, "\", schema: \"").concat(schemaName, "\", error: ").concat(error.message));
      }

      return data;
    }
    /**
     * The schema could have declared a meta field that requires a building process before used
     * The build process will alter the schema provided through an argument
     *
     * @param {Object} schema
     * @return {Object} Same instance as provided through argument
     */

  }, {
    key: "buildSchema",
    value: function buildSchema(schema) {
      if ('@meta' in schema) {
        if ('extends' in schema['@meta'] || 'extend' in schema['@meta']) {
          var extendList = schema['@meta'].extends || schema['@meta'].extend;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (Array.isArray(extendList) ? extendList : [extendList])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var extendSchemaName = _step2.value;
              var extend = this.buildSchema(this.schemas[extendSchemaName]);
              this.deepmerge.merge(schema, extend);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        if (schema['@meta'].immutable || schema['@meta'].immutable === undefined) // TODO makes sense if not exist to make the schema frozen?
          {
            delete schema['@meta'];
            Object.freeze(schema);
          } else {
          delete schema['@meta'];
        }
      }

      return schema;
    }
    /**
     * @param {string} schemaName
     * @param {Object} schema
     * @throws {E_SCHEMA_INVALID_SCHEMA}
     */

  }, {
    key: "addSchema",
    value: function addSchema(schemaName, schema) {
      if (_typeof(schema) !== 'object') throw new InvalidSchemaError("Schema \"".concat(schemaName, "\" must be an object")); // TODO: Improve validation of the schema when it's added
      // For the moment we can suffer unexpected errors when we start working with the schema
      // A better approach is to validate the schema structure as a value object
      // ...resulting in a garantee that the schema is of expected definition.

      this.schemas[schemaName] = this.deepclone.clone(schema);
    }
    /**
     * @param {string} filterName
     * @param {SchemaFilter} filter
     * @throws {E_FILTER_IS_NOT_HONERING_CONTRACT}
     */

  }, {
    key: "addFilter",
    value: function addFilter(filterName, filter) {
      if (typeof filter.filter !== 'function') throw new FilterIsNotHoneringContractError("Filter \"".concat(filterName, "\" not honering contract"));
      this.filters[filterName] = filter;
    }
    /**
     * @param {string} validatorName
     * @param {SchemaValidator} validator
     * @throws {E_VALIDATOR_IS_NOT_HONERING_CONTRACT}
     */

  }, {
    key: "addValidator",
    value: function addValidator(validatorName, validator) {
      if (typeof validator.valid !== 'function') throw new ValidatorIsNotHoneringContractError("Validator \"".concat(validatorName, "\" not honering contract"));
      this.validators[validatorName] = validator;
    }
  }]);

  return SchemaComposer;
}();

module.exports = SchemaComposer;

/***/ }),

/***/ "./dist/browser/core/common/schema/composer/locator.js":
/*!*************************************************************!*\
  !*** ./dist/browser/core/common/schema/composer/locator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Schema = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/composer/index.js");

var SchemaLocator =
/*#__PURE__*/
function () {
  function SchemaLocator(locator) {
    _classCallCheck(this, SchemaLocator);

    this.locator = locator;
  }

  _createClass(SchemaLocator, [{
    key: "locate",
    value: function locate() {
      var deepmerge = this.locator.locate('core/deepmerge'),
          deepclone = this.locator.locate('core/deepclone'),
          deepfreeze = this.locator.locate('core/deepfreeze');
      return new Schema(deepmerge, deepclone, deepfreeze);
    }
  }]);

  return SchemaLocator;
}();

module.exports = SchemaLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/config.js":
/*!***************************************************!*\
  !*** ./dist/browser/core/common/schema/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/schema';
module.exports = {
  'core': {
    'schema': {
      'filter': {
        'boolean': 'core/schema/filter/boolean',
        'csv': 'core/schema/filter/csv',
        'decimal': 'core/schema/filter/decimal',
        'integer': 'core/schema/filter/integer',
        'json': 'core/schema/filter/json',
        'schema': 'core/schema/filter/schema',
        'string': 'core/schema/filter/string',
        'timestamp': 'core/schema/filter/timestamp'
      },
      'validator': {
        'boolean': 'core/schema/validator/boolean',
        'csv': 'core/schema/validator/csv',
        'decimal': 'core/schema/validator/decimal',
        'integer': 'core/schema/validator/integer',
        'json': 'core/schema/validator/json',
        'schema': 'core/schema/validator/schema',
        'string': 'core/schema/validator/string',
        'timestamp': 'core/schema/validator/timestamp'
      }
    },
    'locator': {
      'core/schema/composer': "".concat(dirname, "/composer"),
      'core/schema/filter/boolean': "".concat(dirname, "/filter/boolean"),
      'core/schema/filter/csv': "".concat(dirname, "/filter/csv"),
      'core/schema/filter/decimal': "".concat(dirname, "/filter/decimal"),
      'core/schema/filter/integer': "".concat(dirname, "/filter/integer"),
      'core/schema/filter/json': "".concat(dirname, "/filter/json"),
      'core/schema/filter/schema': "".concat(dirname, "/filter/schema"),
      'core/schema/filter/string': "".concat(dirname, "/filter/string"),
      'core/schema/filter/timestamp': "".concat(dirname, "/filter/timestamp"),
      'core/schema/validator/boolean': "".concat(dirname, "/validator/boolean"),
      'core/schema/validator/csv': "".concat(dirname, "/validator/csv"),
      'core/schema/validator/decimal': "".concat(dirname, "/validator/decimal"),
      'core/schema/validator/integer': "".concat(dirname, "/validator/integer"),
      'core/schema/validator/json': "".concat(dirname, "/validator/json"),
      'core/schema/validator/schema': "".concat(dirname, "/validator/schema"),
      'core/schema/validator/string': "".concat(dirname, "/validator/string"),
      'core/schema/validator/timestamp': "".concat(dirname, "/validator/timestamp")
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/schema/error/schema-not-resolvable.js":
/*!************************************************************************!*\
  !*** ./dist/browser/core/common/schema/error/schema-not-resolvable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SchemaNotResolvableError =
/*#__PURE__*/
function (_ReferenceError) {
  _inherits(SchemaNotResolvableError, _ReferenceError);

  function SchemaNotResolvableError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SchemaNotResolvableError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SchemaNotResolvableError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_SCHEMA_NOT_RESOLVABLE';
    return _this;
  }

  return SchemaNotResolvableError;
}(_wrapNativeSuper(ReferenceError));

module.exports = SchemaNotResolvableError;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/boolean/index.js":
/*!*****************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/boolean/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterBoolean =
/*#__PURE__*/
function () {
  function SchemaFilterBoolean() {
    _classCallCheck(this, SchemaFilterBoolean);
  }

  _createClass(SchemaFilterBoolean, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(data) : this.filterSingle(data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(data) {
      if (!Array.isArray(data)) return data;
      var collection = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var filtered = this.filterSingle(item);
          collection.push(filtered);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(data) {
      if (typeof data === 'string') {
        if (data.toLowerCase() === 'true') return true;
        if (data.toLowerCase() === 'false') return false;
      }

      return data;
    }
  }]);

  return SchemaFilterBoolean;
}();

module.exports = SchemaFilterBoolean;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/boolean/locator.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/boolean/locator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterBoolean = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/boolean/index.js");

var SchemaFilterBooleanLocator =
/*#__PURE__*/
function () {
  function SchemaFilterBooleanLocator() {
    _classCallCheck(this, SchemaFilterBooleanLocator);
  }

  _createClass(SchemaFilterBooleanLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterBoolean();
    }
  }]);

  return SchemaFilterBooleanLocator;
}();

module.exports = SchemaFilterBooleanLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/csv/index.js":
/*!*************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/csv/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterCsv =
/*#__PURE__*/
function () {
  function SchemaFilterCsv() {
    _classCallCheck(this, SchemaFilterCsv);
  }

  _createClass(SchemaFilterCsv, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      if (typeof data === 'string') {
        if (options.uppercase) data = data.toUpperCase();
        if (options.lowercase) data = data.toLowerCase();
        data = data.split(',');
      }

      return data;
    }
  }]);

  return SchemaFilterCsv;
}();

module.exports = SchemaFilterCsv;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/csv/locator.js":
/*!***************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/csv/locator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterCsv = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/csv/index.js");

var SchemaFilterCsvLocator =
/*#__PURE__*/
function () {
  function SchemaFilterCsvLocator() {
    _classCallCheck(this, SchemaFilterCsvLocator);
  }

  _createClass(SchemaFilterCsvLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterCsv();
    }
  }]);

  return SchemaFilterCsvLocator;
}();

module.exports = SchemaFilterCsvLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/decimal/index.js":
/*!*****************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/decimal/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterDecimal =
/*#__PURE__*/
function () {
  function SchemaFilterDecimal() {
    _classCallCheck(this, SchemaFilterDecimal);
  }

  _createClass(SchemaFilterDecimal, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(data) : this.filterSingle(data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(data) {
      if (!Array.isArray(data)) return data;
      var collection = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var filtered = this.filterSingle(item);
          collection.push(filtered);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(data) {
      if (isNaN(data) === false) return +data;
      return data;
    }
  }]);

  return SchemaFilterDecimal;
}();

module.exports = SchemaFilterDecimal;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/decimal/locator.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/decimal/locator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterDecimal = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/decimal/index.js");

var SchemaFilterDecimalLocator =
/*#__PURE__*/
function () {
  function SchemaFilterDecimalLocator() {
    _classCallCheck(this, SchemaFilterDecimalLocator);
  }

  _createClass(SchemaFilterDecimalLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterDecimal();
    }
  }]);

  return SchemaFilterDecimalLocator;
}();

module.exports = SchemaFilterDecimalLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/index.js":
/*!*********************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/index.js ***!
  \*********************************************************/
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

/***/ "./dist/browser/core/common/schema/filter/integer/index.js":
/*!*****************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/integer/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterInteger =
/*#__PURE__*/
function () {
  function SchemaFilterInteger() {
    _classCallCheck(this, SchemaFilterInteger);
  }

  _createClass(SchemaFilterInteger, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(data) : this.filterSingle(data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(data) {
      if (!Array.isArray(data)) return data;
      var collection = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var filtered = this.filterSingle(item);
          collection.push(filtered);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(data) {
      if (isNaN(data) === false) return +data;
      return data;
    }
  }]);

  return SchemaFilterInteger;
}();

module.exports = SchemaFilterInteger;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/integer/locator.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/integer/locator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterInteger = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/integer/index.js");

var SchemaFilterIntegerLocator =
/*#__PURE__*/
function () {
  function SchemaFilterIntegerLocator() {
    _classCallCheck(this, SchemaFilterIntegerLocator);
  }

  _createClass(SchemaFilterIntegerLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterInteger();
    }
  }]);

  return SchemaFilterIntegerLocator;
}();

module.exports = SchemaFilterIntegerLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/json/index.js":
/*!**************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/json/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterJson =
/*#__PURE__*/
function () {
  function SchemaFilterJson() {
    _classCallCheck(this, SchemaFilterJson);
  }

  _createClass(SchemaFilterJson, [{
    key: "filter",
    value: function filter(options, data) {
      try {
        return options.stringified ? JSON.stringify(data, null, options.indentation) : data;
      } catch (error) {
        // it's not up to the filter to validate
        // if we can't filter the data, then we simply pass the data forward
        return data;
      }
    }
  }]);

  return SchemaFilterJson;
}();

module.exports = SchemaFilterJson;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/json/locator.js":
/*!****************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/json/locator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterJson = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/json/index.js");

var SchemaFilterJsonLocator =
/*#__PURE__*/
function () {
  function SchemaFilterJsonLocator() {
    _classCallCheck(this, SchemaFilterJsonLocator);
  }

  _createClass(SchemaFilterJsonLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterJson();
    }
  }]);

  return SchemaFilterJsonLocator;
}();

module.exports = SchemaFilterJsonLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/schema/error/missing-schema-definition.js":
/*!******************************************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/schema/error/missing-schema-definition.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var MissingSchemaDefinitionError =
/*#__PURE__*/
function (_Error) {
  _inherits(MissingSchemaDefinitionError, _Error);

  function MissingSchemaDefinitionError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MissingSchemaDefinitionError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MissingSchemaDefinitionError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_MISSING_SCHEMA_DEFINITION';
    return _this;
  }

  return MissingSchemaDefinitionError;
}(_wrapNativeSuper(Error));

module.exports = MissingSchemaDefinitionError;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/schema/index.js":
/*!****************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/schema/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MissingSchemaDefinitionError = __webpack_require__(/*! ./error/missing-schema-definition */ "./dist/browser/core/common/schema/filter/schema/error/missing-schema-definition.js");
/**
 * @implements {SchemaFilter}
 */


var SchemaFilterSchema =
/*#__PURE__*/
function () {
  function SchemaFilterSchema(composer) {
    _classCallCheck(this, SchemaFilterSchema);

    this.composer = composer;
  }

  _createClass(SchemaFilterSchema, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      if (typeof options.schema === 'string') {
        return options.trait ? this.composer.trait(options.schema, options.trait, data) : this.composer.compose(options.schema, data);
      } else {
        throw new MissingSchemaDefinitionError('Expected the attribute "schema" to declare what type of schema ');
      }
    }
  }]);

  return SchemaFilterSchema;
}();

module.exports = SchemaFilterSchema;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/schema/locator.js":
/*!******************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/schema/locator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterSchema = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/schema/index.js");

var SchemaFilterSchemaLocator =
/*#__PURE__*/
function () {
  function SchemaFilterSchemaLocator(locator) {
    _classCallCheck(this, SchemaFilterSchemaLocator);

    this.locator = locator;
  }

  _createClass(SchemaFilterSchemaLocator, [{
    key: "locate",
    value: function locate() {
      var composer = this.locator.locate('core/schema/composer');
      return new SchemaFilterSchema(composer);
    }
  }]);

  return SchemaFilterSchemaLocator;
}();

module.exports = SchemaFilterSchemaLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/string/index.js":
/*!****************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/string/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterString =
/*#__PURE__*/
function () {
  function SchemaFilterString() {
    _classCallCheck(this, SchemaFilterString);
  }

  _createClass(SchemaFilterString, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      if (typeof data === 'number') data = "".concat(data);
      if (typeof data === 'boolean') data = "".concat(data);

      if (typeof data === 'string') {
        if (options.uppercase) data = data.toUpperCase();
        if (options.lowercase) data = data.toLowerCase();
      }

      return data;
    }
  }]);

  return SchemaFilterString;
}();

module.exports = SchemaFilterString;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/string/locator.js":
/*!******************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/string/locator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterString = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/string/index.js");

var SchemaFilterStringLocator =
/*#__PURE__*/
function () {
  function SchemaFilterStringLocator() {
    _classCallCheck(this, SchemaFilterStringLocator);
  }

  _createClass(SchemaFilterStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterString();
    }
  }]);

  return SchemaFilterStringLocator;
}();

module.exports = SchemaFilterStringLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/timestamp/index.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/timestamp/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @implements {SchemaFilter}
 */
var SchemaFilterTimestamp =
/*#__PURE__*/
function () {
  function SchemaFilterTimestamp() {
    _classCallCheck(this, SchemaFilterTimestamp);
  }

  _createClass(SchemaFilterTimestamp, [{
    key: "filter",
    value: function filter(options, data) {
      return options.collection ? this.filterCollection(options, data) : this.filterSingle(options, data);
    }
  }, {
    key: "filterCollection",
    value: function filterCollection(options, data) {
      if (!Array.isArray(data)) return data;
      var collection = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var filtered = this.filterSingle(options, item);
          collection.push(filtered);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return collection;
    }
  }, {
    key: "filterSingle",
    value: function filterSingle(options, data) {
      var intData = parseInt(data);
      if (intData == data) data = intData;
      if (options.utc) data = new Date(data).toUTCString();
      if (options.json) data = new Date(data).toJSON();
      return data;
    }
  }]);

  return SchemaFilterTimestamp;
}();

module.exports = SchemaFilterTimestamp;

/***/ }),

/***/ "./dist/browser/core/common/schema/filter/timestamp/locator.js":
/*!*********************************************************************!*\
  !*** ./dist/browser/core/common/schema/filter/timestamp/locator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaFilterTimestamp = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/filter/timestamp/index.js");

var SchemaFilterTimestampLocator =
/*#__PURE__*/
function () {
  function SchemaFilterTimestampLocator() {
    _classCallCheck(this, SchemaFilterTimestampLocator);
  }

  _createClass(SchemaFilterTimestampLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaFilterTimestamp();
    }
  }]);

  return SchemaFilterTimestampLocator;
}();

module.exports = SchemaFilterTimestampLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/boolean/error/invalid.js":
/*!****************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/boolean/error/invalid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidBooleanError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidBooleanError, _Error);

  function InvalidBooleanError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidBooleanError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidBooleanError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_BOOLEAN';
    return _this;
  }

  return InvalidBooleanError;
}(_wrapNativeSuper(Error));

module.exports = InvalidBooleanError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/boolean/index.js":
/*!********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/boolean/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidBooleanError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/boolean/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorBoolean =
/*#__PURE__*/
function () {
  function SchemaValidatorBoolean() {
    _classCallCheck(this, SchemaValidatorBoolean);
  }

  _createClass(SchemaValidatorBoolean, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'boolean') {
        var msg = "Invalid type: \"".concat(_typeof(data), "\", boolean expected");
        throw new InvalidBooleanError(msg);
      }
    }
  }]);

  return SchemaValidatorBoolean;
}();

module.exports = SchemaValidatorBoolean;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/boolean/locator.js":
/*!**********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/boolean/locator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorBoolean = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/boolean/index.js");

var SchemaValidatorBooleanLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorBooleanLocator() {
    _classCallCheck(this, SchemaValidatorBooleanLocator);
  }

  _createClass(SchemaValidatorBooleanLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorBoolean();
    }
  }]);

  return SchemaValidatorBooleanLocator;
}();

module.exports = SchemaValidatorBooleanLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/csv/error/invalid.js":
/*!************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/csv/error/invalid.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidCsvError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidCsvError, _Error);

  function InvalidCsvError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidCsvError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidCsvError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_CSV';
    return _this;
  }

  return InvalidCsvError;
}(_wrapNativeSuper(Error));

module.exports = InvalidCsvError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/csv/index.js":
/*!****************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/csv/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidCsvError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/csv/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorCsv =
/*#__PURE__*/
function () {
  function SchemaValidatorCsv() {
    _classCallCheck(this, SchemaValidatorCsv);
  }

  _createClass(SchemaValidatorCsv, [{
    key: "valid",
    value: function valid(options, data) {
      if (Array.isArray(data) === false) {
        var msg = "Invalid type: \"".concat(_typeof(data), "\", csv (comma seperated values) string expected");
        throw new InvalidCsvError(msg);
      }

      if (options['not-empty'] && !data.length) {
        var _msg = "Must not be empty";
        throw new InvalidCsvError(_msg);
      }

      if ('min' in options && data.length < options.min) {
        var _msg2 = "Length of values must be minimum: \"".concat(options.min, "\" long");

        throw new InvalidCsvError(_msg2);
      }

      if ('max' in options && data.length > options.max) {
        var _msg3 = "Length of values can't be more then: \"".concat(options.max, "\" long");

        throw new InvalidCsvError(_msg3);
      }

      if (options.enum && !data.every(function (value) {
        return options.enum.includes(value);
      })) {
        var _msg4 = "Expected all values of the csv to be one of the enumeral values: \"".concat(options.enum, "\"");

        throw new InvalidCsvError(_msg4);
      }

      if (options.uppercase && !data.every(function (value) {
        return value === data.toUpperCase();
      })) {
        var _msg5 = "Upper case string expected";
        throw new InvalidCsvError(_msg5);
      }

      if (options.lowercase && !data.every(function (value) {
        return value === data.toLowerCase();
      })) {
        var _msg6 = "Lower case string expected";
        throw new InvalidCsvError(_msg6);
      }
    }
  }]);

  return SchemaValidatorCsv;
}();

module.exports = SchemaValidatorCsv;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/csv/locator.js":
/*!******************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/csv/locator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorString = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/csv/index.js");

var SchemaValidatorStringLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorStringLocator() {
    _classCallCheck(this, SchemaValidatorStringLocator);
  }

  _createClass(SchemaValidatorStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorString();
    }
  }]);

  return SchemaValidatorStringLocator;
}();

module.exports = SchemaValidatorStringLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/decimal/error/invalid.js":
/*!****************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/decimal/error/invalid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidDecimalError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidDecimalError, _Error);

  function InvalidDecimalError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidDecimalError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidDecimalError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_DECIMAL';
    return _this;
  }

  return InvalidDecimalError;
}(_wrapNativeSuper(Error));

module.exports = InvalidDecimalError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/decimal/index.js":
/*!********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/decimal/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidDecimalError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/decimal/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorDecimal =
/*#__PURE__*/
function () {
  function SchemaValidatorDecimal() {
    _classCallCheck(this, SchemaValidatorDecimal);
  }

  _createClass(SchemaValidatorDecimal, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'number') {
        var msg = "Invalid type: \"".concat(_typeof(data), "\", number expected");
        throw new InvalidDecimalError(msg);
      }

      if (options.unsigned && data < 0) {
        var _msg = "Expected an unsigned decimal";
        throw new InvalidDecimalError(_msg);
      }

      if ('min' in options && data < options.min) {
        var _msg2 = "Decimal must be minimum: \"".concat(options.min, "\"");

        throw new InvalidDecimalError(_msg2);
      }

      if ('max' in options && data > options.max) {
        var _msg3 = "Decimal can't be more then: \"".concat(options.max, "\"");

        throw new InvalidDecimalError(_msg3);
      }

      if ('gt' in options && data > options.gt) {
        var _msg4 = "Decimal must be more then: \"".concat(options.gt, "\"");

        throw new InvalidDecimalError(_msg4);
      }

      if ('lt' in options && data < options.lt) {
        var _msg5 = "Decimal must be less then: \"".concat(options.lt, "\"");

        throw new InvalidDecimalError(_msg5);
      }

      if (options.enum && !options.enum.includes(data)) {
        var _msg6 = "Expected one of the enumeral values: \"".concat(options.enum, "\"");

        throw new InvalidDecimalError(_msg6);
      }
    }
  }]);

  return SchemaValidatorDecimal;
}();

module.exports = SchemaValidatorDecimal;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/decimal/locator.js":
/*!**********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/decimal/locator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorDecimal = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/decimal/index.js");

var SchemaValidatorDecimalLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorDecimalLocator() {
    _classCallCheck(this, SchemaValidatorDecimalLocator);
  }

  _createClass(SchemaValidatorDecimalLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorDecimal();
    }
  }]);

  return SchemaValidatorDecimalLocator;
}();

module.exports = SchemaValidatorDecimalLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/index.js":
/*!************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/index.js ***!
  \************************************************************/
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

/***/ "./dist/browser/core/common/schema/validator/integer/error/invalid.js":
/*!****************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/integer/error/invalid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidIntegerError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidIntegerError, _Error);

  function InvalidIntegerError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidIntegerError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidIntegerError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_INTEGER';
    return _this;
  }

  return InvalidIntegerError;
}(_wrapNativeSuper(Error));

module.exports = InvalidIntegerError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/integer/index.js":
/*!********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/integer/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidIntegerError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/integer/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorInteger =
/*#__PURE__*/
function () {
  function SchemaValidatorInteger() {
    _classCallCheck(this, SchemaValidatorInteger);
  }

  _createClass(SchemaValidatorInteger, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'number') {
        var msg = "Invalid type: \"".concat(_typeof(data), "\", number expected");
        throw new InvalidIntegerError(msg);
      }

      if (data !== parseInt(data)) {
        var _msg = "Integer expected, found decimals";
        throw new InvalidIntegerError(_msg);
      }

      if (options.unsigned && data < 0) {
        var _msg2 = "Expected an unsigned integer ";
        throw new InvalidIntegerError(_msg2);
      }

      if ('min' in options && data < options.min) {
        var _msg3 = "Integer must be minimum: \"".concat(options.min, "\"");

        throw new InvalidIntegerError(_msg3);
      }

      if ('max' in options && data > options.max) {
        var _msg4 = "Integer can't be more then: \"".concat(options.max, "\"");

        throw new InvalidIntegerError(_msg4);
      }

      if ('gt' in options && data < options.gt) {
        var _msg5 = "Integer must be more then: \"".concat(options.gt, "\"");

        throw new InvalidIntegerError(_msg5);
      }

      if ('lt' in options && data > options.lt) {
        var _msg6 = "Integer must be less then: \"".concat(options.lt, "\"");

        throw new InvalidIntegerError(_msg6);
      }

      if (options.enum && !options.enum.includes(data)) {
        var _msg7 = "Expected one of the enumeral values: \"".concat(options.enum, "\"");

        throw new InvalidIntegerError(_msg7);
      }
    }
  }]);

  return SchemaValidatorInteger;
}();

module.exports = SchemaValidatorInteger;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/integer/locator.js":
/*!**********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/integer/locator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorInteger = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/integer/index.js");

var SchemaValidatorIntegerLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorIntegerLocator() {
    _classCallCheck(this, SchemaValidatorIntegerLocator);
  }

  _createClass(SchemaValidatorIntegerLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorInteger();
    }
  }]);

  return SchemaValidatorIntegerLocator;
}();

module.exports = SchemaValidatorIntegerLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/json/error/invalid.js":
/*!*************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/json/error/invalid.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidJsonError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidJsonError, _Error);

  function InvalidJsonError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidJsonError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidJsonError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_JSON';
    return _this;
  }

  return InvalidJsonError;
}(_wrapNativeSuper(Error));

module.exports = InvalidJsonError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/json/index.js":
/*!*****************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/json/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidJsonError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/json/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorJson =
/*#__PURE__*/
function () {
  function SchemaValidatorJson() {
    _classCallCheck(this, SchemaValidatorJson);
  }

  _createClass(SchemaValidatorJson, [{
    key: "valid",
    value: function valid(options, data) {
      try {
        options.stringified ? JSON.parse(data) : JSON.stringify(data);
      } catch (error) {
        var msg = "Unparsable JSON provided";
        throw new InvalidJsonError(msg);
      }
    }
  }]);

  return SchemaValidatorJson;
}();

module.exports = SchemaValidatorJson;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/json/locator.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/json/locator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorJson = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/json/index.js");

var SchemaValidatorJsonLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorJsonLocator() {
    _classCallCheck(this, SchemaValidatorJsonLocator);
  }

  _createClass(SchemaValidatorJsonLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorJson();
    }
  }]);

  return SchemaValidatorJsonLocator;
}();

module.exports = SchemaValidatorJsonLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/schema/error/invalid.js":
/*!***************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/schema/error/invalid.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidSchemaError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidSchemaError, _Error);

  function InvalidSchemaError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidSchemaError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidSchemaError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_SCHEMA';
    return _this;
  }

  return InvalidSchemaError;
}(_wrapNativeSuper(Error));

module.exports = InvalidSchemaError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/schema/index.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/schema/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidSchemaError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/schema/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorSchema =
/*#__PURE__*/
function () {
  function SchemaValidatorSchema() {
    _classCallCheck(this, SchemaValidatorSchema);
  }

  _createClass(SchemaValidatorSchema, [{
    key: "valid",
    value: function valid(options, data) {// nothing to validate
    }
  }]);

  return SchemaValidatorSchema;
}();

module.exports = SchemaValidatorSchema;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/schema/locator.js":
/*!*********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/schema/locator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorSchema = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/schema/index.js");

var SchemaValidatorSchemaLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorSchemaLocator() {
    _classCallCheck(this, SchemaValidatorSchemaLocator);
  }

  _createClass(SchemaValidatorSchemaLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorSchema();
    }
  }]);

  return SchemaValidatorSchemaLocator;
}();

module.exports = SchemaValidatorSchemaLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/string/error/invalid.js":
/*!***************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/string/error/invalid.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidStringError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidStringError, _Error);

  function InvalidStringError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidStringError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidStringError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_STRING';
    return _this;
  }

  return InvalidStringError;
}(_wrapNativeSuper(Error));

module.exports = InvalidStringError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/string/index.js":
/*!*******************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/string/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidStringError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/string/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorString =
/*#__PURE__*/
function () {
  function SchemaValidatorString() {
    _classCallCheck(this, SchemaValidatorString);
  }

  _createClass(SchemaValidatorString, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'string') {
        var msg = "Invalid type: \"".concat(_typeof(data), "\", string expected");
        throw new InvalidStringError(msg);
      }

      if (options['not-empty'] && !data.length) {
        var _msg = "Must not be empty";
        throw new InvalidStringError(_msg);
      }

      if ('min' in options && data.length < options.min) {
        var _msg2 = "String length must be minimum: \"".concat(options.min, "\" long");

        throw new InvalidStringError(_msg2);
      }

      if ('max' in options && data.length > options.max) {
        var _msg3 = "String length can't be more then: \"".concat(options.max, "\" long");

        throw new InvalidStringError(_msg3);
      }

      if (options.enum && !options.enum.includes(data)) {
        var _msg4 = "Expected one of the enumeral values: \"".concat(options.enum, "\"");

        throw new InvalidStringError(_msg4);
      }

      if (options.uppercase && data !== data.toUpperCase()) {
        var _msg5 = "Upper case string expected";
        throw new InvalidStringError(_msg5);
      }

      if (options.lowercase && data !== data.toLowerCase()) {
        var _msg6 = "Lower case string expected";
        throw new InvalidStringError(_msg6);
      }
    }
  }]);

  return SchemaValidatorString;
}();

module.exports = SchemaValidatorString;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/string/locator.js":
/*!*********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/string/locator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorString = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/string/index.js");

var SchemaValidatorStringLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorStringLocator() {
    _classCallCheck(this, SchemaValidatorStringLocator);
  }

  _createClass(SchemaValidatorStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorString();
    }
  }]);

  return SchemaValidatorStringLocator;
}();

module.exports = SchemaValidatorStringLocator;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/timestamp/error/invalid.js":
/*!******************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/timestamp/error/invalid.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @extends {Error}
 */
var InvalidTimestampError =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidTimestampError, _Error);

  function InvalidTimestampError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvalidTimestampError);

    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidTimestampError)).call.apply(_getPrototypeOf2, [this].concat(a)));
    _this.code = 'E_INVALID_TIMESTAMP';
    return _this;
  }

  return InvalidTimestampError;
}(_wrapNativeSuper(Error));

module.exports = InvalidTimestampError;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/timestamp/index.js":
/*!**********************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/timestamp/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InvalidTimestampError = __webpack_require__(/*! ./error/invalid */ "./dist/browser/core/common/schema/validator/timestamp/error/invalid.js");
/**
 * @implements {SchemaValidator}
 */


var SchemaValidatorTimestamp =
/*#__PURE__*/
function () {
  function SchemaValidatorTimestamp() {
    _classCallCheck(this, SchemaValidatorTimestamp);
  }

  _createClass(SchemaValidatorTimestamp, [{
    key: "valid",
    value: function valid(options, data) {
      if (typeof data !== 'string') {
        var msg = "Invalid type: \"".concat(_typeof(data), "\", string expected");
        throw new InvalidTimestampError(msg);
      }

      var date = new Date(data);

      if ('min' in options && date.getTime() < new Date(options.min).getTime()) {
        var _msg = "Timestamp must be at least: \"".concat(options.min, "\"");

        throw new InvalidTimestampError(_msg);
      }

      if ('max' in options && date.getTime() > new Date(options.max).getTime()) {
        var _msg2 = "Timestamp can't be more then: \"".concat(options.max, "\"");

        throw new InvalidTimestampError(_msg2);
      }

      if ('gt' in options && date.getTime() > new Date(options.gt).getTime()) {
        var _msg3 = "Timestamp must be more then: \"".concat(options.gt, "\" long");

        throw new InvalidTimestampError(_msg3);
      }

      if ('lt' in options && date.getTime() < new Date(options.lt).getTime()) {
        var _msg4 = "Timestamp must be less then: \"".concat(options.lt, "\" long");

        throw new InvalidTimestampError(_msg4);
      }

      if (options.enum && !options.enum.includes(data)) {
        var _msg5 = "Expected one of the enumeral values: \"".concat(options.enum, "\"");

        throw new InvalidTimestampError(_msg5);
      }
    }
  }]);

  return SchemaValidatorTimestamp;
}();

module.exports = SchemaValidatorTimestamp;

/***/ }),

/***/ "./dist/browser/core/common/schema/validator/timestamp/locator.js":
/*!************************************************************************!*\
  !*** ./dist/browser/core/common/schema/validator/timestamp/locator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchemaValidatorString = __webpack_require__(/*! . */ "./dist/browser/core/common/schema/validator/timestamp/index.js");

var SchemaValidatorStringLocator =
/*#__PURE__*/
function () {
  function SchemaValidatorStringLocator() {
    _classCallCheck(this, SchemaValidatorStringLocator);
  }

  _createClass(SchemaValidatorStringLocator, [{
    key: "locate",
    value: function locate() {
      return new SchemaValidatorString();
    }
  }]);

  return SchemaValidatorStringLocator;
}();

module.exports = SchemaValidatorStringLocator;

/***/ }),

/***/ "./dist/browser/core/common/service-loader/index.js":
/*!**********************************************************!*\
  !*** ./dist/browser/core/common/service-loader/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @interface ServiceLoader
 */

/**
 * @function ServiceLoader#loadServiceRecursion
 * @param {Array<string>} services
 * @returns {void}
 */

/**
 * @function ServiceLoader#loadService
 * @param {string} name
 * @returns {void}
 */

/***/ }),

/***/ "./dist/browser/core/common/string/config.js":
/*!***************************************************!*\
  !*** ./dist/browser/core/common/string/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirname =  false || 'core/common/string';
module.exports = {
  'core': {
    'locator': {
      'core/string': dirname
    }
  }
};

/***/ }),

/***/ "./dist/browser/core/common/string/index.js":
/*!**************************************************!*\
  !*** ./dist/browser/core/common/string/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreString =
/*#__PURE__*/
function () {
  function CoreString() {
    _classCallCheck(this, CoreString);
  }

  _createClass(CoreString, [{
    key: "trim",
    value: function trim(s) {
      return s.replace(/\s/g, '');
    }
  }, {
    key: "ellipsis",
    value: function ellipsis(s, maxLength) {
      var _ellipsis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

      var ellipsed = s;
      if (s && s.length > maxLength) ellipsed = "".concat(s.substr(0, maxLength)).concat(_ellipsis);
      return ellipsed;
    }
  }, {
    key: "shorten",
    value: function shorten(s, maxLength) {
      var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
      var shortened = s;

      if (s && s.length > maxLength) {
        var segment = Math.floor(maxLength / 2);
        shortened = [s.substr(0, segment).trim(), s.substr(-segment).trim()].join(fill);
      }

      return shortened;
    }
    /**
     * @example "foobar" => "Foobar"
     * @param {string} s input to be manipulated
     * @returns {string}
     */

  }, {
    key: "capitalize",
    value: function capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    }
    /**
     * @example "Foo BAR baz" => "foo-bar-baz"
     * @param {string} s input to be manipulated
     * @param {string} [separator='-'] string to be used as the separator
     * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
     */

  }, {
    key: "hyphenate",
    value: function hyphenate(s) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
      return s.replace(/\W+/g, separator).toLowerCase();
    }
    /**
     * @example "Foo BAR baz" => "fooBarBaz"
     * @param {string} s input to be manipulated
     * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
     */

  }, {
    key: "camelCase",
    value: function camelCase(s) {
      var _this = this;

      s = this.lowercase(s);
      s = s.split('-').map(function (substring, i) {
        return i === 0 ? substring : _this.capitalize(substring);
      }).join('');
      return s;
    }
  }, {
    key: "lowercase",
    value: function lowercase(s) {
      return s.toLowerCase();
    }
  }, {
    key: "uppercase",
    value: function uppercase(s) {
      return s.toLowerCase();
    }
  }]);

  return CoreString;
}();

module.exports = CoreString;

/***/ }),

/***/ "./dist/browser/core/common/string/locator.js":
/*!****************************************************!*\
  !*** ./dist/browser/core/common/string/locator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoreString = __webpack_require__(/*! . */ "./dist/browser/core/common/string/index.js");

var CoreStringLocator =
/*#__PURE__*/
function () {
  function CoreStringLocator(locator) {
    _classCallCheck(this, CoreStringLocator);

    this.locator = locator;
  }

  _createClass(CoreStringLocator, [{
    key: "locate",
    value: function locate() {
      return new CoreString();
    }
  }]);

  return CoreStringLocator;
}();

module.exports = CoreStringLocator;

/***/ }),

/***/ "./dist/browser/core/config.js":
/*!*************************************!*\
  !*** ./dist/browser/core/config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'core': {}
};

/***/ }),

/***/ "./dist/browser/core/index.js":
/*!************************************!*\
  !*** ./dist/browser/core/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Core =
/*#__PURE__*/
function () {
  function Core(locator, configFetcher, serviceLoader) {
    _classCallCheck(this, Core);

    this.locator = locator;
    this.configFetcher = configFetcher;
    this.serviceLoader = serviceLoader;
    this.components = {};
  }

  _createClass(Core, [{
    key: "add",
    value: function add(component, pathname) {
      this.components[component] = pathname;
    }
  }, {
    key: "remove",
    value: function remove(component) {
      delete this.components[component];
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var configuration, component, config, serviceMap, serviceNames;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                configuration = this.locate('core/configuration'); // extending the configurations of every component

                _context.t0 = regeneratorRuntime.keys(this.components);

              case 2:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 10;
                  break;
                }

                component = _context.t1.value;
                _context.next = 6;
                return this.configFetcher.fetchComponentConfig(component, this.components[component]);

              case 6:
                config = _context.sent;
                configuration.extend(config);
                _context.next = 2;
                break;

              case 10:
                configuration.freeze();
                serviceMap = configuration.find('core.locator'), serviceNames = Object.keys(serviceMap); // eager loading the services in the sevice locator

                _context.next = 14;
                return this.serviceLoader.loadServiceRecursion(serviceNames);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "locate",
    value: function locate(service) {
      return this.locator.locate(service);
    }
  }]);

  return Core;
}();

module.exports = Core;

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map
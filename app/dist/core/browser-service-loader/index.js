"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ServiceUnmetDependencyError=require("../error/service-unmet-dependency"),ServiceLocatorNotFoundError=require("../error/service-locator-not-found"),BrowserServiceLoader=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"loadService",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(d,e){var f,g;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,f=require("src/".concat(b,"/locator")),a.prev=2,g=f.locate(),c.locator.set(name,g),d(),a.next=16;break;case 8:a.prev=8,a.t0=a["catch"](2),a.t1=a.t0.code,a.next="E_SERVICE_UNDEFINED"===a.t1?13:15;break;case 13:return e(new ServiceUnmetDependencyError("An unmet dependency was found for service \"".concat(name,"\", error: ").concat(a.t0.message))),a.abrupt("break",16);case 15:e(a.t0);case 16:a.next=21;break;case 18:a.prev=18,a.t2=a["catch"](0),e(new ServiceLocatorNotFoundError("locator could not be found for ".concat(name)));case 21:case"end":return a.stop();}},a,null,[[0,18],[2,8]])}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a)}));return function loadService(){return a.apply(this,arguments)}}()}]),a}();module.exports=BrowserServiceLoader;
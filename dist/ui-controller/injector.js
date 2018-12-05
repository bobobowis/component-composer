"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var camelCase=require("camelcase"),ControllerFunctionDoesNotExistsError=require("./errors/ControllerFunctionDoesNotExists"),UIControllerInjector=/*#__PURE__*/function(){/**
   * Creates a basic UI controller injector.
   * @param {ControllersFactory} controllersFactory   - ControllersFactory factory, used for creating component controllers
   */function a(b){_classCallCheck(this,a),this.controllersFactory=b}/**
  * Initialize all components that have an ID on the html
  */return _createClass(a,[{key:"inject",value:function b(){var a=this;window.controllers={},document.querySelectorAll("[id][data-component]").forEach(function(b){var c=b.getAttribute("data-component"),d=b.id;window.controllers[b.id]=a.getController(c,d)})}/**
   * Creates a ui-controller for the specified controller type and id
   * @param {string} - Controller type
   * @param {string} - Controller id
   * @return {UIController} Component UIController
   */},{key:"getController",value:function c(a,b){try{var d=camelCase(a,{pascalCase:!0}),e=this.controllersFactory["create".concat(d,"Controller")]("#".concat(b));return e}catch(b){throw new ControllerFunctionDoesNotExistsError(a)}}}]),a}();/**
 * UIControllerInjector class
 * @class
 */module.exports=UIControllerInjector;
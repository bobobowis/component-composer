"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}/**
 * UIController class
 * @class
 */var UIController=/*#__PURE__*/function(){/**
   * Creates a basic UI controller.
   * @param {string} selector - CSS selector for component wrapper (where the component lives and view will be injected)
   * @param {string} viewName - View name
   * @param {ComponentsFactory} factory   - Component factory, used for creating and validating its view model
   * @param {Object} [vm]   - Initial component view model
   */function a(b,c,d){var e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};_classCallCheck(this,a),this.selector=b,this.viewName=c,this.factory=d,this.vm=e}/**
   * Sets a new view model using the component factory
   * @param {Object} data - New view model
   */return _createClass(a,[{key:"setViewModel",value:function b(a){this.vm=this.factory.create(a)}/**
   * Renders the precompiled component view using its view model(vm)
   */},{key:"render",value:function c(){var a=window["component-composer"].views[this.viewName],b=a(this.vm);document.querySelector("".concat(this.selector)).innerHTML=b}/**
   * Gets the HTMLNode inside the component DOM for the specified selector
   * @returns {HTMLElement} - DOM HTML node
   */},{key:"getComponentNode",value:function b(a){return document.querySelector("".concat(this.selector," ").concat(a))}/**
   * Gets the HTMLNodes inside the component DOM  for the specified selector
   * @returns {Array<HTMLElement>} - Array of DOM HTML nodes
   */},{key:"getComponentNodes",value:function b(a){return document.querySelectorAll("".concat(this.selector," ").concat(a))}}]),a}();module.exports=UIController;
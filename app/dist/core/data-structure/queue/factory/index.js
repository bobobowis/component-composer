"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Queue=require(".."),QueueFactory=function(){function a(b){var c=b.composer;_classCallCheck(this,a),this.composer=c}return _createClass(a,[{key:"create",value:function create(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],b=this.composer.compose("data-structure/queue",{items:a});return new Queue(b)}}]),a}();module.exports=QueueFactory;
"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Configuration=function(){function a(b,c,d,e){_classCallCheck(this,a),this.deepclone=b,this.deepmerge=c,this.deepfind=d,this.deepfreeze=e,this.config={}}return _createClass(a,[{key:"extend",value:function extend(a){var b=this.deepclone.clone(a);this.config=this.deepmerge.merge(this.config,b)}},{key:"find",value:function find(a){return this.deepfind.find(a,this.config)}},{key:"freeze",value:function freeze(){this.config=this.deepfreeze.freeze(this.config)}}]),a}();module.exports=Configuration;
"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Configuration=require("."),ConfigurationLocator=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"locate",value:function locate(){var a=this.locator.locate("core/deepclone"),b=this.locator.locate("core/deepmerge"),c=this.locator.locate("core/deepfind"),d=new Configuration(a,b,c);return d}}]),a}();module.exports=ConfigurationLocator;
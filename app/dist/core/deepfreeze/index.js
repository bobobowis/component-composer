"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepFreeze=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"freeze",value:function freeze(a){var b=Object.getOwnPropertyNames(a),c=!0,d=!1,e=void 0;try{for(var f,g=b[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i=a[h];a[h]=i&&"object"===_typeof(i)?this.freeze(i):i}}catch(a){d=!0,e=a}finally{try{c||null==g["return"]||g["return"]()}finally{if(d)throw e}}return Object.freeze(a)}}]),a}();module.exports=DeepFreeze;
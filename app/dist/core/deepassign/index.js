"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var NotAnObjectError=require("./error/not-an-object"),DeepAssign=function(){function a(b){_classCallCheck(this,a),this.deepclone=b,this.arrayPropertyRegexp=/(\w+)\[([0-9]+)\]/i}return _createClass(a,[{key:"getPath",value:function getPath(a,b){for(var c="",d=0;d<b;d++)c+="".concat(a[d],".");return"".concat(c).concat(a[b])}},{key:"isAssignableObject",value:function isAssignableObject(a){return a&&"object"===_typeof(a)}},{key:"isArrayProperty",value:function isArrayProperty(a){var b=this.arrayPropertyRegexp.exec(a);return!!b}},{key:"getArrayPropertyIndex",value:function getArrayPropertyIndex(a){var b=this.arrayPropertyRegexp.exec(a);return{name:b[1],position:+b[2]}}},{key:"isLastKey",value:function isLastKey(a,b){return b===a.length-1}},{key:"objectProperty",value:function objectProperty(a,b,c,d,e){return this.isAssignableObject(a[c])||this.isLastKey(e,d)?this.isLastKey(e,d)?a[c]=b:a=a[c]:(a[c]={},a=a[c]),a}},{key:"arrayProperty",value:function arrayProperty(a,b,c,d,e){var f=this.getArrayPropertyIndex(c),g=f.name,h=f.position;if(!this.isAssignableObject(a[g][h])&&!this.isLastKey(e,d))throw new NotAnObjectError("Expected and object for assigning properties: ".concat(this.getPath(e,d)));else this.isLastKey(e,d)?a[g][h]=b:a=a[g][h];return a}},{key:"assignPath",value:function assignPath(a,b,c){var d=this,e=a;return b.forEach(function(a,f){e=d.isArrayProperty(a)?d.arrayProperty(e,c,a,f,b):d.objectProperty(e,c,a,f,b)}),a}},{key:"assign",value:function assign(a,b,c){var d=b.split(/\.|\//),e=this.deepclone.clone(a);return this.assignPath(e,d,c)}}]),a}();module.exports=DeepAssign;
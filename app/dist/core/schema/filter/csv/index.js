"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var SchemaFilterCsv=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"filter",value:function filter(a,b){return a.collection?this.filterCollection(a,b):this.filterSingle(a,b)}},{key:"filterCollection",value:function filterCollection(a,b){if(!Array.isArray(b))return b;var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=b[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=this.filterSingle(a,i);c.push(j)}}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}},{key:"filterSingle",value:function filterSingle(a,b){return"string"==typeof b&&(a.uppercase&&(b=b.toUpperCase()),a.lowercase&&(b=b.toLowerCase()),b=b.split(",")),b}}]),a}();module.exports=SchemaFilterCsv;
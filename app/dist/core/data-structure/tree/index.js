"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var Graph=require("../graph"),NodeNotExist=require("../graph/error/node-not-exists"),Tree=function(a){function b(a){var c,d=a.root,e=a.deepassign,f=_objectWithoutProperties(a,["root","deepassign"]);return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,f)),c.deepassign=e,c.root=d,c}return _inherits(b,a),_createClass(b,[{key:"setRoot",value:function setRoot(a){if(!this.nodes.get(a))throw new NodeNotExist("Node does not exists");this.root=a}},{key:"getLeaves",value:function getLeaves(){var a=this,b=Object.keys(this.nodes.items),c=b.filter(function(b){return!a.edges.get(b)});return c}},{key:"getJSON",value:function getJSON(a){var b=this;if(!this.nodes.get(this.root))throw new NodeNotExist("Root does not exists");var c=this.bfs(this.root),d={};return c.forEach(function(e,f){var g=b.nodes.get(e),h=b.getJSONPath(e,f,c,g.name);a?d[h]=_objectSpread({},g):d=b.deepassign.assign(d,h,_objectSpread({},g))}),d}},{key:"getJSONPath",value:function getJSONPath(a,b,c,d){for(var e,f=b-1;0<=f;f--){var g=c[f],h=this.edges.get(g);if(h){var j=h.find(function(b){return b.target===a});if(j){e=g;break}}}if(e){var k=this.nodes.get(e),l=c.findIndex(function(a){return a===e});return this.getJSONPath(e,l,c,"".concat(k.name,".").concat(d))}return d}},{key:Symbol.toStringTag,get:function get(){return"Tree"}}]),b}(Graph);module.exports=Tree;
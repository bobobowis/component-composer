"use strict";var Handlebars=require("handlebars/runtime"),NoPrecompiledViewError=require("./errors/no-precompiled-view");// inject this in the future class
/**
 * Handlebar helper for injecting a pre-compiled component view
 * @param {string} component - Component name
 * @param {Object} vm - Data/context of the view
 * @param {string} [id] - Id of the component
 * @return {string} A handlebars safe HTML string
 */function handlebarsComponent(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"",d=window["component-composer"].views[a];if(null!==d&&void 0!==d){var e;return e="string"==typeof c&&""!==c.trim()?"<div id=\"".concat(c,"\" data-component=\"").concat(a,"\" class=\"component-wrapper\">").concat(d(b),"</div>"):"<div data-component=\"".concat(a,"\" class=\"component-wrapper\">").concat(d(b),"</div>"),new Handlebars.SafeString(e)}throw new NoPrecompiledViewError(a)}module.exports=handlebarsComponent;
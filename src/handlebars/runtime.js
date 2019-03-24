const
Handlebars          = require('handlebars/runtime'),
jsonStringifyHelper = require('./json-stringify'),
ifHelper            = require('./if'),
momentFormat        = require('./moment-format'),
component           = require('./component')

Handlebars.registerHelper('jsonStringify', jsonStringifyHelper)
Handlebars.registerHelper('if', ifHelper)
Handlebars.registerHelper('momentFormat', momentFormat)
Handlebars.registerHelper('component', component)

module.exports = Handlebars

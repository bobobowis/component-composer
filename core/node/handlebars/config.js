module.exports =
{
  'core' :
  {
    'handlebars' :
    {
      'helpers' :
      {
        'calculate'      : 'core/handlebars/helper/calculate',
        'case'           : 'core/handlebars/helper/case',
        'concat'         : 'core/handlebars/helper/concat',
        'dateformat'     : 'core/handlebars/helper/dateformat',
        'escDoubleQuote' : 'core/handlebars/helper/esc-double-quote',
        'escSingelQuote' : 'core/handlebars/helper/esc-singel-quote',
        'if'             : 'core/handlebars/helper/if',
        'jsonStringify'  : 'core/handlebars/helper/json-stringify',
        'math'           : 'core/handlebars/helper/math',
        'stripTags'      : 'core/handlebars/helper/strip-tags',
        'switch'         : 'core/handlebars/helper/switch',
        'toFixed'        : 'core/handlebars/helper/to-fixed',
        'toLowerCase'    : 'core/handlebars/helper/to-lower-case',
        'toUpperCase'    : 'core/handlebars/helper/to-upper-case',
        'unless'         : 'core/handlebars/helper/unless',
        'component'      : 'core/handlebars/helper/component'
      },
      'partials' :
      {

      }
    },
    'bootstrap' :
    {
      'core/handlebars' : 'core/handlebars/bootstrap'
    },
    'locator' :
    {
      'core/handlebars/bootstrap'               : `${__dirname}/bootstrap`,
      'core/handlebars/helper/calculate'        : `${__dirname}/helper/calculate`,
      'core/handlebars/helper/component'        : `${__dirname}/helper/component`,
      'core/handlebars/helper/case'             : `${__dirname}/helper/case`,
      'core/handlebars/helper/concat'           : `${__dirname}/helper/concat`,
      'core/handlebars/helper/dateformat'       : `${__dirname}/helper/dateformat`,
      'core/handlebars/helper/esc-double-quote' : `${__dirname}/helper/esc-double-quote`,
      'core/handlebars/helper/esc-singel-quote' : `${__dirname}/helper/esc-singel-quote`,
      'core/handlebars/helper/if'               : `${__dirname}/helper/if`,
      'core/handlebars/helper/json-stringify'   : `${__dirname}/helper/json-stringify`,
      'core/handlebars/helper/math'             : `${__dirname}/helper/math`,
      'core/handlebars/helper/strip-tags'       : `${__dirname}/helper/strip-tags`,
      'core/handlebars/helper/switch'           : `${__dirname}/helper/switch`,
      'core/handlebars/helper/to-fixed'         : `${__dirname}/helper/to-fixed`,
      'core/handlebars/helper/to-lower-case'    : `${__dirname}/helper/to-lower-case`,
      'core/handlebars/helper/to-upper-case'    : `${__dirname}/helper/to-upper-case`,
      'core/handlebars/helper/unless'           : `${__dirname}/helper/unless`,
      'core/handlebars'                         : `${__dirname}`
    }
  }
}

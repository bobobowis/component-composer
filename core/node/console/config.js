module.exports = {
  'core' :
  {
    // 'bootstrap' :
    // {
    //   'console' : 'core/console/bootstrap'
    // },
    'console' :
    {
      'default' :
      {
        'maxArrayLength'  : 10,
        'maxObjectDepth'  : 10,
        'maxStringLength' : 300,
        'date'            : true,
        'dateFormat'      : 'yyyy-mm-dd HH:MM:ss',
        'debug'           : true,
        'index'           : false,
        'prefix'          : false,
        'inspect'         : true,
        'separator'       : '\t',
        'colors'          : true,
        'color'           : 'white',
        'background'      : 'black',
        'showHidden'      : false,
        'styles'          : // white, grey, black, blue, cyan, green, magenta, red, yellow, bold, italic, underline, inverse
        {
          'special'   : 'cyan',
          'number'    : 'yellow',
          'bigint'    : 'yellow',
          'boolean'   : 'yellow',
          'undefined' : 'grey',
          'null'      : 'bold',
          'string'    : 'green',
          'symbol'    : 'green',
          'date'      : 'magenta',
          'regexp'    : 'red'
        }
      }
    },
    'locator' :
    {
      'core/console/factory' : `${__dirname}/factory`
    }
  }
}

const dirname =  __dirname || 'core/browser/console'

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
        'maxObjectDepth'  : 10,
        'maxStringLength' : 300,
        'date'            : true,
        'dateFormat'      : 'yyyy-mm-dd HH:MM:ss',
        'debug'           : true,
        'index'           : false,
        'prefix'          : false,
        'stringify'       :
        {
          'space' : '\t'
        },
        'separator'  : '\n',
        'color'      : 'white',
        'background' : 'black'
      }
    },
    'locator' :
    {
      'core/console/factory' : `${dirname}/factory`
      // 'core/console/bootstrap' : `${dirname}/bootstrap`
    }
  }
}

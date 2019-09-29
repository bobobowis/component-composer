const isIE = require('../is-ie')

module.exports = function(callback, ...callbackArgs)
{
  if(callback && typeof callback === 'function')
  {
    if(isIE())
    {
      document.attachEvent('onreadystatechange', function()
      {
        if(document.readyState === 'complete')
          return callback(callbackArgs)
      })
    }
    else
    {
      document.addEventListener('DOMContentLoaded', function()
      {
        return callback(callbackArgs)
      })
    }
  }
  else
  {
    console.error('The callback is not a function!')
  }
}

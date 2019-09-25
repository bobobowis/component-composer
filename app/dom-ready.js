const isIEBrowser = require('./is-ie-browser')

module.exports = function(callback)
{
  if(callback && typeof callback === 'function')
  {
    if(isIEBrowser())
    {
      document.attachEvent('onreadystatechange', function()
      {
        if(document.readyState === 'complete')
          return callback()
      })
    }
    else
    {
      document.addEventListener('DOMContentLoaded', function()
      {
        return callback()
      })
    }
  }
  else
  {
    console.error('The callback is not a function!')
  }
}

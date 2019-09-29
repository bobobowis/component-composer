const
Application = require('core/browser/app'),
components  = require('./components')

class HomePage extends Application
{
  constructor()
  {
    super(components)
  }
}

module.exports = new HomePage()

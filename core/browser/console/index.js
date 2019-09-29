const CoreConsole = require('core/common/console')

class BrowserConsole extends CoreConsole
{
  constructor(args)
  {
    super(args)

    this.color      = this.config.color
    this.background = this.config.background
  }

  colorize(s)
  {
    let css = ''

    if(this.color)
      css = `color:${this.color};`

    if(this.background)
      css = `${css}background-color:${this.background};`

    if(this.config.css)
      css = `${css}${this.config.css}`

    return this.coreString.trim(css) !== '' ? [`%c${s}`, css] : s
  }
}

module.exports = BrowserConsole

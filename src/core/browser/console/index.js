const CoreConsole = require('core/common/console')

class BrowserConsole extends CoreConsole
{
  constructor(args)
  {
    super(args)

    this.color  = this.config.color
    this.bg     = this.config.background
  }

  format(s)
  {
    const
    formatted = super.format(s),
    colorized = this.colorize(formatted)

    return colorized
  }

  colorize(s)
  {
    let css = ''

    if(this.color)
      css = `color:${this.color};`

    if(this.background)
      css = `background-color:${this.background};`

    if(this.config.css && typeof this.config.css === 'string')
      css = `${css}${this.config.css}`

    return this.coreString.trim(css) !== '' ? [`%c${s}`, css] : [s]
  }
}

module.exports = BrowserConsole

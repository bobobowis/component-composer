/* eslint-disable no-control-regex */
/* eslint-disable no-undef */ // TODO: utils and locator
define(function()
{
  class Debug
  {
    constructor()
    {
      this.sn = 0
      this.config = {
        maxArrayLength  : 10,
        maxObjectDepth  : 10,
        maxStringLength : 300,
        color           : false,
        colors          : true,
        date            : true,
        dateFormat      : 'yyyy-mm-dd HH:MM:ss',
        debug           : true,
        index           : false,
        prefix          : false,
        separator       : '\t',
        stderr          : process.stderr,
        stdout          : process.stdout,
        ...options
      }

      this.color(this.config.color)
    }

    color(color)
    {
      switch(color)
      {
      case 'black'    : this._color = '30'; break
      case 'blue'     : this._color = '34'; break
      case 'cyan'     : this._color = '36'; break
      case 'green'    : this._color = '32'; break
      case 'magenta'  : this._color = '35'; break
      case 'red'      : this._color = '31'; break
      case 'yellow'   : this._color = '33'; break
      case 'white'    : this._color = '37'; break
      case false      :
      case undefined  : delete this._color
      }
    }

    colorize(s)
    {
      return this._color
        ? '\x1b[' + this._color + 'm' + s + '\x1b[0m'
        : s
    }

    escape(s)
    {
      let output = s

      if(Object.prototype.toString.call(output) === '[object String]')
      {
        output = output.replace(/[\x00-\x09\x10-\x1F]/g, '')
        if(this.config.maxStringLength && output.length > this.config.maxStringLength)
        {
          const
          segment = Math.floor(this.config.maxStringLength / 2)
          output  = [ output.substr(0, segment).trim(), s.substr(-segment).trim() ].join(' ... ')
        }
      }

      return output
    }

    getInspectOptions()
    {
      const options =
      {
        depth          : this.config.maxObjectDepth,
        colors         : this.config.colors,
        maxArrayLength : this.config.maxArrayLength
      }

      return options
    }

    output(args, cb)
    {
      this.sn = this.sn < Number.MAX_SAFE_INTEGER ? this.sn + 1 : 0

      if(this.config.debug)
      {
        const consoleArgs = [
          this.config.date && this.dateformat(new Date(), this.config.dateFormat),
          this.config.prefix,
          this.config.index  && this.sn
        ].concat(args).map((arg) =>
        {
          if(typeof arg === 'object')
            return this.util.inspect(arg, this.getInspectOptions())
          else
            return this.colorize(this.escape(arg))
        }).join(this.config.separator)

        cb(consoleArgs)
      }
    }

    log(...args)
    {
      this.output(args, console.log)
    }

    info(...args)
    {
      this.output(args, console.info)
    }

    error(...args)
    {
      this.output(this, args, console.error)
    }

    trace(...args)
    {
      this.output(this, args, console.trace)
    }

    table(...args)
    {
      this.output(this, args, console.table)
    }

    warning(...args)
    {
      this.output(this, args, console.table)
    }
  }

  return Debug
})

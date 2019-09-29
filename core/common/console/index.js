/* eslint-disable no-control-regex */
class Console
{
  constructor({
    util,
    dateformat,
    config,
    console,
    coreString
  })
  {
    this.sn         = 0
    this.coreString = coreString
    this.util       = util
    this.dateformat = dateformat
    this.config     = config
    this.console    = console

    this.util.inspect.styles = { ...this.util.inspect.styles, ...this.getInspectStyles() }
  }

  getInspectOptions()
  {
    return this.config.inspect && this.config.inspect.options ? this.config.inspect.options : {}
  }

  getInspectStyles()
  {
    return this.config.inspect && this.config.inspect.options ? this.config.inspect.options : {}
  }

  shortenString(s)
  {
    if(this.config.maxStringLength && s.length > this.config.maxStringLength)
      return this.coreString.shorten(s, this.config.maxStringLength)

    return s
  }

  formatOutputString(s)
  {
    return this.shortenString(s)
  }

  getCurrentDate()
  {
    return this.dateformat(new Date(), this.config.dateFormat)
  }

  colorize(s)
  {
    return s
  }

  buildOutput(args)
  {
    let output = []

    if(this.config.date)
      output.push(this.getCurrentDate())

    if(this.config.prefix)
      output.push(this.config.prefix)

    if(this.config.index)
      output.push(this.sn)

    for(const arg of args)
    {
      let outputArg

      if(typeof arg === 'object' && this.config.inspect)
        outputArg = this.inspectObject(arg)
      else if(typeof arg === 'object' && this.config.stringify)
        outputArg = JSON.stringify(arg, this.config.stringify.replacer,  this.config.stringify.space)
      else if(typeof outputArg === 'string')
        outputArg = this.formatOutputString(outputArg)


      output = [...output, outputArg]
    }

    return output.join(this.config.separator)
  }

  inspectObject(o)
  {
    const
    inspectOptions = this.getInspectOptions(),
    inspectString  = this.util.inspect(o, inspectOptions)

    return inspectString
  }

  output(args, cb)
  {
    this.sn = this.sn < Number.MAX_SAFE_INTEGER ? this.sn + 1 : 0
    if(this.config.debug)
    {
      const
      output  = this.buildOutput(args),
      colored = this.colorize(output)

      cb.apply(this, colored)
    }
  }

  log(...args)
  {
    this.output(args, this.console.log)
  }

  info(...args)
  {
    this.output(args, this.console.log)
  }

  warning(...args)
  {
    this.output(args, this.console.warn)
  }

  error(...args)
  {
    this.output(args, this.console.error)
  }

  trace(...args)
  {
    this.output(args, this.console.trace)
  }

  table(...args)
  {
    this.output(args, this.console.table)
  }

  startTimer(label)
  {
    this.console.time(label)
  }

  getTimeLog(label)
  {
    this.console.timeLog(label)
  }

  finishTimer(label)
  {
    this.console.timeEnd(label)
  }

  group(collapsed)
  {
    if(collapsed)
      this.console.groupCollapsed()
    else
      this.console.group()
  }

  clear()
  {
    this.console.clear()
  }

  groupEnd()
  {
    this.console.groupEnd()
  }

  async measureTime(label, cb, ...args)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        this.trace(args)
        this.startTimer(label)

        const result = await cb(args)

        this.finishTimer(label)
        resolve(result)
      }
      catch(error)
      {
        this.finishTimer(label)
        reject(error)
      }
    })
  }
}

module.exports = Console

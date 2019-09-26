class Console
{
  constructor({
    util,
    dateformat,
    config,
    console
  })
  {
    this.sn         = 0
    this.util       = util
    this.dateformat = dateformat
    this.config     = config
    this.console    = console

    this.util.inspect.styles = { ...this.config.styles }
  }

  getInspectOptions()
  {
    const options =
    {
      depth          : this.config.maxObjectDepth,
      showHidden     : this.config.showHidden,
      colors         : this.config.colors,
      maxArrayLength : this.config.maxArrayLength
    }

    return options
  }

  escape(s)
  {
    let escaped = s
    if(this.config.maxStringLength && s.length > this.config.maxStringLength)
    {
      const segment = Math.floor(this.config.maxStringLength / 2)

      escaped = [ s.substr(0, segment).trim(),
        s.substr(-segment).trim()
      ].join('...')
    }

    return escaped
  }

  buildOutput(args)
  {
    let output = []

    if(this.config.date)
      output.push(this.dateformat(new Date(), this.config.dateFormat))

    if(this.config.prefix)
      output.push(this.config.prefix)

    if(this.config.index)
      output.push(this.sn)

    for(const arg of args)
    {
      if(typeof arg === 'object' && this.config.inspect)
        output.push(this.util.inspect(arg, this.getInspectOptions()))
      else if(typeof x === 'string')
        output.push(this.escape(arg)) // output.push(this.colorize(this.escape(arg)))
      else
        output.push(arg)
    }

    return output.join(this.config.separator)
  }

  output(args, cb)
  {
    this.sn = this.sn < Number.MAX_SAFE_INTEGER ? this.sn + 1 : 0
    if(this.config.debug)
    {
      const output = this.buildOutput(args)
      cb(output)
    }
  }

  log(...args)
  {
    this.output(args, this.console.log)
  }

  info(...args)
  {
    this.output.call(args, this.console.log)
  }

  error(...args)
  {
    this.output.call(args, this.console.error)
  }

  trace(...args)
  {
    this.output.call(args, this.console.trace)
  }

  table(...args)
  {
    this.output.call(args, this.console.table)
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

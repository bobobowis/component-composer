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
      if(typeof arg === 'object' && this.config.inspect)
        output = [ ...output, ...this.inspectObject(arg) ]
      else if(typeof x === 'string')
        output = [...output, ...this.formatOutputString(arg)]
      else
        output = [ ...output, arg ]
    }

    return output.join(this.config.separator)
  }

  inspectObject(o)
  {
    const
    inspectOptions = this.getInspectOptions(),
    inspectString  = this.util.inspect(o, inspectOptions)

    return [inspectString]
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

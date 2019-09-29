class CoreHandlebarsHelperSwitch
{
  create()
  {
    return function(value, options)
    {
      this._switchValue = value
      const result = options.fn(this)
      delete this._switchValue
      return result
    }
  }
}

module.exports = CoreHandlebarsHelperSwitch

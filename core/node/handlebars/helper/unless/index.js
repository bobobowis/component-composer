class CoreHandlebarsHelperUnless
{
  constructor(helperIf)
  {
    this.helperIf = helperIf
  }

  create()
  {
    const helperIf = this.helperIf

    return (...args) =>
    {
      const
      options = args.pop(),
      inverse = options.inverse

      options.inverse = options.fn
      options.fn      = inverse

      return helperIf(...args, options)
    }
  }
}

module.exports = CoreHandlebarsHelperUnless

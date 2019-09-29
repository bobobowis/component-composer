class CoreHandlebarsHelperConcat
{
  create()
  {
    return (...args) =>
    {
      let out = ''
      for(const arg of args)
      {
        if(typeof arg !== 'object' && arg !== undefined)
          out += arg
      }

      return out
    }
  }
}

module.exports = CoreHandlebarsHelperConcat

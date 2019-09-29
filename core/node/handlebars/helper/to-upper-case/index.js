class CoreHandlebarsHelperToUpperCase
{
  create()
  {
    return (s) => ('' + s).toUpperCase()
  }
}

module.exports = CoreHandlebarsHelperToUpperCase

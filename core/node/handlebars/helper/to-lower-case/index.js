class CoreHandlebarsHelperToLowerCase
{
  create()
  {
    return (s) => ('' + s).toLowerCase()
  }
}

module.exports = CoreHandlebarsHelperToLowerCase

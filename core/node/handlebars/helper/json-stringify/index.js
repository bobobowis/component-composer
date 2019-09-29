class CoreHandlebarsHelperJsonStringify
{
  create()
  {
    return (obj) => JSON.stringify(obj)
  }
}

module.exports = CoreHandlebarsHelperJsonStringify

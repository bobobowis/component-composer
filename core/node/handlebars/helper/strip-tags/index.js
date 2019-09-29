class CoreHandlebarsHelperStripTags
{
  create()
  {
    return (variable) =>
      typeof variable === 'string'
        ? variable.replace(/(<([^>]+)>)/ig, '')
        : variable
  }
}

module.exports = CoreHandlebarsHelperStripTags

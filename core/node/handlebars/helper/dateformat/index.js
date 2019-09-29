class CoreHandlebarsHelperDateformat
{
  constructor(dateformat)
  {
    this.dateformat = dateformat
  }

  create()
  {
    const dateformat = this.dateformat
    return (date, format) => dateformat(date, format)
  }
}

module.exports = CoreHandlebarsHelperDateformat

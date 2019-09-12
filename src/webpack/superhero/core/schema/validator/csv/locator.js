const SchemaValidatorCsv = require('.')

class SchemaValidatorCsvLocator
{
  locate()
  {
    return new SchemaValidatorCsv()
  }
}

module.exports = SchemaValidatorCsvLocator

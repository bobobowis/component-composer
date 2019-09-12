const SchemaValidatorTimestamp = require('.')
class SchemaValidatorTimestampLocator
{
  locate()
  {
    return new SchemaValidatorTimestamp()
  }
}

module.exports =  SchemaValidatorTimestampLocator

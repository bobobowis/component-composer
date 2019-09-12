const InvalidJsonError = require('./error/invalid.js')
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorJson
{
  valid(options, data)
  {
    try
    {
      options.stringified ? JSON.parse(data) : JSON.stringify(data)
    }
    catch(error)
    {
      throw new InvalidJsonError('Unparsable JSON provided')
    }
  }
}

module.exports =  SchemaValidatorJson

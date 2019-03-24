/**
 * ServiceUndefinedError class
 * @class
 * @extends Error
 */
class ServiceUndefinedError extends Error
{
  /**
   * Creates a ServiceUndefinedError.
   */
  constructor(...args)
  {
    super(...args)
    this.code = 'SERVICE_UNDEFINED'
  }
}

module.exports = ServiceUndefinedError

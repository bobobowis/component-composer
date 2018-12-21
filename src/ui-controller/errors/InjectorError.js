/**
 * InjectorError class
 * @class
 * @extends Error
 */
class InjectorError extends Error
{
  /**
   * Creates a InjectorError.
   * @param {Error} error - error
   */
  constructor(error)
  {
    super(error.message)

    this.name   = 'InjectorError'
    this.code   = 'INJECTOR_ERROR'
    this.error  = error
  }
}

module.exports = InjectorError

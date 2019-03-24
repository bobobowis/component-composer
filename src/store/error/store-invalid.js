/**
 * StoreInvalidError class
 * @class
 * @extends Error
 */
class StoreInvalidError extends Error
{
  /**
   * Creates a StoreInvalidError.
   */
  constructor(...args)
  {
    super(...args)
    this.code = 'STORE_INVALID'
  }
}

module.exports = StoreInvalidError

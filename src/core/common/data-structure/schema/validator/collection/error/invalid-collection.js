/**
 * @memberof Domain
 * @extends {Error}
 */
class InvalidCollectionError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'E_INVALID_COLLECTION'
  }
}

module.exports = InvalidCollectionError

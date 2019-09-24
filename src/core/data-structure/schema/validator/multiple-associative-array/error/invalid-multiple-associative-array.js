/**
 * @memberof Domain
 * @extends {Error}
 */
class InvalidMultipleAssociativeArrayError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'E_INVALID_MULTIPLE_ASSOCIATIVE_ARRAY'
  }
}

module.exports = InvalidMultipleAssociativeArrayError

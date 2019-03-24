const
kindOf            = require('kind-of'),
StoreInvalidError = require('./error/store-invalid')

class StoreValidator
{
  validateInitialState(initialState)
  {
    if(kindOf(initialState) !== 'object')
      throw new StoreInvalidError('initialState must be an object')
  }


  validate({ initialState })
  {
    this.validateInitialState(initialState)
    return true
  }
}

module.exports = StoreValidator

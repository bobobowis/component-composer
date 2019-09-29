const
Dispatcher    = require('../../../core/node/http/server/dispatcher'),
Unauthorized  = require('../../../core/node/http/server/dispatcher/error/unauthorized')

/**
 * @memberof Api
 * @extends {superhero/core/http/server/dispatcher}
 */
class AuthenticationMiddleware extends Dispatcher
{
  async dispatch(next)
  {
    const apikey = this.request.headers['api-key']

    if(apikey === 'ABC123456789')
      await next()
    else
      throw new Unauthorized('You are not authorized to access the requested resource')
  }
}

module.exports = AuthenticationMiddleware

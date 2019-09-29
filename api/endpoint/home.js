const Dispatcher = require('../../core/node/http/server/dispatcher')

/**
 * @memberof Api
 * @extends {superhero/core/http/server/dispatcher}
 */
class HomeEndpoint extends Dispatcher
{
  dispatch()
  {
    this.view.body = {
      helloName :
      {
        id        : 'a',
        wrapper   : 'div',
        component : 'hello-name',
        dto       : {
          name : 'world'
        }
      }
    }
  }
}

module.exports = HomeEndpoint

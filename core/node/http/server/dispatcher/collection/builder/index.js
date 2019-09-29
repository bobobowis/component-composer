const
NotHoneringDispatcherContractError  = require('./error/not-honering-dispatcher-contract'),
DispatcherCanNotBeResolvedError     = require('./error/dispatcher-can-not-be-resolved')

class ServerDispatcherCollectionBuilder
{
  constructor(path, locator)
  {
    this.path     = path
    this.locator  = locator
  }

  build(route, request, session, viewModel)
  {
    const dispatchers = []

    for(const i in route.middleware)
    {
      const dispatcher = this.createDispatcher(route.middleware[i], route, request, session, viewModel)
      dispatchers.push(dispatcher)
    }

    const endpoint = this.createDispatcher(route.endpoint, route, request, session, viewModel)
    dispatchers.push(endpoint)

    return dispatchers
  }

  createDispatcher(pathname, route, request, session, viewModel)
  {
    const fullPathname = `${this.path.main.baseDir}/${pathname}`

    if(this.path.isResolvable(fullPathname))
    {
      const
      Dispatcher  = require(fullPathname),
      dispatcher  = new Dispatcher(route, request, session, this.locator, viewModel)

      if(typeof dispatcher.dispatch !== 'function' || typeof dispatcher.onError  !== 'function')
        throw new NotHoneringDispatcherContractError(`dispatcher "${pathname}" is not honering the server dispatcher contract`)

      return dispatcher
    }
    else
    {
      throw new DispatcherCanNotBeResolvedError(`dispatcher "${pathname}" can not be resolved in request: ${request.method} -> ${request.url}`)
    }
  }
}

module.exports = ServerDispatcherCollectionBuilder

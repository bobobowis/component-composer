const
fs              = require('fs'),
stat            = require('util').promisify(fs.stat),
Dispatcher      = require('../http/server/dispatcher'),
BadRequest      = require('../http/server/dispatcher/error/bad-request'),
NotFound        = require('../http/server/dispatcher/error/not-found')

class ResourceEndpoint extends Dispatcher
{
  async dispatch()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    path          = this.locator.locate('core/path')

    try
    {
      const
      filename    = this.request.url,
      directory   = configuration.find('core.resource.directory'),
      absolute    = path.normalize(filename),
      isAbsolute  = path.isAbsolute(absolute)

      if(!isAbsolute)
        throw new BadRequest('An absolute path is required')

      const
      resource  = directory + absolute,
      stats     = await stat(resource)

      if(!stats.isFile())
        throw new NotFound('Not found')

      const
      stream    = fs.createReadStream(resource),
      extension = path.extension(resource).toLowerCase(),
      // extension to content-type mapper
      mapper    = configuration.find('core.resource.content-type.mapper')

      if(extension in mapper)
        this.view.headers['Content-Type'] = mapper[extension]

      this.view.meta.view   = 'core/http/server/view/stream'
      this.view.meta.stream = stream
    }
    catch(error)
    {
      throw error.code === 'ENOENT'
        ? new NotFound('Not found')
        : error
    }
  }
}

module.exports = ResourceEndpoint

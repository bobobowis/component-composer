const
fs        = require('fs'),
util      = require('util'),
readFile  = util.promisify(fs.readFile)

class CoreHandlebars
{
  constructor(path, handlebars)
  {
    this.path       = path
    this.handlebars = handlebars
  }

  async write(output, viewModel, route)
  {
    const template = viewModel.template || route.template

    if(!template)
    {
      const msg = 'view can not be rendered, no template defined'
      throw new Error(msg)
    }

    const
    path = `${this.path.main.baseDir}/${template}.hbs`,
    body = await this.composeFile(path, viewModel.body)

    viewModel.headers['Content-Length'] = Buffer.byteLength(body)

    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }

  async composeFile(filename, context)
  {
    return readFile(filename, 'utf-8').then((source) =>
    {
      const
      template = this.handlebars.compile(source),
      composed = template(context)

      return composed
    })
  }
}

module.exports = CoreHandlebars

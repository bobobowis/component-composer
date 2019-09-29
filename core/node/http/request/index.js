const Request = require('@superhero/request')

class HttpRequest extends Request
{
  constructor(options, object)
  {
    super(options)
    this.object = object
  }

  fetch(method, options)
  {
    if(typeof options === 'object')
      options.headers = this.object.lowercaseKeys(options.headers)

    const response = super.fetch(method, options)

    response.headers = this.object.lowercaseKeys(response.headers)

    return response
  }
}

module.exports = HttpRequest

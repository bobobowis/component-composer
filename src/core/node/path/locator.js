const Path = require('.')

class PathLocator
{
  locate()
  {
    const path = require('path')
    return new Path(path)
  }
}

module.exports = PathLocator

const path = require('path')

class Path
{
  constructor()
  {
    const
    filename    = require.main.filename,
    dirname     = this.dirname(filename),
    baseDir     = path.resolve(__dirname, '../../../'),
    corePath    = path.resolve(__dirname, '../../'),
    nodePath    = path.resolve(__dirname, '../../node'),
    browserPath = path.resolve(__dirname, '../../browser'),
    commonPath  = path.resolve(__dirname, '../../common')

    this.main   = {
      filename,
      dirname,
      baseDir,
      corePath,
      nodePath,
      browserPath,
      commonPath
    }
  }

  /**
   * @see require.resolve
   */
  isResolvable(filename)
  {
    try
    {
      require.resolve(filename)
      return true
    }
    catch(error)
    {
      return false
    }
  }

  /**
   * @see path.dirname
   */
  dirname(filename)
  {
    return path.dirname(filename)
  }

  /**
   * @see path.normalize
   */
  normalize(filename)
  {
    return path.normalize(filename)
  }

  /**
   * @see path.extname
   */
  extension(filename)
  {
    return path.extname(filename)
  }

  /**
   * @see path.isAbsolute
   */
  isAbsolute(filename)
  {
    return path.isAbsolute(filename)
  }
}

module.exports = Path

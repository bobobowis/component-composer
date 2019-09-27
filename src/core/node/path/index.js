class Path
{
  constructor(path)
  {
    const
    filename  = require.main.filename,
    dirname   = this.dirname(filename)

    this.main = { filename, dirname }
    this.path = path
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
    return this.path.dirname(filename)
  }

  /**
   * @see path.normalize
   */
  normalize(filename)
  {
    return this.path.normalize(filename)
  }

  /**
   * @see path.extname
   */
  extension(filename)
  {
    return this.path.extname(filename)
  }

  /**
   * @see path.isAbsolute
   */
  isAbsolute(filename)
  {
    return this.path.isAbsolute(filename)
  }

  resolve(...paths)
  {
    return this.path.resolve(...paths)
  }
}

module.exports = Path

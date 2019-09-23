class Frontender
{
  constructor({
    locator,
    fs
  })
  {
    this.locator    = locator
    this.components = {}
    this.fs         = fs
  }

  add({
    name,
    path
  })
  {
    this.components[name] = path
  }

  async loadConfig()
  {
    const configuration = this.locator.locate('core/configuration')

    // extending the configurations of every component
    for(const component in this.components)
    {
      const config = await this.fetchComponentConfig(component, this.components[component])
      configuration.extend(config)
    }

    configuration.freeze()
  }

  fetchComponentConfig(component, pathname)
  {
    const
    path          = this.locator.locate('core/path'),
    specifiedPath = `${pathname}/config`,
    localPath     = `${path.main.dirname}/${component}/config`,
    absolutePath  = `${component}/config`,
    corePath      = `${__dirname}/${component}/config`

    if(path.isResolvable(specifiedPath))
    {
      return require(specifiedPath)
    }
    else if(path.isResolvable(localPath))
    {
      return require(localPath)
    }
    else if(path.isResolvable(absolutePath))
    {
      return require(absolutePath)
    }
    else if(path.isResolvable(corePath))
    {
      return require(corePath)
    }
    else
    {
      const
      msg   = `could not resolve path to component "${component}"`,
      error = new Error(msg)

      error.code = 'E_COMPONENT_NOT_RESOLVABLE'
      throw error
    }
  }

  async dumpConfiguration()
  {
    return new Promise((resolve, reject) =>
    {
      const configuration = this.locator.locate('core/configuration')

      this.fs.writeFile('config.js', JSON.stringify(configuration.config), (err) =>
      {
        if(err)
        {
          const
          msg   = `could not write configuration file`,
          error = new Error(msg)

          error.code = 'E_COULD_NOT_WRITE_CONFIG'
          reject(error)
        }

        resolve()
      })
    })
  }
}

module.exports = Frontender

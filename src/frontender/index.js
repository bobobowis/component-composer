const
CouldNotWriteConfig     = require('./error/could-not-write-config'),
ComponentNotResolvable  = require('./error/component-not-resolvable')

class Frontender
{
  constructor({
    locator,
    components,
    fs
  })
  {
    this.locator    = locator
    this.components = components
    this.fs         = fs
  }

  loadConfig()
  {
    const configuration = this.locator.locate('core/configuration')

    // extending the configurations of every component
    for(const component of this.components)
    {
      const config = this.fetchComponentConfig(component.name, component.path)
      configuration.extend(config)
    }

    configuration.freeze()
  }

  fetchComponentConfig(component, pathname)
  {
    const
    path          = this.locator.locate('core/path'),
    corePath      = path.resolve(__dirname, `../${component}/config`)

    if(path.isResolvable(corePath))
      return require(corePath)
    else
      throw new ComponentNotResolvable(`could not resolve path to component "${component}"`)
  }

  dumpConfiguration()
  {
    try
    {
      const configuration = this.locator.locate('core/configuration')

      this.fs.writeFileSync(`${__dirname}/config.js`, JSON.stringify(configuration.config, null, 2))
    }
    catch(error)
    {
      throw new CouldNotWriteConfig('could not write configuration file')
    }
  }
}

module.exports = Frontender

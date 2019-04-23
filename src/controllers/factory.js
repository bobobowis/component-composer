const
Controllers = require('.'),
Locator     = require('../locator')

class ControllersFactory
{
  createControllersLocator()
  {
    return new Locator()
  }

  create({ propsMapper, bus })
  {
    const controllersLocator = this.createControllersLocator()

    return new Controllers({ propsMapper, bus, controllersLocator})
  }
}

module.exports = ControllersFactory

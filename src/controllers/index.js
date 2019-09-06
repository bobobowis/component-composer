const HashTable = require('../hash-table')

class Controllers extends HashTable
{
  constructor({
    dtoMapper,
    bus
  })
  {
    super()

    this.dtoMapper            = dtoMapper
    this.bus                  = bus
  }

  addComponentChannel(component)
  {
    const channelId = component.id
    this.bus.addChannel(channelId)
  }

  initializeControllers()
  {
    const components = document.querySelectorAll('[data-component]')

    components.forEach(this.addComponentChannel.bind(this))
    components.forEach(this.createComponentController.bind(this))
  }

  createComponentController(component)
  {
    const
    schema      = component.getAttribute('data-component'),
    id          = component.id,
    controller  = this.createController({
      schema,
      id
    })

    this.add(id, controller)
  }

  createController({
    schema,
    id
  })
  {
    const UIControllerFactory = this.locator.locate(`${schema}/controller/factory`)

    return UIControllerFactory.create({
      schema,
      id
    })
  }
}

module.exports = Controllers

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

  createComponentController(componentNode)
  {
    const
    component   = componentNode.getAttribute('data-component'),
    id          = componentNode.id,
    controller  = this.createController({
      component,
      id
    })

    this.add(id, controller)
  }

  createController({
    component,
    id
  })
  {
    const
    UIControllerFactory = this.locator.locate(`${component}/controller/factory`),
    busChannel          = this.bus.getChannel(id)

    return UIControllerFactory.create({
      busChannel,
      component,
      id
    })
  }
}

module.exports = Controllers

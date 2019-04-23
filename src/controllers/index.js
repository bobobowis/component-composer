const HashTable = require('../hash-table')

class Controllers extends HashTable
{
  constructor(propsMapper, bus, controllersLocator)
  {
    super()
    this.propsMapper        = propsMapper
    this.bus                = bus
    this.controllersLocator = controllersLocator

    window.controllers = this
  }

  addController(type, controller)
  {
    this.controllersLocator.add(type, controller)
  }

  addComponentChannel(component)
  {
    const channelId = component.id
    this.bus.addChannel(channelId)
  }

  initializeChunks()
  {
    const components = document.querySelectorAll('[data-component]')

    components.forEach(this.addComponentChannel.bind(this))
    components.forEach(this.createComponentController.bind(this))
  }

  getComponentController(type, id, props)
  {
    return this.createController(type, id, props)
  }

  getComponentAttribute(node)
  {
    return node.getAttribute('data-component')
  }

  getNodeId(node)
  {
    return node.id
  }

  getProps(id)
  {
    return this.propsMapper.getProps(id)
  }

  createComponentController(component)
  {
    const
    type        = this.getComponentAttribute(component),
    id          = this.getNodeId(component),
    props       = this.getProps(id),
    controller  = this.createController(type, id, props)

    this.add(id, controller)
  }

  createController(type, id, props)
  {
    try
    {
      const UIController = this.controllersLocator.locate(type)
      return new UIController(id, props, this.bus)
    }
    catch(error)
    {
      console.log(error)
    }
  }
}

module.exports = Controllers

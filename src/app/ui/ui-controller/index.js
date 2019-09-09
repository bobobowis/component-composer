/**
 * UIController class
 * @class
 */
class UIController
{
  /**
   * Creates a basic UI controller.
   */
  constructor({
    id,
    schema,
    dtoMapper,
    controllers,
    template,
    bus
  })
  {
    this.id          = id
    this.schema      = schema
    this.template    = template
    this.dtoMapper   = dtoMapper
    this.controllers = controllers
    this.bus         = bus
    this.selector    = `#${id}`

    this.bus.addChannel(this.id)

    this.bindings()
    this.subscribers()
  }

  subscribers()
  {
    this.bus.getChannel(this.id).subscribe({
      actionId   : 'DTO_CHANGED',
      subscriber : this.onDTOChanged.bind(this)
    })
  }

  subscribe(actionId, subscriber)
  {
    this.bus.getChannel(this.id).subscribe({
      actionId,
      subscriber
    })
  }

  subscribeTo(channelId, actionId, subscriber)
  {
    this.bus.subscribe(channelId, actionId, subscriber)
  }

  onDTOChanged(action)
  {
    const dto = action.payload
    this.apply(dto)
  }

  getDTO()
  {
    return this.dtoMapper.getDTO(this.id)
  }

  apply()
  {
    this.render()
  }

  /**
   * Renders the precompiled component view using its view model(vm)
   */
  render()
  {
    const
    dto              = this.getDTO(),
    compiledTemplate = this.template(dto)

    document.querySelector(`${this.selector}`).innerHTML = compiledTemplate

    this.bindings()
    this.childrenBindings()
  }

  childrenBindings()
  {
    const components = this.getComponentNodes('[data-component]')
    components.forEach(this.childBindings.bind(this))
  }

  childBindings(component)
  {
    const
    id          = component.id,
    controller  = this.controllers.get(id)

    if(controller)
      controller.bindings()
  }

  /**
   * Gets the HTMLNode inside the component DOM for the specified selector
   * @returns {HTMLElement} - DOM HTML node
   */
  getComponentNode(nodeSelector)
  {
    return document.querySelector(`${this.selector} ${nodeSelector}`)
  }

  /**
   * Gets the HTMLNodes inside the component DOM  for the specified selector
   * @returns {Array<HTMLElement>} - Array of DOM HTML nodes
   */
  getComponentNodes(nodeSelector)
  {
    return document.querySelectorAll(`${this.selector} ${nodeSelector}`)
  }

  bindTo(selector, event, callback)
  {
    const nodes = this.getComponentNodes(selector)
    nodes.forEach((node) =>
    {
      node.addEventListener(event, callback)
    })
  }

  publishTo(channelId, actionId, payload)
  {
    this.bus.getChannel(channelId).publish({
      id      : actionId,
      emitter : this.id,
      type    : this.schema,
      payload
    })
  }

  dispatch(actionId, payload)
  {
    this.bus.getChannel('DISPATCHER').publish({
      id      : actionId,
      emitter : this.id,
      type    : this.schema,
      payload
    })
  }

  publish(actionId, payload)
  {
    this.bus.getChannel(this.id).publish({
      id      : actionId,
      emitter : this.id,
      type    : this.schema,
      payload
    })
  }

  /**
   * Binds all the HTML listeners and post actions after render
   */
  bindings()
  {

  }
}

module.exports = UIController

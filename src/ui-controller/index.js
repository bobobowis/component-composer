const
UIChunk   = require('../ui-chunk'),
deepCopy  = require('../deepcopy')

/**
 * UIController class
 * @class
 */
class UIController extends UIChunk
{
  /**
   * Creates a basic UI controller.
   */
  constructor(
    id,
    type,
    props,
    bus
  )
  {
    super(id, type, props)
    this.selector    = `#${id}`
    this.template    = window['component-composer'].views[this.type]
    this.bus         = bus

    this.bindings()
    this.subscribers()
  }

  extendType(type)
  {
    this.type     = type
    this.template = window['component-composer'].views[type]
  }

  subscribers()
  {
    this.bus.subscribe(this.id, 'PROPS_CHANGED', this.onPropsChanged.bind(this))
  }

  subscribe(actionId, subscriber)
  {
    this.bus.subscribe(this.id, actionId, subscriber)
  }

  subscribeTo(channelId, actionId, subscriber)
  {
    this.bus.subscribe(channelId, actionId, subscriber)
  }

  onPropsChanged(action)
  {
    const props = action.payload
    this.apply(props)
  }

  getProps()
  {
    const props = window.propsMapper.props.get(this.id)
    return {...props}
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
    props            = this.getProps(),
    compiledTemplate = this.template(props)

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
    id = component.id,
    controller = window.controllers.get(id)
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

  addListener(event, callback, node)
  {
    node.addEventListener(event, callback)
  }

  bindTo(selector, event, callback)
  {
    const nodes = this.getComponentNodes(selector)
    nodes.forEach(this.addListener.bind(this, event, callback))
  }

  publishTo(channelId, actionId, payload)
  {
    this.bus.publish(channelId, actionId, this.id, this.type, payload)
  }

  dispatch(actionId, payload)
  {
    this.bus.publish('DISPATCHER', actionId, this.id, this.type, payload)
  }

  publish(actionId, payload)
  {
    this.bus.publish(this.id, actionId, this.id, this.type, payload)
  }

  /**
   * Binds all the HTML listeners and post actions after render
   */
  bindings()
  {

  }
}

module.exports = UIController

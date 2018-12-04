/**
 * UIController class
 * @class
 */
class UIController
{
  /**
   * Creates a basic UI controller.
   * @param {string} selector - CSS selector for component wrapper (where the component lives and view will be injected)
   * @param {string} viewName - View name
   * @param {ComponentsFactory} factory   - Component factory, used for creating and validating its view model
   * @param {Object} [vm]   - Initial component view model
   */
  constructor(selector, viewName, factory, vm = {})
  {
    this.selector = selector
    this.viewName = viewName
    this.factory  = factory
    this.vm       = vm
  }

  /**
   * Sets a new view model using the component factory
   * @param {Object} data - New view model
   */
  setViewModel(data)
  {
    this.vm = this.factory.create(data)
  }

  /**
   * Renders the precompiled component view using its view model(vm)
   */
  render()
  {
    const
    precompiledView = window['component-composer'].views[this.viewName],
    compiledView    = precompiledView(this.vm)

    document.querySelector(`${this.selector}`).innerHTML = compiledView
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
}

module.exports = UIController

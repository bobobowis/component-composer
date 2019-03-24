const
camelCase     = require('camelcase'),
InjectorError = require('./errors/InjectorError'),
EventEmitter  = require('../event-emitter')
/**
 * UIControllerInjector class
 * @class
 */
class UIControllerInjector
{
  /**
   * Creates a basic UI controller injector.
   * @param {ControllersFactory} controllersFactory   - ControllersFactory factory, used for creating component controllers
   */
  constructor(controllersFactory)
  {
    this.controllersFactory = controllersFactory
  }
  /**
  * Initialize all components that have an ID on the html
  */
  inject()
  {
    window.controllers = {}

    document.querySelectorAll('[data-component][id]').forEach((component) =>
    {
      const
      controllerType  = component.getAttribute('data-component'),
      componentId     = component.id

      window.controllers[component.id] = this.getController(controllerType, `#${componentId}`)
    })
  }
  /**
   * Creates a ui-controller for the specified controller type and id
   * @param {string} - Controller type
   * @param {string} - Controller id
   * @return {UIController} Component UIController
   */
  getController(controllerType, selector, eventEmitter = new EventEmitter())
  {
    try
    {
      const
      functionName      = camelCase(controllerType, { pascalCase: true }),
      createController  = this.controllersFactory[`create${functionName}Controller`]

      if(createController && typeof createController === 'function')
        return this.controllersFactory[`create${functionName}Controller`](selector, eventEmitter)
      else
        return undefined
    }
    catch(error)
    {
      throw new InjectorError(error)
    }
  }
}

module.exports = UIControllerInjector

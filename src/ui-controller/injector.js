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

    document.querySelectorAll('[id][data-component]').forEach((component) =>
    {
      const
      controllerType  = component.getAttribute('data-component'),
      componentId     = component.id

      window.controllers[component.id] = this.getController(controllerType, componentId)
    })
  }
  /**
   * Creates a ui-controller for the specified controller type and id
   * @param {string} - Controller type
   * @param {string} - Controller id
   * @return {UIController} Component UIController
   */
  getController(controllerType, id)
  {
    try
    {
      const
      functionName  = camelCase(controllerType, { pascalCase: true }),
      eventEmitter  = new EventEmitter(),
      controller    = this.controllersFactory[`create${functionName}Controller`](`#${id}`, eventEmitter)

      return controller
    }
    catch(error)
    {
      throw new InjectorError(error)
    }
  }
}

module.exports = UIControllerInjector

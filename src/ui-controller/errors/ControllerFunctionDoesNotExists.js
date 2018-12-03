/**
 * ControllerFunctionDoesNotExistsError class
 * @class
 * @extends Error
 */
class ControllerFunctionDoesNotExistsError extends Error
{
  /**
   * Creates a ControllerFunctionDoesNotExistsError.
   * @param {string} controller - Controller that caused the error
   */
  constructor(controller)
  {
    super(`Controller '${controller}' does not have a function`)

    this.name   = 'ControllerFunctionDoesNotExistsError'
    this.code   = 'CONTROLLER_FUNCTION_NOT_EXIST'
    this.controller  = controller
  }
}

module.exports = ControllerFunctionDoesNotExistsError

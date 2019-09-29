/**
 * ComponentHelperError class
 * @class
 * @extends Error
 */
class ComponentHelperError extends Error
{
  /**
   * Creates a ComponentHelperError.
   */
  constructor(...args)
  {
    super(...args)
    this.code = 'COMPONENT_HELPER_ERROR'
  }
}

module.exports = ComponentHelperError

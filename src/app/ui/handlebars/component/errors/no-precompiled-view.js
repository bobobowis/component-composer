/**
 * NoPrecompiledViewError class
 * @class
 * @extends Error
 */
class NoPrecompiledViewError extends Error
{
  /**
   * Creates a NoPrecompiledViewError.
   * @param {string} viewName - The view that caused the error
   */
  constructor(viewName)
  {
    super(`View '${viewName}' does not exists, it's not precompiled`)

    this.name   = 'NoPrecompiledViewError'
    this.code   = 'NO_PRECOMPILED_VIEW'
    this.value  = viewName
  }
}

module.exports = NoPrecompiledViewError

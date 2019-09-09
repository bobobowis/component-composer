/* eslint-disable no-undef */
define(['require', 'superhero/core/locator/error/locator-not-implemented'], function(require)
{
  const LocatorNotImplementedError = require('superhero/core/locator/error/locator-not-implemented')

  /**
   * For classes that represent a locator constituent of a composite pattern.
   *
   * @abstract
   */
  class LocatorConstituent
  {
    constructor(locator)
    {
      this.locator = locator
    }

    /**
     * A factory method for a service
     * @returns {*} An instenace of the service that is being located
     * @abstract
     */
    locate()
    {
      throw new LocatorNotImplementedError('the "locate" method was not overwritten')
    }
  }

  return LocatorConstituent
})

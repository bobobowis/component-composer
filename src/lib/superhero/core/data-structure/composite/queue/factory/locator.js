/* eslint-disable no-undef */
define([
  'superhero/core/data-structure/composite/queue/factory/index',
  'superhero/core/locator/constituent'
], function(QueueFactory, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class QueueFactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {QueueFactory}
     */
    locate()
    {
      const composer = this.locator.locate('core/schema/composer')
      return new QueueFactory({
        composer
      })
    }
  }

  return QueueFactoryLocator
})

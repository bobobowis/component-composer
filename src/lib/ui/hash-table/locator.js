
/* eslint-disable no-undef */
define(['app/ui/hash-table/factory', 'superhero/core/locator/constituent'], function(HashTableFactory, LocatorConstituent)
{
  /**
   * @extends {superhero/core/locator/constituent}
   */
  class HashTableFactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {HashTableFactory}
     */
    locate()
    {
      return new HashTableFactory()
    }
  }

  return HashTableFactoryLocator
})

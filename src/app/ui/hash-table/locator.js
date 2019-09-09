
/* eslint-disable no-undef */
define(['require', 'app/ui/hash-table/factory', 'superhero/core/locator/constituent'], function(require)
{
  const
  HashTableFactory   = require('app/ui/hash-table/factory'),
  LocatorConstituent = require('superhero/core/locator/constituent')

  /**
   * @extends {superhero/core/locator/constituent}
   */
  class HashTableFactoryLocator extends LocatorConstituent
  {
    /**
     * @returns {HashTable}
     */
    locate()
    {
      return new HashTableFactory()
    }
  }

  return HashTableFactoryLocator
})

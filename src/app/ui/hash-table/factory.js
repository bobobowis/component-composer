/* eslint-disable no-undef */
define(['require', 'app/ui/hash-table/index'], function(require)
{
  class HashTableFactory
  {
    create()
    {
      const HashTable = require('app/ui/hash-table/index')

      return new HashTable()
    }
  }

  return HashTableFactory
})

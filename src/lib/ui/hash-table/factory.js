/* eslint-disable no-undef */
define(['app/ui/hash-table/index'], function(HashTable)
{
  class HashTableFactory
  {
    create()
    {
      return new HashTable()
    }
  }

  return HashTableFactory
})

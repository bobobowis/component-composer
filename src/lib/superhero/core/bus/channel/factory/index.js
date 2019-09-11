/* eslint-disable no-undef */
define([
  'superhero/core/bus/channel/index'
], function(BusChannel)
{
  class BusChannelFactory
  {
    constructor({ 
      composer, 
      multipleAssociativeArrayFactory
    })
    {
      this.composer                        = composer
      this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory
    }

    createMultipleAssociativeArray()
    {
      return this.multipleAssociativeArrayFactory.create()
    }

    create({
      id
    })
    {
      return new BusChannel({
        id,
        observers : this.createMultipleAssociativeArray(),
        composer  : this.composer
      })
    }
  }

  return BusChannelFactory
})

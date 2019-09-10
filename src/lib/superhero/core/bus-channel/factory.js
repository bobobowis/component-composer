/* eslint-disable no-undef */
define([
  'superhero/core/bus-channel/index'
], function(BusChannel)
{
  class BusChannelFactory
  {
    constructor(composer)
    {
      this.composer                        = composer
      this.multipleAssociativeArrayFactory = multipleAssociativeArrayFactory
    }

    create({
      id
    })
    {
      const eventSubscribers = multipleAssociativeArrayFactory.create()

      return new BusChannel({
        id,
        eventSubscribers,
        composer
      })
    }
  }

  return BusChannelFactory
})

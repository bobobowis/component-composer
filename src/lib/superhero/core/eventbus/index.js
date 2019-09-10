/* eslint-disable no-undef */
define(function()
{
  class Eventbus
  {
    constructor(observers)
    {
      this.warnings   = []
      this.observers  = observers
    }

    emit(name, data)
    {
      if(!this.observers.includes(name) && !this.warnings.includes(name))
      {
        this.warnings.push(name)
        console.log(`event: "${name}" does not have a defined observer`)
      }

      this.publish({ name, data })
    }
  }

  return Eventbus
})

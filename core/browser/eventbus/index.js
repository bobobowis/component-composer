const BusChannel = require('core/common/channel')

class Eventbus extends BusChannel
{
  emit(name, data)
  {
    super.emit({ name, data })
  }

  on(event, observer)
  {
    super.on({ event, observer })
  }

  once(event, observer)
  {
    super.once({ event, observer })
  }
}

module.exports = Eventbus

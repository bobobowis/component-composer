const Action = require('.')

class ActionFactory
{
  create({
    id,
    source,
    type,
    payload
  })
  {
    return new Action(
      id,
      source,
      type,
      payload
    )
  }
}

module.exports = ActionFactory

const
UIChunk = require('.'),
uuidv4  = require('uuid/v4')

class UIChunkFactory
{

  create({
    // customId,
    // name,
    type,
    props
    // template    = type,
    // controller  = type,
    // reducer     = type
  })
  {
    // TO DO VALIDATE
    const id = uuidv4()
    // uuid      = uuidv4(),
    // selector  = customId ? `#${customId}` : `#_${uuid}`,
    // id        = customId ? customId : uuid,
    // props     = this.propsFactory.create({ id })

    return new UIChunk({
      id,
      // name,
      // selector,
      // template,
      // controller,
      // reducer,
      // uuid,
      props,
      type
    })
  }
}

module.exports = UIChunkFactory

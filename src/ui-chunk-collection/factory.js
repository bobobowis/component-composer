const
UIChunkCollection = require('.'),
uuidv4            = require('uuid/v4')

class UIChunkCollectionFactory
{
  constructor(uiChunkCollectionValidator)
  {
    this.uiChunkCollectionValidator = uiChunkCollectionValidator
  }

  create({
    customId,
    name,
    type,
    controller  = type,
    reducer     = type,
    collection
  })
  {
    // TO DO validate
    const
    uuid      = uuidv4(),
    selector  = customId ? `#${customId}` : `#_${uuid}`,
    id        = customId ? customId : uuid

    return new UIChunkCollection({
      id,
      name,
      selector,
      controller,
      reducer,
      uuid,
      collection,
      type
    })
  }
}

module.exports = UIChunkCollectionFactory

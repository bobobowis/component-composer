class PropsMapper
{
  constructor(props, mappingInfo, initialState)
  {
    this.props       = props
    this.mappingInfo = mappingInfo

    this.update(initialState)

    window.propsMapper = this
  }

  reset()
  {
    this.props.reset()
    this.mappingInfo.reset()
  }

  update(state)
  {
    this.reset()
    this.mapStateToProps(state)
  }

  getMappingInfo(id)
  {
    return this.mappingInfo.get(id)
  }

  getProps(id)
  {
    return this.props.get(id)
  }

  mapStateToProps(state)
  {
    for(let key in state)
    {
      if(state[key].isChunk)
        this.mapProps(state[key], key)
    }
  }

  getPath(key, path)
  {
    if(!path)
      return `${key}.props`
    else
      return `${path}.${key}.props`
  }

  getPathArray(path, parentKey, index)
  {
    return `${path}.${parentKey}[${index}].props`
  }

  hasProps(element, key)
  {
    if(typeof element[key] === 'object' && element[key])
      return element[key].hasOwnProperty('props')

    return false
  }

  mapPropsArrayElement(element, index, property, parentKey)
  {
    const props = {}

    for(let key in element.props)
    {
      if(element.props[key].isChunk)
      {
        this.mapProps(element.props[key], key, this.getPathArray(property, parentKey, index))
        props[key] = {
          id      : element.props[key].id,
          props   : this.getProps(element.props[key].id),
          type    : element.props[key].type,
          isChunk : true
        }
      }
      else if(Array.isArray(element.props[key]) && this.isArrayOfChunks(element.props[key]))
      {
        this.findPropsInArray(element.props[key], key, this.getPathArray(property, parentKey, index))
        props[key] = element.props[key].map((chunk) =>
        {
          return {
            id      : chunk.id,
            props   : this.getProps(chunk.id),
            type    : chunk.type,
            isChunk : true
          }
        })
      }
      else
      {
        props[key] = element.props[key]
      }
    }

    this.addProp(element.id, props)
    this.addMappingInfo(element.id, this.getPathArray(property, parentKey, index))
  }

  findPropsInArray(array, key, property)
  {
    array.forEach((element, index) =>
    {
      this.mapPropsArrayElement(element, index, property, key)
    })
  }

  isArrayOfChunks(array)
  {
    const element = array[0]
    if(element && typeof element === 'object' && element.isChunk)
      return true
    else
      return false
  }

  mapProps(element, property, path)
  {
    const
    id    = element.id,
    keys  = Object.keys(element.props),
    props = {}

    for(let key of keys)
    {
      if(element.props[key].isChunk)
      {
        this.mapProps(element.props[key], key, this.getPath(property, path))
        props[key] = {
          id      : element.props[key].id,
          props   : this.getProps(element.props[key].id),
          type    : element.props[key].type,
          isChunk : true
        }
      }
      else if(Array.isArray(element.props[key]) && this.isArrayOfChunks(element.props[key]))
      {
        this.findPropsInArray(element.props[key], key, this.getPath(property, path))
        props[key] = element.props[key].map((chunk) =>
        {
          return {
            id      : chunk.id,
            props   : this.getProps(chunk.id),
            type    : chunk.type,
            isChunk : true
          }
        })
      }
      else
      {
        props[key] = element.props[key]
      }
    }

    this.addProp(id, props)
    this.addMappingInfo(id, this.getPath(property, path))
  }

  addMappingInfo(id, path)
  {
    this.mappingInfo.add(id, path)
  }

  addProp(id, props)
  {
    this.props.add(id, props)
  }
}

module.exports = PropsMapper

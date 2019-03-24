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
      if(this.hasProps(state, key))
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

  getPathArray(path, parentKey, key, index)
  {
    return `${path}.${parentKey}[${index}].props`
  }

  hasProps(element, key)
  {
    if(typeof element[key] === 'object' && element[key])
      return element[key].hasOwnProperty('props')

    return false
  }

  mapPropsArrayElement(element, index, property, key)
  {
    const props = {}

    for(let elementKey in element.props)
    {
      if(this.hasProps(element.props, elementKey))
        this.mapProps(element.props[elementKey], elementKey, this.getPathArray(property, key, elementKey, index))
      else
        props[elementKey] = element.props[elementKey]
    }

    this.addProp(element.id, props)
  }

  findPropsInArray(array, key, property)
  {
    array.forEach((element, index) =>
    {
      this.mapPropsArrayElement(element, index, property, key)
    })
  }

  arrayHasProps(array)
  {
    const element = array[0]
    if(element && typeof element === 'object' && element.hasOwnProperty('props'))
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
      if(this.hasProps(element.props, key))
      {
        this.mapProps(element.props[key], key, this.getPath(property, path))
        props[key] = {
          id    : element.props[key].id,
          props : this.getProps(element.props[key].id),
          type  : element.props[key].type
        }
      }
      else if(Array.isArray(element.props[key]) && this.arrayHasProps(element.props[key]))
      {
        this.findPropsInArray(element.props[key], key, this.getPath(property, path))
        props[key] = element.props[key].map((chunk) =>
        {
          return {
            id    : chunk.id,
            props : this.getProps(chunk.id),
            type  : chunk.type
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

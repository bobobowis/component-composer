class DTOMapper
{
  constructor({
    composer,
    dtos,
    mappingInfo
  })
  {
    this.composer    = composer
    this.dtos        = dtos
    this.mappingInfo = mappingInfo
  }

  reset()
  {
    this.dtos.reset()
    this.mappingInfo.reset()
  }

  update(state)
  {
    this.reset()
    this.mapStateToDTOs(state)
  }

  getMappingInfo(id)
  {
    return this.mappingInfo.get(id)
  }

  getDTO(id)
  {
    return this.dtos.get(id)
  }

  addMappingInfo(id, path)
  {
    this.mappingInfo.add(id, path)
  }

  addDTO(id, dto)
  {
    this.dtos.add(id, dto)
  }

  isChunk(obj)
  {
    return obj.hasOwnProperty('dto') &&
           obj.hasOwnProperty('id') &&
           obj.hasOwnProperty('schema') &&
           obj.hasOwnProperty('template')
  }

  mapStateToDTOs(state)
  {
    for(let key in state)
    {
      if(state[key] && this.isChunk(state[key]))
        this.mapDTO(state[key], key)
    }
  }

  getPath(key, path)
  {
    if(!path)
      return `${key}.dto`
    else
      return `${path}.${key}.dto`
  }

  getPathArray(path, parentKey, index)
  {
    return `${path}.${parentKey}[${index}].dto`
  }

  hasDTO(element, key)
  {
    if(typeof element[key] === 'object' && element[key])
      return element[key].hasOwnProperty('dto')

    return false
  }

  mapDTOsArrayElement(element, index, property, parentKey)
  {
    const dto = {}

    for(let key in element.dto)
    {
      if(element.dto[key] && this.isChunk(element.dto[key]))
      {
        this.mapDTO(element.dto[key], key, this.getPathArray(property, parentKey, index))
        dto[key] = {
          id     : element.dto[key].id,
          dto    : this.getDTO(element.dto[key].id),
          schema : element.dto[key].type
        }
      }
      else if(Array.isArray(element.dto[key]) && this.isArrayOfChunks(element.dto[key]))
      {
        this.findDTOsInArray(element.dto[key], key, this.getPathArray(property, parentKey, index))
        dto[key] = element.dto[key].map((chunk) =>
        {
          return {
            id     : chunk.id,
            dto    : this.getDTO(chunk.id),
            schema : chunk.schema
          }
        })
      }
      else
      {
        dto[key] = element.dto[key]
      }
    }

    this.addDTO(element.id, dto)
    this.addMappingInfo(element.id, this.getPathArray(property, parentKey, index))
  }

  findDTOsInArray(array, key, property)
  {
    array.forEach((element, index) =>
    {
      this.mapDTOsArrayElement(element, index, property, key)
    })
  }

  isArrayOfChunks(array)
  {
    const element = array[0]
    if(element && typeof element === 'object' && this.isChunk(element))
      return true
    else
      return false
  }

  mapDTO(element, property, path)
  {
    const
    id    = element.id,
    keys  = Object.keys(element.dto),
    dto   = {}

    for(let key of keys)
    {
      if(element.dto[key] && element.dto[key].isChunk)
      {
        this.mapDTO(element.dto[key], key, this.getPath(property, path))

        dto[key] = {
          id      : element.dto[key].id,
          dto     : this.getDTO(element.dto[key].id),
          schema  : element.dto[key].schema,
          isChunk : true
        }
      }
      else if(Array.isArray(element.dto[key]) && this.isArrayOfChunks(element.dto[key]))
      {
        this.findDTOsInArray(element.dto[key], key, this.getPath(property, path))
        dto[key] = element.dto[key].map((chunk) =>
        {
          return {
            id      : chunk.id,
            dto     : this.getDTO(chunk.id),
            type    : chunk.schema,
            isChunk : true
          }
        })
      }
      else
      {
        dto[key] = element.dto[key]
      }
    }

    this.addDTO(id, dto)
    this.addMappingInfo(id, this.getPath(property, path))
  }
}

module.exports = DTOMapper

const NotAnObjectError = require('./error/not-an-object')

class DeepAssign
{
  constructor(deepclone)
  {
    this.deepclone            = deepclone
    this.arrayPropertyRegexp  = /(\w+)\[([0-9]+)\]/i
  }

  getPath(keys, index)
  {
    let path = ''

    for(let i = 0; i < index; i++)
      path += `${keys[i]}.`

    return `${path}${keys[index]}`
  }

  isAssignableObject(obj)
  {
    return obj && typeof obj === 'object'
  }

  isArrayProperty(key)
  {
    const match = this.arrayPropertyRegexp.exec(key)
    return !!match
  }

  getArrayPropertyIndex(key)
  {
    const match = this.arrayPropertyRegexp.exec(key)

    return {
      name     : match[1],
      position : Number(match[2])
    }
  }

  isLastKey(keys, index)
  {
    return index === keys.length - 1
  }

  objectProperty(obj, value, key, index, keys)
  {
    // if(!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index))
    //   throw new NotAnObjectError(`Expected and object for assigning properties: ${this.getPath(keys, index)}`)
    if(!this.isAssignableObject(obj[key]) && !this.isLastKey(keys, index))
    {
      obj[key] = { }
      obj      = obj[key]
    }
    else if(this.isLastKey(keys, index))
    {
      obj[key] = value
    }
    else
    {
      obj = obj[key]
    }

    return obj
  }

  arrayProperty(obj, value, key, index, keys)
  {
    const { name, position } = this.getArrayPropertyIndex(key)

    if(!this.isAssignableObject(obj[name][position]) && !this.isLastKey(keys, index))
      throw new NotAnObjectError(`Expected and object for assigning properties: ${this.getPath(keys, index)}`)
    else if(this.isLastKey(keys, index))
      obj[name][position] = value
    else
      obj = obj[name][position]

    return obj
  }

  assignPath(obj, keys, value)
  {
    let pointer = obj

    keys.forEach((key, index) =>
    {
      if(this.isArrayProperty(key))
        pointer = this.arrayProperty(pointer, value, key, index, keys)
      else
        pointer = this.objectProperty(pointer, value, key, index, keys)
    })

    return obj
  }

  assign(obj, path, value)
  {
    const
    keys  = path.split(/\.|\//),
    copy  = this.deepclone.clone(obj)

    return this.assignPath(copy, keys, value)
  }
}

module.exports = DeepAssign

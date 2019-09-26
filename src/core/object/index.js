class CoreObject
{
  constructor(coreString)
  {
    this.coreString = coreString
  }

  trimKeys(o)
  {
    return this.transformKeys(o, this.coreString.trim)
  }

  hyphenateKeys(o, separator)
  {
    return this.transformKeys(o, this.coreString.hyphenate, separator)
  }

  /**
   * @example { FooBar:'FooBar' } => { foobar:'FooBar' }
   * @param {object} o input to be manipulated
   * @returns {object}
   */
  lowercaseKeys(o)
  {
    return this.transformKeys(o, this.coreString.lowercase)
  }

  /**
   * @example { FooBar:'FooBar' } => { FOOBAR:'FooBar' }
   * @param {object} o input to be manipulated
   * @returns {object}
   */
  upppercaseKeys(o)
  {
    return this.transformKeys(o, this.coreString.uppercase)
  }

  /**
   * @example { FooBar:'FooBar' } => { FOOBAR:'FooBar' }
   * @param {object} o input to be manipulated
   * @returns {object}
   */
  camelcaseKeys(o)
  {
    return this.transformKeys(o, this.coreString.camelCase)
  }

  transformKeys(o, transformFunction, ...transformArgs)
  {
    const
    object   = o || {},
    keys     = Object.keys(object),
    composed = keys.reduce((c, k) =>
    {
      c[transformFunction(k, ...transformArgs)] = object[k]
      return c
    }, {})

    return composed
  }

  /**
   * Creates a copy of an object excluding some keys.
   * References are kept, so modifing Objects or arrays on the resulting object will modify the source one
   * To avoid this behaivour clone the input before using or clone the output after
   * @param {object} o source object to create a copy
   * @param {...string} keys Keys to remove
   * @returns Copy of object without the specified keys
   * @author Lleonard Subirana (arsu.leo@gmail.com)
   */
  removeKeys(o, ...keys)
  {
    const
    object = o || {},
    result = { ...object }

    for(const key of keys)
      delete result[key]

    return result
  }

  removeKeysWithSpecificValues(o, values = [])
  {
    const
    object = o || {},
    result = { ...object },
    keys   = Object.keys(result)

    for(const key of keys)
    {
      if(values.includes(result[key]))
        delete result[key]
    }

    return result
  }
}

module.exports = CoreObject

/* eslint-disable no-undef */
define(['superhero/core/data-structure/composite/associative-array/index'], function(AssociativeArray)
{
  class MultipleAssociativeArray extends AssociativeArray
  {
    add({
      id,
      element
    })
    {
      if(super.get(id))
      {
        const elements = super.get(id)
        elements.push(element)

        super.add({
          id,
          element : elements
        })
      }
      else
      {
        super.add({
          id,
          element : [element]
        })
      }
    }

    hasElements(id)
    {
      return Array.isArray(super.get(id)) && super.get(id).length !== 0
    }

    getElementIndex({
      id,
      element
    })
    {
      const hasElements = this.hasElements(id)

      if(hasElements)
        return super.get(id).indexOf(element)

      return -1
    }

    removeElement({
      id,
      element
    })
    {
      const index = this.getElementIndex({
        id,
        element
      })

      if(index > -1)
      {
        const elements = super.get(id)

        elements.splice(index, 1)

        super.add({
          id,
          element : elements
        })
      }
    }

    get [Symbol.toStringTag]()
    {
      return 'MultipleAssociativeArray'
    }
  }

  return MultipleAssociativeArray
})

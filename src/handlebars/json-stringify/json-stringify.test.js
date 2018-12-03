describe('Handlebars JSON stringify helper tests', () =>
{
  const assert  = require('chai').assert

  it('should return a string with the given JSON object', () =>
  {
    const
    handlebarsJSONhelper = require('.'),
    str                  = handlebarsJSONhelper({ hello: 'world' })

    assert(

      typeof str === 'string' &&
      str === '{"hello":"world"}'

    )
  })
})

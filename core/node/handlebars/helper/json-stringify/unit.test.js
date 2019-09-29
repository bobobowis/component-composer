describe('view/template/helper/json-stringify', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory(),
  jsonStringify = helperFactory.create()

  it('should return a stringified json object', () => expect(jsonStringify({ foo: 'bar' })).to.be.equal('{"foo":"bar"}'))
})

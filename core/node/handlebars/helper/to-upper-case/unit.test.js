describe('view/template/helper/to-upper-case', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory(),
  toUpperCase   = helperFactory.create()

  it('should return an uppercase string', () => expect(toUpperCase('Foobar')).to.be.equal('FOOBAR'))
})

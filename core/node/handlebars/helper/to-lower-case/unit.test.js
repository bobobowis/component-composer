describe('view/template/helper/to-lower-case', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory(),
  toLowerCase   = helperFactory.create()

  it('should return an uppercase string', () => expect(toLowerCase('FooBar')).to.be.equal('foobar'))
})

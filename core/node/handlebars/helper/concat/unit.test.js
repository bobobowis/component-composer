describe('view/template/helper/concat', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory(),
  concat        = helperFactory.create()

  it('should return a concatted string', () => expect(concat('foo', 'bar', 'baz')).to.be.equal('foobarbaz'))

  it('should ignore objects or undefined arguments when concatting', () => expect(concat('foo', undefined, {}, 'bar')).to.be.equal('foobar'))
})

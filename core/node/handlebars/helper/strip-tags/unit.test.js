describe('view/template/helper/strip-tags', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory(),
  stripTags     = helperFactory.create()

  it('should return a string stripped of html tags', () => expect(stripTags('<p>foobar</p>')).to.be.equal('foobar'))

  it('should return a number if a number was given', () => expect(stripTags(5)).to.be.equal(5))
})

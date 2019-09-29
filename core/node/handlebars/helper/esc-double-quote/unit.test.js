describe('view/template/helper/esc-double-quote', () =>
{
  const
  expect          = require('chai').expect,
  HelperFactory   = require('.'),
  helperFactory   = new HelperFactory(),
  escDoubleQuote  = helperFactory.create()

  it('should return a string with escaped double quotes', () =>
  {
    expect(escDoubleQuote('foo "bar"')).to.be.equal('foo \\"bar\\"')
  })
})

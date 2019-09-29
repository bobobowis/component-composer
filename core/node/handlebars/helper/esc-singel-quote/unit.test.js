describe('view/template/helper/esc-singel-quote', () =>
{
  const
  expect          = require('chai').expect,
  HelperFactory   = require('.'),
  helperFactory   = new HelperFactory(),
  escSingelQuote  = helperFactory.create()

  it('should return a string with escaped singel quotes', () => expect(escSingelQuote("foo 'bar'")).to.be.equal("foo \\'bar\\'"))
})

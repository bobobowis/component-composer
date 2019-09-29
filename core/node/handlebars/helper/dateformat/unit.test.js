describe('view/template/helper/dateformat', () =>
{
  const
  expect                = require('chai').expect,
  HelperFactoryLocator  = require('./locator'),
  helperFactoryLocator  = new HelperFactoryLocator(),
  helperFactory         = helperFactoryLocator.locate(),
  dateformat            = helperFactory.create()

  it('should return a formated date string', () => expect(dateformat(new Date(1524493378898), 'yyyy')).to.be.equal('2018'))
})

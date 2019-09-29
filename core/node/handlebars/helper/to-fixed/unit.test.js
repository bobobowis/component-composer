describe('view/template/helper/to-fixed', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  helperFactory = new HelperFactory(),
  toFixed       = helperFactory.create()

  it('should return a padded number', () => expect(toFixed(5, 2)).to.be.equal('5.00'))

  it('should be able to handle "null"', () => expect(toFixed(null, 2)).to.be.equal('0.00'))

  it('should return NaN if "undefined" is spcified', () => expect(toFixed(undefined, 2)).to.be.equal('NaN'))

  it('should be able to handle negative numbers', () => expect(toFixed(-5, 2)).to.be.equal('-5.00'))

  it('should be able to handle strings', () => expect(toFixed('5', 2)).to.be.equal('5.00'))

  it('should be able to handle strings that is not formatted as a number', () => expect(toFixed('foobar', 2)).to.be.equal('NaN'))
})

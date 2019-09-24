const
UIController         = require('../../ui-controller'),
UnorderedListFactory = require('./unordered-list-factory')

class ControllersFactory
{
  createUnorderedListController(selector)
  {
    const unorderedListFactory = new UnorderedListFactory()

    return new UIController(selector, 'unordered-list', unorderedListFactory)
  }
}

module.exports = ControllersFactory

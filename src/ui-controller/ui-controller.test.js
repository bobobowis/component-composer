describe('UIController tests', () =>
{
  const
  expect                = require('chai').expect,
  UIController          = require('.'),
  UnorderedListFactory  = require('./test/unordered-list-factory')

  before(() =>
  {
    // We activate DOM
    this.jsdom = require('jsdom-global')()

    // Precompile unordered-list template
    const
    Handlebars          = require('handlebars'),
    precompiledTemplate = Handlebars.compile('<ul>{{#each items}}<li>{{this}}</li>{{/each}}</ul>')


    // Add handlebars runtime and precompiled template to component-composer.views
    window.Handlebars = require('handlebars/runtime')
    window['component-composer'] =
    {
      'views' :
      {
        'unordered-list' : precompiledTemplate
      }
    }

    // Compile the template using the component helper
    const
    componentHelper   = require('../handlebars/component'),
    compiledComponent = componentHelper('unordered-list', { items: [1, 2, 3] }, 'myList')

    // Create a div with the compiled component view and append it to body
    const div = document.createElement('div')
    div.innerHTML = compiledComponent

    document.body.appendChild(div)
  })

  after(() =>
  {
    this.jsdom()
  })

  describe('UIController class tests', () =>
  {
    it('should return UIController', () =>
    {
      const
      unorderedListFactory = new UnorderedListFactory(),
      controller           = new UIController('#myList', 'unordered-list', unorderedListFactory)

      expect(controller).to.be.instanceOf(UIController)
      expect(document.getElementById('myList').innerHTML).equal('<ul><li>1</li><li>2</li><li>3</li></ul>')
    })

    it('should change the vm', () =>
    {
      const
      unorderedListFactory = new UnorderedListFactory(),
      controller = new UIController('#myList', 'unordered-list', unorderedListFactory)

      controller.setViewModel([3, 4, 5])

      expect(controller.vm).to.deep.equal({ 'items': [3, 4, 5] })
    })

    it('should get a copy of the vm', () =>
    {
      const
      unorderedListFactory = new UnorderedListFactory(),
      controller = new UIController('#myList', 'unordered-list', unorderedListFactory),
      vm = controller.getViewModel()

      expect(controller.vm).to.deep.equal(vm)
    })

    it('should render the template', () =>
    {
      const
      unorderedListFactory = new UnorderedListFactory(),
      controller = new UIController('#myList', 'unordered-list', unorderedListFactory)

      controller.setViewModel([3, 4, 5])
      controller.render()

      const view = document.getElementById('myList').innerHTML

      expect(view).equal('<ul><li>3</li><li>4</li><li>5</li></ul>')
    })

    it('should change, render the template and apply bindings', () =>
    {
      const
      unorderedListFactory = new UnorderedListFactory(),
      controller = new UIController('#myList', 'unordered-list', unorderedListFactory)

      controller.apply([3, 4, 5])

      const view = document.getElementById('myList').innerHTML

      expect(view).equal('<ul><li>3</li><li>4</li><li>5</li></ul>')
    })

    it('should get the ul node', () =>
    {
      const
      unorderedListFactory = new UnorderedListFactory(),
      controller = new UIController('#myList', 'unordered-list', unorderedListFactory),
      ulNode     = controller.getComponentNode('ul')

      expect(ulNode.nodeName).equal('UL')
    })

    it('should get the li nodes', () =>
    {
      const
      unorderedListFactory = new UnorderedListFactory(),
      controller = new UIController('#myList', 'unordered-list', unorderedListFactory)

      controller.setViewModel([3, 4, 5])
      controller.render()

      const liNodes = controller.getComponentNodes('li')

      expect(liNodes.length).equal(3)
    })
  })


  describe('UIController injector tests', () =>
  {
    const
    UIControllerInjector = require('./injector'),
    ControllersFactory   = require('./test/controllers-factory')

    it('should return UIControllerInjector', () =>
    {
      const
      controllersFactory   = new ControllersFactory(),
      injector = new UIControllerInjector(controllersFactory)

      expect(injector).to.be.instanceOf(UIControllerInjector)
    })

    it('should inject UnorderedListController', () =>
    {
      const
      controllersFactory  = new ControllersFactory(),
      injector            = new UIControllerInjector(controllersFactory)

      injector.inject()

      expect(window.controllers['myList']).to.be.instanceOf(UIController)
    })

    it('should throw CONTROLLER_FUNCTION_NOT_EXIST error ', () =>
    {
      const
      controllersFactory  = new ControllersFactory(),
      injector            = new UIControllerInjector(controllersFactory),
      div                 = document.createElement('div')

      // We add a component div with id that has no controller function
      div.id = 'inject-error'
      div.classList.add('component-wrapper')
      div.setAttribute('data-component', 'component-inexistent')

      document.body.append(div)

      expect(() =>
      {
        injector.inject()
      }).to.throw(/Controller 'component-inexistent' does not have a function/)
    })
  })
})

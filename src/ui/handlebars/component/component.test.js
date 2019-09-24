// describe('Handlebars Component client helper tests', () =>
// {
//   const
//   assert  = require('chai').assert,
//   expect  = require('chai').expect

//   it('should return a safeString with an H1 title containing Hello world!', () =>
//   {
//     const
//     Handlebars          = require('handlebars'),
//     precompiledTemplate = Handlebars.compile('<h1>Hello {{name}}!</h1>')

//     global.Handlebars = require('handlebars/runtime')
//     global.window =
//     {
//       'component-composer' :
//       {
//         'views' : {}
//       }
//     }

//     global.window['component-composer'].views['hello-name'] = precompiledTemplate

//     const
//     helper      = require('.'),
//     safeString  = helper('hello-name', { name: 'world' })

//     assert(

//       safeString instanceof global.Handlebars.SafeString === true &&
//       safeString.string === '<div data-component="hello-name" class="component-wrapper"><h1>Hello world!</h1></div>'

//     )
//   })


//   it('should return a safeString with an H1 title containing Hello world! and the id "helloNameComponent"', () =>
//   {
//     const
//     Handlebars          = require('handlebars'),
//     precompiledTemplate = Handlebars.compile('<h1>Hello {{name}}!</h1>')

//     global.Handlebars = require('handlebars/runtime')
//     global.window =
//     {
//       'component-composer' :
//       {
//         'views' : {}
//       }
//     }

//     global.window['component-composer'].views['hello-name'] = precompiledTemplate

//     const
//     helper      = require('.'),
//     safeString  = helper('hello-name', { name: 'world' }, 'helloNameComponent')

//     assert(

//       safeString instanceof global.Handlebars.SafeString === true &&
//       safeString.string === '<div id="helloNameComponent" data-component="hello-name" class="component-wrapper"><h1>Hello world!</h1></div>'

//     )
//   })


//   it('should throws NoPrecompiledViewError when component view file does not exists', () =>
//   {
//     expect(() =>
//     {
//       const helper = require('.')

//       helper('this-component-does-not-exists', {  })
//     }).to.throw(/View 'this-component-does-not-exists' does not exists, it's not precompiled/)
//   })
// })

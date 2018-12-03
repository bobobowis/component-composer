const
Handlebars  = require('handlebars/runtime'),
NoPrecompiledViewError = require('./errors/no-precompiled-view')
// inject this in the future class

/**
 * Handlebar helper for injecting a pre-compiled component view
 * @param {string} component - Component name
 * @param {Object} vm - Data/context of the view
 * @param {string} [id] - Id of the component
 * @return {string} A handlebars safe HTML string
 */
function handlebarsComponent(component, vm, id = '')
{
  const handlebarsView = window['component-composer'].views[component]

  if(handlebarsView !== null && handlebarsView !== undefined)
  {
    let compiledView

    if(typeof id === 'string' && id.trim() !== '')
      compiledView = `<div id="${id}" data-component="${component}" class="component-wrapper">${handlebarsView(vm)}</div>`
    else
      compiledView = `<div data-component="${component}" class="component-wrapper">${handlebarsView(vm)}</div>`

    return new Handlebars.SafeString(compiledView)
  }
  else
  {
    throw new NoPrecompiledViewError(component)
  }
}

module.exports =  handlebarsComponent

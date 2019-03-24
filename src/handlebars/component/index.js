const
Handlebars  = require('handlebars/runtime'),
NoPrecompiledViewError = require('./errors/no-precompiled-view')

/**
 * Handlebar helper for injecting a pre-compiled component view
 * @param {string} component - Component name
 * @param {Object} vm - Data/context of the view
 * @param {string} id - Id of the component
 * @return {string} A handlebars safe HTML string
 */
function handlebarsComponent(component, chunk)
{
  const handlebarsView = window['component-composer'].views[chunk.type]

  if(handlebarsView !== null && handlebarsView !== undefined)
  {
    const compiledView = `<div
      id="${chunk.id}"
      data-component="${chunk.type}"
      class="component-wrapper">
      ${handlebarsView(chunk.props)}
    </div>`

    return new Handlebars.SafeString(compiledView)
  }
  else
  {
    throw new NoPrecompiledViewError(chunk.type)
  }
}


module.exports =  handlebarsComponent

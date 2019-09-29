const ComponentHelperError = require('./error/component-helper-error')


class HandlebarsHelperComponent
{
  constructor({
    fs,
    hbs,
    path
  })
  {
    this.fs   = fs
    this.hbs  = hbs
    this.path = path
  }

  readFile(path)
  {
    try
    {
      const fileContent = this.fs.readFileSync(path, 'utf-8')
      return fileContent
    }
    catch(error)
    {
      throw new ComponentHelperError(`Error reading component file: ${error.message}`)
    }
  }

  getComponentPath(component)
  {
    return `${this.path.main.baseDir}/view/component/${component}/${component}.hbs`
  }

  getTemplate(component)
  {
    const
    file      = this.getComponentPath(component),
    template  = this.readFile(file)

    return template
  }

  getSafeString(html)
  {
    return new this.hbs.SafeString(html)
  }

  getPrecompiledView({
    id,
    wrapper,
    component
  })
  {
    const
    template        = this.getTemplate(component),
    html            = `<${wrapper} id="${id}" data-component="${component}"> ${template}</${wrapper}>`,
    precompiledView = this.hbs.compile(html)

    return precompiledView
  }

  getComponentHTML({
    id,
    wrapper,
    component,
    dto
  })
  {
    const
    precompiledView = this.getPrecompiledView({
      id,
      wrapper,
      component
    }),
    view            = precompiledView(dto),
    safeStringView  = this.getSafeString(view)

    return safeStringView
  }

  create()
  {
    return (chunk, description) =>
    {
      try
      {
        return this.getComponentHTML(chunk)
      }
      catch(error)
      {
        console.log(error)
      }
    }
  }
}

module.exports = HandlebarsHelperComponent

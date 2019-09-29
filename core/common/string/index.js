class CoreString
{
  trim(s)
  {
    return s.replace(/\s/g, '')
  }

  ellipsis(
    s,
    maxLength,
    ellipsis = '...'
  )
  {
    let ellipsed = s
    if(s && s.length > maxLength)
      ellipsed = `${s.substr(0, maxLength)}${ellipsis}`

    return ellipsed
  }

  shorten(
    s,
    maxLength,
    fill = '...'
  )
  {
    let shortened = s
    if(s && s.length > maxLength)
    {
      const segment = Math.floor(maxLength / 2)

      shortened = [
        s.substr(0, segment).trim(),
        s.substr(-segment).trim()
      ].join(fill)
    }

    return shortened
  }

  /**
   * @example "foobar" => "Foobar"
   * @param {string} s input to be manipulated
   * @returns {string}
   */
  capitalize(s)
  {
    return s[0].toUpperCase() + s.slice(1)
  }

  /**
   * @example "Foo BAR baz" => "foo-bar-baz"
   * @param {string} s input to be manipulated
   * @param {string} [separator='-'] string to be used as the separator
   * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
   */
  hyphenate(
    s,
    separator = '-'
  )
  {
    return s.replace(/\W+/g, separator).toLowerCase()
  }

  /**
   * @example "Foo BAR baz" => "fooBarBaz"
   * @param {string} s input to be manipulated
   * @returns {string} A string that has replaced the spaces with dashes and lowercased the string
   */
  camelCase(s)
  {
    s = this.lowercase(s)
    s = s.split('-').map((substring, i) =>
    {
      return i === 0 ? substring : this.capitalize(substring)
    }).join('')

    return s
  }

  lowercase(s)
  {
    return s.toLowerCase()
  }

  uppercase(s)
  {
    return s.toLowerCase()
  }
}

module.exports = CoreString

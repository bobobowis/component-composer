class CoreString
{
  trim(s)
  {
    return s.trim()
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

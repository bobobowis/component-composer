class CoreHandlebarsHelperEscDoubleQuote
{
  create()
  {
    return (s) => ('' + s).replace(/(["])/g, '\\$1')
  }
}

module.exports = CoreHandlebarsHelperEscDoubleQuote

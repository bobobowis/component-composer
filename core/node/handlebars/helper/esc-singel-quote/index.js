class CoreHandlebarsHelperEscSingelQuote
{
  create()
  {
    return (s) => ('' + s).replace(/(['])/g, '\\$1')
  }
}

module.exports = CoreHandlebarsHelperEscSingelQuote

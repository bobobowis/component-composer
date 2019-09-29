class CoreHandlebarsHelperToFixed
{
  create()
  {
    return (n, x) => (+n).toFixed(x)
  }
}

module.exports = CoreHandlebarsHelperToFixed

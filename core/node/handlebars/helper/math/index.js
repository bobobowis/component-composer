class CoreHandlebarsHelperMath
{
  create()
  {
    return (a, operator, b) =>
    {
      switch(operator)
      {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return a / b
      }
    }
  }
}

module.exports = CoreHandlebarsHelperMath

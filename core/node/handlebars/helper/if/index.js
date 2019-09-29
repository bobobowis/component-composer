/* eslint-disable valid-typeof */
class CoreHandlebarsHelperIf
{
  create()
  {
    return function(a, operator, b, options)
    {
      options = options || operator

      switch(operator)
      {
      case '==' : case 'eq' : return (a === b)        ? options.fn(this) : options.inverse(this)
      case '<'  : case 'lt' : return (a <  b)         ? options.fn(this) : options.inverse(this)
      case '<=' : case 'lte': return (a <= b)         ? options.fn(this) : options.inverse(this)
      case '>'  : case 'gt' : return (a >  b)         ? options.fn(this) : options.inverse(this)
      case '>=' : case 'gte': return (a >= b)         ? options.fn(this) : options.inverse(this)
      case '&&' : case 'and': return (a && b)         ? options.fn(this) : options.inverse(this)
      case '||' : case 'or' : return (a || b)         ? options.fn(this) : options.inverse(this)
      case 'typeof'         : return (typeof a === b) ? options.fn(this) : options.inverse(this)
      case 'has'            : return (a.includes(b))  ? options.fn(this) : options.inverse(this)
      case 'in'             : return (a in b)         ? options.fn(this) : options.inverse(this)
      default               : return (a)              ? options.fn(this) : options.inverse(this)
      }
    }
  }
}

module.exports = CoreHandlebarsHelperIf

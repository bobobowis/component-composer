class NotImplemented extends Error
{
  constructor(...args)
  {
    super(...args)

    this.code = 'E_NOT_IMPLEMENTED_METHOD'
  }
}

module.exports = NotImplemented

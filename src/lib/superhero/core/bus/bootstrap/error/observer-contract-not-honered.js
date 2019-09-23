class ObserverContractNotHoneredError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_BUS_OBSERVER_CONTRACT_NOT_HONERED'
  }
}

module.exports = ObserverContractNotHoneredError

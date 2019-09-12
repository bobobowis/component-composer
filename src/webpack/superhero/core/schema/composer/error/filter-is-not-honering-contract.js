/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class FilterIsNotHoneringContractError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_FILTER_IS_NOT_HONERING_CONTRACT'
    }
  }

  return FilterIsNotHoneringContractError
})

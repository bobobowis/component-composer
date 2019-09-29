module.exports = function()
{
  return !(!document.attachEvent || typeof document.attachEvent === 'undefined')
}

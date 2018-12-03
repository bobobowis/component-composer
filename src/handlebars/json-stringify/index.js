/**
 * Returns a JSON Object in a string
 * @param {Object} obj
 * @returns {string} The JSON object stringified
 */
function handlebarsHelper(obj)
{
  return JSON.stringify(obj)
}

module.exports = handlebarsHelper

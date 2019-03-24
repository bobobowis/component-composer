const moment = require('moment')

/**
 * Returns a Date in the specified format
 * @param {string} date - UTC date string
 * @param {string} format - Date format
 * @returns {string} The date formatted
 */
function handlebarsHelper(date, format)
{
  return moment(date).format(format)
}

module.exports = handlebarsHelper

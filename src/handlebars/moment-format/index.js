/**
 * Returns a Date in the specified format
 * @param {string} date - UTC date string
 * @param {string} format - Date format
 * @returns {string} The date formatted
 */
function handlebarsHelper(date, format)
{
  return window.localeService.formatDate(date, 'YYYY-MM-DD', true, format)
}

module.exports = handlebarsHelper

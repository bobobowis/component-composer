module.exports =
{
  'bootstrap' :
  {
    'process' : 'process/bootstrap'
  },
  'locator' :
  {
    'core/node/process'           : __dirname,
    'core/node/process/bootstrap' : `${__dirname}/bootstrap`
  }
}

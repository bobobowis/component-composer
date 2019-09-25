const
frontenderFactory = require('./factory'),
components        = [
  {
    name : 'core/bootstrap'
  },
  {
    name : 'core/schema'
  },
  {
    name : 'core/data-structure'
  }
  // {
  //   name : 'core/channel'
  // },
  // {
  //   name : 'core/bus'
  // }
]

frontenderFactory.create(components)

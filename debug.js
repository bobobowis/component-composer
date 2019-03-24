const
UIControllerInjector = require('./src/ui-controller/injector'),
UIController         = require('./src/ui-controller'),
Handlebars           = require('./src/handlebars/runtime'),
EventEmmiter         = require('./src/event-emitter')

module.exports =
{
  UIControllerInjector : UIControllerInjector,
  UIController         : UIController,
  Handlebars           : Handlebars,
  EventEmmiter         : EventEmmiter
}

const
UIControllerInjector = require('./src/ui/ui-controller/injector'),
UIController         = require('./src/ui/ui-controller'),
Handlebars           = require('./src/ui/handlebars/runtime'),
EventEmmiter         = require('./src/event-emitter')

module.exports =
{
  UIControllerInjector : UIControllerInjector,
  UIController         : UIController,
  Handlebars           : Handlebars,
  EventEmmiter         : EventEmmiter
}

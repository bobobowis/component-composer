const
UIControllerInjector = require('./dist/ui-controller/injector'),
UIController         = require('./dist/ui-controller'),
Handlebars           = require('./dist/handlebars/runtime'),
EventEmmiter         = require('./dist/event-emitter')

module.exports =
{
  UIControllerInjector : UIControllerInjector,
  UIController         : UIController,
  Handlebars           : Handlebars,
  EventEmmiter         : EventEmmiter
}

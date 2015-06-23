import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from 'bootenv-webapp/config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;
Ember.deprecate = Ember.K;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

var reportError = function(error) {
  console.log(error);
};

Ember.onerror = reportError;
Ember.RSVP.configure('onerror', reportError);
App.ApplicationRoute = Ember.Route.extend({ actions: { error: reportError } });
window.onerror = reportError;

loadInitializers(App, config.modulePrefix);

export default App;

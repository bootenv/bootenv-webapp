import Ember from 'ember';
import { handleLoginError } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  rememberMe: false,

  rememberMeChanged: function() {
    // TODO do something?
  }.observes('rememberMe'),

  actions: {

    authenticate() {
      var authenticator = 'simple-auth-authenticator:token';
      var data = this.getProperties('identification', 'password');

      return this.get('session').authenticate(authenticator, data).catch(handleLoginError);
    }

  }

});


import Ember from 'ember';

export default Ember.Controller.extend({

  rememberMe: false,

  rememberMeChanged: function() {
    // TODO do something?
  }.observes('rememberMe'),

  actions: {
    authenticate() {
      var authenticator = 'simple-auth-authenticator:token';
      var data = this.getProperties('identification', 'password');

      this.set("loginFailed", false);

      return this.get('session').authenticate(authenticator, data).catch((result) => {
        this.set("loginFailed", true);
        throw result;
      });
    }
  }

});


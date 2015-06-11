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

      return this.get('session').authenticate(authenticator, data).catch((result) => {
        var message = "Error loging in. Please try again in a few moments.";

        if (result && result.error && result.error.code === 'LOGIN_FAILED') {
          message = "Invalid username or password";
        }

        this.notifications.addNotification({
          message: message,
          type: "error",
          autoClear: true
        });

        throw result;
      });
    }
  }

});


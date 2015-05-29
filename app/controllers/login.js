import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var authenticator = 'simple-auth-authenticator:token';
      var data = this.getProperties('identification', 'password');
      var self = this;

      return this.get('session').authenticate(authenticator, data).then(function() {
        self.transitionTo("dashboard");
      }).catch(function(result) {
        throw result;
      });
    }
  }
});


import Ember from 'ember';

export default Ember.Route.extend({
  toCssClass: function() {
    return "login-page";
  },

  actions: {
    login: function() {
      this.transitionTo("dashboard");
    }
  }
});

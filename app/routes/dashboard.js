import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.get("session.currentUser").then(user => {
      return Ember.RSVP.hash({ accounts: user.get('accounts') });
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  afterModel(models) {
    if (!models || !models.accounts || !models.accounts.get("length")) {
      this.transitionTo('dashboard.setup');
    }
  }

});


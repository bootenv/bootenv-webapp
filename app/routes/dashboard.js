import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    // Wait for the current user to load before showing the dashboard
    return Ember.RSVP.hash({
      _: this.get("session.currentUser"),
      accounts: this.store.find('account')
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  afterModel(model) {
    if (!model.accounts) {
      this.transitionTo('dashboard.profile');
    } else if (!this.get("session.currentAccount")) {
      this.set("session.currentAccount", model.accounts.get("firstObject"));
    }
  }

});


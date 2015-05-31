import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    // Wait for the current user to load before showing the dashboard
    return Ember.RSVP.hash({
      _: this.get("session.currentUser")
    });
  }
});


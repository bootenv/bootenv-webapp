import Ember from 'ember';

export default Ember.Route.extend({

  afterModel() {
    this.transitionTo('dashboard.account', this.get("session.currentAccount"));
  }

});


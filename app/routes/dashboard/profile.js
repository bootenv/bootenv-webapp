import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    if (this.get("session.currentAccount")) {
      this.transitionTo('dashboard')
    }
  }

});


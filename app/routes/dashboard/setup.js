import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.get("session.currentUser").then(user => {
      if (!Ember.isNull(user.get("personalAccount"))) {
        this.transitionTo('dashboard');
      }
    });
  }

});


import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    if (!Ember.isEmpty(this.get("session.currentUser.personalAccount.id"))) {
      this.transitionTo('dashboard');
    }
  }

});


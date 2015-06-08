import Ember from 'ember';

export default Ember.Route.extend({

  afterModel() {
    this.get("session.currentAccount").reload().then((account) => {
      this.transitionTo('dashboard.account', account);
    });
  }

});


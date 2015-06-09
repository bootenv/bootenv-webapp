import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.get("session.currentAccount").then((account) => {
      if (account) {
        this.transitionTo('dashboardçç');
      }
    });
  }

});


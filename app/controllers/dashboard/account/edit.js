import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save() {
      this.get("model").save().then((account) => {
        this.transitionTo("dashboard.account", account);
      }).catch(() => {
        this.set("failed", true);
      });
    }
  }

});


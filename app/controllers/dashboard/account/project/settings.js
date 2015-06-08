import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save() {
      this.get("model").save().then((project) => {
        this.transitionTo("dashboard.account.project", project.reload());
      }).catch(() => {
        this.set("failed", true);
      });
    }
  }

});


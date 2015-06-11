import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save() {
      this.get("model").save().then((project) => {
        this.transitionTo("dashboard.account.project", project);
      }).catch(() => {
        this.notifications.addNotification({
          message: "Could not save your changes, please try again in a few moments.",
          type: "error",
          autoClear: true
        });
      });
    },

    delete() {
      if (!this.get("model.id") || confirm("Are you sure?")) {
        var account = this.get("model.account");
        this.get("model").destroyRecord().then(() => {
          this.transitionTo("dashboard.account", account);
        });
      }
    }
  }

});


import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save() {
      var user = this.store.getById("user", this.get("session.currentUser.id"));
      this.get("model.owners").pushObject(user);
      this.get("model").save().then((account) => {
        this.set("session.currentAccountId", account.get("id"));

        if (this.get("model.personal")) {
          user.set("email", this.get("model.email"));
          user.save().then(() => {
            this.transitionTo("dashboard");
          });
        } else {
          this.transitionTo("dashboard");
        }
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
        this.get("model").destroyRecord().then(() => {
          this.session.resetCurrentAccount();
          this.transitionTo("dashboard");
        });
      }
    }
  }

});


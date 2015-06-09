import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save() {
      this.get("model").save().then((account) => {
        if (this.get("model.personal")) {
          var user = this.store.getById("user", this.get("session.currentUser.id"));
          user.set("email", this.get("model.email"));
          user.save().then(() => {
            this.transitionTo("dashboard.account", account);
          });
        } else {
          this.transitionTo("dashboard.account", account);
        }
      }).catch(() => {
        this.set("failed", true);
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


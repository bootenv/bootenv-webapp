import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    completeProfile() {
      this.get("session.currentUser").then((user) => {
        var account = this.store.createRecord("account", {
          name: this.get("username"),
          description: "Personal Account",
          email: this.get("session.currentUser.email"),
          personal: true,
          owners: [user]
        });

        account.save().then((account) => {
          return user.set("personalAccount", account).save().then(() => {
            this.session.resetCurrentAccount();
            this.transitionTo("dashboard");
          });
        }).catch(() => {
          this.set("failed", true);
        });
      });
    }
  }

});


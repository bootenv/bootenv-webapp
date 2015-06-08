import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    completeProfile() {
      var account = this.store.createRecord("account", {
        name: this.get("username"),
        description: "Personal Account"
      });

      account.save().then((account) => {
        return this.get("session.currentUser").then((user) => {
          return user.set("personalAccount", account).save();
        });
      }).catch(() => {
        this.set("failed", true);
      });
    }
  }

});


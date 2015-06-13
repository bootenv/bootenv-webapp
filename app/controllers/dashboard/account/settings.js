import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  goBack() {
    this.transitionTo("dashboard");
  },

  actions: {

    save() {
      var user = this.store.getById("user", this.get("session.currentUser.id"));

      this.get("model.owners").pushObject(user);

      this.get("model").save().then((account) => {
        this.set("session.currentAccountId", account.get("id"));

        if (this.get("model.personal")) {
          user.set("email", this.get("model.email"));
          if (user.get("isDirty")) {
            user.save().then(() => this.goBack()).catch(handleError);
          }
        } else {
          this.goBack();
        }
      }).catch(handleError);
    },

    delete() {
      confirmDelete(this.get("model.personal") ? "account" : "organization", () => {
        this.get("model").destroyRecord().then(() => {
          this.session.resetCurrentAccount();
          this.transitionTo("dashboard");
        }).catch(handleError);
      }, this.get("model.isNew"));
    }

  }

});


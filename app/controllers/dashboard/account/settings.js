import Ember from 'ember';
import { handleError } from 'bootenv-webapp/utils/notifications';

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
          }).catch(handleError);
        } else {
          this.transitionTo("dashboard");
        }
      }).catch(handleError);
    },

    delete() {
      if (this.get("model.isNew") || confirm("Are you sure?")) {
        this.get("model").destroyRecord().then(() => {
          this.session.resetCurrentAccount();
          this.transitionTo("dashboard");
        }).catch(handleError);
      }
    }

  }

});


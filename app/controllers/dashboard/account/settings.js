import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  goBack() {
    // FIXME check how to update the url without calling reload (when name changes)
    this.transitionTo("dashboard.account", this.get("model").reload());
  },

  updateUser() {
    if (this.get("model.personal")) {
      let user = this.store.getById("user", this.get("session.currentUser.id"));

      user.set("email", this.get("model.email"));

      if (user.get("isDirty")) {
        return user.save();
      }
    }

    return Promise.resolve();
  },

  actions: {

    save() {
      if (this.get("model.isDirty")) {
        this.get("model").save()
          .then(() => this.updateUser())
          .then(() => this.goBack())
          .catch(handleError);
      } else {
        this.updateUser().then(() => this.goBack()).catch(handleError);
      }
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


import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  goBack() {
    // FIXME check how to update the url without calling reload (when name changes)
    this.transitionTo("dashboard.account.project", this.get("model").reload());
  },

  actions: {

    save() {
      if (this.get("model.isDirty")) {
        this.get("model").save().then(() => this.goBack()).catch(handleError);
      } else {
        this.goBack();
      }
    },

    delete() {
      confirmDelete("project", () => {
        var account = this.get("model.account");
        this.get("model").destroyRecord().then(() => {
          this.transitionTo("dashboard.account", account);
        }).catch(handleError);
      }, this.get("model.isNew"));
    }

  }

});


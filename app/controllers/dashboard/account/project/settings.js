import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  goBack() {
    this.transitionToRoute("dashboard.account.project", this.get("model.name"));
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


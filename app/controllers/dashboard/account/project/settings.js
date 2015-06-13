import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  actions: {

    save() {
      this.get("model").save().then((project) => {
        this.transitionTo("dashboard.account.project", project);
      }).catch(handleError);
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


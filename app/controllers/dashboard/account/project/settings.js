import Ember from 'ember';
import { handleError } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  actions: {
    save() {
      this.get("model").save().then((project) => {
        this.transitionTo("dashboard.account.project", project);
      }).catch(handleError);
    },

    delete() {
      if (!this.get("model.id") || confirm("Are you sure?")) {
        var account = this.get("model.account");
        this.get("model").destroyRecord().then(() => {
          this.transitionTo("dashboard.account", account);
        }).catch(handleError);
      }
    }
  }

});


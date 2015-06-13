import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  actions: {

    save() {
      this.get("model").save().then((environment) => {
        this.transitionTo("dashboard.account.project.environment", environment);
      }).catch(handleError);
    },

    delete() {
      confirmDelete("environment", () => {
        var project = this.get("model.project");
        this.get("model").destroyRecord().then(() => {
          this.transitionTo("dashboard.account.project", project);
        }).catch(handleError);
      }, this.get("model.isNew"));
    }

  }

});


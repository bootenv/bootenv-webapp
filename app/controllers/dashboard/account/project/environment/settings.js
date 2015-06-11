import Ember from 'ember';
import { handleError } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  actions: {
    save() {
      this.get("model").save().then((environment) => {
        this.transitionTo("dashboard.account.project.environment", environment);
      }).catch(handleError);
    },

    delete() {
      if (!this.get("model.id") || confirm("Are you sure?")) {
        var project = this.get("model.project");
        this.get("model").destroyRecord().then(() => {
          this.transitionTo("dashboard.account.project", project);
        }).catch(handleError);
      }
    }
  }

});


import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  goBack() {
    this.transitionTo("dashboard.account.project.environment", this.get("model"));
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
      confirmDelete("environment", () => {
        var project = this.get("model.project");
        this.get("model").destroyRecord().then(() => {
          this.transitionTo("dashboard.account.project", project);
        }).catch(handleError);
      }, this.get("model.isNew"));
    }

  }

});


import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  baseUrl: function() {
    return window.location.origin;
  }.property(),

  goBack() {
    this.transitionTo("dashboard.account", this.get("model.name"));
  },

  updateUser() {
    if (this.get("model.personal")) {
      return this.get("session.currentUser").then(user => {
        user.set("email", this.get("model.email"));

        if (user.get("isDirty")) {
          return user.save();
        }
      });
    }

    return Ember.RSVP.Promise.resolve();
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


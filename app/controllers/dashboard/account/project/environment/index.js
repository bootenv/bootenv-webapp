import Ember from 'ember';
import { handleError } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  init() {
    this._super.apply(this, arguments);
    this.createNewToken();
  },

  createNewToken() {
    this.set("newToken", this.store.createRecord("token"));
  },

  actions: {

    addToken() {
      this.set("newToken.environment", this.get("model"));

      this.get("newToken").save().then((token) => {
        this.createNewToken();
        this.set("generatedTokenId", token.get("id"));
        Ember.$('#tokenModal').modal('show');
      }).catch((result) => {
        this.createNewToken();
        handleError(result);
      });
    },

    removeToken(token) {
      if (confirm("Are you sure?")) {
        token.destroyRecord().catch(handleError);
      }
    }

  }

});


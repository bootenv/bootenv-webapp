import Ember from "ember";

export default Ember.Route.extend({

  actions: {

    willTransition(transition) {
      if (this.controller.get("model.isDirty")) {
        if (confirm("There are unsaved changes, do you want to discard them?")) {
          this.controller.get("model").rollback();
        } else {
          transition.abort();
        }
      }
    }

  }

});


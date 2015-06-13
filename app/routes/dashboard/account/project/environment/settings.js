import Ember from "ember";
import { confirmDiscardChanges } from 'bootenv-webapp/utils/notifications';

export default Ember.Route.extend({

  actions: {

    willTransition(transition) {
      if (this.controller.get("model.isDirty")) {
        transition.abort();
        confirmDiscardChanges(() => {
          this.controller.get("model").rollback();
          transition.retry();
        });
      }
    }

  }

});


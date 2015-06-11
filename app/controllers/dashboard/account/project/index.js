import Ember from 'ember';
import { handleError } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  init() {
    this._super.apply(this, arguments);
    this.set("newVariable", this.store.createRecord("variableDefinition"));
  },

  actions: {

    addVariable() {
      // FIXME set objectid in backend
      this.get("model.variables").addRecord(this.get("newVariable"));
      this.get("model").save().then(() => {
        this.set("newVariable", this.store.createRecord("variableDefinition"));
      }).catch((result) => {
        this.get("model.variables").removeRecord(this.get("newVariable"));
        handleError(result);
      });
    },

    removeVariable(variable) {
      if (confirm("Are you sure?")) {
        this.get("model.variables").removeRecord(variable);
        this.get("model").save().catch((result) => {
          this.get("model.variables").addRecord(variable);
          handleError(result);
        });
      }
    }

  }

});


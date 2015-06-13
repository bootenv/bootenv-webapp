import Ember from 'ember';
import { handleError, confirmDelete } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  init() {
    this._super.apply(this, arguments);
    this.createNewVariable();
  },

  createNewVariable() {
    this.set("newVariable", this.store.createRecord("variableDefinition"));
  },

  actions: {

    addVariable() {
      this.get("model.variables").addRecord(this.get("newVariable"));

      this.get("model").save().then(() => {
        this.createNewVariable();
      }).catch((result) => {
        this.get("model.variables").removeRecord(this.get("newVariable"));
        handleError(result);
      });
    },

    removeVariable(variable) {
      confirmDelete("variable", () => {
        this.get("model.variables").removeRecord(variable);

        this.get("model").save().catch((result) => {
          this.get("model.variables").addRecord(variable);
          handleError(result);
        });
      });
    }

  }

});


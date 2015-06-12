import Ember from 'ember';
import { handleError } from 'bootenv-webapp/utils/notifications';

export default Ember.Controller.extend({

  init() {
    this._super.apply(this, arguments);
    this.createNewVariable();
    this.createNewToken();
  },

  createNewVariable() {
    this.set("newVariable", this.store.createRecord("variableValue"));
  },

  createNewToken() {
    this.set("newToken", this.store.createRecord("token"));
  },

  allVariables: function() {
    var vd = this.get("model.project.variables");
    var vv = this.get("model.variables");

    var pairs = {};

    var create = (item) => {
      if (!pairs[item.get("name")]) {
        pairs[item.get("name")] = Ember.Object.create();
      }
    };

    vd.forEach(create);
    vv.forEach(create);

    vd.forEach((item) => {
      pairs[item.get("name")].set("definition", item);
    });

    vv.forEach((item) => {
      pairs[item.get("name")].set("value", item);
    });

    var ret = Ember.A();

    for (var key in pairs) {
      if (pairs.hasOwnProperty(key)) {
        var pair = pairs[key];
        if (!pair.get("value")) {
          pair.set("value", this.store.createRecord("variableValue", {
            name: pair.get("definition.name"),
            secret: pair.get("definition.secret")
          }));
        }
        ret.pushObject(pair);
      }
    }

    return ret;
  }.property("model.project.variables", "model.variables"),

  variables: function() {
    return this.get("allVariables").filter((item) => !Ember.isEmpty(item.get("definition")));
  }.property("allVariables"),

  otherVariables: function() {
    return this.get("allVariables").filter((item) => Ember.isEmpty(item.get("definition")));
  }.property("allVariables"),

  actions: {

    changeVariable(variable) {
      if (variable.get("value.isNew") && !Ember.isEmpty(variable.get("value.value"))) {
        this.get("model.variables").pushObject(variable.get("value"));
      }

      this.get("model").save().catch(handleError);
    },

    changeVariables() {
      this.get("variables").forEach((variable) => {
        if (variable.get("value.isNew") && !Ember.isEmpty(variable.get("value.value"))) {
          this.get("model.variables").pushObject(variable.get("value"));
        }
      });

      this.get("model").save().catch(handleError);
    },

    resetVariable(variable) {
      this.get("model.variables").removeRecord(variable);

      this.get("model").save().then(() => {
        variable.set("value", "");
        variable.set("environment", null);
      }).catch((result) => {
        this.get("model.variables").addRecord(variable);
        handleError(result);
      });
    },

    addOtherVariable() {
      this.get("model.variables").addRecord(this.get("newVariable"));

      this.get("model").save().then(() => {
        this.createNewVariable();
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
    },

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


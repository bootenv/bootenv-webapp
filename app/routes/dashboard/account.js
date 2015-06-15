import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    if (params.account_name === "~new") {
      return this.store.createRecord("account");
    } else {
      return this.store.all("account").findBy("name", params.account_name);
    }
  },

  serialize(model) {
    return {
      account_name: model.get("isNew") ? "~new" : model.get("name")
    };
  },

  afterModel(model) {
    if (model.get("isNew")) {
      this.transitionTo("dashboard.account.settings", model);
    } else {
      this.set("session.currentAccountId", model.get("id"));
    }
  }

});


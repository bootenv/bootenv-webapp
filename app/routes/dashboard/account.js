import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    if (params.account_name === "~new") {
      return this.store.createRecord("account");
    } else {
      return this.store.all("account").filterBy("name", params.account_name).get("firstObject");
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
      // TODO remove this hack to load the projects once we get the list of ids from the api
      return this.store.find("project", { accountId: model.get("id") });
    }
  }

});


import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var query = {
      name: params.account_name
    };

    if (query.name === "new") {
      return this.store.createRecord("account");
    } else {
      return this.store.find("account", query).then((accounts) => accounts.objectAt(0));
    }
  },

  serialize(model) {
    // FIXME this should be model.get("name") || "new"
    return { account_name: (model.get && model.get("name")) || model.name || "new" };
  },

  afterModel(model) {
    if (model.get && model.get("name")) {
      this.set("session.currentAccount", model)
    }
  }

});


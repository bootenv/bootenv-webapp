import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var query = {
      name: params.account_name
    };

    if (query.name === "new") {
      return this.store.createRecord("account");
    } else {
      return this.store.find("account", query).then((accounts) => {
        // TODO remove this hack to load the projects once we get the list of ids from the api
        var account = accounts.objectAt(0);
        return this.store.find("project", { accountId: account.get("id") }).then(() => {
          return account;
        });
      });
    }
  },

  serialize(model) {
    // FIXME this should be model.get("name") || "new"
    return { account_name: (model.get && model.get("name")) || model.name || "new" };
  },

  afterModel(model) {
    if (model.get && model.get("name") !== "new") {
      this.set("session.currentAccount", model);
    }
  }

});


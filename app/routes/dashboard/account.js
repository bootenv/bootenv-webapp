import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var query = {
      name: params.account_name
    };

    if (query.name === "~new") {
      return this.store.createRecord("account");
    } else {
      return this.store.find("account", query).then((accounts) => {
        return accounts.get("firstObject");
      }).catch(() => {
        // TODO: show an "Account not found" message
        this.session.resetCurrentAccount();
        this.transitionTo("dashboard");
      });
    }
  },

  serialize(model) {
    return {
      account_name: model.get("name") || "~new"
    };
  },

  afterModel(model) {
    if (model.get("isNew")) {
      this.transitionTo("dashboard.account.settings", model);
    } else {
      this.set("session.currentAccountId", model.get("id"));
      // TODO remove this hack to load the projects once we get the list of ids from the api
      if (!model.get("projects.length")) {
        return this.store.find("project", { accountId: model.get("id") });
      }
    }
  }

});


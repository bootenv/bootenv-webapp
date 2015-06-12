import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var account = this.modelFor("dashboard.account");
    var query = {
      account_id: account.id,
      name: params.project_name
    };

    if (query.name === "~new") {
      return this.store.createRecord("project", {
        account: account
      });
    } else {
      return this.store.find("project", query).then((projects) => {
        return projects.get("firstObject");
      });
    }
  },

  serialize(model) {
    return {
      project_name: model.get("name") || "~new"
    };
  },

  afterModel(model) {
    // TODO remove this hack to load the projects once we get the list of ids from the api
    if (!model.get("isNew")) {
      return this.store.find("environment", { projectId: model.get("id") });
    }
  }

});


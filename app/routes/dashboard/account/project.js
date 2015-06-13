import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var account = this.modelFor("dashboard.account");

    if (params.project_name === "~new") {
      return this.store.createRecord("project", {
        account: account
      });
    } else {
      return account.get("projects").filterBy("name", params.project_name).get("firstObject");
    }
  },

  serialize(model) {
    return {
      project_name: model.get("isNew") ? "~new" : model.get("name")
    };
  },

  afterModel(model) {
    // TODO remove this hack to load the projects once we get the list of ids from the api
    if (!model.get("isNew")) {
      return this.store.find("environment", { projectId: model.get("id") });
    }
  }

});


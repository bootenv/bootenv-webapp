import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var project = this.modelFor("dashboard.account.project");

    if (params.environment_name === "~new") {
      return this.store.createRecord("environment", {
        project: project
      });
    } else {
      return project.get("environments").filterBy("name", params.environment_name).get("firstObject");
    }
  },

  serialize(model) {
    return {
      environment_name: model.get("isNew") ? "~new" : model.get("name")
    };
  },

  afterModel(model) {
    // TODO remove this hack to load the projects once we get the list of ids from the api
    if (!model.get("isNew")) {
      return this.store.find("token", { environmentId: model.get("id") });
    }
  }

});


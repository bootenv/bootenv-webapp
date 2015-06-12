import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var project = this.modelFor("dashboard.account.project");
    var query = {
      project_id: project.id,
      name: params.environment_name
    };

    if (query.name === "~new") {
      return this.store.createRecord("environment", {
        project: project
      });
    } else {
      return this.store.find("environment", query).then((environments) =>{
        return environments.get("firstObject");
      });
    }
  },

  serialize(model) {
    return {
      environment_name: model.get("name") || "~new"
    };
  },

  afterModel(model) {
    // TODO remove this hack to load the projects once we get the list of ids from the api
    if (!model.get("isNew")) {
      return this.store.find("token", { environmentId: model.get("id") });
    }
  }

});


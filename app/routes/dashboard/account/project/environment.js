import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var project = this.modelFor("dashboard.account.project");
    var query = {
      project_id: project.id,
      name: params.environment_name
    };

    if (query.name === "new") {
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
      account_name: model.get("project.account.name"),
      project_name: model.get("project.name"),
      environment_name: model.get("name") || "new"
    };
  }

});


import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var project = this.modelFor("dashboard.account.project");

    if (params.environment_name === "~new") {
      return this.store.createRecord("environment", { project: project });
    } else {
      return project.get("environments")
        .then(environments => environments.findBy("name", params.environment_name));
    }
  },

  serialize(model) {
    return {
      environment_name: model.get("isNew") ? "~new" : model.get("name")
    };
  },

  afterModel(model) {
    if (model.get("isNew")) {
      this.transitionTo("dashboard.account.project.environment.settings", model);
    }
  }

});


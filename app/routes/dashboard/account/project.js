import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var account = this.modelFor("dashboard.account");

    if (params.project_name === "~new") {
      return this.store.createRecord("project", { account: account });
    } else {
      return account.get("projects")
        .then((projects) => projects.findBy("name", params.project_name));
    }
  },

  serialize(model) {
    return {
      project_name: model.get("isNew") ? "~new" : model.get("name")
    };
  },

  afterModel(model) {
    if (model.get("isNew")) {
      this.transitionTo("dashboard.account.project.settings", model);
    }
  }

});


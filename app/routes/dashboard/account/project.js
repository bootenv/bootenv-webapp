import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var account = this.modelFor("dashboard.account");
    var query = {
      account_id: account.id,
      name: params.project_name
    };

    if (query.name === "new") {
      return this.store.createRecord("project", {
        account: account
      });
    } else {
      return this.store.find("project", query).then((projects) =>{
        // TODO remove this hack to load the projects once we get the list of ids from the api
        var project = projects.get("firstObject");
        return this.store.find("environment", { projectId: project.get("id") }).then(() => {
          return project;
        });
      });
    }
  },

  serialize(model) {
    return {
      account_name: model.get("account.name"),
      project_name: model.get("name") || "new"
    };
  }

});


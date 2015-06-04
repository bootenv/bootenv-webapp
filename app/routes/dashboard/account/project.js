import Ember from "ember";

export default Ember.Route.extend({

  model(params) {
    var query = {
      account_id: this.modelFor("dashboard.account").id,
      name: params.project_name
    };

    return this.store.find("project", query).then((projects) => projects.objectAt(0));
  },

  serialize(model) {
    return { account_name: model.get("account.name"), project_name: model.get("name") };
  }

});


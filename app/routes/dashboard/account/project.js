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
      return this.store.find("project", query).then((projects) => projects.get("firstObject"));
    }
  },

  serialize(model) {
    return { account_name: model.get("account.name"), project_name: model.get("name") };
  }

});


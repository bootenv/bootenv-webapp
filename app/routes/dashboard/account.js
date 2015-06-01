import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    var query = {
      name: params.account_name
    };

    return this.store.find("account", query).then((accounts) => accounts.objectAt(0));
  },

  serialize(model) {
    return {account_name: model.get("name")};
  }
});


import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var account = this.modelFor("dashboard.account");
    return this.store.find('project', {account_id: account.id, name: params.project_name});
  },

  serialize(model) {
    return {account_name: model.get('account.name'), project_name: model.get('name')};
  }
});


import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('account', {name: params.account_name});
  },

  serialize(model) {
    return {account_name: model.get('name')};
  }
});


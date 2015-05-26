import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('account', {name: params.account_name});
  },

  serialize: function(model) {
    return {account_name: model.get('name')};
  }
});

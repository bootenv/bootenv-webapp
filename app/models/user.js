import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  personalAccount: DS.belongsTo('account', { async: true }),
  fullName: DS.attr('string'),
  created: DS.attr('date'),
  accounts: DS.hasMany('accounts', { async: true })
});

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  public: DS.attr('boolean'),
  description: DS.attr('string'),
  account: DS.belongsTo("account", {async: true}),
  environments: DS.hasMany('environment', {async: true})
});

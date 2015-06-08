import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  public: DS.attr('boolean'),
  description: DS.attr('string'),
  email: DS.attr('string'),
  url: DS.attr('string'),
  personal: DS.attr('boolean'),
  projects: DS.hasMany('project', {async: true}),
  owners: DS.hasMany('user', {async: true})
});

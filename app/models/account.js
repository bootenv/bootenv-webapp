import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  personal: DS.attr('boolean'),
  description: DS.attr('string'),
  email: DS.attr('string'),
  url: DS.attr('string'),
  projects: DS.hasMany('project', {async: true}),
  owners: DS.hasMany('user', {async: true})
});

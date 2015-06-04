import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  personal: DS.attr('boolean'),
  projects: DS.hasMany('project', {async: true}),
  owners: DS.hasMany('user', {async: true})
});

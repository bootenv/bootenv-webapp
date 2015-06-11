import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  secret: DS.attr('boolean'),
  description: DS.attr('string'),
  defaultValue: DS.attr('string')
});

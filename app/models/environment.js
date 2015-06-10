import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  public: DS.attr('boolean'),
  description: DS.attr('string'),
  project: DS.belongsTo("project", { async: true })
});

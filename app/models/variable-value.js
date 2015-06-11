import DS from 'ember-data';
import VariableDefinition from 'bootenv-webapp/models/variable-definition';

export default VariableDefinition.extend({
  value: DS.attr('string')
});

import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  keyForRelationship(key) {
    return key + "Id";
  }

});


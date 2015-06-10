import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  keyForRelationship(key, typeClass) {
    switch (typeClass) {
      case 'belongsTo':
        return key + "Id";
      case 'hasMany':
        return key.replace(/s$/, 'Ids');
      default:
        return key;
    }
  }

});


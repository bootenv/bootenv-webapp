import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {

  attrs: {
    variables: { embedded: 'always' }
  },

  keyForRelationship(key, typeClass) {
    if (key in this.attrs) {
      return this._super.apply(this, arguments);
    } else switch (typeClass) {
      case 'belongsTo':
        return key + "Id";
      case 'hasMany':
        return key.replace(/s$/, 'Ids');
      default:
        return key;
    }
  }

});


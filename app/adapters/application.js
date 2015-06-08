import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({

  host: ENV.API_HOST,

  namespace: 'api',

  findQuery(store, type, query) {
    var loopbackQuery = {};

    Ember.$.each(query, (k, v) => {
      loopbackQuery["filter[where][" + Ember.String.camelize(k) + "]"] = v;
    });

    return this._super(store, type, loopbackQuery);
  }

});


import Ember from 'ember';
import { initAdminLte } from 'bootenv-webapp/utils/admin-lte';

export default Ember.View.extend({

  className: "wrapper",

  didInsertElement() {
    initAdminLte();
  }

});

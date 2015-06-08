import Ember from 'ember';
import { initAdminLte } from 'bootenv-webapp/utils/admin-lte';

export default Ember.View.extend({

  classNames: ["wrapper"],

  didInsertElement() {
    initAdminLte();
  }

});

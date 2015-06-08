import Ember from 'ember';
import adminLteInit from 'bootenv-webapp/utils/admin-lte';

export default Ember.View.extend({

  className: "wrapper",

  didInsertElement() {
    adminLteInit();
  }

});

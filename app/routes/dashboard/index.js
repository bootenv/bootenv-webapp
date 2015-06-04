import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      projects: this.store.find('project')
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }

});


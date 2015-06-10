import Ember from 'ember';

export default Ember.Component.extend({

  tagName: "i",

  classNames: ["fa", "fa-fw"],

  classNameBindings: ["isLocked:fa-lock:fa-unlock"],

  isLocked: function() {
    return this.get("public") === false || this.get("secret") === true;
  }.property("public", "secret")

});

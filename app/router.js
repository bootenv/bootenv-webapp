import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('signup');

  this.route('dashboard', { path: '/' }, function() {
    this.route('accounts', function() {
    });

    this.route('account', { path: ":account_name" }, function() {
      this.route('edit');

      this.route('project', { path: ":project_name" }, function() {
        this.route('edit');

        this.route('environment', { path: ":environment_name" }, function() {
          this.route('edit');
        });
      });
    });
  });
});

Ember.Route.reopen({

  cssClass: function() {
    return this.routeName.replace(/\./g, '-').dasherize();
  }.property(),

  activate() {
    var cssClass = this.get("cssClass");
    if (cssClass && cssClass !== 'application') {
      Ember.$('body').addClass(cssClass);
    }
  },

  deactivate() {
    var cssClass = this.get("cssClass");
    if (cssClass) {
      Ember.$('body').removeClass(cssClass);
    }
  }

});

export default Router;

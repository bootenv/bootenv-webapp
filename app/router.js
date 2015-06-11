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
    this.route('setup', { path: "~setup" });

    this.route('account', { path: ":account_name" }, function() {
      this.route('teams', { path: "~teams" });
      this.route('settings', { path: "~settings" });

      this.route('project', { path: ":project_name" }, function() {
        this.route('settings', { path: "~settings" });

        this.route('environment', { path: ":environment_name" }, function() {
          this.route('settings', { path: "~settings" });
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
    this._super.apply(this, arguments);

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

    this._super.apply(this, arguments);
  },

  afterModel() {
    this._super.apply(this, arguments);

    Ember.$("#account-menu").collapse('hide');
  }

});

export default Router;

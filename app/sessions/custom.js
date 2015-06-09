import Ember from 'ember';
import DS from 'ember-data';
import Session from 'simple-auth/session';

export default Session.extend({

  currentUser: function() {
    var userId = this.get('secure.userId');

    if (!Ember.isEmpty(userId)) {
      var store = this.container.lookup('store:main');
      return DS.PromiseObject.create({
        promise: store.find('user', userId)
      });
    }
  }.property('secure.userId'),

  currentAccount: function() {
    var currentAccountId = this.get('currentAccountId');

    if (currentAccountId) {
      var store = this.container.lookup('store:main');
      return DS.PromiseObject.create({
        promise: store.find('account', currentAccountId).catch(() => this.resetCurrentAccount())
      });
    } else {
      return this.resetCurrentAccount();
    }
  }.property("currentAccountId"),

  resetCurrentAccount() {
    var store = this.container.lookup('store:main');
    var firstAccount = store.all('account').get("firstObject");

    this.set("currentAccountId", firstAccount ? firstAccount.get("id") : null);

    return firstAccount;
  }

});


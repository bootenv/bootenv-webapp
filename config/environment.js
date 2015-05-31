/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bootenv-webapp',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    pace: {
      restartOnPushState: false,
      theme: 'minimal',
      color: 'green'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token'
  };

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: 'http://localhost:3000/api/users/login',
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'id',
    authorizationPrefix: '',
    authorizationHeaderName: 'Authorization',
    refreshAccessTokens: false,
    tokenExpireName: 'ttl',
    timeFactor: 1
  };

  return ENV;
};

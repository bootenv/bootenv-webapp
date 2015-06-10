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
    ENV.API_HOST = "http://localhost:3000";
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
    ENV.API_HOST = "http://api.bootenv.com";
  }

  ENV['simple-auth'] = {
    session: 'session:custom',
    authorizer: 'simple-auth-authorizer:token',
    routeAfterAuthentication: 'dashboard.index',
    routeIfAlreadyAuthenticated: 'dashboard.index',
    crossOriginWhitelist: [ENV.API_HOST]
  };

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: ENV.API_HOST + '/api/users/login',
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'id',
    authorizationPrefix: null,
    authorizationHeaderName: 'Authorization',
    refreshAccessTokens: false,
    tokenExpireName: 'ttl',
    timeFactor: 1
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    // FIXME: https://github.com/rwjblue/ember-cli-content-security-policy/issues/38
    //'script-src': "'self'",
    'font-src': "'self' http://fonts.gstatic.com",
    'connect-src': "'self' http://localhost:3000",
    'img-src': "'self' https://www.gravatar.com",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
    'media-src': "'self'"
  };

  return ENV;
};

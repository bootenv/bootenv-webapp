# [![>bootenv](http://bootenv.com/img/logo-light-transparent-readme-files.png)](http://bootenv.com)-WEBAPP

[![license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](LICENSE)
[![engine](https://img.shields.io/badge/iojs-v2.4.X-yellow.svg)](http://iojs.org)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com)
[![Build Status](https://travis-ci.org/bootenv/bootenv-webapp.svg?branch=master)](https://travis-ci.org/bootenv/bootenv-webapp)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

```
ember build --prod
rsync -avz --delete dist/ user@some-host-or-ip:bootenv.yourdomain.com
```

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Versions
 
 - 1.0.0 (current)

## License

[Apache-2.0](LICENSE)

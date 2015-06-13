#!/bin/bash -e

if [[ $TRAVIS_PULL_REQUEST == "false" && $TRAVIS_BRANCH == "master" ]]; then
  ember build --prod
  rsync -avz --delete dist/ bootenv@ssh.app.bootenv.com:app.bootenv.com
fi


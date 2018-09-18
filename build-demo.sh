#!/bin/sh

set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"

# if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
#     echo "Skipping deploy"
#     exit 0
# fi

MODULE_NAME="formFieldAppender"

# mkdir docs
# mkdir docs/js

cd demo/src

npm install
rollup --config ../rollup.config.js

cp *.html ../../docs/
cp *.css ../../docs/
#!/bin/sh

MODULE_NAME="formFieldAppender"

mkdir docs
mkdir docs/js

jspm link github:DEGJS/$MODULE_NAME -f

cd demo/src

jspm install
jspm install --link github:DEGJS/$MODULE_NAME
jspm bundle-sfx demo ../../docs/js/demo-bundle.js --skip-source-maps

cp *.html ../../docs/
cp *.css ../../docs/
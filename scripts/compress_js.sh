#! /bin/bash

JS_PATH=/home/dylo/webapp/game/static/js/
JS_PATH_SRC=${JS_PATH}src/
JS_PATH_DIST=${JS_PATH}dist/

CSS_PATH=/home/dylo/webapp/game/static/css/
CSS_PATH_SRC=${CSS_PATH}src/
CSS_PATH_DIST=${CSS_PATH}dist/
find ${JS_PATH_SRC} -type f -name '*.js' | sort | xargs cat > ${JS_PATH_DIST}game.js

find ${CSS_PATH_SRC} -type f -name '*.css' | sort | xargs cat > ${CSS_PATH_DIST}game.css

echo 'yes' | python3 manage.py collectstatic


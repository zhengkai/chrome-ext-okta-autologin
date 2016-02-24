#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}" )"

if [ -e package.zip ]; then
	rm package.zip
fi
zip -X package.zip * --exclude pack.sh \*.zip .gitignore .editorconfig

#!/bin/bash

cd .client
webpack --progress --colors --watch &
cd ..
meteor

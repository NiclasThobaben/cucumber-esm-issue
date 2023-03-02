#!/bin/bash

cd library
yarn install && yarn pack -f ../library.tgz

cd ../client
yarn install && yarn bdd
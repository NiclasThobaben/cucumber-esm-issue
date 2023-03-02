Cucumber ESM issue
=================================

Example repository showing the problem with https://github.com/cucumber/cucumber-js/issues/2248.

## Background
This project contains two packages, a library and a client of the library. The library includes react-dnd as a transitive
dependency, which is (currently still) a pure ESM package.

When using the library from within cucumber js, the library is required from CJS code, which in turn leads to 

```sh
Error [ERR_REQUIRE_ESM]: require() of ES Module
```

## Run example

Simply run `run-example.sh` 
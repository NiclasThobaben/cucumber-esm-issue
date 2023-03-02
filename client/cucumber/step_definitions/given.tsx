import { Given } from '@cucumber/cucumber'
import { RootProvider } from 'library';

Given(
    /^pure ESM transitive dependency$/,
    function () {
        <RootProvider/>
    });
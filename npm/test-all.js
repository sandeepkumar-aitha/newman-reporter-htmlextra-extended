#!/usr/bin/env node
/* global exit */
require('shelljs/global');
require('colors');

var prettyms = require('pretty-ms'),
    startedAt = Date.now();

require('async').series([
    require('./test-lint'),
    require('./test-system'),
    require('./test-integration')
], function (code) {
    console.info(`\nnewman-reporter-htmlextra-extended: duration ${prettyms(Date.now() - startedAt)}\n
        newman-reporter-htmlextra-extended: ${code ? 'not ok' : 'ok'}!`[code ? 'red' : 'green']);
    exit(code && (typeof code === 'number' ? code : 1) || 0);
});

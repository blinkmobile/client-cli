#!/usr/bin/env node
'use strict';

// foreign modules

const meow = require('meow');

// local modules

const main = require('..');
const help = require('../lib/help');

// this module

const cli = meow({
  help,
  version: true
}, {
  boolean: [ 'prune', 'skip' ],
  default: {
    skip: true
  },
  string: ['bucket', 'region']
});

main(cli.input, cli.flags);

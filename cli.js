#!/usr/bin/env node

'use strict';
var childProcess = require('child_process');

var spawn = childProcess.spawn;
var input = process.argv.slice(2);
var bin = require('./');

spawn(bin, input, {stdio: 'inherit'})
	.on('exit', process.exit);

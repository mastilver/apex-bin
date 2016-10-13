'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var getBinaryName = require('./getBinaryName');

var baseUrl = 'https://github.com/apex/apex/releases/download/v0.10.3/';
var binaryName = getBinaryName();

module.exports = new BinWrapper()
	.src(baseUrl + binaryName)
	.dest(path.join(__dirname, '../vendor'))
	.use(binaryName);

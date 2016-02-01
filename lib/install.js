'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['version'], function (err) {
	if (err) {
		log.error(err.message);
		log.error('apex binary test failed');
		return;
	}

	log.success('apex binary test passed successfully');
});

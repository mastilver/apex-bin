var archHandler = {
	x64: function () {
		return 'amd64';
	},
	ia32: function () {
		return '386';
	},
	arm: function () {
		return 'arm';
	}
};

var platformHandler = {
	win32: function (str) {
		return 'windows_' + str + '.exe';
	},
	linux: function (str) {
		return 'linux_' + str;
	},
	darwin: function (str) {
		return 'darwin_' + str;
	}
};

module.exports = function () {
	var binaryName = archHandler[process.arch]();
	binaryName = 'apex_' + platformHandler[process.platform](binaryName);
	return binaryName;
};

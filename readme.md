# apex-bin [![Build Status](https://travis-ci.org/mastilver/apex-bin.svg?branch=master)](https://travis-ci.org/mastilver/apex-bin)

> Binary wrapper for [apex](apex.run)


## CLI

```
$ npm install --global apex-bin
```

```
$ apex --help
```


## API

```
$ npm install --save apex-bin
```

```js
const execFile = require('child_process').execFile;
const apex = require('apex-bin');

execFile(apex, ['version'], (err, stdout) => {
	console.log(stdout);
});
```


## License

MIT © [Thomas Sileghem](http://mastilver.com)

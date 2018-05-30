const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		a: ['babel-polyfill', path.resolve('entry/a.js')],
		b: ['babel-polyfill', path.resolve('entry/b.js')],
		c: ['babel-polyfill', path.resolve('entry/c.js')],
	},
	output: {
		path: path.resolve('./dist'),
	},
	optimization: {
		runtimeChunk: 'single',
	},
};

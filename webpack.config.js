const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		a: path.resolve('entry/a.js'),
		b: path.resolve('entry/b.js'),
		c: path.resolve('entry/c.js'),
	},
	output: {
		path: path.resolve('./dist'),
	},
	optimization: {
		runtimeChunk: 'single',
	},
};

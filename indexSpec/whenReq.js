var when = require('a').when;
var c = {};

when(c)
	.it('should return promiseBuilder').assertEqual(c.newPromiseBuilder, c.sut)

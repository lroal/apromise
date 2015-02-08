var when = require('a').when;
var c = {};

when(c)
    .it('should set promise').assertEqual(c.promise, c.sut.promise)

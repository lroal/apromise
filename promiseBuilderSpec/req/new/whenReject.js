var when = require('a').when;
var c = {};

when(c)
    .it('should set rejected on context').assertDeepEqual([c.arg, c.arg2], c.context.rejected)
    .it('should set completed on context').assertOk(c.context.completed)
    .it('should return promise').assertDeepEqual(c.promise, c.returned)
var when = require('a').when;
var c = {};

when(c)
    .it('should set resolved on context').assertDeepEqual([c.arg, c.arg2], c.context.resolved)
    .it('should set completed on context').assertOk(c.context.completed)
    .it('should return promise').assertDeepEqual(c.promise, c.returned)

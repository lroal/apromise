var newContext = require('./context');
var newPromise = require('./promise');

module.exports = function() {
    var c = {};
    var context = newContext();
    c.promise = newPromise(context);

    c.resolve = function() {
        context.resolved = [].slice.call(arguments);
        context.completed = true;
        return c.promise;
    };

    c.reject = function() {
        context.rejected = [].slice.call(arguments);
        context.completed = true;
        return c.promise;
    };

    if (arguments.length > 0)
        return c.resolve.apply(null, arguments);
    return c;

};

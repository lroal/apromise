var newPromiseBuilder = require('./promiseBuilder');

newPromiseBuilder.resolve = function() {
	return newPromiseBuilder().resolve.apply(null, arguments);	
}

newPromiseBuilder.reject = function() {
	return newPromiseBuilder().reject.apply(null, arguments);	
}

module.exports = newPromiseBuilder;
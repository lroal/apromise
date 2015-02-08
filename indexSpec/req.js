var a = require('a');

function act(c){
	c.mock = a.mock;
	c.requireMock = a.requireMock;
	c.expectRequire = a.expectRequire;
	c.then = a.then;
	
	c.newPromiseBuilder = c.requireMock('./promiseBuilder');	

	c.sut = require('../index');
}

module.exports = act;
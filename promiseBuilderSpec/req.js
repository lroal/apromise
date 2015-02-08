var a = require('a');

function act(c) {
    c.mock = a.mock;
    c.requireMock = a.requireMock;
    c.expectRequire = a.expectRequire;
    c.then = a.then;

    c.newContext = c.requireMock('./context');
    c.newPromise = c.requireMock('./promise');

    c.newSut = require('../promiseBuilder');

    c.context = {};
    c.newContext.expect().return(c.context);

    c.promise = {};
    c.newPromise.expect(c.context).return(c.promise);
}

module.exports = act;

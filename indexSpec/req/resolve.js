function act(c) {
    c.arg = {};
    c.arg2 = {};

    c.promiseBuilder = {};
    c.newPromiseBuilder.expect().return(c.promiseBuilder);

    c.promiseBuilder.resolve = c.mock();
    c.expected = {};
    c.promiseBuilder.resolve.expect(c.arg, c.arg2).return(c.expected);

    c.returned = c.sut.resolve(c.arg, c.arg2);
}

module.exports = act;

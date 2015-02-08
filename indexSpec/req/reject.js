function act(c) {
    c.arg = {};
    c.arg2 = {};

    c.promiseBuilder = {};
    c.newPromiseBuilder.expect().return(c.promiseBuilder);

    c.promiseBuilder.reject = c.mock();
    c.expected = {};
    c.promiseBuilder.reject.expect(c.arg, c.arg2).return(c.expected);

    c.returned = c.sut.reject(c.arg, c.arg2);
}

module.exports = act;

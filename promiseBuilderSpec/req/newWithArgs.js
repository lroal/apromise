function act(c) {
    c.arg = {};
    c.arg2 = {};

    c.returned = c.newSut(c.arg, c.arg2);
}

module.exports = act;

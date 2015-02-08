function act(c){
	c.arg = {};
	c.arg2 = {};
	c.returned = c.sut.resolve(c.arg, c.arg2);
}

module.exports = act;
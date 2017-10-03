var assert = require('better-assert');

describe('testBetterAssert',function(){
    var user = {name:'tom'};
	it('BetterAssert - Unit Test',function(){
       assert(user.name == 'tom');
	});

});
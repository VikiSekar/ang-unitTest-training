var expect = require('expect.js');

describe('testExpect',function(){
	it('Expect - Unit Test',function(){
       expect(5).to.be.a('number');
       expect('name').not.to.be.a('number');
	});

});
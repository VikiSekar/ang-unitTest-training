
var should = require('should');

describe('testShould',function(){
	it('should return object type and properties!!',function(){
        var user = {name:'vk',lang:['English','Tamil','Hindi']};

        user.should.be.instanceOf(Object).and.have.property('name','vk');
	});

});
var chai = require('chai');
var assert = require('assert');

describe('Assert',function(){
	it('should return -1 when item is not found in Array!!',function(){
        assert.equal(-1,[1,2,3].indexOf(4));
        assert.equal(-1,[1,2,5].indexOf(8));
	});

});
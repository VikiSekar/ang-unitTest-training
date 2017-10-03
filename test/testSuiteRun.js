var suite = require('suite');
//Doesn't return results in cmd prompt..
suite('testInsteadofIt', function(){
    test('should return -1 when not present', function(){
      assert.equal(-1, [1,6,6,3,7].indexOf(78));
    });
  });


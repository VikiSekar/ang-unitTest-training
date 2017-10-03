var suite = require('suite');
var testSuite = require('mocha').describe;
var usersIt = require('mocha').it;
var usersAssert = require('assert');

testSuite('changeTestCaseNames', function(){
    usersIt('should return -1 when not present', function(){
      usersAssert([1,2,3].indexOf(4), -1);
    });
  });



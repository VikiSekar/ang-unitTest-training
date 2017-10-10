var pageObj = require('./pageObject').SuperCalcPage;

describe('Waiting for Async Operations',function(){
var value = 0;
//-------An Example of not waiting for setTimeOut async without done---- Uncomment to Run-------
/*     beforeEach(function() {
        setTimeout(function() {
        value = 10;
        }, 1000);
    });

    it("should not wait for the timeout before expect and should fail", function() {
        value++;
        expect(value).toBeGreaterThan(10);
    }); */

    beforeEach(function(done) {
        console.log("I am test suite 1");
        setTimeout(function() {
        value = 10;
        done();
        }, 4000);
    });

    it("should wait for the timeout before it block", function(done) {
        console.log("I am ts1 test case 1");
        value++;
        expect(value).toBeGreaterThan(10);
        done();
      });

    it("should wait for async function inside it block as well", function(done) {
        console.log("I am ts1 test case 2");
            resolveAfter3Seconds(value).then(function(value){
                expect(value).toBeGreaterThan(10);
                done();
            });
    });

});

function resolveAfter3Seconds(val){
    return new Promise(function(resolve){
        setTimeout(function(){
            val++;
            resolve(val);
        },3000);
    });     
}


//Implementation of multiple describes & done
describe('Protractor Demo - Super Calc',function(){
    var page = new pageObj();
        beforeEach(function(done){
            console.log("I am test suite 2");
            page.get();
            done();
        });

        it('should add two numbers correctly',function(done){
            console.log("I am ts2 test case 1");
            page.setFirstInput(10);
            page.setSecondInput(5);
            page.selectOperator('+');
            page.clickGoButton();
            expect(page.getResult()).toEqual('15');
            done();
        });

        it('should subtract two numbers correctly',function(done){
            console.log("I am ts2 test case 2");
            page.setFirstInput(10);
            page.setSecondInput(5);
            page.selectOperator('-');
            page.clickGoButton();
            expect(page.getResult()).toEqual('5');
            done();
        });
});
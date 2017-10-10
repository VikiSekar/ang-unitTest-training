var pageObj = require('./pageObject').SuperCalcPage;
describe('Protractor Demo - Super Calc',function(){
    var page = new pageObj();
        
        beforeEach(function(){
            page.get();
        });

        it('should get the title of Page',function(){
            expect(page.getTitle()).toEqual('Super Calculator');

        });
    
    });




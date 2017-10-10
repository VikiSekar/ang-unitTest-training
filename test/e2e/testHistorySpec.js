var pageObj = require('./pageObject').SuperCalcPage;
describe('Protractor Demo - Super Calc',function(){
        var page = new pageObj();
        beforeEach(function(){
            page.get();
        });

        function operate(in1,in2,op){
            page.setFirstInput(in1);
            page.setSecondInput(in2);
            page.selectOperator(op);
            page.clickGoButton();
        }

        it('should have correct history',function(){
            operate(1,2,'+');
            operate(10,5,'-');
            expect(page.getHistory().count()).toEqual(2);
            expect(page.getHistory().first().getText()).toContain('10 - 5');

            operate(2,5,'*');
            expect(page.getHistory().first().getText()).toContain('10');
        });    
    
});



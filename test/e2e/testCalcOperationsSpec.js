var pageObj = require('./pageObject').SuperCalcPage;
describe('Protractor Demo - Super Calc',function(){
    var page = new pageObj();
        beforeEach(function(){
            page.get();
        });

        it('should add two numbers correctly',function(){
            page.setFirstInput(10);
            page.setSecondInput(5);
            page.selectOperator('+');
            page.clickGoButton();
            expect(page.getResult()).toEqual('15');
        });

        it('should subtract two numbers correctly',function(){
            page.setFirstInput(10);
            page.setSecondInput(5);
            page.selectOperator('-');
            page.clickGoButton();
            expect(page.getResult()).toEqual('5');

        });
    });



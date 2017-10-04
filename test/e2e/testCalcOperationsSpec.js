
describe('Protractor Demo - Super Calc',function(){
    
        beforeEach(function(){
            var page = new SuperCalcPage();
            page.get();
        });

        it('should add two numbers correctly',function(){
            var page = new SuperCalcPage();
            page.setFirstInput(10);
            page.setSecondInput(5);
            page.selectOperator('+');
            page.clickGoButton();
            expect(page.getResult()).toEqual('15');

        });

        it('should subtract two numbers correctly',function(){
            var page = new SuperCalcPage();
            page.setFirstInput(10);
            page.setSecondInput(5);
            page.selectOperator('-');
            page.clickGoButton();
            expect(page.getResult()).toEqual('5');

        });
    
    
    });

var SuperCalcPage = function(){
    var txtFirstInput = element(by.model('first'));
    var txtSecondInput = element(by.model('second'));
    var selOperator = element(by.model('operator'));
    var btnGo = element(by.id('gobutton'));
    var result = element(by.binding('latest'));

    this.get = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.getTitle = function(){
        return browser.getTitle();
    };

    this.getResult = function(){
        return result.getText();
    };

    this.selectOperator = function(operator){
        selOperator.element(by.cssContainingText('option',operator)).click();
    };

    this.clickGoButton = function(){
        btnGo.click();
    };

    this.setFirstInput = function(firstInp){
        txtFirstInput.sendKeys(firstInp);
    };

    this.setSecondInput = function(secondInp){
        txtSecondInput.sendKeys(secondInp);
    };

    this.getFirstInput = function(){
        return txtFirstInput;
    };

    this.getSecondInput = function(){
        return txtSecondInput;
    };

};



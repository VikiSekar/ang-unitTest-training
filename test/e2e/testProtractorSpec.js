
describe('Protractor Demo - Super Calc',function(){
    
        
        beforeEach(function(){
            var page = new SuperCalcPage();
            page.get();
        });

        it('should get the title of Page',function(){
            var page = new SuperCalcPage();
            expect(page.getTitle()).toEqual('Super Calculator');

        });
    
    
    });

var SuperCalcPage = function(){
    var txtFirstInput = element(by.model('first'));
    var txtSecondInput = element(by.model('second'));
    var selOperator = element(by.model('operator'));
    var btnGo = element(by.id('gobutton'));

    this.get = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.getTitle = function(){
        return browser.getTitle();
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



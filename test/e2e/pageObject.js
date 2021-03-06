var SuperCalcPage = function(){
    var txtFirstInput = element(by.model('first'));
    var txtSecondInput = element(by.model('second'));
    var selOperator = element(by.model('operator'));
    var btnGo = element(by.id('gobutton'));
    var result = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    this.get = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.getTitle = function(){
        return browser.getTitle();
    };

    this.getHistory = function(){
        return history;
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

module.exports.SuperCalcPage = SuperCalcPage;
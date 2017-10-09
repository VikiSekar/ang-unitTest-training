exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['testHistorySpec.js','testCalcOperationsSpec.js','testProtractorSpec.js'],
    multiCapabilities:[{
      browserName:'chrome'
    },{
      browserName:'firefox'
    }]
  }
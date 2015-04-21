var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = (function(){
    var baseUrl= 'http://localhost:4444/wd/hub';
  var specs = [];
   specs.push('./spec/e2e/testAuthentication.js');
   
   var HtmlReport = function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
      jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './screenshots',
      takeScreenShotsOnlyForFailedSpecs: false,       
      docTitle: 'AngularJs Tests'
      }));
   }




  
  return {
    specs : specs,
    onPrepare:  HtmlReport,
    baseUrl : baseUrl/*,
    capabilities : capabilities*/
  };
  
})();
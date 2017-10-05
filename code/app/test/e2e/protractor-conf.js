// An example configuration file
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may /include glob patterns.
  //specs: ['ui/pages/hello/example.angularjs.spec.js'],
  suites: {
  	example: 'specs/example/**.spec.js',
  	tokens: 'specs/tokens/**.spec.js',
  	login: 'specs/login/**.spec.js',
  	hello: 'specs/hello/**.spec.js',
  	pets: 'specs/pets/**.spec.js',
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  onPrepare: function() {
    browser.baseUrl = "http://localhost:8082/#!";
    global.getPage = function (fileName) {
      var path = require("path");
    	var pagePath = path.join(__dirname, '/objects/', fileName);
    	var PageClass = require(pagePath);
    	var pageObj = new PageClass ();
    	return pageObj;
    }
 }


};

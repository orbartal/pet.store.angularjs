describe('Test pet store - page login - click button', function() {

  var m_mock = null;
  var urlChanged = function(currentUrl) {
    return function () {
      return browser.getCurrentUrl().then(function(actualUrl) {
        console.log('current url: ' + currentUrl);
        console.log('actual url: ' + actualUrl);
        return currentUrl != actualUrl;
      });
    };
  };

  beforeEach(function() {
    m_mock = require('protractor-http-mock');

    m_mock ([{
       request: {
         path: 'http://localhost:8080/tokens',
         method: 'POST'
       },
       response: {
         data: {
          token : "{\"role\":\"admin\",\"credentials\":\"pass\",\"name\":\"admin\"}"
         }
       }
     }]);
    console.log('pet store - page tokens - before each test - get token by password');
  });
  afterEach(function(){
    m_mock.teardown();
    console.log('pet store - page tokens - after each test - get token by password');
  });


  it('Test pet store - page login - click button', function() {

    var loginUrl = "http://localhost:8082/#!/login";
    var petsUrl = "http://localhost:8082/#!/pets";

    // Load the AngularJS homepage.
    console.log('Start test pet store - page login - click button');
    browser.get(loginUrl);
    //Get data
    var labelUserName = element(by.id('idLabelUserName'));
    var inputUserName = element(by.id('idInputUserName'));
    var labelUserPassword = element(by.id('idLabelUserPassword'));
    var inputUserPassword = element(by.id('idInputUserPassword'));
    var btnSubmit = element(by.id('idBtnSubmit'));
    //set data
    inputUserName.clear().sendKeys('admin');
    inputUserPassword.sendKeys('admin');
    //click on button
    btnSubmit.click();


    browser.wait(urlChanged(loginUrl), 1000);
    browser.getCurrentUrl().then(onSucess, onError);

    function onSucess(actualUrl){
      var isUrlAsExpected = (petsUrl==actualUrl);
      console.log('expected url: ' + petsUrl);
      console.log('actual url: ' + actualUrl);
      console.log('isUrlAsExpected: ' + isUrlAsExpected);
      console.log('End test pet store - page login - click button');
      expect(isUrlAsExpected).toBeTruthy();
    }

    function onError(e){
        console.log('End test pet store - page login - click button - error: ' + e);
    }

  });
});

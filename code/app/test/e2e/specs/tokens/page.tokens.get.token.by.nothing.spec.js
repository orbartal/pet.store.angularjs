describe('pet store get tokens from service', function() {

  var m_mock = null;
  beforeEach(function() {
    m_mock = require('protractor-http-mock');

    m_mock ([{
       request: {
         path: 'http://localhost:8080/tokens/nothing',
         method: 'GET'
       },
       response: {
         data: {
          token : "anonymous"
         }
       }
     }]);
    console.log('Before each test pet store get tokens from service');
  });
  afterEach(function(){
    m_mock.teardown();
    console.log('After each test pet store get tokens from service');
  });

  it('pet store get tokens from service', function() {
    console.log('Start it test pet store get tokens from service');
    browser.get('http://localhost:8082/#!/tokens');
    //Get data
    browser.waitForAngular();
    var responceModelMessage = element(by.model('vm.modelMessage'));
    var responceModelTokenFromService = element(by.model('vm.modelTokenFromService'));
    //Test result
    expect(responceModelMessage.getAttribute('value')).toBe('success');
    expect(responceModelTokenFromService.getAttribute('value')).toBe('anonymous');
    console.log('End it test pet store get tokens from service');
  });
});

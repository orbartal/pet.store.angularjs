describe('pet store - page tokens - get token by password', function() {

  var m_mock = null;
  beforeEach(function() {
    m_mock = require('protractor-http-mock');

    m_mock ([{
       request: {
         path: 'http://localhost:8080/tokens/password/admin/admin',
         method: 'GET'
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

  it('pet store - page tokens - get token by password', function() {
    console.log('Start it test pet store get tokens from service');
    browser.get('http://localhost:8082/#!/tokens');
    var token = "{\"role\":\"admin\",\"credentials\":\"pass\",\"name\":\"admin\"}";
    //Get data
    var responceModelMessage = element(by.model('vm.modelMessage2'));
    var responceModelTokenFromService = element(by.model('vm.modelTokenFromService2'));
    //Test result
    expect(responceModelMessage.getAttribute('value')).toBe('success');
    expect(responceModelTokenFromService.getAttribute('value')).toBe(token);
    console.log('End it test pet store get tokens from service');
  });
});

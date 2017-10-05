describe('Test pet store page tokens - get html element by id', function() {
  it('Test pet store page tokens - get html element by id', function() {
    // Load the AngularJS homepage.
    console.log('Start test pet store page tokens - get html element by id');
    browser.get('http://localhost:8082/#!/tokens');
    //Get data
    var responceId = element(by.id('idToken'));
    //Test result
    expect(responceId.getText()).toEqual('idToken');
    console.log('End test pet store page tokens - get html element by id');
  });
});

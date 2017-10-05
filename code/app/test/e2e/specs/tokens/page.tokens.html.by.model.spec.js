describe('Test pet store page tokens - get html element by model', function() {
  it('Test pet store page tokens - get html element by model', function() {
    // Load the AngularJS homepage.
    console.log('Start test pet store page tokens - get html element by model');
    browser.get('http://localhost:8082/#!/tokens');
    //Get data
    var responceModel = element(by.model('vm.modelToken'));
    //Test result
    expect(responceModel.getAttribute('value')).toBe('modelToken');
    console.log('End test pet store page tokens - get html element by model');
  });
});

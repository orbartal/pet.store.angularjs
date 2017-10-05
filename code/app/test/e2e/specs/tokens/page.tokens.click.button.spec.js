describe('pet store - page tokens - click button', function() {

  var m_mock = null;
  beforeEach(function() {
    console.log('pet store - page tokens - click button - before each test');
  });
  afterEach(function(){
    console.log('pet store - page tokens - click button - after each test');
  });

  it('pet store - page tokens - click button', function() {
    console.log('pet store - page tokens - click button - start test');
    browser.get('http://localhost:8082/#!/tokens');
    //Get data
    var responceIdBtn = element(by.id('idBtn'));
    var responceModelText = element(by.model('vm.modelChangeByButton'));
    //Test result
    expect(responceIdBtn.getText()).toEqual('click');
    expect(responceModelText.getAttribute('value')).toBe('before');
    //Click the button
    responceIdBtn.click();
    expect(responceModelText.getAttribute('value')).toBe('after');
    console.log('pet store - page tokens - click button - start test');
  });
});

describe('Test pet store - page login - insert data', function() {
  it('Test pet store - page login - insert data', function() {
    // Load the AngularJS homepage.
    console.log('Start test pet store - page login - insert data');
    browser.get('http://localhost:8082/#!/login');
    //Get data
    var labelUserName = element(by.id('idLabelUserName'));
    var inputUserName = element(by.id('idInputUserName'));
    var labelUserPassword = element(by.id('idLabelUserPassword'));
    var inputUserPassword = element(by.id('idInputUserPassword'));
    var btnSubmit = element(by.id('idBtnSubmit'));
    //set data
    inputUserName.clear().sendKeys('admin');
    inputUserPassword.sendKeys('admin');
    //Test result
    expect(labelUserName.getText()).toEqual('Username');
    expect(inputUserName.getAttribute("value")).toEqual('admin');
    expect(labelUserPassword.getText()).toEqual('Password');
    expect(inputUserPassword.getAttribute("value")).toEqual('admin');
    expect(btnSubmit.getText()).toEqual('Login');
    console.log('End test pet store - page login - insert data');
  });
});

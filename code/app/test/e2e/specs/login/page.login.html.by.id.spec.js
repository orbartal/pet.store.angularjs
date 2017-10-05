describe(__filename, function() {
  it('get html element by id', function() {
    // Load the AngularJS homepage.
    browser.get('http://localhost:8082/#!/login');
    //Get data
    var labelUserName = element(by.id('idLabelUserName'));
    var inputUserName = element(by.id('idInputUserName'));
    var labelUserPassword = element(by.id('idLabelUserPassword'));
    var inputUserPassword = element(by.id('idInputUserPassword'));
    var btnSubmit = element(by.id('idBtnSubmit'));
    //Test result
    expect(labelUserName.getText()).toEqual('Username');
    expect(inputUserName.getText()).toEqual('');
    expect(labelUserPassword.getText()).toEqual('Password');
    expect(inputUserPassword.getText()).toEqual('');
    expect(btnSubmit.getText()).toEqual('Login');
  });
});

describe(__filename, function() {

	var m_mock = require('protractor-http-mock');
	var m_pageLogin = getPage('login.page.object.js');
	var m_pageHello = getPage('hello.page.object.js');

	beforeEach(function () {
		var loginMock = m_pageLogin.getLoginMock('admin', 'admin');
		var helloMock = m_pageHello.getHelloMock();
		m_mock ([loginMock, helloMock]);
		m_pageLogin.signIn('admin', 'admin');
		m_pageHello.loadPageByMenu();
	});

  afterEach(function(){
    m_mock.teardown();
  });

	it('testDataFromServer', function() {
    //Get data
    var responceModelMessage = element(by.model('vm.modelMessage'));
    var responceModelHelloFromService = element(by.model('vm.modelHelloFromService'));
    //Test result
    expect(responceModelMessage.getAttribute('value')).toBe('success');
    expect(responceModelHelloFromService.getAttribute('value')).toBe('Hello from server');
	});

});

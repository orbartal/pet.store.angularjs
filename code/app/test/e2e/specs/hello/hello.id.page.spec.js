describe(__filename, function() {
	var m_pageLogin = getPage('login.page.object.js');
	var m_pageHello = getPage('hello.page.object.js');
	var m_mock = require('protractor-http-mock');

	beforeEach(function () {
    m_mock ([m_pageLogin.getLoginMock('admin', 'admin')]);
		m_pageLogin.signIn('admin', 'admin');
		m_pageHello.loadPageByMenu();
	});

	afterEach(function(){
    m_mock.teardown();
  });

	it('testElementById', function() {
		//Get data
	 	var idHello = element(by.id('idHello'));
		//Test result
   	expect(idHello.getText()).toEqual('idHello');
	});

	it('testElementByModel', function() {
		//Get data
	  var responceModel = element(by.model('vm.modelHello'));
		//Test result
    expect(responceModel.getAttribute('value')).toBe('modelHello');
	});

});

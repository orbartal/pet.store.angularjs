describe(__filename, function() {
	var m_mock = require('protractor-http-mock');
	var m_pageLogin = getPage('login.page.object.js');
	var m_pagePets = getPage('pets.page.object.js');

	beforeEach(function () {
		m_mock ([m_pageLogin.getLoginMock('admin', 'admin')]);
		m_pageLogin.signIn('admin', 'admin');
		m_pagePets.loadPageByMenu();
	});

	afterEach(function(){
    m_mock.teardown();
  });

	it('testButtonsById', function() {
		//Get data
	 	var idBtnRead = element(by.id('idBtnRead'));
    var idBtnCreate = element(by.id('idBtnCreate'));
    var idBtnDelete = element(by.id('idBtnDelete'));
		//Test result
   	expect(idBtnRead.getText()).toEqual('read');
    expect(idBtnCreate.getText()).toEqual('create');
    expect(idBtnDelete.getText()).toEqual('delete');
	});

});

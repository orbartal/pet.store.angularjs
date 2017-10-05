describe(__filename, function() {
	var m_pageLogin = getPage('login.page.object.js');
	var m_pagePets = getPage('pets.page.object.js');
	var m_mock = require('protractor-http-mock');

	beforeEach(function () {
		var loginMock = m_pageLogin.getLoginMock('admin', 'admin');
		var petReadMock = m_pagePets.getPetReadMock();
		m_mock ([loginMock, petReadMock]);
		m_pageLogin.signIn('admin', 'admin');
		m_pagePets.loadPageByMenu();
	});


  afterEach(function(){
    m_mock.teardown();
  });

	it('testRead', function() {
		//Validate button exist
	 	var idBtnRead = element(by.id('idBtnRead'));
		expect(idBtnRead).toBeTruthy();
		expect(idBtnRead.getText()).toEqual('read');
		//open modal
		idBtnRead.click();
		browser.waitForAngular();
		//Set modal input
		var textReadPetId = element(by.model('vm.pet.id'));
		expect(textReadPetId).toBeTruthy();
		textReadPetId.clear().sendKeys('1');
	//	browser.driver.sleep(2000);
		//Get pet
		var btnSubmit = element(by.buttonText("Read"));
		expect(btnSubmit).toBeTruthy();
		btnSubmit.click();
		browser.waitForAngular();

		//Test result
		//browser.driver.sleep(2000);
		var textReadPetId = element(by.model('vm.pet.id'));
		expect(textReadPetId.getAttribute('value')).toBe('1');

		var textReadPetName = element(by.model('vm.pet.name'));
		expect(textReadPetName.getAttribute('value')).toBe('dog1');

		var textReadPetStatus = element(by.model('vm.pet.status'));
		expect(textReadPetStatus.getAttribute('value')).toBe('free');
		//browser.driver.sleep(2000);
	});

});

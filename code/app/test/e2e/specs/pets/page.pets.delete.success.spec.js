describe(__filename, function() {
	var m_pageLogin = getPage('login.page.object.js');
	var m_pagePets = getPage('pets.page.object.js');
	var m_mock = require('protractor-http-mock');
	var m_pet = m_pagePets.getValidPet();

	beforeEach(function () {
		var loginMock = m_pageLogin.getLoginMock('admin', 'admin');
		var petDeleteMock = m_pagePets.getPetDeleteMock();
		m_mock ([loginMock, petDeleteMock]);
		m_pageLogin.signIn('admin', 'admin');
		m_pagePets.loadPageByMenu();
	});


  afterEach(function(){
    m_mock.teardown();
  });

	it('testDelete', function() {
		//Validate button exist
	 	var idBtnDelete = element(by.id('idBtnDelete'));
		expect(idBtnDelete).toBeTruthy();
		expect(idBtnDelete.getText()).toEqual('delete');

		//open modal
		idBtnDelete.click();
		browser.waitForAngular();

		//Set modal input
		var textDeletePetId = element(by.model('vm.id'));
		expect(textDeletePetId).toBeTruthy();
		textDeletePetId.clear().sendKeys(m_pet.id);

		var btnSubmit = element(by.buttonText("Delete"));
		expect(btnSubmit).toBeTruthy();
		btnSubmit.click();

		//Test toster message
		browser.driver.sleep(2000);
		browser.waitForAngular();
		var toastElement = 	element(by.css('.toast-title'));
		expect(toastElement.getText()).toEqual('Delete pet successfully');
	});

});

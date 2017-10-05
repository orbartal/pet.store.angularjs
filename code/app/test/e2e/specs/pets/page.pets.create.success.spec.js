describe(__filename, function() {
	var m_pageLogin = getPage('login.page.object.js');
	var m_pagePets = getPage('pets.page.object.js');
	var m_mock = require('protractor-http-mock');
	var m_pet = m_pagePets.getValidPet();

	beforeEach(function () {
		var loginMock = m_pageLogin.getLoginMock('admin', 'admin');
		var petCreateMock = m_pagePets.getPetCreateMock();
		m_mock ([loginMock, petCreateMock]);
		m_pageLogin.signIn('admin', 'admin');
		m_pagePets.loadPageByMenu();
	});


  afterEach(function(){
    m_mock.teardown();
  });

	it('testCreate', function() {
		//Validate button exist
	 	var idBtnCreate = element(by.id('idBtnCreate'));
		expect(idBtnCreate).toBeTruthy();
		expect(idBtnCreate.getText()).toEqual('create');

		//open modal
		idBtnCreate.click();
		browser.waitForAngular();

		//Set modal input
		var textCreatePetId = element(by.model('vm.pet.id'));
		expect(textCreatePetId).toBeTruthy();
		textCreatePetId.clear().sendKeys(m_pet.id);

		var textCreatePetName = element(by.model('vm.pet.name'));
		expect(textCreatePetName).toBeTruthy();
		textCreatePetName.clear().sendKeys(m_pet.name);

		var textCreatePetStatus = element(by.model('vm.pet.status'));
		expect(textCreatePetStatus).toBeTruthy();
		textCreatePetStatus.clear().sendKeys(m_pet.status);

		var btnSubmit = element(by.buttonText("Create"));
		expect(btnSubmit).toBeTruthy();
		btnSubmit.click();

		//Test toster message
		browser.waitForAngular();
		var toastElement = 	element(by.css('.toast-title'));
		expect(toastElement.getText()).toEqual('Create pet successfully');
	});

});

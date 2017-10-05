describe('angularjs hello world with object', function() {
	var m_pageAngularn = getPage('angular.page.js');

	it('set and get data with page', function() {
		// Load the AngularJS homepage.
		m_pageAngularn.loadPage();
		var inName = 'Bartal';
		//Set data
		m_pageAngularn.setName(inName);
		//Get data
		var outHello = m_pageAngularn.getHello();
		//Test data
		expect(outHello).toEqual('Hello Bartal!');
	});

});

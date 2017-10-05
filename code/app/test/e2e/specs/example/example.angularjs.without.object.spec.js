describe('angularjs hello world', function() {

  it('set and get data with out page', function() {
		// Load the AngularJS homepage.
		browser.get('http://www.angularjs.org');
		//Send data
		element(by.model('yourName')).sendKeys('Bartal');
		//Get data
		var responce = element(by.binding('yourName'));
		//Test result
		expect(responce.getText()).toEqual('Hello Bartal!');
	});
});

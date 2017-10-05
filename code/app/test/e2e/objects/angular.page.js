var AngularPage = function() {
  var nameInput = element(by.model('yourName'));
  var nameOutput = element(by.binding('yourName'));

  this.loadPage = function() {
    browser.get('http://www.angularjs.org');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
  };

  this.getHello = function() {
    return nameOutput.getText();
  };
};
module.exports = AngularPage;

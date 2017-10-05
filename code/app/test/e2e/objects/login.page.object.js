var LoginPageObject = function() {

 this.loadPage = function() {
   var loginUrl = browser.baseUrl + "/login";
   browser.get(loginUrl);
 };

 this.log1 = function() {
   console.log("login log1");
 };

 this.setUserName = function(name) {
   var inputUserName = element(by.id('idInputUserName'));
   inputUserName.sendKeys(name);
 };

 this.setUserPassword = function(password) {
   var inputUserPassword = element(by.id('idInputUserPassword'));
   inputUserPassword.sendKeys(password);
 };

 this.clickLogin = function() {
   var btnSubmit = element(by.id('idBtnSubmit'));
   btnSubmit.click();
 };

 this.getLoginMock = function(name, password) {
   var toeknObj = {'role' : 'admin', 'name' : name, 'password' : password};
    //"{\"role\":\"admin\",\"credentials\":\"pass\",\"name\":\"admin\"}"
   var loginMock = {
     request: {
         path: 'http://localhost:8080/tokens/password/' + name + '/' + password,
         method: 'GET'
     },
     response: {
       data: {
         token : toeknObj
       }
     }//End response
   };//End loginMock
   return loginMock;
 };

 this.signIn = function(name, password) {
    this.loadPage();
    this.setUserName(name);
    this.setUserPassword(password);
    this.clickLogin();
 };

};
module.exports = LoginPageObject;

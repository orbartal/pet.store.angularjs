var HelloPageObject = function() {

 this.loadPageByUrl = function() {
   var helloUrl = browser.baseUrl + "/hello";
   browser.get(helloUrl);
 };

 this.loadPageByMenu = function() {
   var link = element(by.id('idLinkSiteHello'));
   link.click();
 };

 this.getHelloMock = function() {
    //"{\"role\":\"admin\",\"credentials\":\"pass\",\"name\":\"admin\"}"
   var helloMock = {
     request: {
         path: 'http://localhost:8080/hello',
         method: 'GET'
     },
     response: {
       data: {
         message : 'Hello from server'
       }
     }//End response
   };//End helloMock
   return helloMock;
 };

 this.log1 = function() {
   console.log("hello log1");
 };

};
module.exports = HelloPageObject;

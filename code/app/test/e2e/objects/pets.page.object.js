var PetsPageObject = function() {

 this.loadPageByUrl = function() {
   var helloUrl = browser.baseUrl + "/pets";
   browser.get(helloUrl);
 };

 this.loadPageByMenu = function() {
   var link = element(by.id('idLinkSitePets'));
   link.click();
 };

 this.getValidPet = function() {
   return {"id" : 1, "name" : "dog1", "status" : "free"};
 };

 this.getPetReadMock = function() {
   var pet = {"id" : 1, "name" : "dog1", "status" : "free"};
   var petsMock =  {
       request: {
         path: 'http://localhost:8080/pet/1',
         method: 'GET'
       },
       response: {
         data: pet
       }
    };
   return petsMock;
 };

 this.getPetDeleteMock = function() {
   var pet = {"id" : 1, "name" : "dog1", "status" : "free"};
   var petsMock =  {
      request: {
        path: 'http://localhost:8080/pet/1',
        method: 'DELETE'
      },
      response: {
        data: true
      }
    };
   return petsMock;
 };

 this.getPetCreateMock = function() {
   var petsMock =  {
      request: {
        path: 'http://localhost:8080/pet',
        method: 'POST'
      },
      response: {
        data: true
      }
    };
   return petsMock;
 };


 this.log1 = function() {
   console.log("pets log1");
 };

};
module.exports = PetsPageObject;

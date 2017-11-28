app.factory('webservice',function($http){
   var obj = {};
   var url = "http://sample.com:8000/api/v1/"

   obj.applicationData = function(){
       return $http.get(url+'applications/?format=json');
   }

   return obj;
});

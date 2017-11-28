app.factory('authservice',function($http){
   var obj = {};
   var url = "http://sample.com/api/v1/"

    obj.loginData = function(data){
       return $http.post(url+'login/?format=json',data);
    }

    return obj;
});

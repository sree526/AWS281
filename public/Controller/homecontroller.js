homeapp.controller('homecontroller', function($scope, $http,socket,$localStorage) {  
  $scope.getdata=function(){
	  console.log($localStorage.location);
	  socket.on('livestream', function(data) {
	   console.log(data);
	  });
  };
  
  $scope.logout=function(){
	 console.log("hello in logout");
	  $http.get('/logout'
				)
      .success(function(data) {
          // clear the form so our user is ready to enter another
//          $scope.todos = data;
         console.log(data);
          if(data==="success")
          window.location.assign('/');
          else
          	 console.log("got another ");
      })
      .error(function(data) {
          console.log('Error: ' + data);
      });  
  };
});

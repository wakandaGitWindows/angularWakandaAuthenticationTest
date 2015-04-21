

var app = angular.module('wakandaAngAPP', ['wakanda']);

app.controller("controller", function($scope, $wakanda) {
    
	
	$scope.login = function(option){
		var result={} ;
		$wakanda.$login(option.login, option.password).then( function(loginResult){
			
			
			 if(loginResult.result === true){
			 	
			 	result.loged="yes";
			 	
			 	 $wakanda.$currentUser().then( function (res){
			  	
			  	
			  	result.user=res.result;
			  });
			  
			 }
			 else
			 {
			 	result.loged="non";
			 	result.user=null;
			 }
			
			
			
		});
		
		$scope.result=result;
		
		}
		
		
		
		
	$scope.loginByPassword = function(option){
		var result={} ;
		$wakanda.$login(option.login, option.password).then( function(loginResult){
			
			
			 if(loginResult.result === true){
			 	
			 	result.loged="yes";
			 	
			 	 $wakanda.$currentUser().then( function (res){
			  	
			  	
			  	result.user=res.result;
			  });
			  
			 }
			 else
			 {
			 	result.loged="non";
			 	result.user=null;
			 }
			
			
			
		});
		
		$scope.result=result;
		
		}
	
	
	$scope.currentUser = function(){
		
				var result={} ; 	
			 	 $wakanda.$currentUser().then( function (res){
			  	
			  	
			  	result.user=res.result;
			  });
			  
			
		
		$scope.result=result;
		
		}
	
	
	$scope.currentUserBelongsTo = function(option){
		
				var result={} ; 	
			 	 $wakanda.$currentUserBelongsTo(option.Group).then(  function (res){
			  	
			  	if(res.result)
			  	{
			  		
					 result.userBelong ="yes";
			  	}
			  	
			  	else
			  	{
			  		result.userBelong ="Non";
			  	}
			  	
			  });
			
		
		$scope.result=result;
		
		}
	
	
	
	$scope.logout = function(){
		
				var result={} ; 	
			 	 $wakanda.$logout().then(  function (res){
			  	
			  	if(res.result)
			  	{
			  		
					 result.loged ="Non";
					 $wakanda.$currentUser().then( function (res){
			  	
			  	
			  	result.user=res.result;
			  });
			  	}
			  	
			  	else
			  	{
			  		result.loged ="yes";
			  		$wakanda.$currentUser().then( function (res){
			  	
			  	
			  	result.user=res.result;
			  });
			  	}
			  	
			  });
			
		
		$scope.result=result;
		
		}
	
	
			  
		
		
		
		
		

 });
  
  
  
  
  
  



//This is the inner app.js

var app = window.angular.module('clickerApp', []);


app.controller('clickerCtrl', clickerCtrl);


function clickerCtrl($scope, $http) {

  console.log(">NG:CLICKERCTRL called");

   
    
  $scope.addPoint = function(teamColor) {
     
     
     
    $http({
        url: 'http://http://18.222.237.194:4200/update',
        method: 'POST',
        data: teamColor
    }).then(function(httpResponse){
        console.log('response:', httpResponse);
    })
      
      
    console.log("\t AddPoint() called, teamClr= " + teamColor);
    

    
    console.log("\t> Team Clicks: R="+$scope.redClicks + ", B=" + $scope.blueClicks + ", Y=" + $scope.yellowClicks);
  };
<<<<<<< HEAD
  
}
=======
}
>>>>>>> 4afa8ebf4571ccadcb894fbf5c6b162ecfc3fc9c

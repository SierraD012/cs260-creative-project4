//This is the inner app.js

var app = window.angular.module('clickerApp', []);


app.controller('clickerCtrl', clickerCtrl);


function clickerCtrl($scope, $http) {

  console.log(">NG:CLICKERCTRL called");

   
    
  $scope.addPoint = function(teamColor) {
     
     
     
    $http({
        url: 'localhost:8080/update',
        method: 'POST',
        data: teamColor
    }).then(function(httpResponse){
        console.log('response:', httpResponse);
    })
      
      
    console.log("\t AddPoint() called, teamClr= " + teamColor);
    

    
    console.log("\t> Team Clicks: R="+$scope.redClicks + ", B=" + $scope.blueClicks + ", Y=" + $scope.yellowClicks);
  };
  
}


//This is the inner app.js

var app = window.angular.module('clickerApp', []);

app.controller('clickerCtrl', clickerCtrl);

function clickerCtrl($scope, $http) {
    console.log(">NG:CLICKERCTRL called");

    $scope.redPoints = 0;
    $scope.bluePoints = 0;
    $scope.yellowPoints = 0;

    $scope.addPoint = function(teamColor) {
        
        $http({
            url: 'http://54.236.42.112:8080/update',
            method: 'POST',
            data: teamColor
        }).then(function(httpResponse) {
            console.log('response:', httpResponse);
        
            $scope.redPoints = httpResponse.red;
            $scope.bluePoints = httpResponse.blue;
            $scope.yellowPoints = httpResponse.yellow;
  
            //change the bg color here 
            var winningPts = Math.max($scope.redPts, $scope.bluePts, $scope.yellowPts);
            if (winningPts == $scope.redPts){
              //change bg to red
              $("#mainBody").css("background-color", "#7c0000");
            } else if (winningPts == $scope.bluePts) {
              //change bg to blue
              $("#mainBody").css("background-color", "#003b9b");
            } else {
              //change bg to yellow
              $("#mainBody").css("background-color", "#917d00");
            }
            
        });

        console.log("\t AddPoint() called, teamClr= " + teamColor);
        console.log("\t> Team Clicks: R=" + $scope.redClicks + ", B=" + $scope.blueClicks + ", Y=" + $scope.yellowClicks);
    };
}

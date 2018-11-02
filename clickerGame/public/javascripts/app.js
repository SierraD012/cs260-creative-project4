//This is the inner app.js

var app = window.angular.module('clickerApp', []);

app.controller('clickerCtrl', clickerCtrl);

function clickerCtrl($scope, $http) {
    console.log(">NG:CLICKERCTRL called");

    $scope.redPoints = 0;
    $scope.bluePoints = 0;
    $scope.yellowPoints = 0;
    
    var red = 0;
    var blue = 0;
    var yellow = 0;
    

    $scope.addPoint = function(teamColor) {
        
        $.post('http://54.236.42.112:4200/updateTeamData',{color:teamColor}, function(httpResponse) {
            console.log('response:', httpResponse);
            var colors = JSON.parse(httpResponse)
            console.log(colors)
            red = colors.red;
            blue = colors.blue;
            yellow = colors.yellow
            var innerCollors = [red,blue,yellow]
            console.log(innerCollors)
            
            $scope.redPoints = colors.red
            $scope.bluePoints = colors.blue
            $scope.yellowPoints = colors.yellow
            
            //update text fields
            $("#redPts").text($scope.redPoints);
            $("#bluePts").text($scope.bluePoints);
            $("#yellowPts").text($scope.yellowPoints);
  
            //change BG color to match current winning team 
            var winningPts = Math.max($scope.redPoints, $scope.bluePoints, $scope.yellowPoints);
            if (winningPts == $scope.redPoints){
              //change bg to red
              $("#mainBody").css("background-color", "#7c0000");
            } else if (winningPts == $scope.bluePoints) {
              //change bg to blue
              $("#mainBody").css("background-color", "#003b9b");
            } else {
              //change bg to yellow
              $("#mainBody").css("background-color", "#917d00");
            }
            
            console.log("\t>AddPoint(): done, scores: R=" + $scope.redPoints + ", B=" + $scope.bluePoints + ", Y=" + $scope.yellowPoints);
        });
    };
}

function myFunc(){
    var toSend;
    toSend.color
}

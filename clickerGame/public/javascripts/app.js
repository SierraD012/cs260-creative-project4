//This is the inner app.js

var app = window.angular.module('clickerApp', []);

app.controller('clickerCtrl', clickerCtrl);


function clickerCtrl($scope) {

    console.log(">NG:CLICKERCTRL called");

    $scope.redClicks = 0;
    $scope.blueClicks = 0;
    $scope.yellowClicks = 0;


    $scope.addPoint = function(teamColor) {
        console.log("\t AddPoint() called, teamClr= " + teamColor);

        switch (teamColor) {
            case ('red'):
                $scope.redClicks++;
                break;
            case ('blue'):
                $scope.blueClicks++;
                break;
            case ('yellow'):
                $scope.yellowClicks++;
                break;
        }

        var array = [$scope.redClicks, $scope.blueClicks, $scope.yellowClicks]
        var max = Math.max(array)

        if ($scope.redClicks == max) {
            setColor("red")
        }
        else if ($scope.blueClicks == max) {
            setColor("blue")
        }
        else if ($scope.yellowClicks == max) {
            setColor("yellow")
        }

        console.log("\t> Team Clicks: R=" + $scope.redClicks + ", B=" + $scope.blueClicks + ", Y=" + $scope.yellowClicks);
    };

    $scope.setColor = function(color){
        $("#mainBody").css("background-color", color)
    }

}

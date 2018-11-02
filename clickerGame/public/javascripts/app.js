//This is the inner app.js

var app = window.angular.module('clickerApp', []);

app.controller('clickerCtrl', clickerCtrl);

function clickerCtrl($scope, $http) {

    console.log(">NG:CLICKERCTRL called");

    $scope.addPoint = function(teamColor) {
        var toSend = {color:teamColor}
        
        $http({
            url: 'http://54.236.42.112:4200/update',
            method: 'POST',
            data: toSend
        }).then(function(httpResponse) {
            console.log('response:', httpResponse);
        })

        console.log("\t AddPoint() called, teamClr= " + toSend);



        console.log("\t> Team Clicks: R=" + $scope.redClicks + ", B=" + $scope.blueClicks + ", Y=" + $scope.yellowClicks);
    };
}

function myFunc(){
    var toSend;
    toSend.color
}

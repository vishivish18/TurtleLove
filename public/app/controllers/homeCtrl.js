angular.module('app')
    .controller('homeCtrl', function($scope, $http) {


        $scope.setup = function() {
        	console.log("here")
        	var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(225, 600);
            ctx.lineTo(300, 150);
            ctx.stroke();

        }

        $scope.draw = function() {
            
        }



        $scope.setup();



    })

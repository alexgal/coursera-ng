(function () {
    'use strict'
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";

        $scope.checkFoodAmount = function(){
            /*
            * empty statement in the list is not considered as an item
            *  for example: item1, item2, , item3 = 3 items
            */
            function getNumberOfDishes(dishes) {

                var number = 0;

                for (var i = 0; i < dishes.length; i++) {
                    var dish = dishes[i];
                    if (dish != "") {
                        number++;
                    }
                }
                return number;
            }

            var number = getNumberOfDishes($scope.dishes.split(','));

            if (number == 0) {
                $scope.message = "Please enter data first" ;
            } else if (number <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }

        }
    }
})();
(function () {
    'use strict'

    angular.module('public')
    .directive('dish', DishDirective);

    DishDirective.$inject = ['$q', '$http', 'APIBasePath', 'UserService'];
    function DishDirective($q, $http, APIBasePath, userService) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.dish = function(modelValue, viewValue) {
                    if(ctrl.$isEmpty(modelValue) || modelValue.length < 2 ) {
                        return $q.reject(); //empty case considered invalid
                    }
                    var def = $q.defer();
                    $http.get((APIBasePath + "/menu_items/" + modelValue +".json"))
                        .success(function(data) {
                            def.resolve();
                            //saving round trip to server by saving favourite after validation
                            userService.setFavouriteDish(data);
                        })
                        .error(function(msg, code){
                            def.reject();
                        })

                    return def.promise;
                }
            }
        }
    }
})();
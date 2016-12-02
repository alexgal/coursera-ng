(function(){
    'use strict'
    angular.module('Data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'BASE_URL'];
    function MenuDataService($http, BASE_URL) {
        var service = this;

        service.getAllCategories = function () {
            var httpParams = {
                method : "GET",
                //@todo move base rul to config
                url: (BASE_URL + "/categories.json")
            };
            return $http(httpParams);
        }

        service.getItemsForCategory = function(categoryShortName) {
            var httpParams = {
                method : "GET",
                //@todo move base rul to config
                url: ((BASE_URL + "/menu_items.json?category=" + categoryShortName))
            };
            return $http(httpParams);
        }
    }
})();


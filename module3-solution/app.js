(function(){
    'use-strict'
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(service) {
        var narrowCtrl = this;
        narrowCtrl.criteria = '';
        /**
         * Food matcher.
         * Calls :
         * 1. service.getMenuItems in order to fetch items from the server
         * 2. service.getMatchedMenuItems in order to get matched items
         */
        narrowCtrl.matchFood = function () {
            var promise = service.getMenuItems();
            promise.then(function (result) {
                narrowCtrl.matches =
                    service.getMatchedMenuItems(result, narrowCtrl.criteria)
            });
        };

        narrowCtrl.removeItem = function(index) {
            narrowCtrl.matches.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        /**
         * Filters out matched items based on criteria. Sets title based on
         * length of matched items array.
         */
        service.getMatchedMenuItems =
            function (result, criteria) {
                function matchCriteria(item) {
                    return item.description.indexOf(criteria) != -1;
                }
                function getTitle(matches) {
                    var title = '';
                    if (matches.length > 0) {
                        title = "Matched food";
                    } else {
                        title = "Nothing found";
                    }
                    return title;
                }
                if (criteria != '') {
                    var items = result.data.menu_items;
                    var matches =  items.filter(matchCriteria);
                } else {
                    var matches = [];
                }
                var title = getTitle(matches);
                return {
                  matches : matches,
                  title : title
                };
            }
        /**
         * Performs http request in order to get menu items.
         * Returns promise. 
         * @returns {*}
         */
        service.getMenuItems =
            function() {
                var httpParams = {
                    method : "GET",
                    url: "https://davids-restaurant.herokuapp.com/menu_items.json"
                };
                return $http(httpParams);
            };
        return service;
    }
    
    function FoundItemsDirective() {
        var ddo = {
            scope : {
                // removeItem : '&onRemove',
                items : '<',
                onRemove : '&'
            },
            templateUrl: 'matches.html'
        };
        return ddo;
    }
})();
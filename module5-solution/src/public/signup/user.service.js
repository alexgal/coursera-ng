(function () {
    'use strict'

    angular.module('public')
    .service('UserService', UserService);

    UserService.$inject = ['APIBasePath']
    function UserService(APIBasePath) {
        var service = this;
        service.user = null;
        service.favouriteDish = null;
        service.setUserDetails = function(user) {
            service.user = user;
        }
        service.getUserDetails = function() {
            return service.user;
        }
        service.setFavouriteDish = function(dish) {
            service.favouriteDish = dish;
        }
        service.getFavouriteDish = function() {
            return service.favouriteDish;
        }
        service.getImage = function() {
            var url = null;
            if (service.favouriteDish != null) {
                var shortName = service.favouriteDish.short_name;
                url = APIBasePath + "/images/" + shortName + ".jpg";
            }
            return url;
        }

        return service;
    }
})();
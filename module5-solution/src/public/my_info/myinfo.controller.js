(function () {
    'use strict'

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService'];
    function MyInfoController(service) {
        var $ctrl = this;

        $ctrl.favouriteDish = service.getFavouriteDish();

        $ctrl.imagePath = service.getImage();

        $ctrl.user = service.getUserDetails();
    }

})();
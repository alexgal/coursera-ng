(function () {
    'use strict'

    angular.module('Data')
        .controller('CategoryItemController', CategoryItemController);

CategoryItemController.$inject = ['MenuDataService', '$stateParams']
    function CategoryItemController(service, $stateParams) {
        var ctrl = this;
        ctrl.categoryId = $stateParams.categoryId;
        var promise = service.getItemsForCategory(ctrl.categoryId);
        promise.then(function (result) {
            ctrl.items = result.data.menu_items;
        })
    }
})();
(function () {
    'use strict'

    angular.module('Data')
        .controller('CategoryListController', CategoryListController);

    CategoryListController.$inject = ['MenuDataService'];

    function CategoryListController(service) {
        var ctrl = this;

        var promise = service.getAllCategories();
        promise.then(function (result) {
            ctrl.categories = result.data;
        });
    }
})();
(function () {
    'use strict';
    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/templates/categories_list.template.html',
            bindings: {
                items: '<'
            }
        });

})();

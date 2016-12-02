(function () {
    'use strict'
    angular.module('MenuApp')
        .component('itemsList', {
            templateUrl: 'src/templates/item.template.html',
            bindings: {
                items: '<'
            }
        });
})();
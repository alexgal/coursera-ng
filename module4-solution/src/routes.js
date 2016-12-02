(function () {
    'use strict'
    angular.module('MenuApp')
        .config(RoutesConfig)

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        //redirect to home page is no url matches
        $urlRouterProvider.otherwise('/');

        /* setting up UI states */
        $stateProvider

        //home page
        .state('home', {
            url : '/',
            templateUrl: 'src/templates/home.template.html'
        })

        //categories list
        .state('categories', {
            url : '/categories',
            templateUrl: 'src/templates/categories.template.html',
            controller: 'CategoryListController as listCategory'
        })
        //category item
        .state('items', {
            url : '^/items/{categoryId}',
            templateUrl: 'src/templates/items.template.html',
            controller: 'CategoryItemController as itemCategory'
        });
    }
})();
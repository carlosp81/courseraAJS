(function() {
'use strict'

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function RoutesConfig ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/home.template.html'
    })

    .state('categories', {
        url: '/categories',
        templateUrl: 'app/Components/Categories/Categories.template.html',
        controller: 'CategoriesController as catList',
        resolve: {
            categories: ['MenuDataService', (MenuDataService) => {
                return MenuDataService.getAllCategories();
            }]
        }
    })


    .state('items', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'app/Components/Items/Item.template.html',
        controller: 'ItemsController as itemsList',
        resolve: {
            itemsData: ['$stateParams', 'MenuDataService', ($stateParams, MenuDataService) => {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
        }]}
    })
}

})()
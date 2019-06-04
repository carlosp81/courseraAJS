(function() {
'use strict'

angular.module('data', [])
.service('MenuDataService', MenuDataService)
.constant('API_CATEGORIES', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('API_ITEMS_CATEGORIES', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');


MenuDataService.$inject = ['$http', 'API_CATEGORIES', 'API_ITEMS_CATEGORIES']
function MenuDataService ($http, API_CATEGORIES, API_ITEMS_CATEGORIES) {
    let api_data = this

    api_data.getAllCategories = () => {
        return $http({
            method: 'GET',
            url: API_CATEGORIES
        }).then(result => result.data)
        .catch(error => error)
    }

    api_data.getItemsForCategory = (categoryShortName) => {
        return $http({
            method: 'GET',
            url: (API_ITEMS_CATEGORIES + categoryShortName)
        }).then(result => result.data.menu_items)
        .catch(error => error)
    }

}


})()
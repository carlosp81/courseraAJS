(function() {
'use strict'

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController)

CategoriesController.$inject = ['categories']
function CategoriesController(categories) {
    let catList = this
    // Control all Categories
    catList.categories = categories;
}

})()
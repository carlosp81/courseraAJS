(function() {
'use strict'

angular.module('MenuApp')
.controller('ItemsController', ItemsController)

ItemsController.$inject = ['itemsData']
function ItemsController (itemsData) {
    let itemsList = this;

    itemsList.itemsData = itemsData;
}

})()
(function () {
'use strict'

angular.module('MenuApp')
.component('items', {
    templateUrl: 'app/Components/Items/Item.template.html',
    bindings: {
        itemsData: '<'
    }
})

})()
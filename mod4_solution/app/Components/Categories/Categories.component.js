(function () {
('use strict')

angular.module('MenuApp')
.component('categories', {
    templateUrl: 'app/Components/Categories/Categories.template.html',
    bindings: {
        categories: '<'
    }
})

})()
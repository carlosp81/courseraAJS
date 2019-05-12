(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController)
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.dishes = '';
        $scope.msg = '';

        $scope.ShowMessage = function ShowMsg () {
            let itemsNumber = $scope.dishes.split(',').length;
            if ($scope.msg === ''){
                return $scope.msg = 'Please enter data first';
            }else if(itemsNumber < 3){
                return $scope.msg = 'Enjoy!'
            }else {
                return $scope.msg = 'Too Much!'
            };
        }
    }

})();
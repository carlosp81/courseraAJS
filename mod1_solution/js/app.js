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
            if ($scope.dishes === ''){
                $scope.msg = 'Please enter data first';
            }else if(itemsNumber < 3){
                $scope.msg = 'Enjoy!';
                $scope.ResetMsg();
            }else {
                $scope.msg = 'Too Much!';
                $scope.ResetMsg();
            };
        }
        $scope.ResetMsg = function Reset () {
            if ($scope.msg) {
                $scope.dishes = '';
                // $scope.msg = 'Please enter data first';
            }
        }
    }

})();
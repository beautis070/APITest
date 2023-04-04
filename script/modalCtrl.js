myApp.controller('userController', function ($scope, $uibModalInstance, data) {

    $scope.user = data;

    $scope.updateDetail = function () {

        var fileObj = document.getElementById('avatar').files[0];
        var URL = window.URL || window.webkitURL;
        $scope.user.avatar = URL.createObjectURL(fileObj);
        $uibModalInstance.close($scope.user);
    }
    $scope.reset = function () {
        $scope.item = {};
        $uibModalInstance.dismiss();
    }

})
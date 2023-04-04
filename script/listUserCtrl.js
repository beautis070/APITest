myApp.controller('listUserController', function ($scope, $rootScope, $http, $uibModal) {

    $rootScope.showLoader();
    $scope.getUser = function () {
        $http.get('https://reqres.in/api/users?page=2').then(function (response) {
            $scope.employeeData = response.data.data;
            $rootScope.hideLoader();
        })
    }

    //Deleteing User
    $scope.deleteUser = function (index) {
        $scope.employeeData.splice(index, 1);
    }

    //Edit User Detail (modal popup)
    $scope.addEditUser = function (item) {
        item = item || {};
        var editItem = {};
        if (item) {
            editItem= angular.copy(item);
        }
        var modalInstance = $uibModal.open({
            templateUrl: './template/modal/user.html',
            controller: 'userController',
            size: 'sm',
            resolve: {
                data: function () {
                    return editItem;
                }
            }
        });
        modalInstance.result.then(function (res) {
            if (res.id) {
                for (var i = 0; i < $scope.employeeData.length; i++) {
                    if ($scope.employeeData[i].id == res.id) {
                        $scope.employeeData[i] = res;
                        break;
                    };
                };
            } else {

                var ids = $scope.employeeData.map(object => {
                    return object.id;
                });
                
                var maxId = Math.max(...ids);
                let newData = { id: maxId + 1, first_name: res.first_name, last_name: res.last_name, email: res.email, avatar:res.avatar };
                $scope.employeeData.push(newData);
            };
        });
    }
    $scope.getUser();
});

(function(){

  angular.module('http.controller', ['http.services'])

  .controller('ProduitsCtrl', ProduitsCtrl);

  ProduitsCtrl.$inject = ['$scope', '$http', 'milkService'];

  function ProduitsCtrl($scope, $http, milkService){

    $scope.milkProductsList = [];
    $scope.show = false;
    $scope.page = 1;
    $scope.onSwipeRight = onSwipeRight;
    $scope.onSwipeLeft = onSwipeLeft;
    milkService.configure(false);

    milkService.get().then(function(result){
       $scope.milkProductsList=result;
    });

    //swipe pour aller à page précédente
    function onSwipeRight(){
      if ($scope.page > 1) {
        $scope.page = $scope.page - 1;
      }
    }
    //swipe pour aller à page suivante
    function onSwipeLeft(){
      if ($scope.page < ($scope.milkProductsList.length / 10)) {
        $scope.page = $scope.page + 1;
      }
    }


  }

})();

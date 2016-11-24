(function(){

  angular.module('http.controller', ['http.services'])

  .controller('ProduitsCtrl', milkProducts);

  milkProducts.$inject = ['$scope', '$http', 'ProductsServ'];

  function milkProducts($scope, $http, ProductsServ){

    $scope.milkProductsList = [];
    $scope.show = false;
    $scope.page = 1;
    $scope.onSwipeRight = onSwipeRight;
    $scope.onSwipeLeft = onSwipeLeft;
    var url = 'http://api.karibou.evaletolab.ch/v1/products/category/produits-laitiers';

    getFromFile();

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

    //produits laitiers de l'API récupérés depuis fichier produits_laits.json dans racine
    function getFromFile(){
      ProductsServ.getFile().success(function(data){
      $scope.milkProductsList = data;
      });
    }
    //produits laitiers récupéré par requête http sur l'API (site)
    function getFromAPI(){
      ProductsServ.getJson(url).success(function(data){
      $scope.milkProductsList = data;
      });
    }

  }

})();

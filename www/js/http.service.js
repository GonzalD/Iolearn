(function(){
  angular.module('http.services', [])

  .factory('getProduitService', getProduits);

  function getProduits($http) {
    return {
      getProduits : function(){
        var promise = $http.get('http://api.karibou.evaletolab.ch/v1/products/category/produits-laitiers').then(function(res){
          return res.data.message;
        });
      }
    };
  }

})();

(function(){

  angular.module('http.services', [])

  .factory('ProductsServ', getProducts);

  getProducts.$inject = ['$http'];

  function getProducts($http) {

    var service = {
      getJson: getJson,
      getFile: getFile
    };

    return service;

      //récupère donnée API depuis le site
      function getJson(url){
        return $http.get(url);
      }

      //donnée API depuis fichier (produits_laits.json dans racine)
      function getFile(){
        return $http.get('produits_laits.json');
      }

  }

})();

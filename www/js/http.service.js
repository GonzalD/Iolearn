(function(){

  angular.module('http.services', [])

  .factory('milkProducts', milkService);

  milkService.$inject = ['$http'];

  function milkService($http) {

    var service = {
      get: get,
      configure: configure
    };

    var url = 'http://api.karibou.evaletolab.ch/v1/products/category/produits-laitiers';
    var useHTTP = configure;

    return service;

      //récupère donnée API depuis le site ou un fichier local en fonction de la config
      function get(){
        var got;
        if(useHTTP){
          got = $http.get(url);
        }
        else {
          got = $http.get('produits_laits.json');
        }
          got
            .then(getComplete)
            .catch(getFailed);


        function getComplete(response) {
          return response.data.results;
        }

        function getFailed(error) {
            logger.error('XHR Failed for getMilk.' + error.data);
        }

      }

      function configure(fromAPI){
        return fromAPI;
      }

  }

})();

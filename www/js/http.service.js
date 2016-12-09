(function(){

  angular.module('http.services', [])

  .factory('milkService', milkService);

  milkService.$inject = ['$http'];

  function milkService($http) {

    var service = {
      get: getMilk,
      configure: configure
    };

    var URL = 'http://api.karibou.evaletolab.ch/v1/products/category/produits-laitiers';
    var useHTTP = configure;

    return service;

      //récupère donnée API depuis le site ou un fichier local en fonction de la config
      function getMilk(){
        var url=(useHTTP)?URL:'produits_laits.json';

        var promise=$http.get(url).then(getComplete)
           .catch(getFailed);

        function getComplete(response) {
          return response.data;
        }

        function getFailed(error) {
            logger.error('XHR Failed for getMilk.' + error.data);
        }

        return promise;
      }


      function configure(fromAPI){
        return fromAPI;
      }

  }

})();

(function (){
  'use strict';

  angular
    .module('app')
    .config(route);

    function route($routeProvider){
      $routeProvider
      .when('/index', {
        templateUrl: 'index.html'
      })
      .when('/foobar', {
        templateUrl: 'foobar.html',
        controller: 'MyController',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/index'});
    }

})();

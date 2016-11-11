(function (){
  'use strict';

  angular
    .module('app')
    .controller('MyController', MyController);

    function MyController(myFactory) {
      var vm = this;
      vm.membres = [];
      vm.setName = setName;

      function setName(){
        vm.membres.push(myFactory.fetchMember);
      }
    }

})();

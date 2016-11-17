(function (){
  'use strict';

  angular
    .module('app')
    .factory("myFactory", myFactory);

  function myFactory(){
    var service = {
      success : true,
      fetchMember: fetchMember
    }

    return service;

    function fetchMember(){
      //fonction inventée va chercher un membre dans une base de donnée
      var nom = baseDonnees.fetch('nom');
      var prenom = baseDonnees.fetch('prenom');
      return {'nom': nom,
               'prenom': prenom;
             }
    }

  }

})();

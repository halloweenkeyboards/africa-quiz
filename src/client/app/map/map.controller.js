(function() {
    'use strict';

    angular
        .module('app.map')
        .controller('Map', Map);

    Map.$inject = ['$scope'];

    function Map($scope) {
      $scope.scopeMessage = "twistd transist";

      $scope.mapData = {
          'SSD': { fillKey: 'pink' },
          'CIV': { fillKey: 'pink' }
        }

      $scope.correctGuess = function(countryCode) {
        $scope.mapData[countryCode] = {fillKey: 'pink'};
        //console.log($scope.choropleth.options.data);
        //$scope.choropleth.resize();
      };

    }

})();
(function() {
    'use strict';

    angular
        .module('app.map')
        .controller('Map', Map);

    Map.$inject = ['$scope'];

    function Map($scope) {
      $scope.scopeMessage = "twistd transist";

      $scope.mapData = {
          'AGO': { fillKey: 'unGuessed' },
          'BDI': { fillKey: 'unGuessed' },
          'BEN': { fillKey: 'unGuessed' },
          'BFA': { fillKey: 'unGuessed' },
          'BHR': { fillKey: 'unGuessed' },
          'BWA': { fillKey: 'unGuessed' },
          'CAF': { fillKey: 'unGuessed' },
          'CIV': { fillKey: 'unGuessed' },
          'CMR': { fillKey: 'unGuessed' },
          'COD': { fillKey: 'unGuessed' },
          'COG': { fillKey: 'unGuessed' },
          'DJI': { fillKey: 'unGuessed' },
          'DZA': { fillKey: 'unGuessed' },
          'EGY': { fillKey: 'unGuessed' },
          'ERI': { fillKey: 'unGuessed' },
          'ESH': { fillKey: 'unGuessed' },
          'ETH': { fillKey: 'unGuessed' },
          'GAB': { fillKey: 'unGuessed' },
          'GHA': { fillKey: 'unGuessed' },
          'GIN': { fillKey: 'unGuessed' },
          'GMB': { fillKey: 'unGuessed' },
          'GNB': { fillKey: 'unGuessed' },
          'GNQ': { fillKey: 'unGuessed' },
          'KEN': { fillKey: 'unGuessed' },
          'LBR': { fillKey: 'unGuessed' },
          'LBY': { fillKey: 'unGuessed' },
          'LSO': { fillKey: 'unGuessed' },
          'MAR': { fillKey: 'unGuessed' },
          'MDG': { fillKey: 'unGuessed' },
          'MLI': { fillKey: 'unGuessed' },
          'MOZ': { fillKey: 'unGuessed' },
          'MRT': { fillKey: 'unGuessed' },
          'MUS': { fillKey: 'unGuessed' },
          'MWI': { fillKey: 'unGuessed' },
          'NAM': { fillKey: 'unGuessed' },
          'NER': { fillKey: 'unGuessed' },
          'NGA': { fillKey: 'unGuessed' },
          'RWA': { fillKey: 'unGuessed' },
          'SDN': { fillKey: 'unGuessed' },
          'SEN': { fillKey: 'unGuessed' },
          'SLE': { fillKey: 'unGuessed' },
          'SOM': { fillKey: 'unGuessed' },
          'SSD': { fillKey: 'unGuessed' },
          'SWZ': { fillKey: 'unGuessed' },
          'TCD': { fillKey: 'unGuessed' },
          'TGO': { fillKey: 'unGuessed' },
          'TUN': { fillKey: 'unGuessed' },
          'TZA': { fillKey: 'unGuessed' },
          'UGA': { fillKey: 'unGuessed' },
          'ZAF': { fillKey: 'unGuessed' },
          'ZMB': { fillKey: 'unGuessed' },
          'ZWE': { fillKey: 'unGuessed' }
        }

      $scope.correctGuess = function(countryCode) {
        $scope.mapData[countryCode] = {fillKey: 'pink'};
        //console.log($scope.choropleth.options.data);
        //$scope.choropleth.resize();
      };

    }

})();
(function() {
    'use strict';

    angular
        .module('app.map')
        .controller('Map', Map);

    Map.$inject = ['$scope'];

    function Map($scope) {
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
          'ZWE': { fillKey: 'unGuessed' },
          '-99': { fillKey: 'unGuessed' }          
        };
      $scope.islandNations = [  
          {name: 'seychelles', latitude: -4.37 , longitude: 55.27, radius: 10, fillKey: 'unGuessed'},
          {name: 'mauritius', latitude: -20.16 , longitude: 57.52, radius: 10, fillKey: 'unGuessed'},
          {name: 'sao tome and principe', latitude: 0.33 , longitude: 6.73, radius: 10, fillKey: 'unGuessed'},
          {name: 'cape verde', latitude: 14.91, longitude: -23.5, radius: 10, fillKey: 'unGuessed'},
          {name: 'comoros', latitude: -11.68 , longitude: 43.26, radius: 10, fillKey: 'unGuessed'}
      ];

      $scope.userGuessValue = '';
      $scope.correctAnswers = [];
      $scope.$watch('userGuessValue', function() {
        if ($scope.userGuessValue.length > 0) {
          $scope.checkGuess();
        }
      });

      $scope.checkGuess = function() {
        //console.log('howdy');
        var correctGuess = false;
        if ($scope.userGuessValue === 'angola') {
          correctGuess = true;
          var correctGuessCountryCode = 'AGO';
        } else if ($scope.userGuessValue === 'burundi') {
          correctGuess = true;
          var correctGuessCountryCode = 'BDI';
        } else if ($scope.userGuessValue === 'benin') {
          correctGuess = true;
          var correctGuessCountryCode = 'BEN';
        } else if ($scope.userGuessValue === 'burkina faso') {
          correctGuess = true;
          var correctGuessCountryCode = 'BFA';
        } else if ($scope.userGuessValue === 'bahrain') {
          correctGuess = true;
          var correctGuessCountryCode = 'BHA';
        } else if ($scope.userGuessValue === 'botswana') {
          correctGuess = true;
          var correctGuessCountryCode = 'BWA';
        } else if ($scope.userGuessValue === 'central african republic') {
          correctGuess = true;
          var correctGuessCountryCode = 'CAF';
        } else if ($scope.userGuessValue === 'ivory coast' ||
            $scope.userGuessValue === "cote d'ivoire") {
          correctGuess = true;
          var correctGuessCountryCode = 'CIV';
        } else if ($scope.userGuessValue === 'cameroon') {
          correctGuess = true;
          var correctGuessCountryCode = 'CMR';
        } else if ($scope.userGuessValue === 'democratic republic of congo' || 
            $scope.userGuessValue === 'the democratic republic of congo' ||
            $scope.userGuessValue === 'the democratic republic of the congo' ||
            $scope.userGuessValue === 'democratic republic of the congo') {
          correctGuess = true;
          var correctGuessCountryCode = 'COD';
        } else if ($scope.userGuessValue === 'congo') {
          correctGuess = true;
          var correctGuessCountryCode = 'COG';
        } else if ($scope.userGuessValue === 'djibouti') {
          correctGuess = true;
          var correctGuessCountryCode = 'DJI';
        } else if ($scope.userGuessValue === 'algeria') {
          correctGuess = true;
          var correctGuessCountryCode = 'DZA';
        } else if ($scope.userGuessValue === 'egypt') {
          correctGuess = true;
          var correctGuessCountryCode = 'EGY';
        } else if ($scope.userGuessValue === 'eritrea') {
          correctGuess = true;
          var correctGuessCountryCode = 'ERI';
        } else if ($scope.userGuessValue === 'sahara' ||
            $scope.userGuessValue === 'western sahara' ||
            $scope.userGuessValue === 'west sahara') {
          correctGuess = true;
          var correctGuessCountryCode = 'ESH';
        } else if ($scope.userGuessValue === 'ethiopia') {
          correctGuess = true;
          var correctGuessCountryCode = 'ETH';
        } else if ($scope.userGuessValue === 'gabon') {
          correctGuess = true;
          var correctGuessCountryCode = 'GAB';
        } else if ($scope.userGuessValue === 'ghana') {
          correctGuess = true;
          var correctGuessCountryCode = 'GHA';
        } else if ($scope.userGuessValue === 'guinea') {
          correctGuess = true;
          var correctGuessCountryCode = 'GIN';
        } else if ($scope.userGuessValue === 'gambia' ||
            $scope.userGuessValue === 'the gambia') {
          correctGuess = true;
          var correctGuessCountryCode = 'GMB';
        } else if ($scope.userGuessValue === 'guinea-bissau' ||
            $scope.userGuessValue === 'guinea bissau') {
          correctGuess = true;
          var correctGuessCountryCode = 'GNB';
        } else if ($scope.userGuessValue === 'equatorial guinea') {
          correctGuess = true;
          var correctGuessCountryCode = 'GNQ';
        } else if ($scope.userGuessValue === 'kenya') {
          correctGuess = true;
          var correctGuessCountryCode = 'KEN';
        } else if ($scope.userGuessValue === 'liberia') {
          correctGuess = true;
          var correctGuessCountryCode = 'LBR';
        } else if ($scope.userGuessValue === 'libya') {
          correctGuess = true;
          var correctGuessCountryCode = 'LBY';
        } else if ($scope.userGuessValue === 'lesotho') {
          correctGuess = true;
          var correctGuessCountryCode = 'LSO';
        } else if ($scope.userGuessValue === 'morocco') {
          correctGuess = true;
          var correctGuessCountryCode = 'MAR';
        } else if ($scope.userGuessValue === 'madagascar') {
          correctGuess = true;
          var correctGuessCountryCode = 'MDG';
        } else if ($scope.userGuessValue === 'mali') {
          correctGuess = true;
          var correctGuessCountryCode = 'MLI';
        } else if ($scope.userGuessValue === 'mozambique') {
          correctGuess = true;
          var correctGuessCountryCode = 'MOZ';
        } else if ($scope.userGuessValue === 'mauritania') {
          correctGuess = true;
          var correctGuessCountryCode = 'MRT';
        } else if ($scope.userGuessValue === 'malawi') {
          correctGuess = true;
          var correctGuessCountryCode = 'MWI';
        } else if ($scope.userGuessValue === 'namibia') {
          correctGuess = true;
          var correctGuessCountryCode = 'NAM';
        } else if ($scope.userGuessValue === 'niger') {
          correctGuess = true;
          var correctGuessCountryCode = 'NER';
        } else if ($scope.userGuessValue === 'nigeria') {
          correctGuess = true;
          var correctGuessCountryCode = 'NGA';
        } else if ($scope.userGuessValue === 'rwanda') {
          correctGuess = true;
          var correctGuessCountryCode = 'RWA';
        } else if ($scope.userGuessValue === 'sudan') {
          correctGuess = true;
          var correctGuessCountryCode = 'SDN';
        } else if ($scope.userGuessValue === 'senegal') {
          correctGuess = true;
          var correctGuessCountryCode = 'SEN';
        } else if ($scope.userGuessValue === 'sierra leone') {
          correctGuess = true;
          var correctGuessCountryCode = 'SLE';
        } else if ($scope.userGuessValue === 'somalia') {
          correctGuess = true;
          var correctGuessCountryCode = 'SOM';
        } else if ($scope.userGuessValue === 'south sudan') {
          correctGuess = true;
          var correctGuessCountryCode = 'SSD';
        } else if ($scope.userGuessValue === 'swaziland') {
          correctGuess = true;
          var correctGuessCountryCode = 'SWZ';
        } else if ($scope.userGuessValue === 'chad') {
          correctGuess = true;
          var correctGuessCountryCode = 'TCD';
        } else if ($scope.userGuessValue === 'togo') {
          correctGuess = true;
          var correctGuessCountryCode = 'TGO';
        } else if ($scope.userGuessValue === 'tunisia') {
          correctGuess = true;
          var correctGuessCountryCode = 'TUN';
        } else if ($scope.userGuessValue === 'tanzania') {
          correctGuess = true;
          var correctGuessCountryCode = 'TZA';
        } else if ($scope.userGuessValue === 'uganda') {
          correctGuess = true;
          var correctGuessCountryCode = 'UGA';
        } else if ($scope.userGuessValue === 'south africa') {
          correctGuess = true;
          var correctGuessCountryCode = 'ZAF';
        } else if ($scope.userGuessValue === 'zambia') {
          correctGuess = true;
          var correctGuessCountryCode = 'ZMB';
        } else if ($scope.userGuessValue === 'zimbabwe') {
          correctGuess = true;
          var correctGuessCountryCode = 'ZWE';
        } else if ($scope.userGuessValue === 'somaliland') {
          correctGuess = true;
          var correctGuessCountryCode = '-99';
        }

        if (correctGuess && !_.find($scope.correctAnswers, function(country) { return country === correctGuessCountryCode })) {
            $scope.correctAnswers.push(correctGuessCountryCode);

            var updateObj = {};
            updateObj[correctGuessCountryCode] = { fillKey: 'guessed' };

            $scope.choropleth.updateChoropleth(updateObj);
            $scope.userGuessValue = '';
        }
      };
    }

})();
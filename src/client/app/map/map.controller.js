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
          'SLD': { fillKey: 'unGuessed' }          
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
        var userGuessValueFixed = $scope.userGuessValue.toLowerCase();
        var correctGuess = false;
        if (userGuessValueFixed === 'angola') {
          correctGuess = true;
          var correctGuessCountryCode = 'AGO';
        } else if (userGuessValueFixed === 'burundi') {
          correctGuess = true;
          var correctGuessCountryCode = 'BDI';
        } else if (userGuessValueFixed === 'benin') {
          correctGuess = true;
          var correctGuessCountryCode = 'BEN';
        } else if (userGuessValueFixed === 'burkina faso') {
          correctGuess = true;
          var correctGuessCountryCode = 'BFA';
        } else if (userGuessValueFixed === 'bahrain') {
          correctGuess = true;
          var correctGuessCountryCode = 'BHA';
        } else if (userGuessValueFixed === 'botswana') {
          correctGuess = true;
          var correctGuessCountryCode = 'BWA';
        } else if (userGuessValueFixed === 'central african republic') {
          correctGuess = true;
          var correctGuessCountryCode = 'CAF';
        } else if (userGuessValueFixed === 'ivory coast' ||
            userGuessValueFixed === "cote d'ivoire") {
          correctGuess = true;
          var correctGuessCountryCode = 'CIV';
        } else if (userGuessValueFixed === 'cameroon') {
          correctGuess = true;
          var correctGuessCountryCode = 'CMR';
        } else if (userGuessValueFixed === 'democratic republic of congo' || 
            userGuessValueFixed === 'the democratic republic of congo' ||
            userGuessValueFixed === 'the democratic republic of the congo' ||
            userGuessValueFixed === 'democratic republic of the congo') {
          correctGuess = true;
          var correctGuessCountryCode = 'COD';
        } else if (userGuessValueFixed === 'congo') {
          correctGuess = true;
          var correctGuessCountryCode = 'COG';
        } else if (userGuessValueFixed === 'djibouti') {
          correctGuess = true;
          var correctGuessCountryCode = 'DJI';
        } else if (userGuessValueFixed === 'algeria') {
          correctGuess = true;
          var correctGuessCountryCode = 'DZA';
        } else if (userGuessValueFixed === 'egypt') {
          correctGuess = true;
          var correctGuessCountryCode = 'EGY';
        } else if (userGuessValueFixed === 'eritrea') {
          correctGuess = true;
          var correctGuessCountryCode = 'ERI';
        } else if (userGuessValueFixed === 'sahara' ||
            userGuessValueFixed === 'western sahara' ||
            userGuessValueFixed === 'west sahara') {
          correctGuess = true;
          var correctGuessCountryCode = 'ESH';
        } else if (userGuessValueFixed === 'ethiopia') {
          correctGuess = true;
          var correctGuessCountryCode = 'ETH';
        } else if (userGuessValueFixed === 'gabon') {
          correctGuess = true;
          var correctGuessCountryCode = 'GAB';
        } else if (userGuessValueFixed === 'ghana') {
          correctGuess = true;
          var correctGuessCountryCode = 'GHA';
        } else if (userGuessValueFixed === 'guinea') {
          correctGuess = true;
          var correctGuessCountryCode = 'GIN';
        } else if (userGuessValueFixed === 'gambia' ||
            userGuessValueFixed === 'the gambia') {
          correctGuess = true;
          var correctGuessCountryCode = 'GMB';
        } else if (userGuessValueFixed === 'guinea-bissau' ||
            userGuessValueFixed === 'guinea bissau') {
          correctGuess = true;
          var correctGuessCountryCode = 'GNB';
        } else if (userGuessValueFixed === 'equatorial guinea') {
          correctGuess = true;
          var correctGuessCountryCode = 'GNQ';
        } else if (userGuessValueFixed === 'kenya') {
          correctGuess = true;
          var correctGuessCountryCode = 'KEN';
        } else if (userGuessValueFixed === 'liberia') {
          correctGuess = true;
          var correctGuessCountryCode = 'LBR';
        } else if (userGuessValueFixed === 'libya') {
          correctGuess = true;
          var correctGuessCountryCode = 'LBY';
        } else if (userGuessValueFixed === 'lesotho') {
          correctGuess = true;
          var correctGuessCountryCode = 'LSO';
        } else if (userGuessValueFixed === 'morocco') {
          correctGuess = true;
          var correctGuessCountryCode = 'MAR';
        } else if (userGuessValueFixed === 'madagascar') {
          correctGuess = true;
          var correctGuessCountryCode = 'MDG';
        } else if (userGuessValueFixed === 'mali') {
          correctGuess = true;
          var correctGuessCountryCode = 'MLI';
        } else if (userGuessValueFixed === 'mozambique') {
          correctGuess = true;
          var correctGuessCountryCode = 'MOZ';
        } else if (userGuessValueFixed === 'mauritania') {
          correctGuess = true;
          var correctGuessCountryCode = 'MRT';
        } else if (userGuessValueFixed === 'malawi') {
          correctGuess = true;
          var correctGuessCountryCode = 'MWI';
        } else if (userGuessValueFixed === 'namibia') {
          correctGuess = true;
          var correctGuessCountryCode = 'NAM';
        } else if (userGuessValueFixed === 'niger') {
          correctGuess = true;
          var correctGuessCountryCode = 'NER';
        } else if (userGuessValueFixed === 'nigeria') {
          correctGuess = true;
          var correctGuessCountryCode = 'NGA';
        } else if (userGuessValueFixed === 'rwanda') {
          correctGuess = true;
          var correctGuessCountryCode = 'RWA';
        } else if (userGuessValueFixed === 'sudan') {
          correctGuess = true;
          var correctGuessCountryCode = 'SDN';
        } else if (userGuessValueFixed === 'senegal') {
          correctGuess = true;
          var correctGuessCountryCode = 'SEN';
        } else if (userGuessValueFixed === 'sierra leone') {
          correctGuess = true;
          var correctGuessCountryCode = 'SLE';
        } else if (userGuessValueFixed === 'somalia') {
          correctGuess = true;
          var correctGuessCountryCode = 'SOM';
        } else if (userGuessValueFixed === 'south sudan') {
          correctGuess = true;
          var correctGuessCountryCode = 'SSD';
        } else if (userGuessValueFixed === 'swaziland') {
          correctGuess = true;
          var correctGuessCountryCode = 'SWZ';
        } else if (userGuessValueFixed === 'chad') {
          correctGuess = true;
          var correctGuessCountryCode = 'TCD';
        } else if (userGuessValueFixed === 'togo') {
          correctGuess = true;
          var correctGuessCountryCode = 'TGO';
        } else if (userGuessValueFixed === 'tunisia') {
          correctGuess = true;
          var correctGuessCountryCode = 'TUN';
        } else if (userGuessValueFixed === 'tanzania') {
          correctGuess = true;
          var correctGuessCountryCode = 'TZA';
        } else if (userGuessValueFixed === 'uganda') {
          correctGuess = true;
          var correctGuessCountryCode = 'UGA';
        } else if (userGuessValueFixed === 'south africa') {
          correctGuess = true;
          var correctGuessCountryCode = 'ZAF';
        } else if (userGuessValueFixed === 'zambia') {
          correctGuess = true;
          var correctGuessCountryCode = 'ZMB';
        } else if (userGuessValueFixed === 'zimbabwe') {
          correctGuess = true;
          var correctGuessCountryCode = 'ZWE';
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
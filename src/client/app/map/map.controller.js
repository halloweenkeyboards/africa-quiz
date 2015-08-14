(function() {
    'use strict';

    angular
        .module('app.map')
        .controller('Map', Map);

    Map.$inject = ['$scope'];

    function Map($scope) {
      var nations = [
        {
          isoId: 'AGO',
          spellings: [
            'angola'
          ]
        }, 
        {
          isoId: 'BDI',
          spellings: [
            'burundi'
          ]
        }, 
        {
          isoId: 'BEN',
          spellings: [
            'benin'
          ]
        }, 
        {
          isoId: 'BFA',
          spellings: [
            'burkina faso'
          ]
        }, 
        {
          isoId: 'BWA',
          spellings: [
            'botswana'
          ]
        }, 
        {
          isoId: 'CAF',
          spellings: [
            'central african republic'
          ]
        }, 
        {
          isoId: 'CIV',
          spellings: [
            'ivory coast',
            "cote d'ivoire"
          ]
        }, 
        {
          isoId: 'CMR',
          spellings: [
            'cameroon'
          ]
        }, 
        {
          isoId: 'COD',
          spellings: [
            'democratic republic of congo',
            'democratic republic of the congo',
            'the democratic republic of congo',
            'the democratic republic of the congo',
          ]
        }, 
        {
          isoId: 'COG',
          spellings: [
            'congo'
          ]
        }, 
        {
          isoId: 'DJI',
          spellings: [
            'djibouti'
          ]
        }, 
        {
          isoId: 'DZA',
          spellings: [
            'algeria'
          ]
        }, 
        {
          isoId: 'EGY',
          spellings: [
            'egypt'
          ]
        }, 
        {
          isoId: 'ERI',
          spellings: [
            'eritrea'
          ]
        }, 
        {
          isoId: 'ESH',
          spellings: [
            'western sahara'
          ]
        }, 
        {
          isoId: 'ETH',
          spellings: [
            'ethiopia'
          ]
        }, 
        {
          isoId: 'GAB',
          spellings: [
            'gabon'
          ]
        }, 
        {
          isoId: 'GHA',
          spellings: [
            'ghana'
          ]
        }, 
        {
          isoId: 'GIN',
          spellings: [
            'guinea'
          ]
        }, 
        {
          isoId: 'GMB',
          spellings: [
            'the gambia',
            'gambia'
          ]
        }, 
        {
          isoId: 'GNB',
          spellings: [
            'guinea-bissau',
            'guinea bissau'
          ]
        }, 
        {
          isoId: 'GNQ',
          spellings: [
            'equatorial guinea'
          ]
        }, 
        {
          isoId: 'KEN',
          spellings: [
            'kenya'
          ]
        }, 
        {
          isoId: 'LBR',
          spellings: [
            'liberia'
          ]
        }, 
        {
          isoId: 'LBY',
          spellings: [
            'libya'
          ]
        }, 
        {
          isoId: 'LSO',
          spellings: [
            'lesotho'
          ]
        }, 
        {
          isoId: 'MAR',
          spellings: [
            'morocco'
          ]
        }, 
        {
          isoId: 'MDG',
          spellings: [
            'madagascar'
          ]
        }, 
        {
          isoId: 'MLI',
          spellings: [
            'mali'
          ]
        }, 
        {
          isoId: 'MOZ',
          spellings: [
            'mozambique'
          ]
        }, 
        {
          isoId: 'MRT',
          spellings: [
            'mauritania'
          ]
        }, 
        {
          isoId: 'MWI',
          spellings: [
            'malawi'
          ]
        }, 
        {
          isoId: 'NAM',
          spellings: [
            'namibia'
          ]
        }, 
        {
          isoId: 'NER',
          spellings: [
            'niger'
          ]
        }, 
        {
          isoId: 'NGA',
          spellings: [
            'nigeria'
          ]
        }, 
        {
          isoId: 'RWA',
          spellings: [
            'rwanda'
          ]
        }, 
        {
          isoId: 'SDN',
          spellings: [
            'sudan'
          ]
        }, 
        {
          isoId: 'SEN',
          spellings: [
            'senegal'
          ]
        }, 
        {
          isoId: 'SLE',
          spellings: [
            'sierra leone'
          ]
        }, 
        {
          isoId: 'SOM',
          spellings: [
            'somalia'
          ]
        }, 
        {
          isoId: 'SSD',
          spellings: [
            'south sudan'
          ]
        }, 
        {
          isoId: 'SWZ',
          spellings: [
            'swaziland'
          ]
        }, 
        {
          isoId: 'TCD',
          spellings: [
            'chad'
          ]
        }, 
        {
          isoId: 'TGO',
          spellings: [
            'togo'
          ]
        },
        {
          isoId: 'TUN',
          spellings: [
            'tunisia'
          ]
        }, 
        {
          isoId: 'TZA',
          spellings: [
            'tanzania'
          ]
        }, 
        {
          isoId: 'UGA',
          spellings: [
            'uganda'
          ]
        }, 
        {
          isoId: 'ZAF',
          spellings: [
            'south africa'
          ]
        }, 
        {
          isoId: 'ZMB',
          spellings: [
            'zambia'
          ]
        }, 
        {
          isoId: 'ZWE',
          spellings: [
            'zimbabwe'
          ]
        }
      ];

      $scope.mapData = {};

      _.each(nations, function(nation) {
        $scope.mapData[nation.isoId] = { fillKey: 'unGuessed' };
      });

      $scope.islandNations = [  
          {name: 'seychelles', latitude: -4.37 , longitude: 55.27, radius: 10, isoId: 'SYC', fillKey: 'unGuessed'},
          {name: 'mauritius', latitude: -20.16 , longitude: 57.52, radius: 10, isoId: 'MUS', fillKey: 'unGuessed'},
          {name: 'sao tome and principe', latitude: 0.33 , longitude: 6.73, isoId: 'STP', radius: 10, fillKey: 'unGuessed'},
          {name: 'cape verde', latitude: 14.91, longitude: -23.5, radius: 10, isoId: 'CPV', fillKey: 'unGuessed'},
          {name: 'comoros', latitude: -11.68 , longitude: 43.26, radius: 10, isoId: 'COM', fillKey: 'unGuessed'}
      ];

      $scope.userGuessValue = '';
      $scope.correctAnswers = [];
      $scope.$watch('userGuessValue', function() {
        if ($scope.userGuessValue.length > 0) {
          $scope.checkGuess();
        }
      });

      $scope.checkGuess = function() {
        var userGuessValueFixed = $scope.userGuessValue.toLowerCase();
        var correctGuess = false;
        var correctGuessCountryCode;
        var correctGuessIsland = false;

        //continental nations
        _.each(nations, function(nation) {
          if (_.find(nation.spellings, function(spelling) {return userGuessValueFixed === spelling})) {
            correctGuess = true;
            correctGuessCountryCode = nation.isoId;
          }
        });

        // island nations
        _.each($scope.islandNations, function(island) {
          if (userGuessValueFixed === island.name) {
            $('circle#' + island.isoId).attr('style', 'stroke: rgb(255, 255, 255); stroke-width: 2px; fill-opacity: 0.75; fill: rgb(204, 42, 65);');
            $scope.userGuessValue = '';
          } 
        });

/**
        if (userGuessValueFixed === 'seychelles') {
          correctGuessIsland = true;
          $('circle#SYC').attr('style', 'stroke: rgb(255, 255, 255); stroke-width: 2px; fill-opacity: 0.75; fill: rgb(204, 42, 65);');
        } else if (userGuessValueFixed === 'mauritius') {
          correctGuessIsland = true;
          $('circle#MUS').attr('style', 'stroke: rgb(255, 255, 255); stroke-width: 2px; fill-opacity: 0.75; fill: rgb(204, 42, 65);');
        } else if (userGuessValueFixed === 'sao tome and principe') {
          correctGuessIsland = true;
          $('circle#STP').attr('style', 'stroke: rgb(255, 255, 255); stroke-width: 2px; fill-opacity: 0.75; fill: rgb(204, 42, 65);');
        } else if (userGuessValueFixed === 'cape verde') {
          correctGuessIsland = true;
          $('circle#CPV').attr('style', 'stroke: rgb(255, 255, 255); stroke-width: 2px; fill-opacity: 0.75; fill: rgb(204, 42, 65);');
        } else if (userGuessValueFixed === 'comoros') {
          correctGuessIsland = true;
          $('circle#COM').attr('style', 'stroke: rgb(255, 255, 255); stroke-width: 2px; fill-opacity: 0.75; fill: rgb(204, 42, 65);');
        }
**/
        if (correctGuess && !_.find($scope.correctAnswers, function(country) { return country === correctGuessCountryCode })) {
            $scope.correctAnswers.push(correctGuessCountryCode);

            var updateObj = {};
            updateObj[correctGuessCountryCode] = { fillKey: 'guessed' };

            $scope.choropleth.updateChoropleth(updateObj);
            $scope.userGuessValue = '';
        }

        if (correctGuessIsland) {
            console.log('got an island');

            $scope.userGuessValue = '';
        }
      };
    }

})();
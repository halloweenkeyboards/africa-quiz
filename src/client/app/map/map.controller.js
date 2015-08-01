(function() {
    'use strict';

    angular
        .module('app.map')
        .controller('Map', function($scope) {
            
        })

        .directive('scChoroplethWorldMap', function() {

            function link(scope, element, attrs) {
              element[0].style.position = 'relative';
              element[0].style.display = 'block';

              var choropleth = new Datamap({
                element: element[0],
                width: 500,
                height: 300,
                projection: 'mercator',
              });

            }

            return {
              restrict: 'E',
              link: link,
              scope: {
                data: '&'
              }
            };

          });

})();
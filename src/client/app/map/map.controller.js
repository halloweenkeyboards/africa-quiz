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
                width: window.width,
                height: 300,
                scope: 'world',
                // Zoom in on Africa
                setProjection: function(element) {
                  var projection = d3.geo.equirectangular()
                    .center([23, -3])
                    .rotate([4.4, 0])
                    .scale(400)
                    .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
                  var path = d3.geo.path()
                    .projection(projection);
                
                  return {path: path, projection: projection};
                },
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
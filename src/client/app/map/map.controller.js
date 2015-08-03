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
                width: element[0].width,
                height: 550,
                scope: 'world',
                geographyConfig: {                 
                    borderColor: '#000000',
                    highlightOnHover: false,
                    popupOnHover: false
                },
                // Zoom in on Africa
                setProjection: function(element) {
                  var projection = d3.geo.equirectangular()
                    .center([23, 0])
                    .rotate([4.4, -3])
                    .scale(400)
                    .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
                  var path = d3.geo.path()
                    .projection(projection);
                
                  return {path: path, projection: projection};
                },
              fills: {
                defaultFill: "#ABDDA4",
                pink: '#0fa0fa'
              },
              data: {
                'SSD': { fillKey: 'pink' },
                'CIV': { fillKey: 'pink' }
              }
            });
            choropleth.bubbles([
                {name: 'seychelles', latitude: -4.37 , longitude: 55.27, radius: 10, fillKey: 'pink'},
                {name: 'mauritius', latitude: -20.16 , longitude: 57.52, radius: 10, fillKey: 'pink'},
                {name: 'sao tome and principe', latitude: 0.33 , longitude: 6.73, radius: 10, fillKey: 'pink'}
            ], {
                highlightOnHover: false,
                popupOnHover: false 
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
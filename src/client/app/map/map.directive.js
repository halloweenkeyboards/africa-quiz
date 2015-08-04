(function() {
    'use strict'
  angular
    .module('app.map')
    .directive('scChoroplethWorldMap', africaMapDirective);

    function africaMapDirective() {

      function link(scope, element, attrs) {
        element[0].style.position = 'relative';
        element[0].style.display = 'block';

      scope.choropleth = new Datamap({
          element: element[0],
          width: element[0].width,
          height: 550,
          scope: 'world',
          geographyConfig: {
              borderColor: '#e8caa4',
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
          defaultFill: "#424254",
          unGuessed: '#64908a',
          guessed: '#cc2a41'
        },
        data: scope.mapData
      });
      scope.choropleth.bubbles(scope.islandNations, {
          highlightOnHover: false,
          popupOnHover: false 
      });
      }

      return {
        restrict: 'E',
        link: link,
        scope: false
      };

    };

})();
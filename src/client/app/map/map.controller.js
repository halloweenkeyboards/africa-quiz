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
        fills: {
          defaultFill: "#ABDDA4",
          authorHasTraveledTo: "#fa0fa0"
        },
        data: {
          USA: {
            fillKey: "authorHasTraveledTo"
          },
          JPN: {
            fillKey: "authorHasTraveledTo"
          },
          ITA: {
            fillKey: "authorHasTraveledTo"
          },
          CRI: {
            fillKey: "authorHasTraveledTo"
          },
          KOR: {
            fillKey: "authorHasTraveledTo"
          },
          DEU: {
            fillKey: "authorHasTraveledTo"
          },
        }
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
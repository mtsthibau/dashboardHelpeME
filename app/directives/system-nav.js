(function () {
    angular.module('fourmilkapp').directive('systemNav', function () {
        return {
            restrict: 'E',
            transclude: false,
            scope: {},
            link: function (scope, el, attrs) {
                scope.nav = {
                    "teste": "teste",
                    "appName": "4Milk Helper"
                };
            },
            templateUrl: 'app/directives/system-nav.html'
        };
    });
})();
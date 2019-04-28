(function ($route) {

    var c = this;
    c.fourmilkapp = angular.module('fourmilkapp', ['ngRoute']);
    //Rotas
    fourmilkapp.config(function ($routeProvider) {
        $routeProvider
        //Página de inicio - /inicio.html
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'mainCtrl',
            title: 'Início'
        })
        //Página de consultas - /consulta-registros.html
        .when('/consultar-registro/:type/:data', {
            templateUrl: 'app/views/consultar-registro.html',
            controller: 'registroCtrl',
            title: 'Consultas 4Milk'
        })
        // caso não seja nenhum desses, redirecione para a rota '/' de inicio
        .otherwise({ redirectTo: '/' });
    });

    c.fourmilkapp.run(['$location', '$rootScope', function ($location, $rootScope) {

        $rootScope.prepareApp = function () {
            $rootScope.isDev = true;
            $rootScope.hostName = "";

            if ($rootScope.isDev) {
                $rootScope.hostName = "http://localhost:60979/";
            } else {
                $rootScope.hostName = "https://4milk.com.br/api_dev/";
            }
            console.log("Fourmilk App Helper, em " + $rootScope.hostName);
        };

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            // testando pagina atual
            if (current.$$route) {
                // Set current page title 
                $rootScope.title = current.$$route.title;
                $rootScope.prepareApp();
            }
        });
    }]);
})();
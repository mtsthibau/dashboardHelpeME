(function () {
    'use strict';
    fourmilkapp.controller('mainCtrl', mainCtrl);

    function mainCtrl($location, $scope) {
        var c = this;
        //objeto de configuração
        c.config = {
            "message": "Seja bem-vindo à 4Milk Helper!"
        }
    }
})();
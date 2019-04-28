(function () {
    'use strict'
    fourmilkapp.controller('registroCtrl', function registroCtrl($http, $scope, $routeParams, $rootScope) {

        var c = this;
        // parametros de inicialização do controller
        c.data = {
            pageTitle: $routeParams.type,
            request: {
                url: $rootScope.hostName + "api/Helper/Get" + $routeParams.type,
                method: "POST",
                data: ""
            },
            search: ""
        };

        c.getResponse = function () {
            //atribui busca a requisição AJAX
            c.data.loading = true;
            c.data.request.data = "{searchParam: '" + c.data.search + "'}";
            $http(c.data.request).then(function (response) {
                if (response.data[1] == undefined) {
                    c.data.loading = false;
                    c.data.registros = [{ Resultado: "Nenhum registro encontrado!" }];
                }
                if (response.data[0].HasError) {
                    c.data.loading = false;
                    c.data.registros = [{ Resultado: "Erro ao buscar registro!" }];

                }
                if (!response.data[0].HasError) {
                    c.data.loading = false;
                    c.removeAtr(response.data, "Type");
                    c.data.registros = response.data;
                    c.data.registros.shift();
                    c.addLink(c.data.registros);
                }
            }, function () {
                c.data.loading = false;
                c.data.registros = [{ Resultado: "Erro ao acessar o serviço!" }];
            });
        };

        c.addLink = function (registros) {
            for (var x in c.data.registros) {
                if (c.data.registro[x].link) {
                    return c.data.registros[x][c.data.registro[x].link] = "<a href='info-registro/" + c.data.registro.link + "'>" + c.data.registro.nome + "</a>";
                }
            }
        }

        //função responsável por remover atributo indesejado
        c.removeAtr = function (myArray, atr) {
            for (var value in myArray) {
                delete myArray[value][atr];
            }
            return;
        };

        //TODO transformar em diretiva
        c.getKeyString = function (key) {
            return "'" + key + "'";
        };

        c.orderBy = function (key) {
            c.data.sortType = $scope.$parent.sortType = c.getKeyString(key);
            c.data.icon = key;
            return;
        };


        //TESTES

        ////parametros de inicialização do controller
        //c.data = {
        //    pageTitle: $routeParams.type,
        //    request: {
        //     url: "result.json",
        //       method: "GET"
        //   }
        //};

        c.mostrarProps = function (obj) {
            var resultado = "";
            var n = 0;
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    resultado += "atributo: " + i + " = " + obj[i] + "\n";
                }
                n++;
            }
            return resultado;
        };


        c.pagination = function (x) {
            switch (x) {
                case 1: c.data.request.url = 'result.json'; break;
                case 2: c.data.request.url = 'result2.json'; break;
                case 3: c.data.request.url = 'result3.json'; break;
            }
            c.getResponse();
        };
    });
})();
(function () {
    fourmilkapp.directive('systemMenu', function ($location) {
        return {
            restrict: 'E',
            transclude: false,
            scope: {},
            link: function (scope, el, attrs, $routeParams) {
                scope.panelId = attrs.collapsePanelId;
                scope.menuArrow = "fa fa-angle-down";

                //para setar class active em menu de acordo com página
                scope.setActiveMenu = function (i) {
                    //limpando classes de menu
                    for (x in scope.itensMenu.itens) {
                        if (scope.itensMenu.itens[x]) {
                            if (scope.itensMenu.itens[i].subItens) {
                                scope.itensMenu.itens[i].class = "active";

                            } else {
                                scope.itensMenu.itens[x].class = "none";
                                $('.collapse.in').collapse('hide');

                            }
                        }
                    }
                    //atribuindo classe active para menu
                    if (scope.itensMenu.itens[i].subItens) {
                        scope.itensMenu.itens[i].class = "activeSub";

                    } else {
                        scope.itensMenu.itens[i].class = "active";
                    }
                };

                scope.setActiveSubMenu = function (i, j) {
                    //limpando classes de subMenu
                    for (x in scope.itensMenu.itens[i].subItens) {
                        if (scope.itensMenu.itens[i].subItens[x]) {
                            scope.itensMenu.itens[x].class = "none";
                            scope.itensMenu.itens[i].subItens[x].class = "none";
                        }
                    }
                    //atribuindo classe active para subMenu
                    scope.itensMenu.itens[i].class = "activeSub";
                    scope.itensMenu.itens[i].subItens[j].class = "active";
                };

                //Objeto JSON para renderização do Menu principal
                scope.itensMenu = {
                    "itens": [
                            {
                                "menuName": "Painel de Controle",
                                "pageLink": "#",
                                "menuIcon": "fa fa-home",
                                "class": "active",
                            },
                            {
                                "menuName": "Consultas",
                                "pageLink": "",
                                "menuIcon": "fa fa-search",
                                "collapseName": "consultas",
                                "classArrow": "fa fa-plus-square-o",
                                "subItens": [
                                    {
                                        "pageName": "Usuários",
                                        "pageLink": "#consultar-registro/usuarios/data",
                                        "class": "none"
                                    },
                                    {
                                        "pageName": "Propriedades",
                                        "pageLink": "#consultar-registro/propriedades/data",
                                        "class": "none"
                                    },
                                    {
                                        "pageName": "Animais",
                                        "pageLink": "#consultar-registro/animais/data",
                                        "class": "none"
                                    },
                                    {
                                        "pageName": "Eventos",
                                        "pageLink": "#consultar-registro/eventos/data",
                                        "class": "none"
                                    },
                                    {
                                        "pageName": "Coberturas",
                                        "pageLink": "#consultar-registro/coberturas/data",
                                        "class": "none"
                                    }
                                ]
                            },
                             {
                                 "menuName": "Dúvidas Frequentes",
                                 "pageLink": "#duvidas",
                                 "menuIcon": "fa fa-question-circle",
                                 "class": "none",
                             },
                              {
                                  "menuName": "Exemplo",
                                  "pageLink": "",
                                  "menuIcon": "fa fa-arrows",
                                  "collapseName": "consultas2",
                                  "classArrow": "fa fa-plus-square-o",
                                  "subItens": [
                                      {
                                          "pageName": "Usuários",
                                          "pageLink": "#consultar-registro/usuarios/data",
                                          "class": "none"
                                      },
                                      {
                                          "pageName": "Propeiedades",
                                          "pageLink": "#consultar-registro/propriedades/data",
                                          "class": "none"
                                      },
                                      {
                                          "pageName": "Animais",
                                          "pageLink": "#consultar-registro/animais/data",
                                          "class": "none"
                                      },
                                      {
                                          "pageName": "Eventos",
                                          "pageLink": "#consultar-registro/eventos/data",
                                          "class": "none"
                                      },
                                      {
                                          "pageName": "Coberturas",
                                          "pageLink": "#consultar-registro/eventos/data",
                                          "class": "none"
                                      }
                                  ]
                              },
                             {
                                 "menuName": "Mensagens",
                                 "pageLink": "#consultar-outro",
                                 "menuIcon": "fa fa-inbox",
                                 "class": "none",
                             }
                    ]
                };
                scope.go = function (path, index) {
                    if (path) {
                        path.toString();
                        $location.path(path);
                        scope.setActiveMenu(index);

                    } else if (index) {
                        scope.setActiveMenu(index);
                    } else {
                        return;
                    }
                };
            },
            templateUrl: 'app/directives/system-menu.html'
        };
    });
})();
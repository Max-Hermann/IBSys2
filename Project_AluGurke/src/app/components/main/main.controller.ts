/**
 * Created by sven_ on 17.11.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/ResourceService.ts" />
class MainController {
    resource;
    location;
    name;
    isLoggedIn;
    $scope;


    moveableRoutes: Array<string>;
    arrowLeft = 37;
    arrowRight = 39;
    strgPressed: boolean = false;
    language: String;
    languageOld: String;
    scope;
    translate;

    constructor(resourceService: ResourceService, $rootScope, $location, $route, $translate,$scope) {
        this.resource = resourceService.resource;
        this.location = $location;
        this.$scope = $scope;
        this.isLoggedIn = false;
        this.checkSession();
        var vm = this;
        $rootScope.$on('refreshAfterLogin', function(event) { vm.checkSession(); });
        this.scope = $rootScope;
        this.translate = $translate;
        this.moveableRoutes = [];
        this.setMoveableRoutes($route.routes);
        this.language = "de_DE";
        this.languageOld=this.language;


    }
    checkSession() {
        var vm = this;
        this.resource.session('', function(result, headers) {
            if (result.session.name) {
                vm.name = result.session.name;
                vm.isLoggedIn = true;
                vm.resource.getSimulationFiles('', function(result, headers) {
                    if (result.erg != '404' && result.erg != '502') {
                        if(result.simulationFile.length>0) {
                            vm.$scope.$emit('fileController.neueDatei', JSON.parse(result.simulationFile[result.simulationFile.length - 1].datei));
                        }
                    }
                });


            } else {
                vm.name = 'Gast';
                vm.isLoggedIn = false;
            }
        });
    }

    performLogout() {
        var vm = this;
        this.resource.logout('', function(result, headers) {
            if (result.erg == '200') {
                vm.checkSession();
            } else if (result.erg == '502') {
                alert("No Database Connection!");
            }
        });
    }

    keyDown(event): void {
        if (event.which === 17) {
            this.strgPressed = true;
        }
    }

    keyUp(event): void {

        if (event.which === 17) {
            this.strgPressed = false;
            return;
        }

        var index = this.getActualRouteIndex();

        if (event.which === this.arrowRight && this.strgPressed) {
            this.location.url(this.moveableRoutes[index + 1]);
        } else if (event.which === this.arrowLeft && this.strgPressed) {
            this.location.url(this.moveableRoutes[index - 1]);
        }
    }

    getActualRouteIndex(): number {
        var actualRoute = this.location.url();
        var index = 0;
        for (; index < this.moveableRoutes.length; index++) {
            if (this.moveableRoutes[index] === actualRoute) {
                return index;
            }
        }

        return index;
    }

    setMoveableRoutes(routes): void {
        for (var property in routes) {
            if (routes.hasOwnProperty(property)) {
                if (this.isValidRoute(routes[property])) {
                    this.moveableRoutes.push(routes[property].originalPath);
                }
            }
        }
    }

    isValidRoute(routeObject): boolean {
        if (routeObject.keys.length !== 0) {
            return false;
        }
        if (!routeObject.originalPath || routeObject.originalPath.endsWith('/')) {
            return false;
        }
        return true;
    }
    changeLanguage() {
        if (this.language != this.languageOld) {
            this.translate.use(this.language).then(function(key) {
                console.log("Sprache zu " + key + " gewechselt.");
            }, function(key) {
                console.log("Irgendwas lief schief.");
            });
            this.languageOld = this.language;
        }
    }

}
angular.module('MainModule').controller('MainController', ['ResourceService', '$rootScope', '$location', '$route', '$translate','$scope', MainController]);


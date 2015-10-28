/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/ResourceService.ts" />
/// <reference path="../appServices/DateiService.ts" />
var FileController = (function () {
    function FileController($scope, service, NewTeileService, bestellService, resourceService, dateiService) {
        this.anzahl = 0;
        this.id = 24;
        this.teileService = NewTeileService;
        this.$scope = $scope;
        this.baum = service.kinderBaum;
        this.kaufteile = NewTeileService.alleKaufteile;
        this.resource = resourceService.resource;
        this.dateiService = dateiService;
        this.zugangBestellungen = bestellService.zugangBestellungen;
    }
    FileController.prototype.sendPostRequest = function () {
        var vm = this;
        this.resource.createFile({ content: this.dateiService.getInhalt() }, function (result, headers) {
            vm.result = result.dateiName;
            vm.dateiService.dateiName = result.dateiName;
            vm.dateiService.dateiErzeugt = true;
        });
    };
    FileController.prototype.startTest = function () {
        this.anzahl = 0;
        this.testBaum(this.baum, this.id);
    };
    FileController.prototype.testBaum = function (baum, id) {
        if (baum.teil_id === id) {
            this.anzahl += baum.anzahl;
        }
        if (baum.hatBauteile()) {
            for (var i = 0; i < baum.bauteile.length; i++) {
                this.testBaum(baum.bauteile[i], id);
            }
        }
    };
    FileController.prototype.change = function (json) {
        var vm = this;
        this.$scope.$apply(function () {
            vm.dateiInhalt = json;
        });
        this.$scope.$emit('fileController.neueDatei', this.dateiInhalt);
    };
    return FileController;
})();
angular.module('FileModule').controller('FileController', ['$scope', 'NewBaumService', 'NewTeileService', 'BestellService', 'ResourceService', 'DateiService', FileController]);

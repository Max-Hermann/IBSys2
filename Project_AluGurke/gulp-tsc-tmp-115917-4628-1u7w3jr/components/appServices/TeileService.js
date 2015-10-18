/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/Teil.ts" />
var TeileService = (function () {
    function TeileService() {
        this.teil = new Teil("Kette", 21, 5, 1.8, 0.4, [], 300, 50, 450);
    }
    return TeileService;
})();
angular.module('app').factory('TeileService', [function () { return new TeileService(); }]);

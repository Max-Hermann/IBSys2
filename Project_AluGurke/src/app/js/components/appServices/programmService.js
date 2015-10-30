/**
 * Created by sven_ on 27.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/ProgrammPosition.ts" />
var ProgrammService = (function () {
    function ProgrammService() {
        this.erzeugeProgrammPositionen();
    }
    ProgrammService.prototype.erzeugeProgrammPositionen = function () {
        this.produktionsprogramm = [
            new ProgrammPosition(1, 1, 0),
            new ProgrammPosition(1, 2, 0),
            new ProgrammPosition(1, 3, 0),
            new ProgrammPosition(1, 4, 0),
            new ProgrammPosition(2, 1, 0),
            new ProgrammPosition(2, 2, 0),
            new ProgrammPosition(2, 3, 0),
            new ProgrammPosition(2, 4, 0),
            new ProgrammPosition(3, 1, 0),
            new ProgrammPosition(3, 2, 0),
            new ProgrammPosition(3, 3, 0),
            new ProgrammPosition(3, 4, 0),
        ];
    };
    ProgrammService.prototype.getProgrammposition = function (id, periode) {
        if (periode === void 0) { periode = 1; }
        for (var i = 0; i < this.produktionsprogramm.length; i++) {
            if (this.produktionsprogramm[i].id === id && this.produktionsprogramm[i].periode === periode) {
                return this.produktionsprogramm[i];
            }
        }
    };
    return ProgrammService;
})();
angular.module('app').factory('ProgrammService', [function () { return new ProgrammService(); }]);

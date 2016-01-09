/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../model/NewTeilKnoten.ts" />
/// <reference path="../appServices/ProgrammService.ts" />
/// <reference path="../appServices/AuftragService.ts" />

class BestellverwaltungUtilService {

    auftragService: AuftragService;
    baumService: NewBaumService;
    programmService: ProgrammService;

    constructor(auftragService: AuftragService, baumService: NewBaumService, programmService: ProgrammService) {
        this.auftragService = auftragService;
        this.baumService = baumService;
        this.programmService = programmService;
    }

    zeileRot(reichweite: number, wbz: number, wbzAbw: number, multiplikator:number): boolean {
        if ((reichweite - wbz - wbzAbw * multiplikator) < 1) {
            return true;
        }
        return false;
    }

    zeileGelb(reichweite: number, wbz: number, wbzAbw: number): boolean {
        /*if ((!this.zeileRot(reichweite, wbz) && ((reichweite - wbzAbw - wbz) < 1))) {
            return true;
        }*/
        return false;
    }

    getVerbrauch(teil_id: number, periode: number): number {
        if (periode === 1) {
            var verbrauch = this.auftragService.getAktuellenKaufTeilVerbrauch(teil_id);
            return verbrauch;
        }
        if (periode > 4) {
            periode = 4;
        }
        var anzahlKinderFahrrad = this.getAnzahlInBaum(this.baumService.kinderBaum, teil_id) * this.programmService.getProgrammposition(1, periode).menge;
        var anzahlDamenFahrrad = this.getAnzahlInBaum(this.baumService.damenBaum, teil_id) * this.programmService.getProgrammposition(2, periode).menge;
        var anzahlHerrenFahrrad = this.getAnzahlInBaum(this.baumService.herrenBaum, teil_id) * this.programmService.getProgrammposition(3, periode).menge;
        return anzahlKinderFahrrad + anzahlDamenFahrrad + anzahlHerrenFahrrad;
    }

    getAnzahlInBaum(baum: NewTeilKnoten, id: number): number {
        return this.baumService.getAnzahlInBaum(baum, id);
    }
}

angular.module('BestellverwaltungModule').factory('BestellverwaltungUtilService', ['AuftragService', 'NewBaumService', 'ProgrammService',
    (auftragService, baumService, programmService) => new BestellverwaltungUtilService(auftragService, baumService, programmService)]);
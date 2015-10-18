/// <reference path="NewErzeugnis.ts" />
/// <reference path="Arbeitsplatz.ts" />
class Auftrag{
    erzeugnis_id: number;
    anzahl:number;
    periode:number;
    arbeitsplatz:Arbeitsplatz;

    constructor(erzeugnis_id:number, anzahl:number, periode:number,arbeitsplatz:Arbeitsplatz=null) {
        this.erzeugnis_id = erzeugnis_id;
        this.anzahl = anzahl;
        this.periode = periode;
        this.arbeitsplatz=arbeitsplatz;
    }
}
/// <reference path="Teil.ts" />
/// <reference path="WarteListe.ts" />
class Arbeitsplatz{

    name:string;
    id:number;
    ruestzeit:number;
    fertigungszeit:number;
    outPut:Teil;
    input:Array<Teil>;
    warteliste:WarteListe;

    constructor(name:string, id:number, ruestzeit:number, fertigungszeit:number, outPut:Teil, input:Array<Teil>, Warteliste:WarteListe) {
        this.name = name;
        this.id = id;
        this.ruestzeit = ruestzeit;
        this.fertigungszeit = fertigungszeit;
        this.outPut = outPut;
        this.input = input;
        this.warteliste = Warteliste;
    }
}
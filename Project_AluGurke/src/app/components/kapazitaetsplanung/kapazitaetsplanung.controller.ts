/// <reference path="../../typeDefinitions/angular.d.ts" />

class KapazitaetsplanungController{

    models:Array<KapazitaetModel>;
    kapazitaetsplanungService:KapazitaetsplanungService;
    dispositionService:DispositionService;
    bestellungBerechnenService:BestellungBerechnenService;
    ergebnis:Array<Arbeitsplatz>;
    x;
    constructor(KapazitaetsplanungService,dispositionService,bestellungBerechnenService){
        this.models=new Array<KapazitaetModel>();
        this.ergebnis=new Array<Arbeitsplatz>();
        this.kapazitaetsplanungService=KapazitaetsplanungService;
        this.dispositionService=dispositionService;
        this.models=this.kapazitaetsplanungService.models;

        this.ergebnis=this.kapazitaetsplanungService.ergebnis;
        this.bestellungBerechnenService=bestellungBerechnenService;
        console.log(this.bestellungBerechnenService);
        this.x=this.bestellungBerechnenService.getBestellung(35,1,0,[500,500,500,500]);
        this.aendern();

    }
    aendern(){
        this.dispositionService.aendern();
        this.kapazitaetsplanungService.aendern();

    }
    berechnen(){
        this.kapazitaetsplanungService.zeitSetzten();
    }





}
angular.module("KapazitaetsplanungModule").controller("KapazitaetsplanungController",["KapazitaetsplanungService","DispositionService","BestellungBerechnenService",KapazitaetsplanungController]);
class KapazitaetModel{
    anzahlSchichten:string;
    ueberstunden1:number;
    ueberstunden2:number;
    ueberstunden3:number;
    arbeitsplatz:Arbeitsplatz;
    zeitVerfuegung:number;
    name:string;
    eTeile:Array<number>;

    constructor(arbeitsplatz:Arbeitsplatz) {
        this.name = arbeitsplatz.name;
        this.anzahlSchichten="1";
        this.ueberstunden1=0;
        this.ueberstunden2=0;
        this.ueberstunden3=0;
        this.arbeitsplatz=arbeitsplatz;
        this.zeitVerfuegung=2400;
        this.eTeile=new Array<number>();
        this.setName();
    }
    setName(){
        this.eTeile=[];
        if(this.name[1]=="_"){
            let temp=name.substring(1,name.length).split(",");
            name=name.substring(0,1);
            for(let i=0;i<temp.length;i++){
                this.eTeile.push(Number(temp[i]));
            }
        }
        else{
            let temp=name.substring(2,name.length).split(",");
            name=name.substring(0,2);
            for(let i=0;i<temp.length;i++){
                this.eTeile.push(Number(temp[i]));
            }
        }
    }

}




/// <reference path="../../typeDefinitions/angular.d.ts" />

class DispositionController{


    auftragsService:AuftragService;
    newTeileService:NewTeileService;
    dispositionService:DispositionService;
    newBaumService:NewBaumService;
    models:Array<DispositionModel>;
    modelsP1:Array<DispositionModel>;
    modelsP2:Array<DispositionModel>;
    modelsP3:Array<DispositionModel>;
    knoten:Array<NewTeilKnoten>;
    kapazitaetsplanungService:KapazitaetsplanungService

    constructor(auftragsService,newTeileService,dispositionService,newBaumService,kapazitaetsplanungService){
        this.dispositionService=dispositionService;
        this.kapazitaetsplanungService=kapazitaetsplanungService;
        this.models=this.dispositionService.models;
        this.modelsP1=this.dispositionService.dispositionP1;
        this.modelsP2=this.dispositionService.dispositionP2;
        this.modelsP3=this.dispositionService.dispositionP3;
        this.auftragsService=auftragsService;
        this.aendern();
    }
    aendern(){
        this.dispositionService.aendern();
        this.kapazitaetsplanungService.aendern();
    }
}

class DispositionModel{


    eTeil:NewErzeugnis;
    geplanterLagerstand:number;
    produktionsProgramm:ProgrammPosition;
    split:string;
    prioritaet:string;
    anzahl:number;
    periode:number;
    auftraege:Array<Auftrag>;
    auftragInWarteschlange:Array<Auftrag>;
    auftragAufMaschine:Auftrag;
    oberModel:DispositionModel;

    constructor(eTeil:NewErzeugnis,x:ProgrammPosition) {
        this.eTeil = eTeil;
        this.geplanterLagerstand = 50;
        this.split = "1";
        this.prioritaet = "normal";
        this.produktionsProgramm=x;
        this.anzahl=0;
        this.periode=1;
        this.auftraege=new Array<Auftrag>();
        this.auftragInWarteschlange=new Array<Auftrag>();


    }
    getWarteschlange(){
        let x=0;
        for(let i=0;i<this.auftragInWarteschlange.length;i++){
            x+=this.auftragInWarteschlange[i].anzahl;
        }
        if(this.eTeil.mehrfachVerwendung){
            return Math.round(x/3);
        }
        return x;
    }
    getMaterialAufMaschine(){
        if(this.auftragAufMaschine==null){
            return 0;
        }
        if(this.eTeil.mehrfachVerwendung){
            return Math.round(this.auftragAufMaschine.anzahl/3);
        }
        return this.auftragAufMaschine.anzahl;
    }
    getLagerMenge(){
        if(this.eTeil.mehrfachVerwendung){
            return Math.round(this.eTeil.lagerMenge/3);
        }
        return this.eTeil.lagerMenge;
    }
    getProdProg(){
        if(this.oberModel==null){
            return this.produktionsProgramm.menge;
        }
        else{
            return this.oberModel.anzahl;
        }

    }
    getGeplanteLagermenge(){
        return this.geplanterLagerstand;
    }
}

angular.module("DispositionModule").controller("DispositionController",["AuftragService","NewTeileService","DispositionService","NewBaumService","KapazitaetsplanungService",DispositionController]);


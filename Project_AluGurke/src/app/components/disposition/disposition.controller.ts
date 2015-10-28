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

    constructor(auftragsService,newTeileService,dispositionService,newBaumService){
        this.dispositionService=dispositionService;
        this.models=this.dispositionService.models;
        this.modelsP1=this.dispositionService.dispositionP1;
        this.modelsP2=this.dispositionService.dispositionP2;
        this.modelsP3=this.dispositionService.dispositionP3;
        this.auftragsService=auftragsService;
        this.aendern();
    }
    aendern(){
        this.dispositionService.aendern();
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

    constructor(eTeil:NewErzeugnis,x:ProgrammPosition) {
        this.eTeil = eTeil;
        this.geplanterLagerstand = 100;
        this.split = "1";
        this.prioritaet = "normal";
        this.produktionsProgramm=x;
        this.anzahl=666;
        this.periode=1;
        this.auftraege=new Array<Auftrag>();
        this.auftragInWarteschlange=new Array<Auftrag>();
    }
    getWarteschlange(){
        let x=0;
        for(let i=0;i<this.auftragInWarteschlange.length;i++){
            x+=this.auftragInWarteschlange[i].anzahl;
        }
        return x;
    }
    getMaterialAufMaschine(){
        if(this.auftragAufMaschine==null){
            return 0;
        }
        else{
            return this.auftragAufMaschine.anzahl;
        }
    }
}

angular.module("DispositionModule").controller("DispositionController",["AuftragService","NewTeileService","DispositionService","NewBaumService",DispositionController]);


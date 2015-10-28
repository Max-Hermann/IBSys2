/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../appServices/BestellService.ts" />
/// <reference path="../../model/Bestellung.ts"/>
/// <reference path="../../model/NeuBestellung.ts"/>
/// <reference path="../../model/NewKaufTeil.ts"/>

class ErweitertViewModel {
	kaufTeil: NewKaufTeil;
	bestellung: NeuBestellung;
	
}


class ErweitertController {
	
	neuBestellungen: Array<NeuBestellung>;
	
	constructor(bestellService: BestellService){
		this.getNeuBestellungen(bestellService.neuBestellungen);
	}
	
	getNeuBestellungen(bestellungen:Array<NeuBestellung>){
		this.neuBestellungen = [];
		for (var i = 0; i < bestellungen.length;i++) {
			if (bestellungen[i].menge > 0){
				this.neuBestellungen.push(bestellungen[i]);
			}
		}
	}
}

angular.module('BestellverwaltungModule').controller('ErweitertController', ['BestellService', ErweitertController]);
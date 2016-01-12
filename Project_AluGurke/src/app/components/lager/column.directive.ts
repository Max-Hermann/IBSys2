/// <reference path="../../typeDefinitions/angular.d.ts" />

class LagerColumn {
	restrict: string;

	constructor() {
		this.restrict = 'A';
	}

	link(scope, el, attrs, controller) {

		el.highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: attrs.title
			},
			xAxis: {
				categories: JSON.parse(attrs.categories),
				crosshair: true
			},
			yAxis: [
				{
					title: {
						text: 'Wert in Euro'
					}
				}, {
					title: {
						text: 'Stück'
					},
					opposite:true,
				}],
			tooltip: {
				shared: true
			},
			series: [JSON.parse(attrs.wertseries), JSON.parse(attrs.mengeseries)]
		});
	}
}

angular.module('LagerModule').directive('lagercolumn', [() => new LagerColumn()]);
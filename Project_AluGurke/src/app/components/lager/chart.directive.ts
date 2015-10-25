/// <reference path="../../typeDefinitions/angular.d.ts" />
/// <reference path="../../typeDefinitions/d3js.d.ts" />

class Chart {
	restrict: string;
	template: string;
	scope: any;

	constructor() {
		this.restrict = 'A';
		this.scope = {
			data: '=data'
		};
		//this.template = '{{data}}';
	}

	link(scope, el, attrs, controller) {
		var data = [];
		for (var i = 0; i < scope.data.length; i++) {
			data.push(scope.data[i]);
		}
		data = [3122.6, 3266.6, 8254, 4085, 3985, 3268, 2509.5, 1792.5, 3585, 1240, 1465, 1465, 1240, 732.5, 1465, 1684.8, 1467.8, 1315, 1291.5, 1555, 1680, 5543.2, 6376.5, 0, 9696, 6031.5, 4124.1, 10213.5, 34465.75, 9573.6];
		/*var x = d3.scale.linear()
			.domain([0, d3.max(data)])
			.range([0, 1000]);

		d3.select(el.get(0))
			.selectAll("div")
			.data(data)
			.enter().append("div")
			.style("width", function(d) { return x(d) + "px"; })
			.style("background-color", "grey")
			.style("margin", "1px")
			.text(function(d) { return d; });*/

		var width = 1200,
			barHeight = 20;

		var x = d3.scale.linear()
			.domain([0, d3.max(data)])
			.range([0, width]);

		var chart = d3.select(el.get(0))
			.attr("width", width)
			.attr("height", barHeight * data.length);

		var bar = chart.selectAll("g")
			.data(data)
			.enter().append("g")
			.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

		bar.append("rect")
			.attr("width", x)
			.attr("height", barHeight - 1)
			.style("fill", "steelblue");
			
		bar.append("text")
			.attr("x", function(d) { return 0; })
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d; });
	}
}

angular.module('LagerModule').directive('chart', [() => new Chart()]);
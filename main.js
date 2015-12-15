/* global $ */

var graphData = [
	[50, 50, 50, 50, 50, 50, 50, 50, 50],
	[50, 50, 45, 25, 99, 25, 45, 50, 50],
	[50, 50, 65, 45, 80, 45, 65, 50, 50],
	[50, 50, 45, 65, 15, 65, 45, 50, 50],
	[50, 50, 65, 45, 80, 45, 65, 50, 50],
	[50, 50, 45, 65, 15, 65, 45, 50, 50],
	[50, 50, 25, 65, 50, 65, 25, 50, 50],
	[50, 50, 45, 65, 15, 65, 45, 50, 50],
	[50, 50, 55, 30, 50, 30, 55, 50, 50],
	[50, 50, 15, 65, 35, 65, 15, 50, 50],
	[50, 50, 50, 50, 50, 50, 50, 50, 50]
];

var pathString = '';

$(document).ready(function () {
	updateGraph();
});

var heightOfGraph = 200;
var widthOfGraph = 336;
var updateGraph = function () {
	for (var j = 0; j < graphData.length; j++) {
		var returnString = 'M 0 ' + (heightOfGraph - (graphData[j][0] * 2) + 0);
		var curveAmount = 15;
		var xoffset = widthOfGraph / graphData.length;
		for (var i = 1; i < graphData[j].length; i++) {
			var thisDataPoint = heightOfGraph - (graphData[j][i] * 2) + 0;
			returnString += " S " + (xoffset - curveAmount) + " " + thisDataPoint + " " + (xoffset++)+ " " + thisDataPoint;
			xoffset += widthOfGraph / graphData[j].length;
		}
		if (j !== graphData.length - 1) {

			returnString += '; \n';
		}
		pathString += returnString;
	}
	console.log(pathString);
	$('#animate').attr('values', pathString);

};

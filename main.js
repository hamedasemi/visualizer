/* global $ */

// var graphData = [50, 50, 50, 50, 50, 50, 50, 50, 50];
var graphData = [50,50,45,65,15,65,45,50,50];

$(document).ready(function () {
	updateGraph();
});

$('input').mousemove(function () {
	var index = $(this).attr('name');
	var newValue = $(this).val();
	graphData[index] = newValue;
	updateGraph();
});

var heightOfGraph = 200;
var widthOfGraph = 336;
var updateGraph = function () {
	//first update the wave
	var returnString = 'M 0 ' + (heightOfGraph - (graphData[0] * 2) + 0);
	var curveAmount = 15;
	var xoffset = widthOfGraph / graphData.length;
	for (var i = 1; i < graphData.length; i++) {
		var thisDataPoint = heightOfGraph - (graphData[i] * 2) + 0;
		returnString += " S " + (xoffset - curveAmount) + " " + thisDataPoint + " " + xoffset + " " + thisDataPoint;
		xoffset += widthOfGraph / graphData.length;
	}
	$('.wave').attr('d', returnString);
	
	// $('#animate').attr('dur', '1000ms');
	
	// $('#animate').attr('from', 'M 0 100 S 22.333333333333336 100 37.333333333333336 100 S 59.66666666666667 100 74.66666666666667 100 S 97 100 112 100 S 134.33333333333334 100 149.33333333333334 100 S 171.66666666666669 100 186.66666666666669 100 S 209.00000000000003 100 224.00000000000003 100 S 246.33333333333337 100 261.33333333333337 100 S 283.6666666666667 100 298.6666666666667 100');
	
	// $('#animate').attr('from', 'M 0 100 S 22.3333 100 37.3333 100 S 59.6667 80 74.6667 80 S 97 130 112 130 S 134.333 30 149.333 30 S 171.667 130 186.667 130 S 209 80 224 80 S 246.333 100 261.333 100 S 283.667 100 298.667 100');
	// 
	// $('#animate').attr('to', 'M 0 100 S 22.333333333333336 100 37.333333333333336 100 S 59.66666666666667 110 74.66666666666667 110 S 97 70 112 70 S 134.33333333333334 170 149.33333333333334 170 S 171.66666666666669 70 186.66666666666669 70 S 209.00000000000003 110 224.00000000000003 110 S 246.33333333333337 100 261.33333333333337 100 S 283.6666666666667 100 298.6666666666667 100');
	
	
};

// M 0 100 S 22.3333 100 37.3333 100 S 59.6667 80 74.6667 80 S 97 130 112 130 S 134.333 30 149.333 30 S 171.667 130 186.667 130 S 209 80 224 80 S 246.333 100 261.333 100 S 283.667 100 298.667 100

// M 0 100 S 22.333333333333336 100 37.333333333333336 100 S 59.66666666666667 100 74.66666666666667 100 S 97 100 112 100 S 134.33333333333334 100 149.33333333333334 100 S 171.66666666666669 100 186.66666666666669 100 S 209.00000000000003 100 224.00000000000003 100 S 246.33333333333337 100 261.33333333333337 100 S 283.6666666666667 100 298.6666666666667 100

// 
// var graphData = [50,100,50,100,50];
// var heightOfGraph = 300;
// 
// var newGraphData = [50,100,50,100,50];
// 
// var oldReturnString = 'M 0 160 S 90 10 120 10 S 150 160 180 160 S 210 10 240 10 S 270 160 300 160 S 270 10 300 10';
// 
// 
// function getRandom() {
// 	var rand = Math.random() * 100;
// 	console.log(rand);
//     return rand;
// }
// 
// 
// 	
// 
// function randomBars() {
// 	oldReturnString = newGraphData;
// 	
// 	newGraphData = [];
// 	
//     [].forEach.call(graphData, function () {
// 		newGraphData.push(getRandom());
//     });
// }
// 
// function run() {
//     randomBars();
// 	// console.log(newGraphData);
// 	newGraphData[0] = 50;
// 	// newGraphData[2] = 50;
// 	// newGraphData[4] = 50;
// 	newGraphData[newGraphData.length-1] = 50;
// 	var returnString = 'M 60 ' + (heightOfGraph - (graphData[0]*3) + 10);
// 	var curveAmount = 50;
// 	var xoffset = 150;
// 	// console.log(returnString);
// 	
// 	for (var i = 1; i < newGraphData.length; i++) {
// 		var thisDataPoint = heightOfGraph - (graphData[i]*3) + 10;
// 		returnString += " S " + (xoffset - curveAmount) + " " + thisDataPoint + " " + xoffset + " " + thisDataPoint;
// 		xoffset += 150;
// 	}
// 	// var oldReturnString = $('animate').attr('to');
// 
// 	$('animate').attr('from', 'M 50 150 S 90 10 120 10 S 150 160 180 160 S 210 10 240 10 S 270 160 150 150');
// 	
// 	$('#animate').attr('to', returnString);
// 	
// 	var oldReturnString = returnString;
// 	
// 	
// 	$('#animate').attr('dur', '1000ms');
// 
//     setTimeout(run, 1000);
// }
// 
// run();

/* global $ */


var graphData = [50,100,50,100,50];
var heightOfGraph = 300;

var newGraphData = [50,100,50,100,50];

var oldReturnString = 'M 0 160 S 90 10 120 10 S 150 160 180 160 S 210 10 240 10 S 270 160 300 160 S 270 10 300 10';


function getRandom() {
	var rand = Math.random() * 100;
	console.log(rand);
    return rand;
}


	

function randomBars() {
	oldReturnString = newGraphData;
	
	newGraphData = [];
	
    [].forEach.call(graphData, function () {
		newGraphData.push(getRandom());
    });
}

function run() {
    randomBars();
	// console.log(newGraphData);
	newGraphData[0] = 50;
	// newGraphData[2] = 50;
	// newGraphData[4] = 50;
	newGraphData[newGraphData.length-1] = 50;
	var returnString = 'M 60 ' + (heightOfGraph - (graphData[0]*3) + 10);
	var curveAmount = 50;
	var xoffset = 150;
	// console.log(returnString);
	
	for (var i = 1; i < newGraphData.length; i++) {
		var thisDataPoint = heightOfGraph - (graphData[i]*3) + 10;
		returnString += " S " + (xoffset - curveAmount) + " " + thisDataPoint + " " + xoffset + " " + thisDataPoint;
		xoffset += 150;
	}
	// var oldReturnString = $('animate').attr('to');

	$('animate').attr('from', 'M 50 150 S 90 10 120 10 S 150 160 180 160 S 210 10 240 10 S 270 160 150 150');
	
	$('#animate').attr('to', returnString);
	
	var oldReturnString = returnString;
	
	
	$('#animate').attr('dur', '1000ms');

    setTimeout(run, 1000);
}

run();

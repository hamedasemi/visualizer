/* global $ */
var container, bars;
var graphData = [50, 50, 50, 50, 50, 50, 50];
var heightOfGraph = 300;
var newGraphData =  [];
var oldReturnString = [50, 50, 50, 50, 50, 50, 50];
var seed = null;
function getRandom() {
	if (seed == null) {
//if there is no seed, use timestamp
        seed = (new Date()).getTime();
    } 
	
	var rand = Math.random(seed) * 100;
	// console.log(rand);
    return rand;
}


	

function randomBars() {
	// console.groupCollapsed();
	// console.group();
	
	oldReturnString = newGraphData;
	newGraphData = [];
	
    [].forEach.call(graphData, function (point) {
		newGraphData.push(getRandom());
    });
	
	
	// console.groupEnd();
	
}

function run() {
    randomBars();
	// console.log(newGraphData);
	newGraphData[0] = 50;
	// newGraphData[2] = 50;
	// newGraphData[4] = 50;
	newGraphData[newGraphData.length-1] = 50;
	var returnString = 'M 60 ' + (heightOfGraph - (newGraphData[0] * 1.2) - 1);
	var curveAmount = 30;
	var xoffset = 100;
	// console.log(returnString);
	
	for (var i = 1; i < newGraphData.length; i++) {
		var thisDataPoint = heightOfGraph - (newGraphData[i] * 1.2) - 1;
		returnString += " S " + (xoffset - curveAmount) + " " + thisDataPoint + " " + xoffset + " " + thisDataPoint;
		xoffset += 60;
	}
	var oldReturnString = $('animate').attr('to');

	$('animate').attr('from', 'M 60 250 S 80 250 100 250 S 140 250 160 250 S 200 250 220 250 S 260 250 280 260 S 320 260 340 260 S 380 250 400 250');
	var oldReturnString = $('animate').attr('to', returnString);
	
	$('.wave').attr('d', returnString);
	var bit = 150;
	
	var min = 290;
	var max = 300;
	
	
	var duration = Math.random() * (max - min) + min;
	
	console.log(duration);
	
	var dur = bit/duration ;
	
	$('animate').attr('dur', '1s');
	
	console.log(dur);
	
    setTimeout(run, duration/dur);
}

function init() {

    run();
	
	
	
}

init();

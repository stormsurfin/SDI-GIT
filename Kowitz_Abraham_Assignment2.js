/*For Memorial Day weekend I took time off work to go to Moab with my girlfriend to hike and go off-roading.  We explored all over taking pictures and soaking up the scenery.  It was great to watch the sun rise and set over the desert.  We enjoyed seeing so many beautiful and different rock formations, arches, canyons, and mountains.

My bulleted break down is as follows:
	•	Taking Memorial Day weekend off
	⁃	true or false
	•	Explore the Moab area with my girlfriend hiking and by Jeep
	⁃	go hiking until tired
	⁃	once tired, go off-roading
	•	Try to watch the sunrise and sunset every day
	⁃	alarm goes off at 5am, if not groggy, go see sunrise
	⁃	off the trail and able to get to viewing point by 8, go see sunset
	•	See as much beautiful landscape as possible
	⁃	Canyonlands National Park, Arches National Park, Dead Horse State Park, Drive along Colorado River to and from Moab
*/

// Procedure
// On the day we arrived, the wind was blowing hard and there was dust everywhere, making sightseeing impossible.

var dust = true;

if (dust === true)
console.log("The dust is horrible, we should go see a movie!");
if (dust === false)
console.log("The dust has cleared, let's go play!");

// Boolean Function

var supplies = function() {
	var packed = true
	var offWork = true
	var abeHungry = true
	var janinaHungry = false
	var thirsty = true
	
	if (packed && offWork) {
		console.log("We're packed and ready to leave.");
	} else {
		console.log("We can't leave quite yet.");
	}    
	if (abeHungry || janinaHungry) {
		console.log("We'll stop and eat on the hiking trail.");
	} else {
		console.log("Our food is packed, we can eat whenever we want.")
	}	
	if (!thirsty) {
		console.log("Be sure to drink plenty of water.");
	} else {
		console.log("We're in the desert, no skimping on water!")
	}
};
supplies();

// While Loop

var hike = function() {var dayHours = 12;
	while (dayHours > 1) {
		console.log("There's " + dayHours + " hours left before sunset, lets keep exploring!");
		dayHours--;
		};
		console.log("The sun is getting low, lets go find a spot to watch the sunset!");
	};
	
hike();

// For Loop
// lux is a measurement of light, 400 lux is the intensity at sunset, 1 lux is the amount of light during a full moon

for (var lux = 400; lux > 1; lux/=2) {
	console.log("It's still light out and the sky is full of color, what a great sunset!");
};
console.log("Its dark out, lets go back to camp.");

// Array Function

var attractions = ["Delicate Arch", "Devils Garden", "Landscape Arch", "Double Arch"],
	milesAway = [3, 5, 1.5, 1],
	hikers = ["Janina", "Abe"];

var visitAttraction = function(whatAttraction) {
	var attractionName = attractions[whatAttraction],
	milesHiked = milesAway[attractionNumber];
    console.log(hikers[0] + " wants to see the " + attractionName + " we have " + milesHiked + " miles to hike.");
		for (var miles = 0; miles < milesHiked; miles += .5) {
			var milesRemain = milesHiked - miles;
				console.log(miles + " miles have past, we have " + milesRemain + " miles left.");
            }
            console.log("What a great sight to see, visiting " + attractionName + "!");
        };

        for (var attractionNumber = 0; attractionNumber < attractions.length; attractionNumber++) {
            visitAttraction(attractionNumber); 
        };

// Sting Function
// Steps to put the Jeep in 4 low

console.log("Time to use 4wd for the first time!");
var fourLow = function() {
	var roll = "Get the Jeep moving above 5 mph.  ";
	var neutral = "Put it in Neutral.  ";
	var shift = "Move the 4wd shifter down then to the right and down again.  ";
	var drive = "Put it back in Drive.";
	console.log(roll + neutral + shift + drive);
	};

fourLow();	



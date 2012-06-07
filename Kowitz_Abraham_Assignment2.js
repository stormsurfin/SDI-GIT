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

var goodSunset = function() {
	var dustSettlesAtSunset = true;
	var prettySunset = true;
	
	if(dustSettlesAtSunset === true)
		{
		console.log("Lets go to the top of the canyon to see the sunset!")
		} else {
	if(prettySunset === true)
		{
		console.log("We'll take lots of great sunset pictures.")
		}
	}
};


// While Loop


var hike = function() {var dayHours = 12;
	while (dayHours > 1) {
		console.log("There's " + dayHours + " hours left before sunset, lets keep exploring!");
		dayHours--;
		};
		console.log("The sun is getting low, lets go find a spot to watch the sunset!");
	};
	
console.log(hike);

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



var fourLow = function() {
	var roll = "Get the Jeep moving above 5 mph.";
	var neutral = "Put it in Neutral.";
	var shift = "Move the shifter down then to the right and down again.";
	var drive = "Put it back in Drive.";
	console.log(roll + neutral + shift + drive);
	};
	

/*var offWork = true;
	delicateArchMi = 3,
	devilsGardenMi = 5,
	landscapeArchMi = 1.6,
	doubleArchMi = .8,
	milesToTired = 10,
	groggy = false,
	offTrailTime = 1900,
	attractions = ["canyonlands", "arches", "deadHorse", "drive along colorado river"];

if (offWork === true) {
	console.log('We\'re going to Moab for Memorial Day weekend!');
} else {
	console.log("I have to work Memorial Day weekend.");
};
	
// Our plans for the weekend

console.log ("Our plan is to enjoy" + attractions + " this weekend!");
	
//On our first day we hike all around Arches National Park

if (milesToTired <= delicateArchMi + devilsGardenMi + landscapeArchMi + doubleArchMi) {
	console.log("What a long day, we should drive down Shaffer Road.");
} else {
	console.log("Let's find another hike to go on!");
};
	
*/


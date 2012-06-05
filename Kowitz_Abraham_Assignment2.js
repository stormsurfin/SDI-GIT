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

//While Loop

var day = 12;

while (day > 1) {
	console.log("There's " + day + " hours left before sunset, lets keep exploring!");
	day--;
};
console.log("The sun is getting low, lets go find a spot to watch the sunset!");

// For Loop
// lux is a measurement of light, 400 lux is the intensity at sunset, 1 lux is the amount of light during a full moon

for (var lux = 400; lux > 1; lux/=2) {
	console.log("It's still light out and the sky is full of color, what a great sunset!");
};
console.log("Its dark out, lets go back to camp.");




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


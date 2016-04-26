//create object
var car = {
//proptery: value
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	//boolean
	isTurnedOn: false,
	numberOfWheels: 4, 
	//array - list
	//car.seats = ["seat 1", "seat 2", "seat 3", "seat 4"]
	//car.seats.length = 4
	seats: [
		'seat 1', 
		'seat 2', 
		'seat 3', 
		'seat 4' 
	], 
	//create method
	turnOn: function() {
		//"this" refers to car, within global object
		// this = native call
		this.isTurnedOn = true; 
		//to invoke: 
			//car.turnOn ==> (only gives us code)
			//car.turnOn() ==> undefined
			//car.isTurnedOn ==> true
	}, 
	//create another method
	fly: function() {
		alert('fly');
	}, 
	//create new method aka property
	switchCar: function(isOn) {
		console.log('turn car ' + isOn);
		if (isOn === true )	{
			this.isTurnedOn = true; 
		} else {
			this.isTurnedOn = false;
		}
	}
};
console.log('hello there friends!');

var sayMyName = function(name) {
	alert('My name is: ' + name);
};	
var doCoolStuff = function () {
	/* document = main window
		changing class name
	*/
	var currentClassName = document.getElementById('cool').className;
	if(currentClassName === 'cool') {
		//changing class name
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
};

var sayMyName = function(name) {
	alert('My name is: ' + name);
};


//create object
	var car = {
		//proptery: value
		make: 'VW',
		type: 'Polo',
		color: 'blue',
		isTurnedOn: false,
		numberOfWheels: 4, 
		seats: [
			'seat 1', 
			'seat 2', 
			'seat 3', 
			'seat 4' 
		], 
		//create method
		turnOn: function() {
			//this refers to car
			this.isTurnedOn = true; 
			//to invoke: 
				//car.turnOn ==> (only gives us code)
				//car.turnOn() ==> undefined
				//car.isTurnedOn ==> true
		}, 
		fly: function () {
			alert('fly');
		}, 
		//create new method aka property
		switchCar: function (isOn) {
			console.log('turn car ' + isOn);
			if (isOn === true )	{
				this.isTurnedOn = true; 
			} else {
				this.isTurnedOn = false;
			}
		}

	};
	console.log('hello there friends!');

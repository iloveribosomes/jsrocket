//create a timer
var timer = null; 
var countdownNumber = 10;  


var changeState = function(state) {
	/*
	search "JS how to change body class"
	http://stackoverflow.com/questions/4397289/javascript-fastest-way-to-remove-a-class-from-body
	*/
	//passing thru numbers to change state of rocket
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10; 
	document.getElementById('countdown').innerHTML = countdownNumber;

//how to go from countdown to counting down?
	// countdown
	if (state === 2) {
		//what does setInterval do?
		//given interval runs every 1000ms(1 sec), passes thru function
		timer = setInterval(function () {
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;

		if(countdownNumber <= 0) {
			changeState(3); //Lift Off state
		}
	}, 500);

	} else if (state === 3) {
		var success = setTimeout(function() {
				var randomNumber = Math.round(Math.random() * 10);
				console.log('randomNumber:', randomNumber);
				//succes
				if (randomNumber > 2) { 
					//do something
					changeState(4);
				} else {
					//do something else
					changeState(5); //oh no!
				}

		}, 2000);
	}
};



/* QUESTIONS
1) if rocket doesn't fly, why do we have to change CSS and not JS??
2) why only use two == vs three?
3) In JS, is unit of time(line 24 & 29) always counted in milliseconds?
4) why won't my rocket snap back to the ground?
5) why does my rocket sometimes get off the screen and sometimes doesn't?
*/



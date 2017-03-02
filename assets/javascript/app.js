var audio = new Audio ("assets/images/music.mp3");

//Hide questions
$('.timerQuestions').hide();

//Toggle for timer and questions
$('button').click(function() {
	$('.timerQuestions').toggle("slow");
	$('.timerQuestions').show("slow");
	$('button').hide();
	audio.play();
	console.log('toggle worked');
});

//Start timer 
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;

	setInterval(function() {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.text(minutes + ":" + seconds);
		console.log(minutes + ":" + seconds);

		if (--timer === 0) {
			$('#timeRemaining').html("Time's up!");
			console.log("Time's up!");
		}
	}, 1000);
}


//Display timer
jQuery(function($) {
	var twoMinutes = 60 * 2,
		display = $('#timeRemaining');
	startTimer(twoMinutes, display);
});
	

//Submit button
// $('button2').click(function() {
// 	$('.').toggle("slow");
// 	$('.').show("slow")
// 	$('button2').hide();
// 	audio.play();
// 	console.log('toggle worked');
// });

//Determine if answers are correct/incorrect

//Log in how many are correct/incorrect





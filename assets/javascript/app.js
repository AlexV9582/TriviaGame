var questionArray = []
var numberArray = []
var queryURL = "https://opentdb.com/api.php?amount=50&category=12&difficulty=medium&type=multiple";
var correctAnswer = false
var questionNumber
var correctAnswerNumber
var wins = 0
var losses = 0
var timeLeft = 10
var intervalId;
var displayTime;

$("#wins").html(wins);
$("#losses").html(losses)
$("#timeRemaining").html(timeLeft)


			/*intervalId = setInterval(count, 1000);
			time++;
			var converted = timeConverter(time);
			$("#display").html(converted);
*/

$.ajax({
	url: queryURL,
	method: "GET"
	}).done(function(response) {
		console.log(response);
		console.log(response.Runtime);
		function questionGen(question) {
			questionNumber = Math.floor((Math.random() * 49));
			correctAnswerNumber = Math.floor((Math.random() * 4) + 1);
			$("#question").html(response.results[questionNumber].question)
//  Generate random number to assign correct answer to
			if (correctAnswerNumber === 1) {
				$("#answer1").html(response.results[questionNumber].correct_answer)
			}else if (correctAnswerNumber === 2) {
				$("#answer2").html(response.results[questionNumber].correct_answer)
			}else if (correctAnswerNumber === 3){
				$("#answer3").html(response.results[questionNumber].correct_answer)
			}else (
				$("#answer4").html(response.results[questionNumber].correct_answer))
			numberArray.push(correctAnswerNumber)
// Generate remaining answers
			do {
				var wrongAnswerNumber1 = Math.floor((Math.random() * 4) + 1)
			}
			while (numberArray.includes(wrongAnswerNumber1) === true)
			numberArray.push(wrongAnswerNumber1)

			do {
				var wrongAnswerNumber2 = Math.floor((Math.random() * 4) + 1)
			}
			while (numberArray.includes(wrongAnswerNumber2) === true)
			numberArray.push(wrongAnswerNumber2)

			do {
				var wrongAnswerNumber3 = Math.floor((Math.random() * 4) + 1)
			}
			while (numberArray.includes(wrongAnswerNumber3) === true)
			numberArray.push(wrongAnswerNumber3)
// Display wrong choices
			if (wrongAnswerNumber1 === 1) {
				$("#answer1").html(response.results[questionNumber].incorrect_answers[0])
			}else if (wrongAnswerNumber1 === 2) {
				$("#answer2").html(response.results[questionNumber].incorrect_answers[0])
			}else if (wrongAnswerNumber1 === 3){
				$("#answer3").html(response.results[questionNumber].incorrect_answers[0])
			}else (
				$("#answer4").html(response.results[questionNumber].incorrect_answers[0]))

			if (wrongAnswerNumber2 === 1) {
				$("#answer1").html(response.results[questionNumber].incorrect_answers[1])
			}else if (wrongAnswerNumber2 === 2) {
				$("#answer2").html(response.results[questionNumber].incorrect_answers[1])
			}else if (wrongAnswerNumber2 === 3){
				$("#answer3").html(response.results[questionNumber].incorrect_answers[1])
			}else (
				$("#answer4").html(response.results[questionNumber].incorrect_answers[1]))

			if (wrongAnswerNumber3 === 1) {
				$("#answer1").html(response.results[questionNumber].incorrect_answers[2])
			}else if (wrongAnswerNumber3 === 2) {
				$("#answer2").html(response.results[questionNumber].incorrect_answers[2])
			}else if (wrongAnswerNumber3 === 3){
				$("#answer3").html(response.results[questionNumber].incorrect_answers[2])
			}else (
				$("#answer4").html(response.results[questionNumber].incorrect_answers[2]))
			

		}			
// check if correct on click
	$("input[type='radio']").click(function(){
		var radioValue = $("input[name='optradio']:checked").val();
		if (radioValue == correctAnswerNumber) {
			correctAnswer = true
			wins++;
			$("#wins").html(wins)
			alert("Correct!")
			reset();
			timer();
		}else {	
			losses++;
			$("#losses").html(losses)
			alert("Wrong!")
			correctAnswer = false
		}
			console.log(radioValue)
		if (correctAnswer === true) {
			numberArray.length = 0
			radioValue = 0
			questionGen();
			correctAnswer = false;
			$('input[name="optradio"]').prop('checked', false);

		}
		
	})
function reset () {
			timeLeft = 10;
			$("#timeRemaining").html(timeLeft)
		}
intervalId = setInterval(timer, 1000);
function timer() {
	if (timeLeft > 1) {	
		timeLeft--;
		displayTime = Math.floor(timeLeft);
		console.log(timeLeft)
		$("#timeRemaining").html(displayTime)
	}else {
		reset();
		console.log("out of time")
		losses++;
		$("#losses").html(losses)
	}
}
	
			




		
			

			


			
			/*console.log(questionNumber)
			console.log(numberArray)
			console.log(correctAnswerNumber)
			console.log(wrongAnswerNumber1)
			console.log(wrongAnswerNumber2)
			console.log(wrongAnswerNumber3)
			console.log(correctAnswer)
		*/

	questionGen()
	timer()
	
});








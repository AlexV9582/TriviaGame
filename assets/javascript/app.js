	var numberArray = []
    var queryURL = "https://opentdb.com/api.php?amount=50&category=12&difficulty=medium&type=multiple";

	$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(response) {
			console.log(response);
			console.log(response.Runtime);
			function questionGen(question) {
				var questionNumber = Math.floor((Math.random() * 49));
				var correctAnswerNumber = Math.floor((Math.random() * 4) + 1);
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
// check if correct on click
				$("input[type='radio']").click(function() {
					var radioValue = $("input[name='optradio']:checked").val();
				if (radioValue == correctAnswerNumber) {
						alert("Correct!")
					}else {alert("Wrong!")}
					console.log(radioValue)
				})
				

				


				
				console.log(questionNumber)
				console.log(numberArray)
				console.log(correctAnswerNumber)
				console.log(wrongAnswerNumber1)
				console.log(wrongAnswerNumber2)
				console.log(wrongAnswerNumber3)
			}
			questionGen()
			
			
	});



















		

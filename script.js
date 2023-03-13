function checkAnswer() {
	const answer = document.getElementById("answer").value;
	if (answer.toLowerCase() === "queen"||answer.toLowerCase() === " evil queen"||answer.toLowerCase() === "stepmother"||answer.toLowerCase() === "step mother") {
		window.location.href = "correct.html";
	} else {
		window.location.href = "wrong.html";
	}
}


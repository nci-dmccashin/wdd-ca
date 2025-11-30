// Author: Daniel McCashin
document.getElementById("calculator-form").addEventListener("submit", (e) => {
		// Stop browser submitting form
		e.preventDefault();
		let numberOfBottles = document.getElementById("question1").value;
		// Get checked radio button value
		let sizeOfBottles = document.querySelector("input[name=question2]:checked").value;
		let doesUserReturnBottles = document.querySelector("input[name=question3]:checked").value;
});
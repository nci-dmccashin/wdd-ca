// Author: Daniel McCashin
document.getElementById("calculator-form").addEventListener("submit", (e) => {
		// Stop browser submitting form
		e.preventDefault();
		let numberOfBottles = document.getElementById("question1").value;
		// Get checked radio button value
		let sizeOfBottles = document.querySelector("input[name=question2]:checked").value;
		let doesUserReturnBottles = document.querySelector("input[name=question3]:checked").value;
		let plasticUsedPerBottle = 0;
		// Switch statement used to calculate how much plastic is wasted depending on size of the bottle
		switch (sizeOfBottles) {
			case "500":
				plasticUsedPerBottle = 20;
				break;
			case "750":
				plasticUsedPerBottle = 30;
				break;
			case "1000":
				plasticUsedPerBottle = 35;
				break;
			case "2000":
				plasticUsedPerBottle = 50;
				break;
		}
		let plasticUsed = plasticUsedPerBottle * numberOfBottles;
		// If user returns bottles, plastic waste is reduced by 30%
		if (doesUserReturnBottles == "true") {
			plasticUsed = plasticUsed / 100 * 70;
		}
});
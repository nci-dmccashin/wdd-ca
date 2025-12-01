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
		// Calculate cost of deposit
		let costOfDepositPerBottle = 0;
		let costOfDeposit = 0;
		switch (sizeOfBottles) {
			case "500":
				costOfDepositPerBottle = 15;
				break;
			default:
				costOfDepositPerBottle = 25;
				break;
		}
		// Deposit only applies if user does not return bottles, so leave at 0 if they do
		if (doesUserReturnBottles == "false") {
			costOfDeposit = numberOfBottles * costOfDepositPerBottle;
		}
		// Remove calculator and show user results
		// Use template literal to format HTML
		let costOfDepositInEuro = costOfDeposit / 100;
		alert(costOfDeposit);
		alert(costOfDepositInEuro);
		document.getElementById("calculator-form").innerHTML = 
		`
			<h1>You used ${plasticUsed}g of plastic in the last week</h1>
			<h3>You wasted &euro;${costOfDepositInEuro} by not returning your bottles</h3>
		`;
});
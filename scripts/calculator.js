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
			// Cost of deposit is the same if over 500ml so no need to add switch case for each size
			default:
				costOfDepositPerBottle = 25;
				break;
		}
		let carbonImpactPerBottle = 0;
		switch (sizeOfBottles) {
			case "500":
				carbonImpactPerBottle = 120;
				break;
			case "750":
				carbonImpactPerBottle = 230;
				break;
			case "1000":
				carbonImpactPerBottle = 280;
				break;
			case "2000":
				carbonImpactPerBottle = 580;
				break;
		}
		let carbonImpact = carbonImpactPerBottle * numberOfBottles;
		costOfDeposit = numberOfBottles * costOfDepositPerBottle;
		// Remove calculator and show user results
		// Use template literal to format HTML
		let costOfDepositInEuro = costOfDeposit / 100;
		let calculatorFormElement = document.getElementById("calculator-form");
		calculatorFormElement.innerHTML = 
		`
			<h1>You used ${plasticUsed}g of plastic in the last week</h1>
		`;
		calculatorFormElement.innerHTML += 
		`
			<h3>The production of these bottles emiited ${carbonImpact}g of Co2 into our enviroment</h3>
		`;
		if (doesUserReturnBottles == "false") {
			calculatorFormElement.innerHTML += 
			`
				<h3>You wasted &euro;${costOfDepositInEuro} by not returning your bottles</h3>
			`;
		} else {
			calculatorFormElement.innerHTML += 
			`
				<h3>You saved &euro;${costOfDepositInEuro} by returning your bottles. Good Job!</h3>
			`;
		}
		//TODO: Make link go to correct page
		// Using JavaScript to open link instead of <a> is not ideal but it works
		calculatorFormElement.innerHTML += 
		`
			<button class="btn btn-success" onclick="window.location.reload();">Restart</button><br/>
			<button class="btn btn-primary mt-4" onclick="window.open('#');">How can I reduce my enviromental impact?</button>
		`;
});
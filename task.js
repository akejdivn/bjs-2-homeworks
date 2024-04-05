"use strict"

function solveEquation(a, b, c) {
	let arr = [''];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		arr = []
	} else if (discriminant === 0) {
		arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
	} else {
		arr = [-b / (2 * a)]
	}
	return arr;
};


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = Math.round(Math.random());
	loanBody = amount - contribution;
	countMonths = loanBody * ((1 / 12) * percent + ((1 / 12) * percent / Math.pow(((1 + (1 / 12) * percent), countMonths) - 1)))
}
calculateTotalMortgage(10, 0, 50000)
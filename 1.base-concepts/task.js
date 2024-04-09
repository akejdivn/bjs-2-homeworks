"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	 if (discriminant === 0) {
    arr = [-b / (2 * a)]

	} else if (discriminant > 0) {

    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a))
	}
	return arr;

};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyInterest = (percent / 100) / 12;
	let loanBody = amount - contribution;
	let payment = loanBody * (monthlyInterest + (monthlyInterest / (Math.pow((1 + monthlyInterest) , countMonths) - 1)))
	let allLoan = payment * countMonths
	let result = parseFloat( allLoan.toFixed(2));
	  return result;
	
	}
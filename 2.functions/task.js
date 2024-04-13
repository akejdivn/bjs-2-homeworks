function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let avg;
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] > max) {
			max = arr[i];
		}
		avg = (sum += arr[i]) / arr.length
	}
	avg = parseFloat(avg.toFixed(2))
	return {
		min: min,
		max: max,
		avg: avg
	};

}

function summElementsWorker(...arr) {
	let sum = 0;
	let length = arr.length;


	for (let i = 0; i < length; i++) {
		sum += arr[i]
	}
	if (arr.length === 0) {
		return 0
	} else {




		return sum;
	}
}

function differenceMaxMinWorker(...arr) {
	let min;
	let max;
	let sumAvg;
	min = Math.min(...arr);
	max = Math.max(...arr);

	sumAvg = max - min;
	return sumAvg

}

function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
		if (arr.length === 0) {
			return 0
		} else {
			return sumEvenElement - sumOddElement
		}
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1
		}
	}

	return sumEvenElement / countEvenElement
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
}
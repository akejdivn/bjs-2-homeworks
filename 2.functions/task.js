function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg;
  let sum = 0;
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min ){
        min = arr[i];
      } else if ( arr[i] > max) {
        max = arr[i];
      }
      avg = (sum+= arr[i] )/ arr.length
    }
    avg = parseFloat(avg.toFixed(2))
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  let length = arr.length;
  if (arr.length === 0) {
    return 0
  } 
  for (let i = 0; i < length; i++) {
    sum += arr[i]
  }
return sum;
}

function differenceMaxMinWorker(...arr) {
  let min;
  let max;
  let sumAvg;
  if (arr.length === 0){
    return 0
  }
  min = Math.min(...arr);
  max = Math.max(...arr);

  sumAvg = max - min;
  return  max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
      let sumOddElement = 0;
      if (arr.length === 0) {
        return 0
      } 
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
        } else {
          sumOddElement += arr[i];
        }
      }
      return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){
    return 0
  }
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

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i=0; i < arrOfArr.length; i++){
 const result = func(...arrOfArr[i])
 if( result >maxWorkerResult){
  maxWorkerResult = result
 }
}
return maxWorkerResult
}
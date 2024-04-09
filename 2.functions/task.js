function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
    for (i = 0; i< arr.length; i++){
      if (arr < min ){
        max = arr;
      } else if ( arr > max) {
        min = arr;
      }
      avg =+ arr[i] / arr.length;
  
    }
    return { min: min, max: max, avg: avg };
  }


function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}

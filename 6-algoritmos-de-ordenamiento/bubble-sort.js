let array = [31, 22, 8, 40, 37, 26, 21, 13, 45, 14]

function bubbleSort(arr) {

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      let izq = arr[i];
      let der = arr[i + 1];

      if (izq > der) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // console.log(arr);
      }
    }
  }

  return arr;
}

let sortedArray = bubbleSort(array);
console.log(sortedArray)
//node
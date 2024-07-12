function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let array = [86, 982, 98, 1, 28, 10];
linearSearch(array, 10)
// * Big O Notation: O(n) -> lineal
// * 10 elem -> 10 veces
// * 100 elem -> 100 veces

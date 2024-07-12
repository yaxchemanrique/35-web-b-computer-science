function binarySearch(arr, target) {
  let inicio = 0;
  let fin = arr.length - 1;


  while (inicio <= fin) {
    const mid = Math.floor((inicio + fin) / 2)
    if (arr[mid] === target) {
      // console.log(`Fue el elemento a la mitad`);
      return mid
    }
    else if (arr[mid] < target) {
      // console.log(`target ${target} es más grande que elemento a la mitad ${arr[mid]}`);
      inicio = mid + 1;
    }
    else {
      // console.log(`target ${target} es más pequeño que elemento a la mitad ${arr[mid]}`);
      fin = mid - 1;
    }
  }

  return -1
}

let array = [1, 10, 28, 32, 54, 67, 86, 98, 105, 267, 544, 876, 987];
//* let array = [1, 10, 28, 32, 54, 67, 86, -> 98, 105, 267, 544, 876, 987 <-];
//* let array = [-> 1, 10, 28, 32, 54, 67 <-, 86, 98, 105, 267, 544, 876, 987];

binarySearch(array, 10);
binarySearch(array, 267);
binarySearch(array, 876);

/* 
* Big O Natation: O(log n)
*/
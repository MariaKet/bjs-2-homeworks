function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);

  return result; // boolean
  
}

console.log(compareArrays([8, 5, 3], [8, 5, 3]));

function advancedFilter(arr) {

  let resultArr = arr.filter(Number => Number > 0).filter(Number => Number % 3 === 0).map(Number => Number*10);


  return resultArr; // array
}
console.log(advancedFilter([-1, 6, -9, 3]));
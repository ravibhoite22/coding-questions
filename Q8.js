//Wrt code to get sum of all the elements of array
//input arr = [[1,2,3],[4,5] ,[2,2,3,4,[1,2,[3]]],[0, [4,3]],[2,2,3,4,3]]
//o/p = sum of all array items i.e 53//

//Option 1
function SumNestedArrays(arr) {
  return arr
    .reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) ? SumNestedArrays(toFlatten) : toFlatten
      );
    }, [])
    .reduce((a, b) => a + b, 0);
}

let arr = [
  [1, 2, 3],
  [4, 5],
  [2, 2, 3, 4, [1, 2, [3]]],
  [0, [4, 3]],
  [2, 2, 3, 4, 3]
];

let sum = SumNestedArrays(arr);

console.log("Option 1", sum);

//Option 2
function sumNestedArrays(array) {
  var flattenedArray = [];

  array.forEach(function (element) {
    if (Array.isArray(element)) {
      flattenedArray.push(sumNestedArrays(element));
    } else {
      flattenedArray.push(element);
    }
  });

  return flattenedArray.reduce(function (a, b) {
    return a + b;
  });
}

let sum2 = sumNestedArrays(arr);

console.log("Option 2", sum2);

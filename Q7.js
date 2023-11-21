// Wrt code to archive expected o/p
//input arr = [1,2,3,4] o/p = [2,4,6,8] using array methods.

let arr = [1, 2, 3, 4];

let doubleArr = arr.map(function (arrItem) {
  return arrItem * 2;
});

console.log(doubleArr);

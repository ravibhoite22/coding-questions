//Q6. Wrt. Code to find no. of occurrence of string/numbers in array.
//Arr = [1,2,3,1,3,2,2,1,1] o/p should be {1:3,2:3,3:2}

//Option 1
function getRepeatData(inputArr) {
  var objArr = {};
  for (let i = 0; i < inputArr.length; i++) {
    if (objArr.hasOwnProperty(inputArr[i])) {
      objArr[inputArr[i]] = objArr[inputArr[i]] + 1;
    } else {
      objArr[inputArr[i]] = 1;
    }
  }
  console.log(objArr);
}
var inputArr = [1, 2, 3, 4, 1, 3, 2, 2];
getRepeatData(inputArr);

//Option 2
const count = {};
inputArr.forEach((element) => {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
});
console.log(count);

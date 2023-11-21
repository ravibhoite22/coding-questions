//Q2.
let inputArr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
//outputArr should be [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];

let alphabetArr = [];
let numberArr = [];

//Option 1 with for each
inputArr.forEach((item, index) => {
  if(typeof(item) != "number"){
    alphabetArr.push(item);
  } else {
    numberArr.push(item);
  }
});

//Option 2 with filter
// alphabetArr = inputArr.filter((item) => {
//   return typeof(item) != "number";
// });
// numberArr = inputArr.filter((item) => {
//   return typeof(item) == "number";
// });

console.log(numberArr);
console.log(alphabetArr);

let finalArr = [...numberArr, ...alphabetArr];

console.log(finalArr);
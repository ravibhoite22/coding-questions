/**
 * write a function to find missing numbers in an array in sequence 0-10
 */

var arr = [1, 2, 4, 6, 9];

for (let i = 1; i <= 10; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}

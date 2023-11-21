//Q9  What will the output of below code.

let a = { name: "test1" };
let b = a;
b.name = "test2";

console.log(a.name);

let arrA = [1,2,3,4];

let arrB = arrA;

arrB.push(5);

console.log("Arr B",arrB);
console.log("Arr A",arrA);

let arrC = [...arrA];

arrC.push(6);

console.log("Arr C",arrC);
console.log("Arr A",arrA);

/**
 test2
Arr B [ 1, 2, 3, 4, 5 ]
Arr A [ 1, 2, 3, 4, 5 ]
Arr C [ 1, 2, 3, 4, 5, 6 ]
Arr A [ 1, 2, 3, 4, 5 ]
 */

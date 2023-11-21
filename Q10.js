//What will the output of below code.

var a = (b = 10);

if (true) {
  console.log(a);
  console.log(b);
}

if (true) {
  console.log(c);
  console.log(d);
}

var c=d=9;

/**
 
10
10
undefined
console.log(d);
ReferenceError: d is not defined 
  
 */
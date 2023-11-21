//Q5: What will the output of below code.
console.log("start");

setTimeout(function () {
  console.log("Hello World");
}, 0);

let myPromise = new Promise(function (Resolve, Reject) {
  console.log("inside promise");
  Resolve();
});

myPromise.then(function (value) {
  console.log("promise completed");
});

console.log("end");

/* 
o/p

start
inside promise
end
promise completed
Hello World

*/
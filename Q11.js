/**
 * what will be the output of the following code?
 */

/** Q1 */

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 === 0.3);

console.log([] === []);

console.log({} === {});

var person = {
    name:"ravi",
    greet: function(){
        return "Hello " + this.name;
    }
}

var greetFn = person.greet;

console.log(greetFn());

console.log(person.greet());

/** Q2 */

let count = 0; 
// IIFE
(function() { 
 count++; 
 console.log(count); }
)(); 
 
console.log(count);
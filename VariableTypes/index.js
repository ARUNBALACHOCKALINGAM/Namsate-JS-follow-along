// let and const declarations are hoisted


// undefined is logged
console.log(b);

// console.log(a) - Can be accessed only after initialization


// In case of var, memory is declared in global execution context
// In case of let, memory is declared in a different memory space which cannot be accessed until initialized

// Temporal dead zone is the phase between when the variable is hoisted and when it's initialized
// When we try to access a variable in the temporal dead zone it gives a ReferenceError
let a = 10;
// let a = 100; redeclaration is not allowed throws syntax error
// var a = 100; not allowed, a is already declared
var b = 100;


// const b;  not allowed, const declarations must be initialized (Sytax error)
const b = 1000; 

// b = 100, not allowed (Type error)

// try to use const if possible
// if not const use let.
// use var consciously, try not to use
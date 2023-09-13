/*In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope 
before code execution. Basically, it gives us an advantage that no matter where functions and 
variables are declared, they are moved to the top of their scope regardless of whether 
their scope is global or local.*/



getName(); // We can call functions before the line of initialization
console.log(x); // But variables will be undefined before the line of initialization

console.log(getNameArrow) // Arrow functions will also act as variables, hence logs undefined

// if we haven't initialized the variable, a error will be thrown,execution stops
// if we haven't initialized a function, a erroe will be thrown, execution stops

// logs the entire code inside getName function 
console.log(getName);

var x = 7;


const getNameArrow = () => {
    console.log("Namaste JavaScript")
}


function getName() {
    console.log("Namaste JavaScript")
}



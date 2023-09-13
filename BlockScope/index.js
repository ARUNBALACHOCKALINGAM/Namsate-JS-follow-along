// let and const are block scoped
/* 

{
   this is a block
}

*/

// Block is used to combine multiply javascript statements together
{
    // Compound statement
    var a = 10;
    console.log(10);
}

if (true) true 

// Block allows us to execute multiple statements in the place where javascript expects a single statement
if (true) {
      // Compound statement
      var a = 10;
      console.log(10);
}


// What is block scope
// Block scope is variables and functions which we can access inside a block


var a = 100;
let b = 100; 
{
    var a = 10;  // a is stored in global scope
    // let and const are block scoped , stored in seperate memory space
    let b = 20;
    const c = 30;

    console.log(a); // a will be shadowed, also modified the value of previous a declaration
}

console.log(b); // shadows the b inside the block scope


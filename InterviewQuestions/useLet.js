// i is stored in block scope
// because let is block scoped
// for each iteration a new reference or block scope is created is created
/* 
The closures capture references to the block-scoped index variables, so when the setTimeout functions execute, they will use the correct values of index for each iteration.
*/

function x() {
  for (let index = 0; index < 5; index++) {
    setTimeout(function () {
      console.log(index);
    }, index * 1000);
  }
}

x();

function x() {
  // since var is not block scoped but function scoped
  // refers to same memory location
  // which is updated for every iteration
  // therefor it will print 6 6 6 6 6
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 3000);
  }

  // solution:
  // every time new x variable is used
  // prints 1 2 3 4 5 
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }

  // another solution is using let
  //since let is block scoped
  for (let index = 0; index < 5; index++) {
    setTimeout(function () {
        console.log(index);
      }, index * 1000);
  }
}




x();

// Closure is a function bind together to it's lexical
// function along with references in it's lexical scope

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

x();

// when a function is returned, not just function code is returned closure is returned
// function along with it's lexical scope is returned
var z = x();

// this prints 7;
z();

function z() {
  var b = 100;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    // y forms a closure with it's parent's lexical environment and parent's parent's lexical environment
    y();
  }
  x();
}

z();


/* 

Uses of closure: 

- Module design pattern
- Currying
- Functions like one
- memoize
- maintaining state in async world
- setTimeouts
- iterators 
- ...many more

*/
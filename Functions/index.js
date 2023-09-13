
var x = 1;
a();
b();
console.log(x);


function a() {
    var x = 10;
    // Look for value of x in local memory space to print in the console
    // Finds 10 in memory of local execution context and prints it
    console.log(x);
}


function b() {
    var x = 100;
    // Look for value of x in local memory space to print in the console
    // Finds 100 in memory of local execution context and prints it
    console.log(x);
}
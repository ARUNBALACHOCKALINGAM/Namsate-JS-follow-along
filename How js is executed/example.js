// A global execution context is created
/* Memory is allocated in global execution context - 
{
n:undefined, 
square: {    
    var ans = num*num;
    return ans;
}, 
square2: undefined, 
sqaure3: undefined
}
*/ 

// After memory allocation each line is ran one by one


var n = 2;  // On executing this line- {n: undefined}  -->  {n: 2}


// nothing to execute below
function square(num) { 
    var ans = num*num; // On executing this line - {ans: undefined} --> {ans: 4/16}
    return ans; // Execution context removed from call stack, control return to global execution context (line 27 / line 35)
}

// When a function is invoked/called a new execution context is created
var square2 = square(n); // here we invoke a function

/* this creates execution context inside the code component of global execution context, and memory is allocated in it's execution context -
{
    num: undefined,
    ans: undefined
}
*/


/* this creates execution context inside the code component of global execution context, and memory is allocated in it's execution context -
{
    num: undefined,
    ans: undefined
}
*/
var square4 = square(4);



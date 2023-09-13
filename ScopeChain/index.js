// Scope chain is chain of lexical environments and parent references

// lexical environment - where the function is physically present
 

function a() {
    // if b is not initialized, we will check in lexical environment of a's parent (global context)
    // if not available in global context, then b is not defined

    var b = 10;
    c();
    function c() {
        // Will look for b in local memory of execution context
        // If not available, checks the memory of the execution context which contains this execution context (lexical environment of parent)
        console.log(b);
    }
}


a();

// console.log(b); - Can't do this - not available in it's scope

function x() {
    var i = 1;

    // prints after 3 seconds
    setTimeout(() => {
        console.log(i);
    }, 1000);
    
    // doesn't wait for setTimeout,  
    // logs right away
    console.log("Namaste javascript");
}

x();
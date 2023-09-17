// i is stored in global scope
// since var is functional scoped
// it means var variable are made to access throughout the function
// therefore new reference is not created 

for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

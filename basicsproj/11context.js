//there are 2 type of context available 
//1. global context
//2. Running in the system(Execuation context)
tipper("10");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}




var bigTipper = function(a){ //Here function is defined as Variable
    var bill = parseInt(a);
    console.log(bill + 15)
}

bigTipper("200");

// We can not keep it at the top of function as global context
//because this on is a function but decaled as a variable 


console.log(name);// Variable is undefined here 1st 
var name = "Vanshika";

// function init(){
//     var firstName = "Satish";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();
// value();
// //console.log(firstName);

function doAddition(x){
    return function(y){
        return x + y;
    }
}

var add5 = doAddition(5);
console.log(add5(6));

console.log(doAddition(9)(7));
// var returnedValue = Math.max(2, 5, 7, 4, 9, 11, 6);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj,{a:1,b:2,c:3,d:4},{x:9,y:8,z:7});
// console.log(myObj);

// function sumOne(a, b){
//     return a + b;
// }

// var myA = [4, 5];
// console.log(sumOne(...myA));

function sumMore(a, b,...args){
    
    let multi = a*b;
    let sum = 0;
    for(const arg of args){
        sum = sum + arg;
    }
    return [sum, multi];

}

console.log(sumMore(2, 4, 6, 7, 8, 3));
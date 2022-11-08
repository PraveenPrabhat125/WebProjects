//1. Hello World!
/*
console.log("Hello World!");
*/

// 2. Cin and Cout
/*
function sum(...Args){
    let sum = 0;
    // for(let i = 0; i<Args.length; i++){
    //     sum +=Args[i];
    // }
    Args.forEach(e => {
        sum += e;
    });
    return sum;
}
console.log(sum(1,2,3,5,7));
console.log(sum(1,2,7));
*/

// 3 data tupes:
// primary data type: number, string ,null,boollean,  
// secondary data type: object and array.
//  let num = 10000.0020110;
//  let str = "This is my name!";
//  var  nulll = null;
//  var bool = true;

// //  console.log(num);

/*
let number = 1230.0021123;
 let precisedNo = number.toPrecision(8);
 console.log(precisedNo);

//  console.log();

//  console.log(str);
//  console.log(nulll);
//  console.log(bool);
//  console.log(!bool);

*/

// 4 
/*
let arr = ["One", "two", "three", "four", "Five", "Six", "Seven", "Eight", "nine", "No. is greater then 9"];
function check(val){
    return arr[val-1];
}
console.log(check(10));
*/

// 5. For loop
/*
let arr = ["One", "two", "three", "four", "Five", "Six", "Seven", "Eight", "nine"];

let resultArr = [];
function check(lowerVal, higherVal){
    if(lowerVal < higherVal){
        for(let i = lowerVal; i<=higherVal; i++){
            if(i < 10){
                resultArr.push(arr[i-1]);
            }
            else{
                if(i % 2 ==0){
                    resultArr.push("Even");
                }
                else{
                    resultArr.push("Odd");
                }
            }
        }

    }
    else{
        return "Not good";
    }
    return resultArr;
    
}

console.log(check(2,1));
*/
// 6. Function (find max in arr)
// function check(...args){
//     let max = args[0];
//     for(let i = 1; i<args.length; i++){
//         if(max < args[i]){
//             max = args[i];
//         }
//     }
//     return max;
// }

// function check(...args){
//     let max = max.args[];
//     // for(let i = 1; i<args.length; i++){
//     //     if(max < args[i]){
//     //         max = args[i];
//     //     }
//     // }
//     return max;
// }

// let arrr = [1,20,31,40,5];
// // console.log(arrr.reverse());
// console.log(arrr.sort());

// let sortArr = [1,20,31,40,5];

// console.log(sortArr);
// sortArr.sort();
// console.log(sortArr);


/*
let vals = [41, 51, 100, 99, 1];
console.log(vals);

vals.sort();

console.log(vals);


*/

// 10. pointer change the place 
/*let a = 4, b = 5;
console.log(a, b);
let sum = difference = 0;

function result(a, b) {
    sum = a + b;
    difference = (a > b) ? (a - b) : (b - a);
}
result(a, b);
console.log(sum, difference);

*/


/*
let vals = [1, 4, 3, 2];
console.log(vals);
vals.reverse();

console.log(vals);

let noOfArray = 2, noOfQueries = 2;
let arr = [
    [3,1,5,4],
    [5,1,2,8,9,3]
]
console.log(arr);
// now we are going to handel the query
let a = 1, b = 3;
function check(a, b){
    return arr[a][b];
}

console.log(check(a,b));
*/

// let vec = "23,4,56";

// 12. Strings
// let str1 = "abcd", str2 = "ef";
// console.log(str1.length);
// console.log(str2.length);

// // str1[0] = "e";

// str1.shift();

// console.log(str1[0]);
// console.log(str1);

// function sum(a, b){
//     return (a+b);
// }

// sum(a, b) => {
//     return (a+b);
// // }
// console.log(sum(3, 3));

//  let val = (b) => {
//     return b + 100;
// }
// console.log(val(2));

// function sum(p1, p2 ){
//     return (p1 + p2);
// }
let sum = (p1, p2 ) => {
    return (p1 + p2);
}

// function funName(para1, para2){
//     return para1 + para2;
// }

let funName = (para1, para2) => {
    return para1 + para2;
}

// console.log(funName(8,9));

// function FunName1(...args){
//     let sum = 0;
//     for(let i = 0; i<args.length; i++){
//         sum +=args[i];
//     }
//     return sum;
// }

let FunName1 = (...args) => {
    let sum = 0;
    for(let i = 0; i<args.length; i++){
        sum +=args[i];
    }
    return sum;
}

console.log(FunName1(1,2,3,4,6));





// console.log(sum(3,4));

// let name = "Aditya Avasthi";
// let myAge = 18;
// console.log(`My name is $(name) & I am $(myAge) years old.`);


// function foo() {
//     var x = 10;
//     if(x > 5) {
//         let x = 5;
//     }
//     console.log(x);
// }
// foo();


// function foo() {
//     console.log(a);
//     var a = 5;
// }
// foo();


// const nums = [1,2,3,4,5];
// const squares = nums.map(function(num) {
//     return num*num;
// });
// console.log(squares);


// const person = {
//     name: 'John',
//     age: 30
// };
// const copy = {...person, age: 40};
// console.log(person.age, copy.age);


// const func = () => {
//     re
// }


// function outer() {
//     const x = 10;

//     function inner() {
//         console.log(x);
//     }

//     return inner;
// }
// const innerFunc = outer();
// innerFunc();


// function fetchData() {
//     return newPromise((resolve, reject)=> {
//         resolve("Data");
//     });
// }

// fetchData().then(data => console.log(data));



// const obj = {
//     name: "Alice",
//     greet: function() {
//         console.log("Hello, "+ this.name);
//     }
// };

// const greetFn = obj.greet;
// greetFn();


const numbers=[1,2,3,4,5];
const sum = numbers.reduce((acc, num) => acc + num,0);
console.log(sum);
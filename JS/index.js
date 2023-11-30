//jshint esversion:6


/*var a=2;
var b;
console.log(b);
b=a;
console.log(b);*/


/*var a=5;
var c="I am a  ";
a=a+1;
c=c+"String";
console.log(a);
console.log(c);*/


/*var sum=3+2;
var sub=3-1;
var mul=3*1;
var div=3/3;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);*/


/*var a=2;
a++;
console.log(a);*/


/*var sum=2.4+.6;
var sub=2.4-.4;
var mul=1.3*1.3;
var div=4.4/2.0;
var mod=4%3;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);*/


/*var String=`I am a "double quoted"string\r inside "double quotes"`;
console.log(String);*/


/*var String= "I am "+"Aditya";
console.log(String);*/


/*var string="Aditya";
var name="My name is "+string+" and i am good";
console.log(name);*/


/*var string="hello world";
get=string.length;
console.log(get);*/


/*var String="pallindrome";
search=String[2] + String[4];
console.log(search);*/


/*var string="Jello";
string[0]="H";
console.log(string);*/


/*var string="jamerson";
search=string[string.length-2];
console.log(search);*/


/*function string(word1, word2, word3, word4)
{
var result="";
result+= "Hello" +" "+ word1+ " "+ "my"+" "+ word2 + " "+ "is" +" "+ word3+ " "+word4 ;
return result;
}
console.log(string("Aditya", "name", "namita", "dubey"));*/


/*var array=[["Hello",1],["world",2]];
console.log(array);*/


/*var array=["HELLO", 3];
array.push(["World",3]);
console.log(array);*/


/*var array=[2,3,4,5];
var removed=array.shift();
var latest=array.unshift(8);
console.log(array);
console.log(removed);
console.log(latest);*/


/*function Pen()
{
    console.log("Hello World");
}
Pen();
function hen()
{
    console.log("Knife");
}
hen();
Pen();*/


/*var value=10;
function fun1()
{
    var mod=5;
    input=mod+10;
    console.log(input);
}
function fun2()
{
    output= value+10;
    console.log(output);
}
fun1();
fun2();*/


/*function fun1()
{
    varvalue=5;
    output=value+5;
    console.log(output);
}
function fun2()
{
    console.log(value);
}
fun1();
fun2();*/


/*var colour="White";
function fun1()
{
    var colour="Red";
    return colour;
}
console.log(fun1());
console.log(colour);*/


/*function fun(num)
{
   return (num*9);
}
console.log(fun(10));*/


/*var sum=5;
function fun(num)
{
    return ((sum+5)/1);
}
console.log(fun(10));*/


/*function fun(array,num)
{
    array.push(num);
    return array.shift();
}
var ar=[1,2,3,4,5];
console.log("Before:" +JSON.stringify(ar));
console.log(fun (ar,6));
console.log("After:" +JSON.stringify(ar));*/


/*function fun(num)
{
    if(num)
    {
        return("Hello");
    }
    return("Mellow");
}
console.log(fun(0));*/


/*var names=["x","y","z","p","q"];
function fun(a,b)
{
    if(a==1)
    return names[0];

    else if(a==b-1)
    return names[1];

    else if(a==b)
    return names[2];

    else if(a==b+1)
    return names[3];

    else if(a==b+2)
    return names[4];

    else if(a==b+3)
    return names[5];
}
console.log(fun(2,3));*/


/*function fun(num)
{
    var ans="";
    switch(num)
    {
        case 1:ans="a";
        break;

        case 2:ans="b";
        break;
    }
    return ans;
}
console.log(fun(1));*/


/*function fun(a,b)
{
    if (a<0 || b<0)
    {
        return null;
    }
    return Math.round(Math.pow((Math.sqrt(a)+M  ath.sqrt(b)),2));

}
console.log(fun(2,2));*/


/*var sex=
{
    "name" : "ALINA",
    "age":20,
    "rounds":"five"
};

var num=sex["name"];
var word=sex["age"];
console.log(num);
console.log(word);*/


/*var sex=
{
    "name" : "ALINA",
    "age":20,
    "number":"five"
};

sex['date']="17"
sex.name="Jmi";
console.log(sex);
console.log(sex.name);*/

/*function fun(num)
{
    var result="";
    var sex=
{
    "name":"ALINA",
    "age":20,
    "number":"five"
};
result= sex[num];
return result;
}
console.log(fun("name"));*/


/*var sex=
{
    "name" : "ALINA",
    "age":20,
    "number":"five"
};
function fun(num)
{
    if(sex.hasOwnProperty(num))
    {
    return sex[num];
    }

    else
    {
        return "No";
    }
}
console.log(fun("name"));*/


/*var boy=
{
    "name":
    {
        "age":
        {
            "birth place":"mathura"
        },
        "Aditya":"5"
    }
};
var num= boy.name.age["birth place"]; 
console.log(num);*/


/*var loop=[   ];
i=0;
while(i<5)
{
    loop.push(i);
    i++;
}
console.log(loop);*/


/*var loop=[   ];
for(i=100;i>0;i=i-2)
{
    loop.push(i); 
}
console.log(loop);*/


/*var array=[5,5,5,5];
var total=0;
var i;
for(i=0;i<array.length;i++)
{
    total=total+array[i];
}
console.log(total);
console.log(array.length);*/


/*function mul(array)
{
    var product=1;
    for(var i=0  ;i<array.length;i++)
    {
        for(j=0;j<array[i].length;j++)
        {
            product=product*array[i][j];
        }
    }
    return product;
}
var product=mul([[1,2],[3,4],[5,6,7]]);
console.log(product);*/


/*var array=[];
var i=10;
do
{
    array.push(i);
    i++;
}
while(i<13);
console.log(i,array);*/


/*var num=Math.floor(Math.random()*20);
function random()
{
    return Math.floor(Math.random()*10 );
}
console.log(random());*/


/*function num(str)
{
return parseInt(str);
}
num("56")*/


/*function integer(str)
{
    return parseInt(str,2);
}
integer(10011);
console.log(integer);
*/

/*function fun(a,b)
{
    return a===b?true:false;
}
fun();
console.log(fun(1,1));*/


/*function check(num)
{
    return num>0?"positive":num<0?"negative":"zero";
}
console.log(check(9));*/


/*function scope()
{
    let i="Hello";
    if(true)
    {
        let  i="mello";
        console.log("hello:",i);
    }
    console.log("mello:",i);
}
scope();*/


/*const s=[3,4,5];
function fun()
{
    s[0]=1;
    s[1]=2;
    s[2]=3;
}
fun();
console.log(s);*/


/*var fun=function(ar1,ar2)
{
    return ar1.concat  (ar2);
}
console.log(fun([1,2],[3,4,5]));*/


// const temp={
//     a:77,
//     b:75
// };
// function fun(temp)
// {
//     const{b:c}=temp;
//     return c;
// }
// console.log(fun(temp));










// ----------------------------------
// UDEMY COURSE-


// var Myname="Aditya";
// console.log(Myname);


// var Myname="Aditya";
// var a=Myname.slice(0,3);
// console.log(a);


// var name=prompt("What is your name?");
// var firstChar=name.slice(0,1);
// var upperCaseFirstChar= firstChar.toUpperCase();
// var restOfName= name.slice(1,name.length);
// restOfName=restOfName.toLowerCase();
// var capatalisedName= upperCaseFirstChar+ restOfName;
// alert("Hello, "+capatalisedName);


// var dogage=prompt('How age is your dog');
// var age=(dogage-2)*4+21;
// alert('Your dog is '+age+" years old in human age");


// function getMilk() {
//     console.log("leaveHouse");
//     console.log("moveDown");
//     console.log("moveUp");
//     console.log("moveRight");
// }

// getMilk();




// Stanford Karel-

// function main(){
//     beepersRight();
//     goUpTurnLeft();
//     beepersLeft();
//     goUpTurnRight();
//        beepersRight();
//     goUpTurnLeft();
//     beepersLeft();
//     goUpTurnRight();
//        beepersRight();
//  }
  

//  function goUpTurnRight() {
//     turnRight();
//     move();
//     turnRight();
//  }
  

//  function goUpTurnLeft() {
//     turnLeft();
//     move();
//     turnLeft();
//  }
  

//  function beepersRight() {
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();  
//  }
  

//  function beepersLeft() {
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//  }









// function lifeInWeeks(age) {
    
//     /************Don't change the code above************/    
        
//         //Write your code here.
        
//         var a=age*365;
//         var b=age*52;
//         var c=age*12;
        
//         var x=(90*365)-a;
//         var y=(90*52)-b;
//         var z=(90*12)-c;
        
//         console.log(x);
//         console.log(y);
//         console.log(z);
        
//     /*************Don't change the code below**********/
//     }
//     lifeInWeeks(56)




//BMI CALCULATOR-
// function bmiCalculator(weight,height) {
    
//     var bmi=Math.floor(weight/(Math.pow(height,2)));
//     return bmi;
//     }

// var bmi= bmiCalculator(65, 1.8); 
// console.log(bmi);




// function aFunction () {
//     var a = 12;
//     var b = 7;
//     c=a-b;
//     return c;
// }
// aFunction();
// console.log(c);




// let x = myFunction(4, 3);   // Function is called, return value will end up in x

// function myFunction(a, b) {
//   return a * b;             // Function returns the product of a and b
// }
// console.log(x);




// var x= Math.random();
// x=x*100;
// x=Math.floor(x)+1;
// console.log(x);      




//Love Calculator-

// var x= Math.random();
// x=x*100;
// x=Math.floor(x)+1;
// prompt("Enter your name- ");
// prompt("Enter her name- ");
// if(x>30 && x<70){
//     console.log("Here is your love percentage "+x+ "% ,you love each other.");
// }
// else{
//     console.log("Here is your love percentage "+x+ "%");
// }




// function bmiCalculator (weight, height) {
    
//     var bmi=Math.floor(weight/(Math.pow(height,2)));
//     return bmi;
//        }
   
//     var bmi= bmiCalculator(60, 2); 
//     if(bmi<18.5){
//     console.log("'Your BMI is "+bmi+", so you are underweight.'");
//     }
    
//     else if(bmi>18.5 && bmi<24.9){
//     console.log("'Your BMI is "+bmi+", so you have a normal weight.'");
//     }
    
//     else if(bmi>24.9){
//     console.log("'Your BMI is "+bmi+", so you are overweight.'");
//     }




// var guestList=["Parul","Neha"];
// var guestName= prompt("What is your name?");

// if(guestList.includes(guestName)) {
//     alert("Welcome");
// }
// else{
//     alert("Sorry");
// }




// var output=[];
// output.push(1);
// output.push(2);
// output.pop();
// output.push(3);
// console.log(output);




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);




// var output=[];

// function fizzBuzz() {

//     for (var count=1; count <= 100; count+=1) {

//     if(count %3 === 0 && count % 5 ===0 ){
//         output.push("Fizz Buzz");
//     }
//     else if(count%3 === 0){
//         output.push("Fizz");
//     }
//     else if(count % 5 ===0){
//         output.push("Buzz");
//     }
//     else{
//         output.push(count);
//     }
//     }
//     console.log(output);
// }
// fizzBuzz();




// function whosPaying (names) {

//     var numberOfPeople= names.length;
//     var randomPeoplePosition= Math.floor(Math.random()*numberOfPeople);
//     var randomPerson= names[randomPeoplePosition];

//     return randomPerson + " is going to buy lunch today!";
// }




// var i=1;
// while(i<3) {
//     console.log(i);
//     i++;
// }




// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }




// for(var i=1; i<4; i++) {
//     console.log(i);
// }




// ar = [0,1];
// console.log(ar);




// var ar=[];

// function fibonacciGenerator (n) {
    
//     if (n===1) {
//         ar= [0];
//     } 
        
//     else if (n===2){
//         ar = [0,1];
//     }
//     else{
//         ar= [0,1];

//         for(var i= 2; i<n ; i++) {
//         ar.push(ar[ar.length-2] + ar[ar.length-1]);
//         }
//     }
//     return ar;
// }


// fibonacciGenerator(10);
// console.log(ar);




// function calculator(num1, num2) {
//     return num1+num2;
// }
// x=calculator(2,3);
// console.log(x);



// var a,b,c,m;
// prompt("Enter a: ");
// prompt("Enter b: ");
// prompt("Enter c: ");
// if (a > b) {
// m = x;
// if(m > c) {
//     alert("Max number is: " + m);
//     }

// else if(c > m) {
//     alert("Max number is: " + c);
// }
// }
// else if(b > a)  {
// m = y;
//     if(m > c) {
//         alert("Max number is: " + m);
//     }
//     else if(c > m) {
//         alert("Max number is: " + c);
//     }
// }




// function calculator(num1, num2) {
//     return num1*num2;
// }
// x=calculator(2,3);
// console.log(x);




// function add(num1, num2) {
//     return num1+ num2;
// }
// function multiply (num1, num2) {
//     return num1 * num2;
// }
// function calculator(num1, num2, operator) {
//     return operator(num1,num2);
// }
// x=calculator(3,4,add);
// console.log(x);



// window.onload = () => {
//     let button = document.querySelector("#btn");
  
//     // Function for calculating BMI
//     button.addEventListener("click", calculateBMI);
// };
  
// function calculateBMI() {
  
//     /* Getting input from user into height variable.
//     Input is string so typecasting is necessary. */
//     let height = parseInt(document
//             .querySelector("#height").value);
  
//     /* Getting input from user into weight variable. 
//     Input is string so typecasting is necessary.*/
//     let weight = parseInt(document
//             .querySelector("#weight").value);
  
//     let result = document.querySelector("#result");
  
//     // Checking the user providing a proper
//     // value or not
//     if (height === "" || isNaN(height)) 
//         result.innerHTML = "Provide a valid Height!";
  
//     else if (weight === "" || isNaN(weight)) 
//         result.innerHTML = "Provide a valid Weight!";
  
//     // If both input is valid, calculate the bmi
//     else {
  
//         // Fixing upto 2 decimal places
//         let bmi = (weight / ((height * height) 
//                             / 10000)).toFixed(2);
  
//         // Dividing as per the bmi conditions
//         if (bmi < 18.6) result.innerHTML =
//             `Under Weight : <span>${bmi}</span>`;
  
//         else if (bmi >= 18.6 && bmi < 24.9) 
//             result.innerHTML = 
//                 `Normal : <span>${bmi}</span>`;
  
//         else result.innerHTML =
//             `Over Weight : <span>${bmi}</span>`;
//     }
// }




// const year = 2020;
// if(year % 4 == 0 && year % 400 == 0 || year % 100 != 0) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Not a leap year");
// }









// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour  + " : " + minute + " : " + second + prepand);




// function getMilk(money){
   
//     var numberOfBottles= Math.floor(money/3);
//     console.log(numberOfBottles);
//    }
   
//    getMilk(5);



// OBJECT-

var houseKeeper1= {
    yearsOfExperience:12,
    name:"Jane",
    cleaningRepoter: ["bathroom", "kitchen"]
}
console.log(houseKeeper1.name);




// Constructor Object-

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience= yearsOfExperience;
    this.name= name;
    this.cleaningRepertoire= cleaningRepertoire;
}
var houseKeeper1= new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(houseKeeper1);










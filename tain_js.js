// Java scrit has three primitive data types:Numbers, String, booleans
// also has null and undefined 
// for eg:

var example = null;
console.log("example",example);

var example1 = undefined;
console.log("example1",example1)

// Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.

// Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.

// for example

var apple = "global";

const objectfn = () => {
    var  apple = "local"
    console.log(apple)
}

objectfn()  // this produces the result local, when local  variable declared with same name local takes the precedence over global

const age = (x) => {
if(x>=3 && x<18){
    console.log("its  a child")
}else if(x>=18){
    console.log("He/she is man/women");
}
else{
    console.log("Its  a baby")
}
}

age(18);

const pass = (y) => {
    switch(y){
        case "A" : console.log("Passed in the subject");
        break;
        case "B" : console.log("Passed in the subject");
        break;
        case "E" : console.log("Failed in the subject");
        break;
        default:console.log("unknown grade");
    }
}

pass("A");

for(var i = 0;i<9;i++){
    console.log(i);
}

var employee = new Object();
console.log("employee",employee)
employee.age= 1;
employee.name = "xavier";
console.log("employee",employee)

employee.fn =  function sbc () {
     return this.age
}

console.log("this.age",employee.fn());

var val =  new String("String");
console.log(val);

var fruits = new Array("Apple","Orange","Mango");
console.log(fruits);

var date = new Date()
console.log(date)

// var date1 = new Date(milliseconds)
// console.log(date1)

let array = [1,2,3,4,5,6];

let array1 = array.map((x)=>
x*2
);

console.log("new array",array1);


// array.reduce(function(total,currentValue,currentIndex,arr),initialValue)

const sumarray = [2,3,4,5,6,7,8,9,10];

const redSum = sumarray.reduce((sum,arr)=>arr%2 == 0?sum+arr:sum)
console.log("sum of reducer",redSum)

const  smallest = sumarray.reduce((previous,current)=>previous<current?previous:current);
console.log("smallest of array",smallest);



let names = ["xavi","puyol","robinho"]

let array2 = array.filter((item)=>item%2)

console.log(array2);


let array3 = names.find((item)=>item=="puyol")

console.log(array3);
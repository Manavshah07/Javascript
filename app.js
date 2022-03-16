/*LOG TO CONSOLE*/
//console.log('Im on JS Console!');
//console.log(123);
//console.log(true);

//var greeting = "Hello";
//console.log(greeting);
//console.log([1, 2, 3, 4]);
//console.log({a: 1, b:2, c:3});
////
////console.error("This is an Crucial Error!!!");
////console.warn("This is warning!!!");
////
//console.time("Hello");
//console.log("Hello World!");
//console.log("Hello World!");
//console.log("Hello World!");
//console.log("Hello World!");
//console.log("Hello World!");
//console.log("Hello World!");
//console.log("Hello World!");
//console.timeEnd("Hello");
//
//console.clear();


/******************************************************
            var, let and const
******************************************************/

//var name = "John Doe";
//console.log(name);
/*We can reassign variable declared with var*/
//
//name = "Rohit Udasi";
//console.log(name);

/*You can initialize variables later*/
//var greeting;
//console.log(greeting);//prints undefined
//
//greeting = "Hello world!";
//console.log(greeting);

/*
Rules: can have letters, numbers, _ and $
cannot start with numbers
can use _ and $ to start (but not recommended to use $, as it is reserved for jQuery! and _ is reserved for private variables!)
Usually use Java COnvention i.e. Camel Case!
*/

/*
let and var almost same
*/

//let name;
//
//name = "John Doe!";
//console.log(name);

/*We can reassign variable declared with let*/

//name = "Prem Mirani!";
//console.log(name);

/*First Difference between let and var*/
//console.log(someVar);
//var someVar = 10;
//
//console.log(someLet);
//let someLet = 100;
/*
const is used to create constant

cannot be changed!
*/
//const name = "John Doe";
//console.log(name);

////cannot reassign
//name = "Prem";
//
////compulsory to assign value at the time of declaration
//
//const lastName; //creates error!
//
//
//const numbers = [1, 2, 3, 4, 5];
//console.log(numbers);
////
//numbers.push(6);
//console.log(numbers);
////
//numbers = [1, 2, 3, 4, 5,6]; //creates error


/**************************************************************
                DATA TYPES IN JAVASCRIPT
**************************************************************/

//PRIMITIVE TYPES

//STRINGS
//const name = "John Does";
//console.log(typeof name);
//
////Numbers
//const age = 45;
//console.log(typeof age);
//
////boolean
//const hasKT = false;
//console.log(typeof hasKT);
//
////null
//const car = null;
//console.log(typeof car);
//
////undefined
//let test;
//console.log(typeof test);
//
////ES6 datatype Symbol
//const sym = Symbol();
//console.log(typeof sym);

//NON-PRIMITIVE usually known as REFERENCED TYPES (Objects)

//Array
//const hobbies = ['code', 'code' ,' and code'];
//console.log(typeof hobbies);

//Object Literals

//const address = {
//    city: 'Mumbai',
//    state: 'MH'
//}
//
//console.log(typeof address);
//
//const today = new Date();
//console.log(typeof today);

/****************************************************
TYPE CONVERSION
****************************************************/

//let val;
//number to string
//val = 5;
//
//console.log(val);
//console.log(typeof val);
//console.log(val.length);//length can only for strings
//
//val = String(5);
//console.log(val);
//console.log(typeof val);
//console.log(val.length);
//
//val = String(5+5);
//console.log(val);
//console.log(typeof val);
//console.log(val.length);

//Boolean to String
//val = String(true);
//console.log(val);
//console.log(typeof val);
//console.log(val.length);
//
////Array to String
//val = String([1, 2, 3, 4]);
//console.log(val);
//console.log(typeof val);
//console.log(val.length);
//
////Date to String
//
//val = String(new Date());
//console.log(val);
//console.log(typeof val);
//console.log(val.length);

//u can use toString()
//val = (5).toString();
//val = (true).toString();
//console.log(val);
//console.log(typeof val);
//console.log(val.length);

/* Conversion to Number
*/

//val = '5';
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed());


//String to Number
//val = Number('5');
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed());
//
////Boolean to Number
//val = Number(true);
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed());
//
//val = Number(false);
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed());

//null to number

//val = Number(null); //this also gives 0
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed());


//Some non numeric string to number
//val = Number("Hello WOrld");
//console.log(val); //GIVES NaN i.e. Not a Number
//console.log(typeof val);
//console.log(val.toFixed());

//Arrays to Number

//val = Number([1, 2, 3, 4]);
//console.log(val); //also GIVES NaN i.e. Not a Number
//console.log(typeof val);
//console.log(val.toFixed());

//converting using parseInt
//val = parseInt('100');
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed());
//
//val = parseInt('100.90');
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed());
//
//val = parseFloat('100.498543');
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed(3));

/**********************************************************
********STRINGS IN JAVASCRIPT*******************************
***********************************************************/

//const firstName = "Prem";
//const lastName = "Lalchandani";
//const age = 8;
//const str = "This is the best batch i have ever met! No man I was absolutely the Joking!!!!"
//const tags= "sports, cricket, virat kohli";
//
// let val;
//+ is used concat with strings
//val = firstName + lastName;
//console.log(val);
//
//
//
////append
//
//val = 'Helo, my name is: ' + firstName + ' and I am ' + age;//Type Coercion
//console.log(val);
//
////Escaping
//val = "That's \"awesome\", I can do anything for this!";
//console.log(val);
//
////Length
//val = firstName.length;
//
////concat
//val = firstName.concat(' ', lastName);
//
////change case
//val = firstName.toUpperCase();
//val = firstName.toLowerCase();
//
////charAt
//val = firstName.charAt(0);
//
//val = firstName[2];
//
////indexOf
//val = lastName.indexOf('a', 2);
//val = lastName.lastIndexOf('a', 7);
//
////substring
//val = lastName.substr(1, 3); //start, numchars
//val = lastName.substring(1, 3);//start, endIndex
//
////slice
//val = lastName.slice(1, 3);// start, end
//val = lastName.slice(-3);
//val = lastName.slice(4, -3);
//
//
//val = str.split(" "); //takes regex as input
//val = tags.split(",");
//
//val = str.replace("the", "some stupid string");
//
//val = tags.includes("dhoni");
//

//console.log(val);
/***************************************************************************************ARRAYS****************************************************************************************************************/

const numbers = [43, 56, 33, 23, 44, 36, 12];
const numbers2 = new Array(22, 45, 33, 7, 54);
const fruits = ['Banana', 'Apple', 'Mango', 'Orange'];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:2}, new Date()];
//
//console.log(mixed);
//
////length of array
//val = numbers.length;
//
////check for array
//val = Array.isArray(numbers);
//
////Get a single value
//val = numbers[3];
//val = numbers[0];
//
////U can directly insert ino array
//numbers[2] = -19;
//console.log(numbers);
//
////indexOf is there in Array also
//
//val = numbers.indexOf(44);
//
////MUTATING ARRAY
////Add to an end
//numbers.push(-100);
//console.log(numbers);

////add to front
//numbers.unshift(-10);
//console.log(numbers);

////delete from end
//numbers.pop();
//console.log(numbers);

////delete from front
//numbers.shift()
//console.log(numbers);

//Deleting set of consecutive values
//numbers.splice(1, 3, 100);//start, num, replacemenet vale
//console.log(numbers);

//Reverse
//numbers.reverse();
//console.log(numbers);

//Concat 2 arrays
//val = numbers.concat(numbers2);
//console.log(val);

//Sorting arrays
//val = fruits.sort();
//console.log(val);

//console.log(numbers);
//val = numbers.sort();
//console.log(val);

//We can use our custom compareTo function

//val = numbers.sort(function(x, y){
//    return x-y;
//});//callback functions

//function over50(num){
//    if(num>50){
//        return num;
//    }
//    return num>50; //no readability, avoid this
//}
//val = numbers.find(over50);
//console.log(val);
/*************************************************************************************************OBJECTS****************************************************************************************************/

//const person = {
//    firstName: 'Prem',
//    lastName: 'Mirani',
//    age: 18,
//    email: 'prem@gmail.com',
//    hobbies: ['eat', 'sleep', 'except coding everything!'],
//    address: {
//        city: 'Mumbai',
//        state: 'MH'
//    },
//    motherName: 'Nikita',
//    getBirthYear: function(){
//        return 2019 - this.age;
//    }
//}
//val = person;
//val = person.firstName;
//val = person['lastName'];
//val = person.hobbies[1];
//val = person.address.city;
//val = person.getBirthYear();

//const people = [
//    {name: 'John', age: 30},
//    {name: 'Jane', age: 26},
//    {name: 'Johny', age: 34}
//];
//for(var i = 0; i<people.length; i++){
//    console.log(people[i].name);
//}
//console.log(val);
/*************************************************************************************************DATE****************************************************************************************************/

const today = new Date();
let birthday = new Date('12-18-2000 12:56:32');
birthday = new Date('December 19 2000 12:56:32');
birthday = new Date('12/18/2000 12:56:32');


//val = birthday;
//val = today.getMonth();
//val = today.getDate();
//val = today.getDay();
//val = today.getFullYear();
//val = today.getHours();
//val = today.getMinutes();
//val = today.getSeconds();
//val = today.getMilliseconds();
//val = today.getTime(); //timestamp
//console.log(val);

//Mutating Date
birthday.setDate(20);
birthday.setMonth(0);
birthday.setFullYear(2001);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(30);
//console.log(val);
//console.log(birthday);

///************************************************************************************* TEMPLATES IN JS ************************************ *********************************************************************/
//
const name = 'Prem';
const age = 18;
const job = 'Just Finding how can i do something useful!!!';
const city = "Mumbai";
const state = "MH";

let html;
//Without Template Strings (es5)
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li></ul>";
//
html = "<ul>"+
    "<li>Name : " + name + "</li>"+
    "<li>Age: " + age + "</li>"+
    "</ul>";

//Templates (es6)
//    https://randomuser.me/api/?results=25&format=json

//
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>${printHelloWorld()}</li>
<li>${2 + 2 -4 * 3}</li>
<li>${age>=18? 'adult' : 'minor'}</li>
</ul>
`;

function printHelloWorld(){
    return "hello world";
}
document.write(html);


/****************************************************************************************** IF ELSE *************************************** *********************************************************************/

//if(somethig){
//    do some something;
//}else{
//    do this;
//}

let id = 'undefined';

//EQUAL TO
//if(id == 100){
//    console.log("Ohh! You scored Full!");
//}else{
//    console.log("Ohh!! Now you will start crying!");
//}


//if( id == 10 ){
//    console.log("You scored 100!");
//}else{
//    console.log("You will get low marks");
//}
//NOT EQUAL TO
//if(id != 100){
//    console.log("Ohh!! Now you will start crying!");
//}else{
//    console.log("Ohh! You scored Full!");
//}

//EQUAL TO VALUE WITH TYPE TEST
//if(id === 100){
//    console.log("Ohh! You scored Full!");
//}else{
//    console.log("Ohh!! Now you will start crying!");
//}


//NOT EQUAL TO VALUE WITH TYPE TEST
//if(id !== 100){
//    console.log("Ohh! You scored Full!");
//}else{
//    console.log("Ohh!! Now you will start crying!");
//}

//Test if undefined
//if(typeof id == 'undefined'){
//    console.log("Undefined");
//}else{
//    console.log(`ID is ${id}`);
//}

//COMPARISON OPERATOR SAME
// <, > ,<=, >=

//Logical Operators Same
//&& ||

//same rul

//if body has 1 statement, then no need of {}


/************************************************************************************************* SWITCH CASE IN JS ********************** *********************************************************************/

//const number = 22;
//switch (number){
//    case '20':
//        console.log("Red is the color u selected!");
//        break;
//    case '22':
//        console.log("yellow is the color u selected!");
//        break;
//    default:
//        console.log("ohh!! so sorry u dont have any fav color!");
//}

/******************************************************************************************** FUNCTIONS *********************************** *********************************************************************/
//
//function greet(firstName, lastName){
//    if(typeof firstName == 'undefined'){
//        firstName = "John";
//    }
//    if(typeof lastName == 'undefined'){
//        lastName = "Doe";
//    }
//    console.log(`Hello! Good Morning ${firstName} ${lastName}`);
//    return(`Hello! Good Morning ${firstName} ${lastName}`);
//    console.log("Hello! Good Morning!");
//}
//console.log(greet());

//function greet(firstName = 'John', lastName='Doe'){
//    console.log(`Hello! Good Morning ${firstName} ${lastName}`);
//    return(`Hello! Good Morning ${firstName} ${lastName}`);
//    console.log("Hello! Good Morning!");
//}
//
//console.log(greet());


//FUNCTION EXPRESSIONS:
//const square = function(x=3){
//    return x*x;
//}
//
//console.log(square(5));
//console.log(square());


//IMMEDIETELY INVOKED FUNCTION EXPRESSION - IIFEs

/*syntax
(function(){

})();
*/
//
//(function(){
//    console.log("Hello World");
//})();
//
//
//(function(name = "Jane"){
//    console.log("Hello " + name);
//})("Isha");
//
////PROPERTY METHODS
//
//const todo = {
//    add:function(){
//        console.log("Todo Task Added");
//    },
//    edit: function(id){
//        console.log(`${id} updated successfully!`);
//    }
//}
//let copyObj = todo;
////
//todo.delete = function(id){
//    console.log(`${id} deleted successfully!`);
//}
////
//todo.add();
//todo.edit(1);
//todo.delete(1);
////
//copyObj.delete(12);

/******************************************************************************************** LOOPS *********************************** *********************************************************************/

/****

for, while, do...while() all are same

****/


//const subjects = ['Data Structures', 'Maths', 'ECCF', 'Java', 'DLDA'];
//
////loop through array
//for(let i = 0; i<subjects.length; i++){
//    console.log(subjects[i]);
//}


//foreach loop
//subjects.forEach(function(subject, index, array){
//    console.log(`${index} : ${subject}`);
//    console.log(array);
//});


//MAP
//const users = [
//    {id: 1, name: "John"},
//    {id: 2, name: "Jane"},
//    {id: 3, name: "Jimmy"},
//    {id: 4, name: "Johny"}
//];
////
//const ids = users.map(function(user){
//    return user.id;
//});
//const names = users.map(function(user){
//    return user.name;
//});
//console.log(ids);
//console.log(names);


//FOR IN LOOP
//const user = {
//    firstName: 'Prem',
//    lastName: 'Mirani',
//    age: 18
//};
//
//for(let property in user){
//    console.log(`${property} : ${user[property]}`);
//}



/**************************************************************************************** WINDOW OBJECT IN JS ****************************** *********************************************************************/

//alert("hello world");

//Prompt
//const input = prompt("Enter your name: ");
//console.log("Welcome " + input);

//Confirm
//if(confirm("Are you sure you want to delete?")){
//    console.log("Deleted");
//}else{
//    console.log("You just saved that thing to be thrown in trash!");
//}

let val;

//outerHeight and outerWidth
//val = window.outerHeight;
//val = window.outerWidth;
//console.log(val);

//innerWidth and innerHeight
//val = window.innerHeight;
//val = window.innerWidth;
//console.log(val);

//ScrollPoints
//val = window.scrollY;
//val = window.scrollX; //horizontal scrollbar value
//console.log(val);

//Location OBJECT
//val = window.location;
//val = window.location.hostname;
//val = window.location.port;
//val = window.location.href;
//val = window.location.pathname;
//val = window.location.search;
//console.log(val);

//val = "hello";
//Redirect
//window.location.href = "http://www.google.com";
//console.log(val);
//reload
//window.location.reload();
//console.log(val);

//History Object
//val = window.history.length;
//val = window.history.length;
//window.history.go(-4);
//console.log(val);

//NAvigator Object
//val = window.navigator;
//val = window.navigator.appName;
//val = window.navigator.appVersion;
//val = window.navigator.userAgent;
//val = window.navigator.platform;
//val = window.navigator.vendor;
//val = window.navigator.language;
//
//
//console.log(val);

/******************************************************************************************* SCOPES and revisiting let, var, const ******** *********************************************************************/

//Global Scope
//var a = 1;
//let b = 2;
//const c = 3;
//
//function test(){
//    //Functional Scope
//    var a = 4;
//    let b = 5;
//    const c = 6;
//    console.log("Inside Function: ");
//    console.log("a = " + a);
//    console.log("b = " + b);
//    console.log("c = " + c);
//}
//
//test();


//if(true){
//    //Block Scope
//    var a = 4;
//    let b = 5;
//    const c = 6;
//    console.log("Inside Block: ");
//    console.log("a = " + a);
//    console.log("b = " + b);
//    console.log("c = " + c);
//}
//
//for(let b = 1; b<10; b++){
//    console.log("Loop: " + b);
//}
//console.log("a = " + a);
//console.log("b = " + b);
//console.log("c = " + c);

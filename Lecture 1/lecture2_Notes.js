//single line comment
/* multi line comment */

// Error ... syntax error
// when no knowledge about a variable like let x then x is undefinded type of data
//null is a value.......... Difference between null and undefined
// we use null to store it in a variable to avoid garbage value from being stored in the variable
//js is loosely typed
// undefinded is not declared
// java script is case sensitive language
// java script reserved key words are int float double char boolean if else switch case for while do break continue return function var let const this new delete try catch finally throw class extends super import export default in of with yield async await static get set constructor
// js is a dynamic programming language
// js is a single threaded language
// we now use let or const instead of var to declare a variable because of the scope of var is function scope and let and const is block scope
// var is function scope and let and const is block scope
// var can be re-declared and updated but let can be updated but not re-declared and const cannot be updated and re-declared
// js is a interpreted language
//local scope and global scope
// global scope is when we declare a variable outside of any function and it can be accessed anywhere in the code
// local scope is when we declare a variable inside a function and it can only be accessed inside that function
//local scope is much better than global scope because it helps to avoid naming conflicts and it also helps to keep the code organized
//we try to intialize minimum number of global variables because it can cause naming conflicts and it can also cause memory leaks
// we can use var to declare a variable but it is not recommended because of the scope of var is function scope and it can cause naming conflicts and it can also cause memory leaks
// we can use let or const to declare a variable because of the scope of let and const is block scope and it helps to avoid naming conflicts and it also helps to keep the code organized
//let x =10; // we can update the value of x but we cannot re-declare it
//const y =20; // we cannot update the value of y and we cannot re-declare it
//in var x =10; // we can update the value of x and we can re-declare it that was the reason why var is not recommended to use because it can cause naming conflicts and it can also cause memory leaks
// we can use var to declare a variable but it is not recommended because of the scope of var is function scope and it can cause naming conflicts and it can also cause memory leaks
// we can use let or const to declare a variable because of the scope of let and const is block scope and it helps to avoid naming conflicts and it also helps to keep the code organized
//const is used to declare a constant variable which cannot be updated and re-declared but it can be initialized with an object or an array and we can update the properties of that object or array but we cannot re-assign it to a new object or array
// in const initailization is mandatory when declaring a variable but in let and var it is not mandatory
// we can declare a variable without initializing it but it will have the value of undefined
// we can declare a variable and initialize it later but it is not recommended because it can cause confusion and it can also cause errors



// Java Script Data Types
// 1. primitive data types: string, number, boolean, null, undefined(important), symbol
// non-primitive data types: object, array, function

//Function in java script initialization  var sayHello = function() {
//     alert("Hello World");
// }

// array in java script initialization var arr = [1, 2, 3, 4, 5];
// var animals =new Array("dog", "cat", "elephant", "tiger", "lion"); dynamic memory allocation better than static memory allocation of array
// object in java script initialization var person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// object in java script initialization var person = new Object();
// var person={   //person is the name of the object
//     name: "John",
//     age: 30,
//     city: "New York"
// }


//symbol is a new data type introduced in ES6 and it is used to create unique identifiers for objects and it is also used to create private properties for objects
// we can create a symbol using the Symbol() function and it will return a unique symbol value
// we can also create a symbol with a description using the Symbol("description") function and it will return a unique symbol value with the description
// symbol helps in scope resolution  and it also helps in creating private properties for objects because the symbol value is unique and it cannot be accessed outside of the object
// we can use the typeof operator to check the type of a variable and it will return a string value of the type of the variable

//Three types of = operator in js
// = for assignment
// == for comparing the values of two variables
// === for strict type checking : example let x=10;
// let y ="10" ; if(x===y)
/*
{true
}
else
{ false
}
All non zero values are true and zero is false in java script

Experiment : FInd the max of three numbers using ternary operator java script

DOM is Documnet Object Model and it is a programming interface for web documents and it represents the page so that programs can change the document structure, style and content. The DOM represents the document as a tree of nodes and objects. Each node represents a part of the document such as an element, attribute, text, etc. The DOM allows us to manipulate the document using JavaScript and it also allows us to access and modify the elements of the document using JavaScript. The DOM is a standard for accessing and manipulating documents and it is supported by all modern browsers. The DOM is an essential part of web development and it is used to create dynamic web pages and web applications.
*/

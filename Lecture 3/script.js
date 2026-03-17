// Switch Case
var grade = 'A';
console.log("Entering switch block");

switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good!");
        break;
    case 'C':
        console.log("Fair!");
        break;
    case 'D':
        console.log("Poor!");
        break;
    default:
        console.log("Invalid grade!");
}

// Alert Function
function myFunction() {
    alert("Hello! I am an alert box!");
}

// Say Hello Function
function sayHello(name, age) {
    document.getElementById("output").innerHTML =
        "Hello " + name + "! You are " + age + " years old.";
}
//arrow function is an annonymous function that can be used to write shorter syntax for function expressions. It does not have its own this, arguments, super, or new.target. It is best suited for non-method functions, and it cannot be used as a constructor.
// Arrow Function (Multiply)
let multiply = (x, y) => x * y;

// Function to show multiply result
function showMultiply() {
    let result = multiply(2, 3);
    document.getElementById("output").innerHTML =
        "Multiplication Result: " + result;
}

// object is basically unordered collection of anyhting represented by curly brackets and it is a collection of key value pairs. It is a non-primitive data type in java script. It can store multiple values in a single variable. It can be created using object literal syntax or using the new keyword. It can have properties and methods. It can be accessed using dot notation or bracket notation.
//array is an ordered collection of values. It is a non-primitive data type in java script. It can store multiple values in a single variable. It can be created using array literal syntax or using the new keyword. It can be accessed using index notation. The index of an array starts from 0. It can have properties and methods.
//while object is unordered collection of key value pairs and it is accessed using key, array is ordered collection of values and it is accessed using index. Object is used to store data in the form of key value pairs and array is used to store data in the form of list. Object is used to represent real world entities and array is used to represent a collection of similar items.
var person ={
    name: "John Mac",
    age: 30,
    isMarried:true
        address: {
        city: "New York",
        state: "NY",
        country: "USA"
    }
}

var person2=new Object();
person2.name="John Mac";
person2.age=30;
person2.isMarried=true; 
person2.address={};
person2.address.city="New York";
person2['address']['state']="NY";//key indexing in an object



//array length is arr.length and it is used to get the number of elements in an array. It is a property of an array and it is read only. It can be used to add new elements to an array by assigning a value to the index equal to the length of the array. For example, arr[arr.length] = newElement; will add newElement to the end of the array arr. It can also be used to remove elements from an array by setting the length property to a smaller value. For example, arr.length = 2; will remove all elements from index 2 and onwards in the array arr.

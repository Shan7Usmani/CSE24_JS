//innerHTML is used to change the content of an element and it is a property of an element and it is used to get or set the HTML content of an element
//This method returns a collection of all elements that is the array in the document with the specified class name, as a NodeList object. The elements in the returned list are in the order they appear in the document. If there are no matches, the returned list will be empty. The class name can be used on any HTML element, and it can be used to apply CSS styles to multiple elements at once.
//innerHTML is used to change the content of an element and it is a property of an element and it is used to get or set the HTML content of an element
 //This method returns a collection of all elements in the document with the specified tag name, as a NodeList object. The elements in the returned list are in the order they appear in the document. If there are no matches, the returned list will be empty. The tag name can be used on any HTML element, and it can be used to apply CSS styles to multiple elements at once.
 //innerHTML is used to change the content of an element and it is a property of an element and it is used to get or set the HTML content of an element
// DOM (Document Object Model)
// It is a programming interface for web documents.
// It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as a tree of nodes, where each node is an object.
// The DOM allows JavaScript to manipulate the document.

// The DOM is created by the browser when a web page is loaded.

// SPA (Single Page Application)
// It is a web application that dynamically updates the current page
// instead of loading new pages from the server.
// This makes the app faster and more responsive.
// SPAs use AJAX and client-side routing.
// React is an example of a SPA framework.

// HTML DOM Tree
// The DOM structure is like a tree:
// window → document → html → head → body → elements (h1, p, etc.)
// Each element is called a node.

// Window Object
// It is the global object in JavaScript.
// Represents the browser window.
// Provides methods and properties to control the browser.

// Document Object
// It is a property of the window object.
// Represents the HTML document loaded in the browser.
// Used to access and manipulate page content.

// HTML Structure
// html → root element
// head → contains metadata
// body → contains visible content

// Important Points
// 1. JavaScript can change all HTML elements in the page.
// 2. JavaScript can change all attributes (id, class).
// 3. JavaScript can change CSS styles (usually inline styles).
// 4. JavaScript can remove HTML elements and attributes.
// 5. JavaScript can respond to events (click, hover, etc.).
// 6. JavaScript can create new elements and events.


//document.querySelector() method returns the first element that matches a specified CSS selector(s) in the document. It is a powerful method that allows you to select elements using CSS selectors, which can be more flexible than other DOM selection methods. The syntax is: document.querySelector(selector), where selector is a string containing one or more CSS selectors separated by commas. If no matches are found, it returns null.
//document.querySelectorAll() method returns a static (not live) NodeList of all elements that match a specified CSS selector(s) in the document. It is similar to document.querySelector(), but it returns all matching elements instead of just the first one. The syntax is: document.querySelectorAll(selector), where selector is a string containing one or more CSS selectors separated by commas. If no matches are found, it returns an empty NodeList.
//Query selector will return where it encounters the first match and query selector all will return all the matches in the document. Query selector is faster than query selector all because it only needs to find the first match, while query selector all needs to find all matches. However, query selector all can be more useful when you need to manipulate multiple elements at once, while query selector is more suitable for single element manipulation.
//in these parameters are passed using # for id and . for class. For example, document.querySelector("#myId") will select the element with id "myId", and document.querySelector(".myClass") will select the first element with class "myClass". You can also use more complex selectors, such as document.querySelector("div > p.myClass") to select a p element with class "myClass" that is a direct child of a div element.
// get element by ID
// get element by ID
// ---------------- BASIC DOM ----------------

// Change text
function changeText() {
    let x = document.getElementById("demo");
    x.innerHTML = "Hello World!";
    x.style.color = "red";
}

// Class change
function changeClass() {
    let y = document.getElementsByClassName("demo2");
    for (let i = 0; i < y.length; i++) {
        y[i].innerHTML = "Changed!";
        y[i].style.backgroundColor = "yellow";
    }
}

// Tag change
function changeTag() {
    let z = document.getElementsByTagName("p");
    z[5].innerHTML = "Changed Paragraph!";
}

// ---------------- ATTRIBUTES ----------------

function getattribute() {
    let value = document.getElementById("demo").getAttribute("id");
    document.getElementById("output").innerHTML = "ID: " + value;
}

function setattribute() {
    document.getElementById("demo").setAttribute("class", "democlass");
}

// ---------------- CREATE / REMOVE ----------------

function createElementFunc() {
    let p = document.createElement("p");
    p.innerHTML = "New Element Created";
    document.body.appendChild(p);
}

function removeElementFunc() {
    let el = document.getElementById("demo");
    if (el) el.remove();
}

// ---------------- MOUSE EVENTS ----------------

let btn = document.getElementById("mouseBtn");

btn.addEventListener("click", () => console.log("Click"));
btn.addEventListener("dblclick", () => console.log("Double Click"));
btn.addEventListener("mouseover", () => console.log("Mouse Over"));
btn.addEventListener("mouseout", () => console.log("Mouse Out"));
btn.addEventListener("mousedown", () => console.log("Mouse Down"));
btn.addEventListener("mouseup", () => console.log("Mouse Up"));

document.addEventListener("mousemove", () => console.log("Mouse Moving"));

// ---------------- KEYBOARD EVENTS ----------------

let input = document.getElementById("keyboardInput");

input.addEventListener("keydown", (e) => console.log("Key Down:", e.key));
input.addEventListener("keyup", (e) => console.log("Key Up:", e.key));
input.addEventListener("keypress", (e) => console.log("Key Press:", e.key));

// ---------------- FORM EVENTS ----------------

let form = document.getElementById("form");
let nameInput = document.getElementById("nameInput");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");
});

nameInput.addEventListener("focus", () => console.log("Focus"));
nameInput.addEventListener("blur", () => console.log("Blur"));
nameInput.addEventListener("change", () => console.log("Change"));
nameInput.addEventListener("input", () => console.log("Typing:", nameInput.value));

// ---------------- WINDOW EVENTS ----------------

window.addEventListener("load", () => console.log("Page Loaded"));
window.addEventListener("resize", () => console.log("Resized"));
window.addEventListener("scroll", () => console.log("Scrolled"));
window.addEventListener("focus", () => console.log("Window Focus"));
window.addEventListener("blur", () => console.log("Window Blur"));
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});
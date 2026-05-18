//About react
//React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. React uses a virtual DOM (Document Object Model) to optimize rendering and improve performance. It is widely used for building single-page applications and mobile applications. React was developed by Facebook and is maintained by Facebook and a community of developers.

//Key features of React include:
//1. Component-Based Architecture: React allows developers to create reusable components that can be easily composed to build complex user interfaces.
//2. Virtual DOM: React uses a virtual DOM to optimize rendering and improve performance. It updates only the necessary parts of the DOM when the state of the application changes.
//3. JSX: React uses JSX (JavaScript XML) syntax, which allows developers to write HTML-like code within JavaScript. This makes it easier to create and manage UI components.
//4. Unidirectional Data Flow: React follows a unidirectional data flow, which means that data flows in one direction from parent components to child components. This makes it easier to understand and debug applications.
//5. React Hooks: React provides hooks that allow developers to use state and other React features in functional components, making it easier to manage state and side effects in applications.

//Why we use React:
//1. Reusability: React's component-based architecture allows developers to create reusable components, which can save time and effort when building applications.
//2. Performance: React's virtual DOM optimizes rendering and improves performance, making it suitable for building complex and dynamic user interfaces.
//3. Community Support: React has a large and active community of developers, which means that there are plenty of resources, libraries, and tools available for developers to use.
//4. Flexibility: React can be used to build a wide range of applications, from simple websites to complex single-page applications and mobile applications.
//5. Easy to Learn: React has a relatively simple API and a gentle learning curve, making it accessible to developers of all skill levels.
//6. Large Ecosystem: React has a vast ecosystem of libraries and tools that can be used to enhance the development process and add additional functionality to applications.
//7. strong community support: React has a large and active community of developers, which means that there are plenty of resources, libraries, and tools available for developers to use. This makes it easier to find solutions to problems and get help when needed.

//React vs traditional JavaScript:
//1. Component-Based Architecture: React uses a component-based architecture, which allows developers to create reusable UI components. Traditional JavaScript typically involves manipulating the DOM directly, which can lead to more complex and less maintainable code.
//2. Virtual DOM: React uses a virtual DOM to optimize rendering and improve performance. Traditional JavaScript updates the DOM directly, which can lead to slower performance, especially for complex applications.
//3. JSX: React uses JSX syntax, which allows developers to write HTML-like code within JavaScript. Traditional JavaScript typically involves creating and manipulating DOM elements using JavaScript syntax, which can be more verbose and less intuitive.
//4. Unidirectional Data Flow: React follows a unidirectional data flow, which means that data flows in one direction from parent components to child components. Traditional JavaScript does not have a built-in data flow pattern, which can lead to more complex and less predictable code.
//5. State Management: React provides built-in state management features, such as hooks, that allow developers to manage state in functional components. Traditional JavaScript typically requires developers to manage state manually, which can lead to more complex and error-prone code.
//6. Performance: React's virtual DOM optimizes1 rendering and improves performance, making it suitable for building complex and dynamic user interfaces. Traditional JavaScript may struggle with performance when dealing with complex applications that require frequent DOM updates.
//example of react code:
import React, { useState } from "react";    
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>{count}</button>//this is written in html but it is actually jsx which is a syntax extension for javascript and it allows us to write html like code in javascript hence place in curly braces and write javascript code in it and it will be executed when the button is clicked
            <button onClick={() => setCount(count - 1)}>{count}</button>
        </div>
    );
}   
//jsx ko js me convert karne ke liye babel ka use hota hai jo ki ek javascript compiler hai aur jsx ko javascript me convert karta hai taki browser usse samajh sake aur execute kar sake. React ke components ko create karne ke liye hum function components ya class components ka use kar sakte hain. Function components simple functions hote hain jo JSX return karte hain, jabki class components ek class hoti hain jo React.Component se extend hoti hain aur render method return karti hain. React ke state management ke liye hum useState hook ka use kar sakte hain jo ki functional components me state manage karne ke liye use hota hai. React ke event handling ke liye hum onClick, onChange, onSubmit jaise event handlers ka use kar sakte hain jo ki JSX me directly likhe ja sakte hain. React ke props (properties) ka use karke hum parent component se child component me data pass kar sakte hain. React ke lifecycle methods jaise componentDidMount, componentDidUpdate, componentWillUnmount ka use karke hum component ke lifecycle events ko handle kar sakte hain. React ke context API ka use karke hum global state manage kar sakte hain aur data ko deeply nested components me pass kar sakte hain without prop drilling. React ke hooks jaise useEffect, useContext, useReducer ka use karke hum functional components me side effects, context, aur complex state management handle kar sakte hain.
//jsx rules 
//1. function component ke andar JSX return karna hota hai
//2. component name capital letter se start hona chahiye
//3. JSX me class attribute ki jagah className attribute ka use karna hota hai
//4. JSX me style attribute me object pass karna hota hai jisme CSS properties camelCase me likhi jati hain
//5. JSX me JavaScript expressions ko curly braces me likhna hota hai
//6. JSX me self-closing tags ka use karna hota hai jab element ke andar koi content nahi hota hai
//7. Wrapped in a single element: JSX me multiple elements ko return karne ke liye unhe ek single parent element me wrap karna hota hai, jaise div, section, ya React.Fragment. Isse JSX ko valid banaya jata hai aur React ko pata chalta hai ki kaunse elements ek sath render karne hain.
// exapmle of JSX rules:
import React from "react";      
function App() {
    return (
        <div>
            <h1 className="heading">Hello, World!</h1>
            <p style={{ color: "blue", fontSize: "16px" }}>This is a paragraph.</p>
            <button onClick={() => alert("Button clicked!")}>Click Me</button>
        </div>
    );
}
//In this example, we have a function component called App that returns JSX. The JSX includes a div element that wraps an h1 element with a className attribute, a p element with a style attribute, and a button element with an onClick event handler. This follows the JSX rules mentioned above.

//Attribute use camel case me hota hai, jaise className, onClick, style, etc. Iska reason ye hai ki JSX JavaScript ke andar likha jata hai, aur JavaScript me camelCase convention follow ki jati hai. Isliye, JSX me bhi attributes ko camelCase me likhna hota hai taki woh JavaScript ke syntax ke sath compatible ho sake. Agar hum JSX me attributes ko camelCase me nahi likhenge, to React unhe samajh nahi payega aur error throw karega.
//<div className="container">
//    <h1>Hello, World!</h1>
//</div> 
//inline styling me hum style attribute ka use karte hain aur usme ek object pass karte hain jisme CSS properties camelCase me likhi jati hain. Iska reason ye hai ki JSX JavaScript ke andar likha jata hai, aur JavaScript me camelCase convention follow ki jati hai. Isliye, JSX me bhi CSS properties ko camelCase me likhna hota hai taki woh JavaScript ke syntax ke sath compatible ho sake. Agar hum JSX me CSS properties ko camelCase me nahi likhenge, to React unhe samajh nahi payega aur error throw karega.
//example of inline styling:
import React from "react";  
function App() {
    return (
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
            <h1 style={{ color: "white" }}>Hello, World!</h1>
            <p style={{ color: "black", fontSize: "16px" }}>This is a paragraph.</p>    
        </div>
    );
}

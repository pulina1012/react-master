Session 04 - Assessment

Questions

What are the three states of a Promise?

1.Pending
2.Fullfilled
3.Rejected

-----------------------------------------------------------------------

How does the async keyword affect a function's return value?

The async keyword in JavaScript is used to define an asynchronous function. When you use the async keyword before a function, it changes the way the function's return value is handled. Here’s how it affects the return value:

Promise Return: An async function always returns a Promise. If the function returns a value, that value is automatically wrapped in a resolved Promise. For example:

async function example() {
    return 42;
}

example().then(value => console.log(value)); // Logs: 42


Awaiting Promises: Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved. The await keyword can only be used within async functions. For example:

async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

fetchData().then(data => console.log(data));


Error Handling: If an async function throws an error, the returned Promise is rejected with that error. This allows you to use .catch() to handle errors:

async function exampleWithError() {
    throw new Error('Something went wrong!');
}

exampleWithError().catch(error => console.error(error)); // Logs: Error: Something went wrong!


In summary, the async keyword ensures that the function returns a Promise, allowing for asynchronous operations to be handled more cleanly and intuitively with await.

----------------------------------------------------------------------


Explain the purpose of the await keyword.

The await keyword in JavaScript is used to pause the execution of an async function until a Promise is resolved or rejected. It can only be used inside an async function or at the top level of a module.

When you use await, it waits for the Promise to settle and returns the fulfilled value. If the Promise is rejected, await throws the rejected value. This allows you to write asynchronous code in a synchronous manner, making it easier to read and maintain

----------------------------------------------------------------------


What is a callback function and how is it used in asynchronous operations?

Callbacks are functions passed as arguments to other functions and are executed once a specific task is completed. They are commonly used in JavaScript for handling asynchronous operations but can lead to "callback hell" when nested multiple times.

--------------------------------------------------------------------
Describe the role of the event loop in JavaScript.

JavaScript is single-threaded, meaning it can execute one piece of code at a time. However, it can handle asynchronous operations efficiently, thanks to the event loop. Here's how it works:

Call Stack: This is where your code gets executed. Functions are pushed onto the stack when called and popped off when they return.

Web APIs: These are browser-provided APIs like setTimeout, fetch, and DOM events. When an asynchronous operation is called, it is handed off to these APIs.

Callback Queue: Once an asynchronous operation completes, its callback function is placed in the callback queue, waiting to be executed.

Event Loop: The event loop continuously checks the call stack to see if it's empty. If the call stack is empty, it takes the first callback from the callback queue and pushes it onto the call stack for execution.

Example
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 1000);

console.log('End');
Execution Flow:

console.log('Start') is executed and logged.
setTimeout is called, and its callback is handed off to the Web API.
console.log('End') is executed and logged.
After 1000ms, the callback from setTimeout is placed in the callback queue.
The event loop checks the call stack, finds it empty, and pushes the setTimeout callback onto the stack.
console.log('Timeout callback') is executed and logged.
Summary
The event loop allows JavaScript to perform non-blocking operations by managing the execution of asynchronous callbacks. This enables JavaScript to handle tasks like I/O operations, timers, and user interactions efficiently, despite being single-threaded.

--------------------------------------------------------------------------------

Write a function called delayedGreeting that takes a name as an argument and logs a greeting message to the console after a 2-second delay using setTimeout. Use a callback function to achieve this.



function delayedGreeting(name)
{
console.log("start");

setTimeout(() => {

console.log(`greeting message: ${name}`)

},2000);


console.log("end");
}

delayedGreeting("pulina");

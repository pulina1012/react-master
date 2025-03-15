import { add } from "./math.js";

// console.log("i am the secondary js file");

// Primitive Types

//Number
// let userId = 376764;
// console.log("Value of User ID :", userId);
// console.log("type of User ID :", typeof userId);

//string
// let userEmail = "pulina@gmail.com";
// console.log("Value of User email :", userEmail);
// console.log("type of User email :", typeof userEmail);

//boolean
// let isAuthenticated = false;
// console.log("Value of Auth :", isAuthenticated);
// console.log("type of Auth :", typeof isAuthenticated);

//null
// let phoneNumber = null;
// console.log("Value of phone :", phoneNumber);
// console.log("type of phone :", typeof phoneNumber);

//undefined
// let dob;
// dob = '1996-10-12';

// if(dob)
// {
//     console.log("Value of birthday :", dob);
//     console.log("type of birthday :", typeof dob);
// }

//object types
// let uniqueId = Symbol("id");
// console.log("Value of unique :", uniqueId);
// console.log("type of unique :", typeof uniqueId);

//object types
// let person = { name : "Pulina", age: 29};
// console.log("Value of person :", person);
// console.log("type of person :", typeof person);

// let myArray = [0,1, 2, 3, 4, 5];
// console.log("Value of array :", myArray);
// console.log("length of array :", myArray.length);
// console.log("type of array :", typeof myArray);

function greet(name, age) {
  //template literals(after es6 introducing)
  return `hello hello ,${name} my age is ${age} years old`;
  //   return 'Hello ' + name;
}
// console.log("value of greet :", greet("pulina","29"));
// console.log("type of greet :", typeof greet);

// after es6

// const greet2 = (name,age) => {
//     return `hello hello ,${name} my age is ${age} years old`;
// };
// console.log("value of greet2 :", greet2("pulina","29"));
// console.log("type of greet2 :", typeof greet2);

//----------------------------------------------------------------------
//destructuring

// let person = {
//   name: "pulina",
//   age: 29,
//   data: {
//     uuid: "dhfgsah23654",
//     token: "hfhjghg7656",
//     createdAt: "12-12-2012",
//     // updatedat: "12-12-2012",
//     images: { img1:"123.jpg", img2:"1234", img3:"12345"},
//   },
// };

// const {uuid,token} = person.data;
// const{img1,img2} = person.data.images;

// console.log("uuid : ",uuid);
// console.log("token : ",person.data.token);
// console.log("token  2 : ",token);
// console.log("image 1 : ",img1);
// console.log("person : ",person);

//nullish coalescing
// console.log('updated_at',person?.data?.updatedat ?? 'N/A');

const myArray = [1, 2, 3, 4, 5];
const myArray2 = [...myArray, 6, 7, 8];
// myArray.push(6,7,8);
// myArray2.pop(1);

// console.log(myArray2);

//import and export

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("dom is ready");
//   });

// console.log(add{100,50})

//setting an item to local storage
// localStorage.setItem("username","derek");

//setting an item to session storage
// sessionStorage.setItem("email","derekdev@gmail.com");

const startTime = performance.now();
// console.log("IM HERE BEFORE THE DOM LOADED.");

document.addEventListener("DOMContentLoaded", (event) => {
  const endTime = performance.now();
  const loadTime = (endTime - startTime).toFixed(2);

  // console.log(`DOM Loaded time: ${loadTime} `);

  const mainTitle = document.querySelector("#main-title");

  // console.log("title is: ", mainTitle);
  // mainTitle.textContent = "I am the manipulated main title";

  const mainButton = document.querySelector("#main_button");
  // console.log("button  is: ", mainButton);

  // bind click event to the main button
  mainButton.addEventListener("click", () => {
    mainTitle.textContent = "I am the manipulated main title";
    // setTimeout(() => {
    //   window.location.reload(true);
    // }, 200);
  });
});

// console.log("IM HERE after THE DOM LOADED.");
// console.log("username is : ",localStorage.getItem("username"));
// console.log("email is : ",sessionStorage.getItem("email"));

// console.log("add function: ",add(100,50));

// sessionStorage.setItem("name","john");

// if(sessionStorage.getItem("name")=== null)
// {
//   console.log("name is not set!");
//   sessionStorage.setItem("name","kavinda");
// }
// else{
// console.log("name is:",sessionStorage.getItem("name"));
// }

// ----------promises -------

// let myPromise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Operation is success");
//   } else {
//     reject("operation is failed!");
//   }
// });

// myPromise.then((message) => {
// console.log(message); //operation success
// }).catch((error) =>
// {
//   console.log(error); //operation is failed
// }).finally(()=>{
//   console.log("promise is finished");
// });

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     //simulate a delay of 3 seconds
//     setTimeout(() => resolve("Operation is success"), 3000);
//   } else {
//     reject("operation is failed!");
//   }
// });

// //async and await
// async function initialiseApp() {
//   try {
//     const message = await myPromise;
//     console.log("message: ", message);
//     let userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     // let data = await userResponse.json();

//     const user = await userResponse.json();
//     // console.log("response  data", data);

//     //check if the user object is not null and  user has a id?
//     if (user?.id) {
//       console.log("user data: ", user.id);
//       const postsResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
//       );
//       const posts = await postsResponse.json();
//       console.log("posts: ", posts);
//     }
//   } catch (error) {
//     console.log("error fetching data", error);
//   }
// }

// //call the async function
// initialiseApp();

// console.log("i am here after the async func");


//callback function


// //define a function that accept a callback
// function fetchData(callback) {
//   console.log("fetching started!");
//   setTimeout(() => {
//     let data = { name: "pulina", age: "29" };
//     callback(data);
//     console.log("timeout completed!");
//   }, 3000); //simulate network request with a delay of 3 seconds
//   console.log("fetching completed!");

// }

// //define a callback function
// function handleData(data) {
//   console.log("data received: ", data);
// }

// //call the function with a callback
// //pass a argument to the fetchdata function
// fetchData(handleData);




function delayedGreeting(name)
{
console.log("start");

setTimeout(() => {
console.log(`greeting message: ${name}`);
},2000);

console.log("end");
}

delayedGreeting("pulina");
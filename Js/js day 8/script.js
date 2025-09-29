import DataFetcher from "./DataFetcher.js";
import { greetUser } from "./utils.js";

// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
console.log(greetUser("Abdo"))
// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
let task = function checkPromise(issuccess)
{
    return  new Promise((resolve,reject)=>{
    setTimeout(
        ()=>{
            if(issuccess){
            resolve("Task completed!")
            }
            else{
            reject("Rejected")
            }
        } , 2000
    )
})
}

task(true)
.then((result) => console.log(result))
.catch((error) => console.log(error))

task(false)
.then((result) => console.log(result))
.catch((error) => console.log(error))
// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet(){
    return new Promise(
        (resolve) => {
            setTimeout(
                resolve("Welcome!")
                , 1000
            )
        }
    )
}

waitAndGreet().then((result=> console.log(result)))
// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchData(){
    try{
    const streamedData = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await streamedData.json()
    console.log(data)
    console.log(`name : ${data.name} , email : ${data.email}`)
    }catch(err){
        console.log(err)
    }
}

fetchData()
// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetchThree(){
    try{
        const resp =  await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json()
        const titles =  data.slice(0,3)
        .map(post => post.title)
        return titles
    }
    catch(err){
        console.log("Error : " , err)
    }
}
fetchThree().then(titles => console.log(titles))
// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
function wait(){
    return new Promise(resovle => setTimeout(resovle,1000))
}

function timer(){
    for(let i=0;i<3;i++){
        console.log(i+1)
        wait()
    }
}
timer()
// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function stringfy(json){
    try{
        return JSON.parse(json)
    }
    catch(err){
        return null
    }
}
// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function getNumberOfCompleted(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    const data = await res.json()
    const completedTodos = data.filter(data=> data.completed)
    console.log(completedTodos)
    return completedTodos.length;
}
getNumberOfCompleted().then(res=> console.log(res))

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
let dataFetcher = new DataFetcher()
dataFetcher.getUser(1)
.then((res)=>console.log(res))
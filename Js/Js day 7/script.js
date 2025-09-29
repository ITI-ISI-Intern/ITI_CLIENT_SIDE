// 1- Write a function that greets a user, using a default parameter for the name.
function greatUser(name = "Guest"){
    console.log(`Hello, ${name}`)
}

// 2- Write a function that calculates the total price with a default tax rate parameter.
function calcTotalPrice(price, taxRate=0.1){
    console.log(price + (price * taxRate))
}

// 3- Write a function that creates a user object, using a default role parameter.
function createObject(name,age,role="manager"){
    return {
        name : name , 
        age : age,
        role : role
    }
}
const user = new createObject("Abdo",22)
// console.log(user)

// 4- Write a function that multiplies any number of arguments using the rest operator.
function multip(...args){
    return args.reduce((acc,val)=> acc *= val , 1);
}
// console.log(multip(1,2,3))

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiSum(a, ...args){
    return a * args.reduce((acc,val)=> acc += val , 0);
}
console.log(multiSum(1,3,3,3))

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function getStrings(...str){
    return [...str]
}
// console.log(getStrings("string1","string2","string3"))

// 7- Create a new array by combining two arrays using the spread operator.
function combine(arr1,arr2){
    return [...arr1,...arr2]
}
// console.log(combine([1,3],["string1","String2"]))

// 8- Copy an array using the spread operator.
const arr = [1, 2, 3, 4]
const new_arr = [...arr]

// 9- Merge two objects into one using the spread operator.
const obj1 = { 
    name : "abdo" ,
    age : 22
}

const obj2 = { 
    counrty : "EG" ,
}

const combineObj = {...obj1,...obj2}
// console.log(combineObj)

// 10- Update a property in an object using the spread operator to create a new object.
const obj3 = {...obj1 , name:"magdy"}
// console.log(obj3)

// 11- Destructure an array to get the first and second elements into variables.
const [first,second] = ["first","second","third"]
// console.log(first)
// console.log(second)

// 12- Destructure an array to get the first element and the rest into another array.
const [f1,...restArr] = ["first","second", 1, 2, 3, 4]
// console.log(f1,restArr)

// 13- Destructure an object to extract two properties into variables.
const {name,age} = obj1
console.log(name,age)

// 14- Destructure an object and rename the extracted properties.
const {name:fullname ,age : Age} = obj1
console.log(fullname,Age)

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function getProp(obj,property){
    const { [property] : returnProp} = obj;
    return returnProp;
}
console.log(getProp({name:"magdy"} , "name"))

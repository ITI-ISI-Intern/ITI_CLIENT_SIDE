
// 1. Predict (in comments) the output order of this code, then run to verify.
//    console.log(a());  print A
//    var b = function(){ return 'B'; };
//    function a(){ return 'A'; }
//    console.log(b()); print B
//    After verifying, explain (one short line) why a works before definition and b does not.
//   Function a has been hoisted but the b the expression function not hoisted 

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
function sum(a, b) {
    return a + b;
}
var add = function (a, b) { return a + b }
// console.log(sum(2,4) === add(4,5))

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
var factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1)
}
// console.log(factorial(5))
// console.log(fact(5)) not global

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo() {
    console.log(`length of arguments : ${arguments.length}`)
    for (let i = 0; i < arguments.length; i++)
        console.log(`${i} : ${arguments[i]}`)
}
// showInfo();                          
// showInfo("Alice", 42);               
// showInfo(1, 2, 3, 4, 5);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x, y) {
    console.log(`x : ${x} , y : ${y}`)
    console.log(`argument[0] : ${arguments[0]} , argument[1] : ${arguments[1]}`)
    x = x * y
    y = y * x
    console.log(`x : ${x} , y : ${y}`)
    console.loggreatLara("Hello ", "!")
    // greatLara("HI " , ".")(`argument[0] : ${arguments[0]} , argument[1] : ${arguments[1]}`)
}
// mutate(2 , 5)

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
// console.log(sumAll(1, 2, 3)) // 6
// console.log(sumAll()) // 0

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll() {
    return Array.prototype.reduce.apply(arguments, function (acc, val) {
        return acc + val;
    }, 0);
}

// console.log(sumAll());            // 0 (no args)
// console.log(sumAll(1, 2, 3));     // 6



// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue() {
    if (arguments.length === 0) {
        return "none";
    } else if (arguments.length === 1) {
        return "one:" + arguments[0];
    } else if (arguments.length === 2) {
        return "two:" + arguments[0] + "," + arguments[1];
    } else {
        return "too many";
    }
}
// console.log(describeValue())
// console.log(describeValue(1,2))

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
let funcs = [
    function (x) { return x + 1 },
    function (x) { return x + 2 },
    function (x) { return x + 3 },
]

let start = 10;
for (var i = 0; i < funcs.length; i++) {
    start = funcs[i](start);
}
// console.log("Final result:", start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor) {
    return function (n) {
        return factor * n;
    }
}
let double = makeMultiplier(2)
let triple = makeMultiplier(3)

// console.log(double(7))
// console.log(triple(7))

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
function once(fn) {
    let called = false;
    return function () {
        if (!called) {
            called = true
            return fn()
        }
    }
}

function logiiing() {
    console.log("=====>")
    return "logggging"
}

const logger = once(logiiing);
console.log(logger())
// console.log(logger())


// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start) {
    let total = start;
    return function (num) {
        total += num;
        return total;
    };
}

let a = makeAdder(3)
let b = makeAdder(4)
// console.log(a(3))
// console.log(b(3))
// console.log(b(3))

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
let user = {
    name: "abdo",
    sayHi: function () {
        console.log("Hi " + this.name)
    }
}

user.sayHi() // Hi abdo
var f = user.sayHi // Hi undefined
f()
// When we call user.sayHis this will point to object user but f will point to the window 

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
let user1 = {
    name: 'Sara'
}
// user.sayHi.call(user1)
// user.sayHi.apply(user1)

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
let greeter = {
    great: function (greating, sign) {
        console.log(greating + " " + this.name + sign);
    }
}
// greeter.great.apply({name:"Ali"},["Hello" , "!"])

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
let greatLara = greeter.great.bind({ name: "lara" })
// greatLara("Hello " , "!")
// greatLara("HI " , ".")

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
function sayHello(obj) {
    return greeter.great.bind(obj, "Hello ")
}
let say = sayHello({ name: "Ali" })
// say("#")

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function slicing() {
    const arr = Array.prototype.slice.apply(arguments)
    console.log("Converted Arr : " + arr)
    const reversed = arr.slice().reverse()
    console.log("Reversed Arr : " + reversed)
}
// slicing(1,3,4)

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
let arr_mx = [5, 2, 11, 7];
// console.log(Math.max.apply(null, arr_mx));

let max = 0;
arr_mx.forEach((element) => {
  max = Math.max(max, element);
});
// console.log(max); // 11

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

console.log(Math.max.call(null, 1, 2, 3, 4, 5)); // 5
console.log(Math.max.apply(null, [1, 2, 3, 4, 5])); //5

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
// console.log(`User ${name} Age: ${age+1}`)

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
const title = "title"
const body = "body"
const template = `title : ${title}
body : ${body}`
// console.log(template)

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if (true) {
    var i = 9;
    let j = 10;
}
// console.log(i) // 9
// console.log(j) // error


// 28. Write code that tries to log x before let x = 5;.
// console.log(x) // error
// let x = 23;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
// const arr = []
// arr.push(39)
// console.log(arr)
// arr = [] // error

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
// [1, 3, 5].map(function (x) { return x * x })
// [1, 3, 5].map(x => x * x)
// [1, 3, 5].map((x) => { return x * x })

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).
timer = {
    count: 0,
    startClassic() {
        console.log("Starting classic..")
        const id = setInterval(
            function () {
                this.count++;
                console.log("count : " + this.count)
            }, 1000
        )
        setTimeout(() => clearInterval(id), 3000);
    },
    startArrow(){
        console.log("Starting arrow...");
        const id = setInterval(() => {
            this.count++; 
            console.log("Arrow count:", this.count);
        }, 500);
        setTimeout(() => clearInterval(id), 3000);
    }

}
// timer.startClassic(); // count is nan
// setTimeout(() => timer.startArrow(), 4000); // arriow can acces 

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
let obj = ()=>{
    return {v:10}
}
// console.log(obj())

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).


// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :)
function great(name){
    return "Hi " + name + "!"
}
const arrowGreat = (name) => "Hi " + name + "!"
// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const add2 = x => x + 2
const time3 = x => 3 * x
const minus1 = x => x - 1

function runPipeline(n , fnArray){
    for(const fn of fnArray)
        n = fn(n)
    return n
}
// console.log(runPipeline(5, [add2, times3, minus1]));

// 36. (write answers BEFORE running):
//     var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
//     var inc = obj.inc;
//     console.log(obj.inc()); // 2 this refer to object 
//     console.log(inc()); // NaN this refer to window
//    Explain both lines.

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
function counter(start){
    let count =start
    return function(){
        return ++count
    }
}
counters=[]
count = counter(0)
for(let i =1;i<1000;i++){
    counters.push(count(i))
}
// console.log(counters)
// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst(){
    if(arguments.length === 0)
        return undefined
    else
        return Array.prototype.map.call(arguments,(x)=>x)
        // return Array.from(arguments)
}
// arr = safeFirst()
// console.log(safeFirst(2,3,4))

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
function factory(namesArray){
    obj = {}
    namesArray.forEach(element => {
        let count = 0;
        obj[element] = ()=>{
            count++;
            console.log("count === " + element)
            return count;
        }
    });
    return obj
}
// var counters = factory(['a','b']); counters.a(); counters.b()




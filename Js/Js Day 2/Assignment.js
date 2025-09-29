// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
var numInt = parseInt("258.90")
var numFloat = parseFloat("258.90")

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
7.45678.toFixed(2);
parseFloat(7.45678.toFixed(2));

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
Number.isNaN('abc');
Number.isNaN('21');

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
(0.1 + 0.2).toFixed(1);

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px")
function parseSafe(str) {
    str = str.trim();
    num = parseInt(str)
    return !Number.isNaN(num) && Number.isFinite(num) ? num : null;
}


// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFiniteNumber(value) {
    return typeof value === "number" && !isNaN(value) && value !== Infinity && value !== -Infinity;
}

/* 
   isFiniteNumber("123")
   isFiniteNumber(null)
   isFiniteNumber(NaN)
   isFiniteNumber(Infinity)
   isFiniteNumber(123)
   isFiniteNumber(123.54)
   isFiniteNumber(123)
   isFiniteNumber(-9)
   isFiniteNumber(-0.9)
   */


// 7. Remove leading and trailing spaces from the string "   hello world  ".
"   hello world  ".trim()

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
"javascript".slice(4)
"javascript".substring(4)

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive)
"Banana Mania".split('').filter(function (c) { return c === 'a' }).length

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverseString(s) {
    ss = ''
    for (var i = s.length - 1; i >= 0; i--) {
        ss += s[i];
    }
    return ss;
}


// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(sentence) {
    return sentence.split(' ')
        .map(function (str) {
            str = str[0].toUpperCase() + str.slice(1)
            return str;
        })
        .join(' ')
}


// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
var str = "https://example.com/path/to/page";
var startIndex = str.indexOf('//') + 2;
var endIndex = str.indexOf('/', startIndex)
str.slice(startIndex, endIndex)

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(haystack, needle) {
    if (needle === "") return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
}

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello'; if (s.toUpperCase === 'HELLO') { console.log('match'); }

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr = [1, 2, 3, 4, 5];
arr.push(6)
arr.unshift(0)
console.log(arr)

// 16. Remove the last element and store it. Remove the first element and store it.
var lastElement = arr.pop()
var firstElement = arr.shift()

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var new_arr = [10, 20, 30, 40, 50].slice(0, 3);

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
var arr = [1, 2, 3, 4, 5]
arr.splice(2, 2, 'a', 'b')

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
var arr = [1, 2, 3, 4, 5]
arr.slice(1, 3) // [2 , 3]
arr.splice(1, 2) // [1 , 4 , 5]

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
arr = []
arr[7] = 'a'
console.log(arr.length)

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(array) {
    var newArr = [array]
    for (var i = 0; i < arr.length; i++) {
        if (array[i]) {
            newArr.push(array[i])
        }
    }
    return newArr;
}

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepClone1D(a) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(array[i])
    }
    return newArr;
}

// 23. Map [1,2,3] to their squares using map.
[1, 2, 3].map(function (x) { return Math.pow(x, 2) });

// 24. Filter [5,10,15,20] to keep values >= 12.
[5, 10, 15, 20].filter(function (x) { return x >= 12 });

// 25. Reduce [2,4,6] to product.
[2, 4, 5].reduce(function (acc, n) { return acc * n }, 1);

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
function arraySum(a) {
    return a.reduce(function (acc, n) { return acc + n }, 0)
}

function arraySumLoop(a) {
    var sum = 0;
    for (var i = 0; i <= a.length; i++)
        sum += i;
    return sum;
}

console.log(arraySum([1, 2, 3]) === arraySumLoop([1, 2, 3]));

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
var names = ['Ali', 'Sara', 'Kareem'];
var letters = [];
for (var i = 0; i < names.length; i++) {
    letters.push(names[i].charAt(0));
}
console.log(letters);

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (result.indexOf(a[i]) === -1) {
            result.push(a[i])
        }
    }
    return result;
}

/* we can use object to check appearence of key in object keys */

// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
function flatten1(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
            for (var j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j]);
            }
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}

// 31. Create object person with name and age; add a new property city after creation.
var person = {
    "name": "Abdo",
    "age": 23,
}
person['city'] = "cairo"

// 32. Access a property via bracket notation with a dynamic key variable.
var city = 'city'
console.log(
    person[city]
);

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}

// 39. List (as comments) 5 different values that coerce to false in ES5.
/*
 - false
 - null
 - undefined 
 - NaN
 - 0
 */

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v) {
    v = Boolean(v)
    return v == true || v == 'true' || v == 1 || v == '1';
}

// 41. Create a Date for Jan 1, 2025 00:00 local.
var date = new Date('Jan 1, 2025 00:00');

// 42. Get the current year from new Date().
var year = new Date().getFullYear();

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1, d2) {
    var time1 = d1.getTime();
    var time2 = d2.getTime();
    var diff = Math.abs(time1 - time2)
    return diff / (1000 * 60 * 60 * 24)
}

// 44. Generate a random integer 1..100.
var rand100 = Math.round((Math.random() * 100) + 1)

// 45. Round 4.567 to nearest integer, round down, and round up (three results).
var rd = Math.round(4.567);
var rdUp = Math.ceil(4.567);
var rdDown = Math.floor(4.567);
// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
    var result = []
    while (n--) {
        var rand = Math.round(Math.random() * (max - min + 1)) + min;
        result.push(rand);
    }
    return result;
}
// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
function parsePriceList(str) {
    var keyValueStr = str.split(";")
    var obj = {}
    for (var i = 0; i < keyValueStr.length; i++) {
        var keyValueArr = keyValueStr[i].split(":");
        obj[keyValueArr[0]] = Number(keyValueArr[1]);
    }
    return obj;
}

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
    mixedArray = mixedArray.filter(function (v) { return Number.isFinite(v) });
    mixedArray.sort(function (a, b) { return a - b });
    return mixedArray;
}

// sample input : ["7", NaN, 42, Infinity, -5 , 2, "10", 0, -100]
// sample output: [-100, -5, 0, 2, 42]
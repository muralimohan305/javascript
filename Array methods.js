1. toString()
var myArray = [1, 2, 3, 4];

// Using type coercion
var arrayAsString = myArray + "";
console.log(arrayAsString); // "1,2,3,4"

// Using toString method
var arrayAsString2 = myArray.toString();
console.log(arrayAsString2); // "1,2,3,4"
2.join()
var fruits = ["Apple", "Banana", "Orange"];

// Using join with default separator (comma)
var result1 = fruits.join();
console.log(result1);
// Output: "Apple,Banana,Orange"

// Using join with a custom separator (hyphen)
var result2 = fruits.join("-");
console.log(result2);
// Output: "Apple-Banana-Orange"

3.pop()
var fruits = ["Apple", "Banana", "Orange"];

// Using join with default separator (comma)
var result1 = fruits.join();
console.log(result1);
// Output: "Apple,Banana,Orange"

// Using join with a custom separator (hyphen)
var result2 = fruits.join("-");
console.log(result2);
// Output: "Apple-Banana-Orange"


4.push()

var fruits = ["Apple", "Banana"];
var newLength = fruits.push("Orange", "Mango");

console.log(newLength); // Output: 4
console.log(fruits);    // Output: ["Apple", "Banana", "Orange", "Mango"]


5.shift()


var fruits = ["Apple", "Banana", "Orange"];
var removedFruit = fruits.shift();

console.log(removedFruit); // Output: "Apple"
console.log(fruits);       // Output: ["Banana", "Orange"]

6.unshift()

var fruits = ["Banana", "Orange"];
var newLength = fruits.unshift("Apple", "Mango");

console.log(newLength); // Output: 4
console.log(fruits);    // Output: ["Apple", "Mango", "Banana", "Orange"]
7.delete(operator)
Array elements can be deleted using the javascript delete operator

using delete leaves undefined holes in the array
let fruits = ["bananna", "apple", "grapes"];
delete fruits[1];
console.log(fruits);   // Output:   ["bananna", <1 empty item >, "grapes"];
8.concat()
concat method concates 2 or more array's returns a new array containing the joined array's
this method does not change the original array's
  
example:1
  var fruits1 = ["Apple", "Banana"];
var fruits2 = ["Orange", "Mango"];
var fruits3 = ["Grapes", "Kiwi"];

var allFruits = fruits1.concat(fruits2, fruits3);

console.log(allFruits);
// Output: ["Apple", "Banana", "Orange", "Mango", "Grapes", "Kiwi"]

example:2
var array1 = ["a", "b"];
var array2 = [1, 2];
var result = array1.concat(3, array2, "c");

console.log(result);
// Output: ["a", "b", 3, 1, 2, "c"]
Example:3
var array1 = [{ id: 1, name: 'John' }];
var array2 = [{ id: 2, name: 'Jane' }];
var array3 = [{ id: 3, name: 'Bob' }];

var combinedArray = array1.concat(array2, array3);

console.log(combinedArray);
// Output: [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' } ]

9.sort()
sort method sorts the elements of an array  and overwrites the original array.
10.splice()

11.slice()

12.reverse()
13.isArray()
14.indexOf()
15.lastIndexOf()
16.find()
17.findIndex()
18.includes()
19.entries()
20.every()
var numbers = [2, 4, 6, 8, 10,11];

var allEven = numbers.every(function(number) {
  return number % 2 === 0;
});
// output: false
21.some()

var numbers = [1, 3, 5, 7, 8];

var hasEven = numbers.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEven); // Output: true

22.fill()
23.copyWithin()
24.valueOf()
25.forEach()
26.filter()
27.reduce()
28.reduceRight()
29.from()










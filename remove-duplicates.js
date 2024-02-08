1.remove dduplicates

function characterCounts(inputString) {
  const charCounts = {};

  // Iterate through each character
  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];

    // Update the count in the charCounts object
    charCounts[currentChar] = (charCounts[currentChar] || 0) + 1;
  }

  // Filter out characters with count less than 2
  const repeatedCharCounts = {};
  for (const char in charCounts) {
    if (charCounts[char] > 1) {
      repeatedCharCounts[char] = charCounts[char];
    }
  }

  // Print repeated character counts
  console.log(repeatedCharCounts);
}

// Example
characterCounts("hello world");






remove duplicate values from an array of numbers


function duplicates(arr){

    let duplicates = arr.filter( (item,index,self) =>{

return self.indexOf(item) === index;
        
    })
console.log(duplicates,'duplicates');
    
}

let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
duplicates(arr);



function duplicates(arr){

    let duplicates = []
for(let i=0;i<arr.length;i++){

    if(!duplicates.includes(arr[i])){
duplicates.push(arr[i]);
        
    }
}

    console.log(duplicates);
    return duplicates;
    
}

let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
duplicates(arr);






var a = ['dog', 'cat', 'hen'];

a[100] = 'fox';

console.log(a.length);








function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a property to the prototype
Person.prototype.gender = "female";

// Adding a method to the prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Creating instances
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

console.log(person1);
person2.sayHello();





for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}




1st duplicate


function firstDuplicate() {
    let arr = [1,2,2,5,5];
    let data = {};
    for (var item of arr) {
        if (data[item]) {
            console.log("asafafa")
            return item
        } else {
            data[item] = item
            console.log(data[item])
        }
    }
    return -1
}
console.log(firstDuplicate()) 




const set = new Set();
set.add(1);
set.add(true);
set.add("text");
set.add(1);

set;



nested array usiing recursion function

function largestFromArray(arr){
   var max=[0,0,0,0];
   for(var i=0; i<arr.length;i++){
      for(var j=0; j<arr[i].length; j++)
      {
          if(arr[i][j]>=max[i]){
          max[i] = arr[i][j]
        }
      }
   }
  console.log(max)
  return max;
}
largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]])








function largestFromArray(arr){
   var max=[];
   for(var i=0; i<arr.length;i++){
     var tempMax =arr[i][0] //first elements of the 4 internal arrays i,e(1,5,45,89
     for(var j=0; j<arr[i].length; j++){
        var currElement = arr[i][j];
        if(currElement>=tempMax){
          tempMax = currElement
        }
     }
      max.push(tempMax)
   }
  console.log(max)
   return max;
}
largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]])





function removeDuplicates(){
let str = "murali mohan reddy";
    let result = str.split('').filter((value,index,item) =>{
        return item.indexOf(value) == index
    }).join('');
    return result;
    
}
console.log(removeDuplicates());


function firstDuplicate() {
    let arr = [1,2,2,5,5];
    let data = {};
    for (var item of arr) {
        if (data[item]) {
            return item
        } else {
            data[item] = item
            console.log(data[item])
        }
    }
    return -1
}
console.log(firstDuplicate()) 

Missing number
function missing(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = i+1;
        if (arr[i] != x) {
            return(x); //9
        }
    }
}
missing([1, 2, 3, 4, 5, 6, 7, 8, 10])

function missing(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = x + 1;
        if (arr[i] != x) {
            return(x); //9
        }
    }
}


function missingElement(){
  var a = [1,2,5]
  var missing = [];
  for (var i = 1; i <= 6; i++) 
   {
    if (a.indexOf(i) == -1) 
     {
       missing.push(i); 
     }
   }
 console.log(missing) //missing array
 console.log(a.concat(missing).sort()); //actual+missing elements
}
missingElement()



function Reverse(){
   var string ="India is my country";
   var result="";
   for( var i=string.length-1; i>=0 ; i-- ) {
      result=result+string[i] }
   return result
}
console.log(Reverse())
output = "yrtnuoc ym si aidnI"


let arr= [1,2,3,4,5];
arr.__proto__
console.log(arr);


const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

var numbers = [2, 4, 6, 8, 10,11];

var allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven);


even or odd

function checkEvenOrOdd(number) {
    return (number / 2 - Math.floor(number / 2)) === 0 ? 'Even' : 'Odd';
}

// Example usage:
let result = checkEvenOrOdd(7);  // Replace 7 with any number you want to check
console.log(result);  // Output will be 'Odd' for 7


Math.floor(x) omit decimal value 
Math.floor(4.5) // 4
Math.floor(4.9) // 4

Math.round(9.5) // round of to 10
Math.round(9.4) // round of to 9

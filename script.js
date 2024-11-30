//  ES6

// variable Scoping :- refers to the accesibilty of the variable in a program or function
//  let , Var  , const 
          //VAR
// function testVar() {
//     var x = 10;
//     if (true) {
//       var x = 20; 
//       console.log(x); 
//     }
//     console.log(x); 
//   }
//   testVar();
  
            // LET
  // function testLet() {
  //   let y = 10;
  //   if (true) {
  //     let y = 20; 
  //     console.log(y);
  //   }
  //   console.log(y); 
  // }
  // testLet();

// // CONST
// const array = ["apple","guava","banana","Grapes"]
// console.log(array);
// //const array = ["1","2","3","4"];   //cannot be reassigned or redeclared
// function testConst(){
// console.log(array2);
// array.push("")
// }
// //array2.push("5")   //cannot be accessed outside the block
// testConst();



// function closure  : creating the function inside  the function with lexiical scope
// Example # 01
//   function outerFunction() {
//     const outerVar = 'I am outside!';
//     function innerFunction() {
//       console.log(outerVar);
//     }
//     return innerFunction;
//   }
//   const myClosure = outerFunction();
//   myClosure(); 
//   // innerFunction();  cannot be accessed
// Example # 02
//  function addNum(){
//   let a = 10;
//   let b = 20;
//    function sum() {
//     console.log(a + b);
//    }
//    return sum();
//  }
//  addNum();


// //  template literals
// Before ES6, you use single quotes (') or double quotes (") to wrap a string literal, which has very limited functionality.
// In ES6, you create a template literal by wrapping your text in backticks (`)   
// //   const name = 'Zohaib';
// // const greeting = `Hello, ${name}! How are you?`;
// // console.log(greeting);

// //  multiline string
// // const message = `This is line 1
// // This is line 2
// // This is line 3`;
// // console.log(message)

// DESTRUCTING
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.The destructuring assignment uses similar syntax but uses it on the left-hand side of the assignment instead. It defines which values to unpack from the sourced variable.

// Array destructing 
// const colors = ['red', 'green', 'blue'];
// const [firstColor, secondColor,thridcolor] = colors;
// console.log(firstColor); 
// console.log(secondColor); 
// console.log(thridcolor)


// object Destructing
// const person = { name: 'Zohaib', age: 25 };
// const { name, age } = person;
// console.log(name); 
// console.log(age); 


// Default parameter:- When you don't assign the arguments to teh parameter decalred in the function 
// and there assign the default value to the parameter of function....incase of undefined arguments the parameter will retrun the default value...
// function greet(name = 'Guest') {
//     console.log(`Hello, ${name}!`);
//   }
//   greet(); 
//   greet('Zohaib'); 

//   function multiply(a, b = 2) {
//     return a * b;
//   }
//   console.log(multiply(5)); // Output: 10
//   console.log(multiply(5, 3)); // Output: 15
  
// Spread Operator:- Spread operator allow us to combine two array with each other
// spread operator
//   const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); 


// ARROW FUCNTION :- A higher order fucntion that is used as callback function.it is alternative way to write the shorter syntax  

// callback function syntax
// ()=>{
// }


// arrow function
// const add = (a, b) => a + b;
// console.log(add(5, 3));


// function timer() {
//     this.seconds = 0;
//     setInterval(() => {
//       this.seconds++;
//       console.log(this.seconds);
// }, 1000);
//   }
//   new timer(); 




// ENHANCED OBJECT LITERLAS
// var name = "ali"
// var age = 34;
// var salary = 67000;
// var emp = {
//   name : name,
//   age: age,
//   salary: salary
// }
// console.log(emp);

// you can use both varibales and objects both as once
// let name2 = "ahmed"
//    let age2 = 45
//    let salary2 = 34000
//    let emp2 = {
//     name2,
//     age2,
//     salary2
//    }
//    console.log(emp2);
   
//you can also add the function name as object key
// let name3 = "khan"
// let age3 = 78
// let emp3 ={
//   name3,
//   age3,
//   showName : function(){
//     console.log(`Hello this is me ! ${name3}`);
//   }
// }
// console.log(emp3);
// emp3.showName();


// ITERAOTRS AND FOR...OF ()
//  let array = [1,3,5,7,9,11,13,17];
// //  for( of )
// //  for (let x of array){
// //   console.log(x);
// //  }
//  let iter = array[Symbol.iterator]();
//  console.log(iter.next()); // 1 
//  (iter.next()); // 2 if we skip any next() methos that element of the array will be skiped..
//  console.log(iter.next()); // 3
//  console.log(iter.next()); // 4   form 1 to 8 it will print all the element included in the array as it is iteratng the array...  it will always provide the output as   {value: value , done:false}
//  console.log(iter.next()); // 5
// if we put any message in between these iteration loop it wouldn't effect the loop
// console.log("Hello! I am in between the iterators ");
// console.log("Hello! I am in between the iterators ");
// console.log("Hello! I am in between the iterators ");
// console.log("Hello! I am in between the iterators ");
// console.log("Hello! I am in between the iterators ");
// console.log("Hello! I am in between the iterators ");
//  console.log(iter.next()); // 6
//  console.log(iter.next()); // 7  
//  we can also print the value directly usind the ".value"  
//  console.log(iter.next().value); // 8
//  console.log(iter.next().done);  // in this last console the value output will be {value: undefined , done: true}  bcz the array has reached to its max length

// manaully using our own loop

// let str = "Muhammad"  // can also apply this method on our string characters
// let newArray = ["ali", "khan", "ahmed"]
// let iterArray =  newArray[Symbol.iterator]();
//  let result = iterArray.next();
//  while(!result.done){
//   console.log(result.value);
//   result = iterArray.next();
//  }
 

// Generators :- A generator function uses the yield keyword to generate values, pausing execution and sending values to the caller. It retains the state to resume execution after yield, continuing immediately after the last yield run.

// Syntax
// function* gen(){
//      yield 1;
//      yield 2;
//      ...
//      ...
// }
// These fucnvtion work same as the iterators...
//  function *myFunction(){
// setting the value using the arguments 
  // let result = yield;
  // console.log(result);

  // setting the multiple values using the yield array
  // let yieldArray = [yield,yield,yield]
  // console.log(yieldArray);
  
  // yield 'yield no 1';
  // yield 'yield no 2';
  // yield 'yield no 3';

// if we have unlimmited yields
  // let newNum = 300;
  // while(true){
  //   yield(newNum++)
  // }
//  }
    // let  f = myFunction();
    // console.log(f.next());
    // console.log(f.next());
    // console.log(f.next());
    // console.log(f.next());

    // setting the yield value using the paramerters
    // f.next();
    // f.next(600)
    // f.next("ali")
    // f.next(7.87)

//we can also use the spread operator in the gnerators 

//  use of for of () loop in generators
// let f = myFunction()
// for( let x of f){
//   console.log(x)
// }



// MODULES
// JavaScript Modules enables you to divide your code into multiple files which makes it easier to maintain a code-base.
// Modules are imported using the import statement from the external files.
// Modules use type=”module” in the <script> tag to enable import and export features.
// i have exported this array to teh script-2 file..
    // export let myArray = [2,4,6,8,10,12]
    //  export let  myArray2= [2,4,6,8,10,12,"ali"];

// export default function() {
//   console.log("Hello! i am exported default");
// }
// we can also use the aggreagte moduling  


//ARRAY METHODS
// Map()
// let array = ['ali' , 'khan' ,'zohaib']
// let myMap = array.map((i) =>{
//   if(i === 'ali'){
//     return i.toUpperCase()
//   }
//   return i;
// });
// console.log(myMap);

      // let objectArray = [
      // {
      //   name: 'ali',
      //   age: 34
      // },
      // {
      //   name: 'khan',
      //   age: 45
      // },
      // {
      //   name: 'zohaib',
      //   age: 35
      // }];
      // let newObject = objectArray.map((objectItem) =>{ 
      //   if(objectItem.age === 34){
      //     return objectItem;
      //   }
      // });
      // console.log(newObject);


      // forEach()
      // let newArray = [1,2,3,4,5,6,7,8,9];
      // let returnArray = newArray.forEach((item) =>{
      //   if(item % 2 == 0){
      //     console.log(item);
      //   }
      // });
      // console.log(returnArray);


      // filter()

    // let array = [1 ,2,3,4,5,6,7,8,9];
    // let filteredArray  = array.filter((number)=>{
    //   if(number % 2 == 1){
    //     console.log(number);
    //     }
    // });
    
    //sort()
    //  let sampleArray = [2,36,7,8,9,4,5,6,33];
    //  let newArray = sampleArray.sort((num1, num2)=>{
    //   return num1 < num2 ? -1 : 1;
    //  }); 
    // console.log(newArray);

    // shift() 
    // let array = [1,2,3,4,5,6,7,8,9];
    // array.shift();
    // console.log(array);
    
    // // unshift()
    // let nextArray = [2,3,4,5,6,7,8,9];
    // nextArray.unshift(1);
    // console.log(nextArray);

    // push()
    // let pushedArray = [12,34,56,78,90]
    // pushedArray.push(100);
    // console.log(pushedArray);
  
    // // pop()
    // let popArray =[34,56,78,89,90,100];
    // popArray.pop();
    // console.log(popArray);
    
    // reverse()
    // let personNames =["John", "peterson", "halen", "johanathn"];
    // let reversedNames = personNames.reverse();
    // console.log(reversedNames);

    // slice()
    // let theArray = [1,2,3,4,5,6,7]
    // let slicedArray = theArray.slice(1,4)
    // console.log(slicedArray);

    // fill()
    // let filledArray = new Array(5).fill("dump");
    // console.log(filledArray);

    // indexof()
    // let index = theArray.indexOf(5);
    // console.log(index);

    // findIndex()
    // let findIndex = theArray.findIndex(num => num > 5);
    // console.log(findIndex);

    // includes()
    // let includes = theArray.includes(5);
    // console.log(includes);

    // every()
    // let every = theArray.every(num => num > 0);
    // console.log(every);

    // some()
    // let some = theArray.some(num => num > 5);
    // console.log(some);

    // reduce()
    // let reduce = theArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // console.log(reduce);

    // join()
    // let joinedArray = theArray.join("-");
    // console.log(joinedArray);
    
    // concat()
    // let array1 = [1,2,3];
    // let array2 = [4,5,6];
    // let concatArray = array1.concat(array2);
    // console.log(concatArray);
   

//PROMISES :- Promisses are mainly used for API's Calling    e.g sometimes webistes going to  the laoding state...
// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;
//   if (x % 2 == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });
// myPromise.then((success)=>{
//   console.log("Success Message")
// }),(error)=>{console.log("Error Message")};

    
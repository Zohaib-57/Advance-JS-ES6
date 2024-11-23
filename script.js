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

// ITERAOTRS AND FOR...OF



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
    //   return num1<num2 ? -1 : 1;
    //  }); 
    // console.log(newArray);

    // shift() 
    // let array = [12,3,4,5,6,7,8,9];
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
    let personNames =["John", "peterson", "halen", "johanathn"];
    let reversedNames = personNames.reverse();
    console.log(reversedNames);

    // slice()
    let theArray = [1,2,3,4,5,6,7]
    let slicedArray = theArray.slice(1,4)
    console.log(slicedArray);

    // fill()
    let filledArray = new Array(5).fill("dump");
    console.log(filledArray);

    // indexof()
    let index = theArray.indexOf(5);
    console.log(index);

    // findIndex()
    let findIndex = theArray.findIndex(num => num > 5);
    console.log(findIndex);

    // includes()
    let includes = theArray.includes(5);
    console.log(includes);

    // every()
    let every = theArray.every(num => num > 0);
    console.log(every);

    // some()
    let some = theArray.some(num => num > 5);
    console.log(some);

    // reduce()
    let reduce = theArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(reduce);

    // join()
    let joinedArray = theArray.join("-");
    console.log(joinedArray);
    
    // concat()
    let array1 = [1,2,3];
    let array2 = [4,5,6];
    let concatArray = array1.concat(array2);
    console.log(concatArray);
   
    // forEach()
    array1.forEach(num => console.log(num));

    
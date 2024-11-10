//  ES6

// variable Scoping :- refers to the accesibilty of the variable in a program or function

//  let , Var  , const 

// function testVar() {
//     var x = 10;
//     if (true) {
//       var x = 20; 
//       console.log(x); 
//     }
//     console.log(x); 
//   }
//   testVar();
  

  // function testLetConst() {
  //   let y = 10;
  //   if (true) {
  //     let y = 20; 
  //     console.log(y);
  //   }
  //   console.log(y); 
  // }
  // testLetConst();


// function closure
  function outerFunction() {
    const outerVar = 'I am outside!';
    function innerFunction() {
      console.log(outerVar);
    }
    return innerFunction;
  }
  const myClosure = outerFunction();
  myClosure(); 
  // innerFunction();  cannot be accessed


  
//  template literals
//   const name = 'Zohaib';
// const greeting = `Hello, ${name}! How are you?`;
// console.log(greeting);

//  multiline string
// const message = `This is line 1
// This is line 2
// This is line 3`;
// console.log(message);

// Array destructing 
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor,thridcolor] = colors;
console.log(firstColor); 
console.log(secondColor); 
console.log(thridcolor)


// object Destructing
// const person = { name: 'Zohaib', age: 25 };
// const { name, age } = person;
// console.log(name); 
// console.log(age); 



// Default parameter
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
  
  

// spread operator
//   const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); 



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
  
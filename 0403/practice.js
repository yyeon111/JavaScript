// function func1 () {
//   const word = 'Hello';
//   console.log(`func1 ${word}`);
//   func2();

//   function func2 () {
//     console.log(`func2 ${word}`);
//     func3();
  
//     function func3 () {
//       console.log(`func3 ${word}`);
//     }
//   }
// }

// func1();


// function counter (start) {
//   let num = start;
//   console.log(++start);
//   return start;
// }

// counter(10); //11
// counter(10); //11

function createCounter (start) {
console.log(++start);
// return start;

  // return function () {
  //   console.log(++start);
  //   // console.log('num' + ++num);
  //   return start;
    
  // }
}
createCounter(10);
createCounter(10);
// createCounter(10)();
// createCounter(10)();
// createCounter(10)();
// count(); //11
// count(); //12

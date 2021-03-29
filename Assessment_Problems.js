//Make this work:
//duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]


function duplicate(array){

    array.forEach((elem) => {
      array.push(elem)
    })

  return array
}

//console.log(duplicate([1,2,3,4,5])) will return [1,2,3,4,5,1,2,3,4,5]



// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
// "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5


function fizzBuzz(){

   for(let i=1; i <= 100; i++){

     if(i % 3 === 0 && i % 5 === 0){
       console.log("fizzbuzz")
     }
     else if(i % 3 === 0){
       console.log("fizz")
     }
     else if(i % 5 === 0){
       console.log("buzz")
     }
      else{
        console.log(i)
      }
     
   }
}


// Optimized Solution

function isMultiple(num, div){
  return num % div === 0
}

function fizzBuzz(){
  let output = ''

  for(let i=1; i<= 100; i++){

     switch(true){
        case isMultiple(i,15):
         output = "fizzbuzz"
         break;
        case isMultiple(i,3):
         output = "fizz"
         break;
        case isMultiple(i,5):
         output = "buzz"
         break;
        default:
          output = i
          break;
     }
    console.log(output);
  }
}

//What will be returned by each of these?
// console.log("hello" || "world")

// console.log("foo" && "bar")

Output 1: hello
Output 2:  bar  


// Write an immediately invoked function expression
var output = (function () {
    var name = "Sadman";
    return name;
})();

output; 
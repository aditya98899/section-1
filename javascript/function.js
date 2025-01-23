function addNums(a, b){
   var c = a + b;
   console.log(c);
   
}
addNums(10, 20);
addNums(10, 26540);
addNums(10, 2000);
addNums(1880, 43220);
addNums(70, 200098);
// console.log(c);

const getAvg = function(a, b, c){
   const avg = (a + b + c) / 3;
//    console.log(avg);
   return avg;
   

};
const result = getAvg(34, 28,47);
console.log(result);

//es6 arrow function
const factorial = (n) => {
      let f = 1;
      for (let i = 1; i <= n; i++) {
        f = f * i;
      }
      return f;
    };
    const fact = factorial(7);
    console.log(fact);
    

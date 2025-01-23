// wap to check if a number is 7 and 11
      const num1 = 77;

      if(num1 % 7 === 0 && num1 % 11 === 0) {
        console.log('divisible');
      }else{
        console.log('not divisible');
        
      }
      // WAP to check if a number prfect square
      num = 625
 root = num ** 0.5
 console.log(root);

 if (Number.isInteger(root)){
    console.log("Perfect Square");
    
 }

 else{
     console.log("Not Perfect");
     
 }

 // WAP to print all numbers divible by 11 between 51 to 130

 for(i=51;i<130;i++)
    {
        if(i%11 ===0 )
        {
            console.log(i);
            
        }
    }
// WAP to print all numbers is prime or not
    
// num = 27

// if(num % num === 0 && num % num === 1)
//     {
//     console.log("prime");
//  }
//  else{
//      console.log("not prime");
//  }

const num2 = 5;
let isPrime = true;

for(let i = 2; i < num2/2; i++) 
    if(num2 % i === 0) {
        console.log('not prime');
        isPrime = false;
        break;
    }
    else{
        console.isPrime('prime');
        
        
    }
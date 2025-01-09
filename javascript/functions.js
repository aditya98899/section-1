function addNums(num1, num2){
    var c= num1 + num2;
    console.log(c);
    
}
addNums( 50, 84)

const getAvg = function (n1, n2, n3){
    let avg = (n1 + n2 + n3) / 3;

    return avg;
}
const result = getAvg(10, 20, 30);
console.log(result);

// Arrow function

const factorial = (n) => {
    let fact = 1;
    for (i=1; i<=n; i++){
        fact = fact * i;

    }
    return fact;
}

const result2 = factorial(20);
console.log(result2);

//wAP function to check if a number is prime or not
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
const prime = isPrime(17);
console.log(prime);

//WAP function 





    

    
        
    



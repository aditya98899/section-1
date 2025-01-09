for (i = 0; i < 10; i++) {
    // console.log(i);

}

//wAP to print all even the number from 2 to 10

for (i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//While loop

a = 10;

while (a < 20) {
    // console.log(a);

    a++;
}

//Do While Loop

b = 20
do {
    b++
    console.log(b);
}
while (b < 30)

a = 1;

while (a < 11) {
    console.log(a);

    a++;
}

a = 1

b = 0
do {
    b++
    console.log(b);
} while (b < 10)

odd numerb from for loop   
for (i = 1; i < 10; i++) {
    if (i % 2 === 1) {
        console.log("odd",i);
    }
}
// odd number using while

a = 1;

while (a < 10) {
    if (a % 2 === 1)
        console.log("ODD",a);

    a++;
}

// odd number using do whille 
b = 0
do {
    b++
    if (b % 2 === 1)
        console.log(b);
} while (b < 10)


//WAP to print all the number divisible by 7 and 11 in the range of 100 to 300 
for(i=100;i<300;i++)
    {
        if(i%7 ==0 && i %11 ==0)
        {
            console.log(i);
            
        }
    } 
// wap to print all the number from 1 to 10 using while loops   

const num = 5;
let isPrime = true;

for(let i =2; i< num; i++){
    if(num%i ==0){
        console.log("Not prime");
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("Prime");
    
}

//WAP to print all perfect squares from 1 to 100

for(i=1; i<=100; i++){
    let root = i ** 0.5;
    // console.log(root);
    

    if(Number.isInteger(root)){
        console.log(i);
        
    }
}
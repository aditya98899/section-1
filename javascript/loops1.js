for(let i=0; i<10; i++){
    console.log(i);
}

let a = 10;{
    console.log(a);
    a++;
    // a = a + 1;
    // a += 1;
}

console.log('Do while loops');

let b = 20;

do{
    console.log(b);
    b++;
}while (b < 20);

//wap to reserve a number

let num =37354;
let reverse = 0;

while(num > 0){
    // console.log(reverse);
    // console.log(num);
    
    
    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num/10);
}
console.log(reverse);

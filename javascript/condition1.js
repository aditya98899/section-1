num = 68;

if (num % 2 === 0) {
    console.log('even');

    msg = 'Hello';
    let msg2 = 'nice day for coding';
    const pi = 3.1416;
    // pi = 76576;
} else {
    console.log('odd');
}

console.log(msg);
// console.log(msg2);

//WAP to check if a person is eligible for DL

const age = 20;

if (age >= 18) {
    console.log('Eligible for DL');
} else {
    console.log('Not eligible for DL');
}

const marks = 90;

if (marks <= 100 && marks >= 90) {
    console.log('Grade A');

} else if (marks < 90 && marks >= 70) {
    console.log('Grade B');

} else if (marks < 70 && marks >= 50) {
    console.log('Grade C');

} else if (marks < 50 && marks >= 50) {
    console.log('Fail');

} else {
    console.log("Invaild marks");
}
const  myarr = [45, 'hello', true , undefined];

console.log(myarr);
console.log(Array.isArray(myarr));

const movies = ['The dark night', 'The Shawshank Redemption', 'The Godfather' , 'marco', 'RRR', 'PK', ];
console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies.indexOf('RRR'));
const ele=(movies.at(-3));
console.log(ele);

movies[1] = 'The Shawshank Redemption 2';
console.log(movies);

//slicing

console.log(movies.slice(2, 5));
console.log(movies.slice(-4, 100));

// adding and removing elements

movies.push('Chhava'); //adds element at the end
movies.unshift('Flash');//adds element at the beginning

console.log(movies);

movies.pop();//removes element from the end
movies.shift();//removes element from the beginning

console.log(movies);


//splice

// movies.splice(3, 2); // removing elements
// movies.splice(3,2 ,'Joker', 'Thor', ); //replacing elements
movies.splice(3,0, 'Aquaman')// insert elements

console.log(movies);










const numbers = [0,1,2,3,4,5,6,7,8];

const newArray1 = numbers.slice(1,3);

// console.log(newArray1);
// console.log(numbers);

const newArray2 = numbers.splice(1,3);

// console.log(newArray2);
// console.log(numbers);

const team = ["Fakhir","Babar","Rizwan"];
const bowlers = ["Shaheen","Haris","Naseem"];

// team.push(bowlers);

// console.log(team);

// const newTeam = team.concat(bowlers);
// console.log(newTeam);

//Spread operator
const newTeam2 = [...team,...bowlers];
// console.log(newTeam2);

//Array.of()    .......    Array.from()

// 1 ***
const arr = [1, 5, 7, 4, 9, 10];
const arr2 = [1, 5, 7, 4, 9, 10, 5, 7];

function calcMult(anyarray) {
  let sum = 1;
  anyarray.map((item) => (sum *= item));
  return sum;
}
console.log(calcMult(arr));
console.log(calcMult(arr2));

// +++
const a1 = [2, 5, 7];
const a2 = [1, 3, 6];

function calcAvg(anyvalue) {
  let sum = 0;
  anyvalue.map((item) => (sum += item));
  return sum;
}
console.log(calcAvg(a1));
console.log(calcAvg(a2));

// 2 odd
function oddValue(arr) {
  const odd = arr.filter((item) => item % 2 === 1);
  return odd;
}
console.log(oddValue(arr));

// 3 even
function evenValue(arr) {
  const even = arr.filter((item) => item % 2 === 0);
  return even;
}
console.log(evenValue(arr));

// 4 name of users

const users = [
  {
    id: 1,
    name: "Isa",
    age: 19,
    gender: "male",
  },
  {
    id: 2,
    name: "Aysu",
    age: 20,
    gender: "female",
  },
  {
    id: 4,
    name: "Ramil",
    age: 30,
    gender: "male",
  },
];

function nameUser(users) {
  const user = users.map((user) => user.name);
  return user;
}
console.log(nameUser(users));

// 5 gender of users
function nameUser(users) {
  const user = users.map((user) => user.name);
  return user;
}
console.log(nameUser(users));

// 6 age of users

function ageUser(users) {
  const user = users.map((user) => user.age);
  return user;
}
console.log(ageUser(users));

// 7 only male users
function maleUser(users) {
  const user = users.map((user) => user.gender == "male");
  return user;
}
console.log(maleUser(users));

// 8  age > 20

function ageGreat(users) {
  const user = users.map((user) => user.age >= 20);
  return user;
}
console.log(ageGreat(users));

// 9
// function getUser(firstName, lastName,age) {
//     if (age) {
//     return ` ${firstName} / ${lastName} / ${age}`
// } else {
//     return `${firstName / ${lastName}`
//     }
// }

// console.log(getUser('Aysu' ,'Bayramova' ,20));
// console.log(getUser('Aysel' ,'Bai'))

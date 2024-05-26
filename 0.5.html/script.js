// // const students = ['Ibrahim','Aysu','Tural','Ayxan']
// // students.map(item => console.log(item))
// // console.log(' ');
// // students.forEach(item => console.log(item))

// const users = [
//   {
//     id: 1,
//     name: "Isa",
//     age: 19,
//     gender: "male",
//   },
//   {
//     id: 2,
//     name: "Aysu",
//     age: 20,
//     gender: "female",
//   },
//   {
//     id: 4,
//     name: "Ramil",
//     age: 30,
//     gender: "male",
//   },
//   {
//     id: 5,
//     name: "Aysel",
//     age: 22,
//     gender: "female",
//   },
//   {
//     id:6,
//     name: "Tural",
//     age: 16,
//     gender: "male",
//   },
// ];

// const container = document.querySelector("#myDiv");

// users.forEach((item) => {
//   const name = document.createElement("h4");
//   const age = document.createElement("p");
//   const gender = document.createElement("p");
//   const hr = document.createElement("hr");

//   name.innerHTML = item.name;
//   age.innerHTML = item.age;
//   gender.innerHTML = item.gender;
//   container.append(name, age, gender);
// //   console.log();
// });

const students = [
  "Ibrahim",
  "Aysu",
  "Tural",
  "9",
  0,
  true,
  undefined,
  "Isa",
  "Elmir",
  8,
  7,
];

// 1
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//2
for (const value of students) {
  console.log(value);
}

//3
for (let i = 0; i < students.length; i++) {
  if (typeof students[i] === "string") {
    console.log(students[i]);
  }
}

//4
for (const student of students) {
  if (typeof student === "number") {
    console.log(student);
  }
}

5;
for (let i = 0; i < students.length; i++) {
  if (students[i]) {
    console.log(students[i]);
  }
}

//6
const numbers = [4, 7, 8, 12, 22, 9, 12];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

//7
for (const number of numbers) {
  if (numbers % 2 === 1) {
    console.log(numbers);
  }
}

//8
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

//9
let mult = 1;
for (const number of numbers) {
  mult *= number;
}
console.log(mult);

//10
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 12) {
    continue;
  }
  console.log(numbers[i]);
}

//11
const sum1 = numbers.reduce((b, a) => b + a, 0);
console.log(sum1);

//12
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
    age: 13,
    gender: "male",
  },
  {
    id: 5,
    name: "Tural",
    age: 33,
    gender: "male",
  },
  {
    id: 6,
    name: "Ayxan",
    age: 25,
    gender: "male",
  },
];

let sum2 = 0;
const age2 = users.reduce((acc, user) => acc + user.age, 0);
console.log(age2);

//13
let sum3 = 1;
const age3 = users.reduce((acc, user) => acc * user.age, 1);
console.log(age3);

//14
const user = {
  id: 1,
  name: "Elnur",
  surname: "Elnurlu",
  age: 19,
};
for (let key in user) {
  console.log(key);
}

//15

for (let id in user) {
  console.log(user[id]);
}
 
// for(let name in user) {
//   console.log(user[name])
// }
// for(let surname in user) {
//   console.log(user[surname])
// }

// for(let age in user) {
// //   console.log(user[age])
// }

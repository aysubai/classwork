// let user='ulfat'
// let user2= 'ulfat zakirli'
// // console.log(user.toUpperCase().slice(0,1)+user.slice(1));
// // console.log(user.replace('a' , 'A'));

// console.log(user2.toUpperCase().slice(0,1) + user2.slice(1,6) +user2.toUpperCase().slice(6,7) + user2.slice(7));

// console.log(user2.slice(0,6).replace('u','U') + user2.slice(6).replace('z','Z'));

// const students=['ibrahim ','aysu' ,'ayxan', 'isa' , 'elmir','tural' , 'ruslan']
// const ages = [10,20,30,50]
// // console.log(students.map((item,index) => 'name:' +item));
// // console.log(ages.map((age) => age *10));

// console.log(students.filter((student) => student.startsWith('a')));
// console.log(ages.filter((age) => 20));

const students= [
   { name: 'Aysu',
    age:20,
    gender: 'Female'
},
{
    name: 'Ibrahim',
    age:22,
    gender: 'Male'
},
{
    name: 'Ayxan',
    age:25,
    gender: 'Male'
},
{
    name:'Ruslan',
    age:16,
    gender:'Male'
},
{
name:'Aysel',
age:24,
gender:'Female'
}
]


console.log(students.map((student) => student.age));
console.log(students.map((student) => student.gender));
console.log(students.map((student) => student.name));

console.log(students.filter((students) => students.age >= 20));
console.log(students.map((student) => student.gender == 'Female'));
console.log(students.filter((student) => student.name.startsWith('A')));
console.log(students.filter((student) => student.name.includes('a')));
console.log(students.filter((student) => student.age %2 !==0));
console.log(students.filter((student) => student.age %2 !==1));
console.log(students.map((student,index) => index ));

console.log(students.map((item,index) => 'name:' + index %2==0));
console.log(students.map((student) => student.age += student.age));

console.log(students.map((item,index) => 'sum:'+ index ));






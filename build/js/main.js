"use strict";
//Index signatures    obj[key]
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
let prop = 'Pizz';
console.log(todaysTransactions[prop]);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//now we can access a property that doesn't exist in the object
console.log(student.test);
for (const key in student) {
    console.log(` ${key}:${student[key]} `); //with out index signature we can't use varible as key
}
//if you don't wan't to use index signatures, the following code will be useful
//comment the index signature and check the following loop
for (const key in student) {
    console.log(` ${key}:${student[key]} `);
}
//if we don't know the type of student 
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 50,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}

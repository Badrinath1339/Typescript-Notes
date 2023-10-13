//Index signatures    obj[key]

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }


// interface TransactionObj {
//     [index:string]: number
// }

/*
interface TransactionObj {
   readonly [index:string]: number
}
*/
//or

interface TransactionObj {
    readonly [index:string]: number
    Pizza:number,
    Books:number,
    Job:number
 }

    const todaysTransactions:TransactionObj={    
    Pizza:-10,
    Books :-5,
    Job: 50
    }
    
    console.log(todaysTransactions.Pizza)

    let prop:string='Pizz'

    console.log(todaysTransactions[prop])

    interface Student {
    [key: string]: string | number | number[] | undefined  //index signature
       name:string,
       GPA:number,
       classes?:number[]
    }
    
    const student:Student= {
       name:"Doug",
       GPA:3.5,
       classes:[100,200]
    }
 

    //now we can access a property that doesn't exist in the object
console.log(student.test)

for (const key in student) {
    console.log(` ${key}:${student[key]} `)  //with out index signature we can't use varible as key
}

//if you don't wan't to use index signatures, the following code will be useful


//comment the index signature and check the following loop
for (const key in student) {
    console.log(` ${key}:${student[key as keyof Student]} `)  
}

//if we don't know the type of student 
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})


const logStudentKey= (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
 }

logStudentKey(student,'GPA')
logStudentKey(student,'name')



/////////////////////

// interface Incomes {
//     [key:string]:number
// }

//creating a literal type
type Streams='salary' | 'bonus' | 'sidehustle'

type Incomes= Record<Streams, number | string>

const monthlyIncomes:Incomes ={
salary: 50,
bonus: 100,
sidehustle: 250
}

for (const revenue in monthlyIncomes){
console. log(monthlyIncomes[revenue as keyof Incomes])
}
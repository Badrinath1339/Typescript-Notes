//Index signatures
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }


interface TransactionObj {
    [index:string]: number
}

/*
interface TransactionObj {
   readonly [index:string]: number
}
*/


    const todaysTransactions:TransactionObj={
    Pizza:-10,
    Books :-5,
    Job: 50
    }
    
    console.log(todaysTransactions.Pizza)

    let prop:string='Pizz'

    console.log(todaysTransactions[prop])

 

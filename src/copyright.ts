// Original JS code
/*
//fix type issue

const year = document.getElementById("year")
const thisYear= new Date().getFullYear()

year.setAttribute("datetime", thisYear);
year.textContent=thisYear

*/

//Fix:1
const year1 = document.getElementById("year") as HTMLSpanElement
const thisYear1= new Date().getFullYear().toString()

year1.setAttribute("datetime", thisYear1);
year1.textContent=thisYear1


//Fix:2
const year2:HTMLElement | null = document.getElementById("year")
const thisYear2:string = new Date().getFullYear().toString()

if(year2){
year2.setAttribute("datetime", thisYear2);
year2.textContent=thisYear2
}

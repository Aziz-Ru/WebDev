const person={
    name:'Aziz',
    age:'22',
    langauge:'Bangla',
}
// console.log(person);

let txt='';
for(let x in person){
txt+=person[x];
}
console.log(JSON.stringify(person));
//json file is now a string but it cannot stringfy a function
const personArray=Object.values(person); 
//its array
console.log(personArray);
console.log(txt);
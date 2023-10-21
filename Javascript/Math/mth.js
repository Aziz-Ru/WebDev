// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum += i;
// }
// console.log(sum);
// const obj={name:'aziz',gender:'male'};
// for(let x in obj){
//  console.log(obj[x]);
// }
// const arr=[2,3,89,5,6,2];
// for(let x in arr){
//     console.log(arr[x]);
// }
// for(let x of arr){
//     if(x>10) continue;
//     console.log(x);
//     if(x==6) break
// }
// let t=3;
// while(t--){
//     console.log(t);
// }
// const ss=new Set();
// ss.add('b');
// ss.add('Hello');
// ss.add(2);
// ss.add('b')
// console.log(ss);
// ss.delete(2);
// console.log(ss);
// const my_map=new Map();
// my_map.set(2,'a');
// my_map.set(3,'s');
// my_map.set(5,'e')
// console.log(my_map)
// function hello(){
//     console.log("Hello zarina");
// }
// console.log(hello());
// hello=()=>{
//    return 'hello world'
// }
// console.log(hello);
let cnt = 0;
function myFunction(name) {
  const pp = document.getElementById("p1");
  cnt++;
  pp.innerHTML = "Hello world "+name + cnt;
  console.log("hello World " + cnt);
}
// const btn = document.getElementById("btn");
// btn.addEventListener("click", myFunction);
btn.addEventListener('click',function(){
myFunction('Aziz');
})
 
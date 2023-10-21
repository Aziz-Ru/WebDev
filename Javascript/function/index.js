function f1() {
  console.log("hi i.m abdul aziz");
}
//console.log(f1());
function f2(name) {
  console.log(name + " how are you");
}
// console.log(f2("Rahim"));
function f3(a, b) {
  return a * b;
}
// console.log(f3(2,10));

let car = {
  name: "BMW",
  model: "5401",
  color: "blue",
  weight: "1000kg",
  driver: function (driver_name) {
    console.log(driver_name + " is drive the car");
  },
};
// console.log(car.model);
// console.log(car.weight);
// console.log(car.driver('rahim'));

//Event
document.getElementById("btn").onclick = function () {
  document.getElementById("btn").innerHTML = Date();
};

let st = "john how howareyou";
console.log(st.length);
console.log(st.slice(0,10)); //start-- end
console.log(st.substring(0,6)); //start --length
let ha='i love hasina';
let zarina =ha .replace('hasina','zarina');
console.log(zarina);
console.log(st.toUpperCase());
console.log(st.toLowerCase());
console.log(ha.concat(zarina));

//search
console.log(st.indexOf('how'));
console.log(st.lastIndexOf('how'));


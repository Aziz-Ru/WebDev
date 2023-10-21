let x = `I'm from Bangladesh
let talk about it`;
let y = "I'm from bangladesh";
console.log(y);
console.log(x);
let country = "bangladesh";
let sentence = `I love ${country} that is big country`;
console.log(sentence);
let num = 1234;
let str = num.toString();
console.log(typeof str);
console.log(num.toExponential(2));
let all_name = ["aziz", "mehedi", "abdullah"];
document.getElementById("p1").innerHTML = all_name.toString();
all_name.pop();
document.getElementById("p2").innerHTML = all_name.toString();
all_name.push("kabbo");
document.getElementById("p3").innerHTML = all_name.toString();
all_name.unshift("apurbo");
document.getElementById("p4").innerHTML = all_name.toString();
all_name.splice(2, 0, "imran", "nazrul");
document.getElementById("p5").innerHTML = all_name.toString();
all_name.sort();
document.getElementById("p6").innerHTML = all_name.toString();
all_name.reverse();
document.getElementById("p7").innerHTML = all_name.toString();
 
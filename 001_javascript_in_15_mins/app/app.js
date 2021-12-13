
// let c = 1;
// c = 1.111;
// c = "aaa";
// c = [];
// c = { //object
//   name: "gabriel"
// }
// c = function (p) {
//   return "a"
// }
// c = undefined;
// c = NaN;
// c = null;
// c = "a";
// //compare

// console.log("1" == 1);
// console.log("1" === 1);
// //block vs function scope - IIFE

// (function (name) {
//   var upName = name.toUpperCase();
//   console.log(upName);
// })('Boo');

// function shout(msg = 'heeey') {
//   console.log(`${msg} ...`)
// }
// const yell = function (msg = "yeeeeah") {
//   console.log(msg)
// }
// const scream = (msg = 'arghh') => {
//   console.log(msg)
// }

// shout();
// yell();
// scream();

// //object literal
// const o = {
//   name: "Gab",
//   intro: function () {
//     console.log(this.name)
//   }
// }

// //constructor function
// const O2 = function (name, intro) {
//   this.name = name;
//   this.intro = intro;
// }
// const o2 = new O2("Rick", () => {
//   console.log("name:")
// });
// o2.intro();

// //es6 classes - syntactic sugar
// class O3 {
//   constructor(name) {
//     this.name = "name"
//   }
//   outro(){
//     console.log("out")
//   }
// }

// O3.prototype.intro = () => {
//   console.log("Rghhh")
// }
// const o3 = new O3("Rick")
// o3.intro();
// o3.outro();

// //function accepting a param and an object
// const check = (value, conditions) => {
//   console.log(`Evaluating ${value}`);
//   for (cond in conditions) {//iterate props
//     console.log(`- ${cond} -> ${conditions[cond](value)} `)
//   }
// }
// check("check", {
//   "first": (res) => res === "check",
//   "second": (boo, roo) => boo === "check" //podstawienie jest "best-effort"
// })

// const arr = [1, 2, 3, "aa", {}, () => { }]
// arr.push(1);
// arr.unshift(2)
// for (element of arr) {
//   console.log(element)
// }
// arr.forEach((element) => {
//   console.log(element)
// })

// const [a,b,...rest] = [1,2,3,4,4]
// console.log(rest)

// //JSON vs JS Object
// const gabriel = {
//   name: "Gabriel"
// }
// console.log(gabriel); //object
// const json = JSON.stringify(gabriel)// JSON represntation
// console.log(json) //JSON
// const from_json = JSON.parse(json)// to object again
// console.log(from_json.name)


// //setting defautl values
// const a = ''
// const b = a || 'c'; //c

console.log('hurra');

let l = "a";
const b = 'b';
console.log(typeof l);

// dynamicznie typowany - typ przez wartość, którą otrzyma (z TS jest inaczej)
// typy/zmienne - string, number, boolean, object, function, array [lista], null, undefined
// js ma function scope a nie block scope - funkcja ogranicza zmienną a nie blok
// - opakowanie funkcyjne -> (function () {
  //treść funkcji
//})(//wywołanie); -> (function(){})()

// function hoisting - wszystkie funkcje na początku są wyciągnięte na górę - stąd można korzystać z funkcji przed ich deklaracji

function func(msg = 'msg') {
  console.log(`func ${msg}`);
}
let f = function someFunc() {
  console.log('someFunc')
}
// wywołanie funkcji
f();

let g = function () {
  console.log('someFunc')
}

let h = () =>  {
  console.log('someFunc')
}
// object 🚮 
const o = { 
  id: 1,
  name: 'string',
  children: {
    name: 'string'
  },
  shout: () => console.log('shout')
}

const list = [1, 'aaa', () => console.log('shout'), {name: 'string'}]

list.push(1)
list.unshift(1)

for(element of list){
  console.log(element)
}

list.forEach((e) => {
  console.log(e)
})

const list2 = [1,2,3,4]
console.log(list2[2]);
const [e1, e2, ...rest] = list2
console.log(rest)

let a1; // undefined/false
// nie trzeba stosować if'a ponieważ undefined jest false
const a2 = a1 || 'a3'; // a2


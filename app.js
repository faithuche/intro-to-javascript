console.log('Hello world');
// variable in Javascript 

// var let const 
var first_Name="Faith";
var last_Name="Nwihim";
console.log(first_Name, last_Name);

let age=25;
age=200;
console.log(age)

const PI=3.147;
console.log(PI);

// Operators javascript
// Arithmetic Operator
// Assignment Operator
// Comparison Operator
// Strings Operator
// Logical Operator
// Bitwise Operator
// Ternary Operator
// Type Operator


let num = 40
result = (num + 5) * 5
value = num ** 2
console.log(value);

let speed = 100
console.log(++speed);

// let a = 5

// == equal to
let x = 10
let y = 20
console.log(x == y);

// ===equal value
// let b = parseInt ('2')
// let c = 2
// console.log(b === c);

// console.log(x != y);
// console.log(x !== y);
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);

// Ternary Operator
let typingspeed = 30.9; 


// let output = typingspeed > 20 ? "you killed it" : "Try Again";
// let output = typingspeed > 20 && typingspeed > 10 ? "You killed it" : "Try Again";
// let output = typingspeed > 20 || typingspeed < 10 ? "You killed it" : "Try Again";
// console.log(output);

let posY = 50
let posX = null
let posZ = 60

// let answer = posY > 20 && posX > 10 && posZ < 10 ? "You killed it" : "Try Again";
let output = typingspeed < 20 && typingspeed > 10 ? "You killed it" : typingspeed < 40 ? "Everybody wins" : "You failed";
console.log(output);
console.log(!posX);
console.log(typeof(typingspeed));

// Javascript datatypes
// string
// Number
// BigInt
// null
// Object
// Boolean
// undefined
// symbols

let Messi = 'foot\'Ball';
let MessiNumber = 10;
console.log(Messi);

// Object datatype
let Person = {Name:'Faith Nwihim', SkinColor:'chocolate', Skill:'programming'}
console.log(Person.Name, Person.SkinColor);

// let expo = 1230e5;
let expo = 123e-5
console.log(expo);


let Biggi = BigInt(1234567890)
console.log(typeof(Biggi));

let Rema;
Rema = "Jonzing world";
console.log(typeof(Rema));

// Null
// let empty = null;
let empty = '';
console.log(empty);

// Boolean
let DavidoFans = "faith";
let BurnaBoyFans = "nwihim";
console.log(DavidoFans == BurnaBoyFans);

let bool = Boolean(1);
let secondBool = Boolean(0);
console.log(bool);
console.log(secondBool);
console.log(bool < secondBool);

// Arrays
// let friends = "faith, uche nwihim"; not anymore
// let friends = ["Faith", "uche", " Nwihim"];
// console.log(friends[0]);
let friends = []
// let newFriends = friends.push('Nwihim')
friends.push('Faith')
friends.push('Uche')
friends.push('Housing')
// friends.pop('uche')
// console.log(friends);
console.log(friends.slice(0, 3));



// fruits = ["banana", "apple", "orange"];
// let flen = fruits.length;
// console.log(fruits.length, fruits);

// Join() method
// fruits = ["banana", "mango", "orange"]
// console.log(fruits.join("*"));

// pop() method
// fruits = ["Orange", "Apple","Mango"];
// let fruit = fruits.pop();
// console.log(fruits.pop());

// push method
// fruits = ["banana", "orange","mango" ];
// let fruit = fruits.push("kiwi");
// console.log(fruits);

// array shift
// fruits = ["Banana", "Orange", "Mango"];
// fruits.shift();
// console.log(fruits.shift());
// console.log(fruits);

// merging arrays
// myGirls = ["Faith", "Uche"];
// myBoys = ["Johnson", "Peter"]
// console.log(myGirls.concat(myBoys));

// splice arrays
// friuts = ["Banana", "Orange", "Apple"];
// let fruit = fruits.splice(0, 1)
// console.log(fruits);

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length -3;
//  console.log(length);

let text = " WE are \"Programmers\" \nfrom Nigeria";
console.log(text);

// length
// slice
// substring()
// replace()
// substr()
// replaceAll()
// toUpperCase()
// toLowerCase()
// concat()

// trim ()
// trimStart()
// trimEnd()
// padstart()
// padEnd()
// CharacterData()
// split()

// let words = "Oranges, Mango, Apple";
// console.log(words.slice(0, 15));

// let words = "Oranges, Mango, Apple";
// console.log(words.substring(3, -1));

// let words = "Oranges, Mango, Apple";
// console.log(words.substr(7));

// let words = "Oranges, Mango, Pineapple";
// console.log(words.replace("Pineapple", "faith"));

// let words = "Oranges, oranges, Mango, Pineapple";
// console.log(words.replaceAll("Oranges", "faith"));


// let words = "Oranges, oranges, Mango, Pineapple";
// let secondWords = "I like eating fruits";
// console.log(words.concat(words, secondWords));
// let words = "Oranges, oranges, Mango, Pineapple";
// console.log(words.toLowerCase());

let words = "Oranges, oranges, Mango, Pineapple";
console.log(words.toUpperCase());

let space = "      I am a space";
console.log(space.trim());


// string search in javascript
let sentence = "I, am a programmer programmer and I have life";
console.log(sentence.indexOf('programmer'));

let string = 'you can locate me in Locate';
// console.log(string.lastIndexOf('Locate'));
console.log(string.toLocaleUpperCase());
console.log(string.search('locate'));

let textMatch = "The rain in SPAIN stays mainly in the plain";
// console.log(textMatch.match('ain'));

let newtext = "i love cats. Cats are very easy to love. Cats are very popular ";
console.log(newtext.matchAll('ain'));
console.log(newtext.includes("love"));


const txt = 'Javascript is the most beautiful language that a human begin has ever created.\
I recommend Javascript for a first programming language'

// matchReplaced = txt.replace(/Javascript|javascript/, 'Python')
matchReplaced = txt.replace(/Javascript/gi, 'Python')
console.log(matchReplaced);

// Javascript Template Literals
// Template Literals
// Template String
// Strings Template
// backTics Syntax

let hisName = "uchechi"
let hisLast = 'faith'

let today = `Today's Thursday and I am "Happy"`

let info = `welcome mrs ${hisName} ${hisLast}`
console.log(info);


let price = 50
let vat = 0.250

let total = `Total ${(price * (1 + vat))}`
console.log(total);

let html = `<h1>this is html</h1>`
console.log(html);

// Numbers in javascript
let float = 3.14
let numm = 3
// let extra = 123e5;
let extra = 123e-5;
console.log(extra);

// an Array
let cars = ["Benz", "Volvo", "Camry", "Country Man", "chichili"]
console.table(cars.toString())
console.log(cars.join("*"));
console.log(cars.pop());
console.log(cars.push("Honda"));
console.log(cars.shift());
console.log(cars.unshift("poch"));

cars[0] = 'Range rover';
console.log(delete cars[0]);
console.table(cars)

const myBoys = ["David", "Peter", "Paul", "Fidelis"]
const myGirls = Array ("Anna", "Grace", "Louisa", "Clarke")

const myChildren = myBoys.concat(myGirls)
console.table(myChildren)

const Family = Array("John", "Peter", "philip", "Eunice", "Gift", "Tom")
Family.splice(2,0, "Lemon")

console.log(Family.slice(2))
// console.table(Family);
console.log(Family.sort());
console.log(Family.reverse());

// Date in javascript

let d = new Date("2023-04-11") //create a date Object
//new date(date string)
//new date(year month)
//new date(year, month, day, hours)
//new date(year, month, day, hours, minutes,seconds)
//new date(year, month, day, hours, minutes,seconds)
//new date(year, month, day, hours, minutes,seconds, ms)
//new date(miliseconds)

console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getMonth());

let months = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September", 
 "October", "November", "December"];

let date = new Date("2023-04-11");

date.setFullYear(2000)

let m = months[date.getMonth()];
console.log(m);
console.log(date.getHours());


// Math in  javascript
// Math.E
// Math.SQRT2
console.log(Math.PI);
console.log(Math.round(5.6));
console.log(Math.ceil(-6.-5));
console.log(Math.floor(-6.-6));

console.log(Math.trunc(-6.5));
console.log(Math.sign(100));
console.log(Math.pow(2,2));
console.log(Math.sqrt(64));
console.log(Math.random(64));
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

let light = 22.7;


switch (light) {
    case 20:
        console.log("I am 20");
    break;
    case 30:
        console.log("I am 30");
    break;

    default:
        console.log("I am different");
}
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log(day)
      break;
    case 1:
      day = "Monday";
      console.log(day)
      break;
    case 2:
       day = "Tuesday";
       console.log(day)
      break;
    case 3:
      day = "Wednesday";
      console.log(day)
      break;
    case 4:
      day = "Thursday";
      console.log(day)
      break;
    case 5:
      day = "Friday";
      console.log(day)
      break;
    case 6:
      day = "Saturday";
      console.log(day)
  }

  // loop in javascript
  let company =["Google", "Microsoft", "Facebook"];
  // let company = {Name:'google', age:40};
  let index = 0


//   for(; index < company.length; index++){
//     let value = company[index];
//     console.log(value);
// }

// for(let key in company){
//   let value = company[key]
//   if(value == "Microsoft"){
//   console.log("Hello Microsoft");
//   continue;
// }
// console.log(value);
// }

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
    
//   }
// }

// let func = ()=>{

// }
// func()
 
// let resultss = '';
// for (let x of company) {
//    resultss += x;
//   console.log(x);
// }


// let input = '';
// let max = ""
// let i = 0

// while(i < 10){
//   max += "\n" + "The number is " + " " + i;
//   i++;
//   console.log(max);
// }

// do {
//   max += "The npumber is" + "\n";
//   console.log(max);
// }
//  while (i < 10);

// let count = [1,2,3,4,5,6,7,8,9,10]
// let emptyString = ""
//  for(let i = 0; i < count.length; i++){
//   if(i == 5){
//     continue;
//   }
//   emptyString += "The number is" + i + "\n";
// console.log(emptyString);
//  }

// let alphabets = new Set(["a", "b", "c", "d"]);
let alphabets = new Set(); //empty set
alphabets.add("a")
alphabets.add("b")
alphabets.add("c")
alphabets.add("d")
console.table(alphabets.size)

// forEach method
let report = "";
// alphabets.forEach(function(value){
//   report += value;
//   console.log(report);
// })

console.log (alphabets.values())

alphabets.delete("a")

for(let y of alphabets.values()){
  report += y;
  console.log(report); //you can use the forEach method or for of 
}                      //loop to iterate in a set

console.log(alphabets.has("a")) //returns boolean answer
console.log(alphabets.keys())
console.log(alphabets.entries())
alphabets.clear()
console.log(alphabets.keys())

let myMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
])
myMap.set("sausage", 800)

console.log(myMap.get("sausage"))
console.log(myMap.size)
console.log(myMap.delete("oranges"))
console.log(myMap.size)
console.log(myMap.delete("apple"));
console.log(myMap.has("apple"));

// consule.log("hello world");// to cause error

// try{
//   consolle.log("welcome friends")
// }
// catch(err){
//   console.log(err.message)
// }
//A callback is a function passed as an argument to another function
//This technique allows a function to call another function

//A callback function can run after another function has finished
//functional pro
//oop pro

let texxt = document.getElementById("paragraph")
texxt.style.backgroundColor = "red";
function greet(Name, Age){
    console.log('Hello' + " " + Name, "I am" + " " + Age + " " + "years old");
}

greet('Faith', 24);


// let numbers = function(a, b){
//     // return a * b
//     console.log(a * b);
// }

// numbers(20, 30);

let s = myFunction(4, 3);

function myFunction(a, b){
    return a * b
}
console.log(s);

// function local(){
//     let speed = 3200;
// }

// local()

// let speed = 500;

// console.log(s);

const twitter = {
    ceo: 'Elon Musk',
     openSource: 'suggestion',
     Country:'Nigeria',
     fullname: function(){
        return this.ceo + " " + this.Country + " " + this.openSource;
     }
};
console.log(twitter.fullname());

// let item = new Object();
// let item = new  String();
// let item = new Boolean();



var myName = "Marcel";
console.log(myName);

var a = 7;
var b = 5;
var result = a + b;
console.log(result);
a += a;
console.log(a);

var a = 7;
var b = 5;
console.log(Math.pow(a, 2));

var number = 43;
if(0 === number % 2){
    console.log("the number is even")
}
else {
    console.log("the number is ungerade")
}

/**/ 
var i = 1;
while (i < 5){
    console.log(i)
    i++;
}

var zufall = Math.random();
console.log(zufall);
var inputFeld = "";
inputFeld = prompt("Gib rot oder schwarz ein", "schwarz")
console.log(inputFeld);

if (zufall < 0.5 && inputFeld=== "schwarz"){
    console.log("Correct maaaaaan!")
}
else if (zufall > 0.5 && inputFeld=== "rot"){
    console.log("Correct maaaaaan thats red!")
}

else {
    console.log("Sorry! You´re wrong!");
}


var punkte = 0;
var inputFeld = "";
var zufall = "";
while (punkte >= 0){
    zufall = Math.random();
    console.log(zufall);

    inputFeld = prompt("Gib rot oder schwarz ein", "schwarz")
    console.log(inputFeld);
    
    if (zufall < 0.5 && inputFeld=== "schwarz"){
        console.log("Correct maaaaaan!")
        punkte++;
    }
    else if (zufall > 0.5 && inputFeld=== "rot"){
        console.log("Correct maaaaaan thats red!")
        punkte++;
    }
    
    else {
        console.log("Sorry! You´re wrong!");
        punkte = -1;
    }
     console.log("Du hast " + punkte);
}

var i = 0;
for (i = 0; i <= 10; i++) {
  
  console.log(i);
}


//* a) b) Array e)second world on string googeln 

//*a)



var z = 5;
//z = math.sqrt(Math.pow(z, 2));

z = Math.pow(z, 2);
z = math.sqrt(z);

//* Funktion mit beliebiger Zahl und Potenz *//
var zahl = 4;
var potenz = 2;
function wurzelmit2erpotenz(number,number2){

    return Math.sqrt(Math.pow(number,number2))
}

console.log(wurzelmit2erpotenz(zahl,potenz));

//*b)

const myFriends = ["Peter", "Harald", "Jordan", "Steve", "Frank", "Kumpelblase"];
console.log(myFriends);


//*e)

var university = "Hochschule Furtwangen University";
var words = university.split(' ');
var word0 = words[0];
var word1 = words[1];
var word2 = words[2];

console.log(word1);

//todooo:

//client server model video 
//jason / Datenbanken

//17.07. fünfte Session

//Objekte definieren
//entweder:
const obj = new Object();



const human = {
    name: "muun",
    pimmelgroesse: 600
}

console.log(human.pimmelgroesse);

//oder:
const obj2 = {};

obj2.name = "anni";
console.log(obj2.name);


//beliebig parameter übergen

function add() {
    for (let parameter of arguments) {
        console.log(parameter);
    }
}
add (1, 2, 3, 4, "fünf");


//in JSON UMWANDELN UND ZURÜCK WANDELN

let zoo = {};

zoo.tier = "Affe";
zoo.alter = 7;
zoo.skills = "klettern";
zoo.lieblingsessen = "Banane";

let zooInJSON = JSON.stringify(zoo);
console.log(zooInJSON);

let zooParsedzurück = JSON.parse(zooInJSON);
console.log(zooParsedzurück);



//API geben uns information ( get und post) 

























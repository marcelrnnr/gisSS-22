//appending (hinzufügen von Elemnenten)

let body = document.body;

let ueberschrift = document.createElement("h1"); //neues Element erstellen

ueberschrift.textContent = "Coden mit Flo"; //Textinhalt des Inhalts


let allP = document.getElementsByTagName("p");
console.log(allP);

body.insertBefore(ueberschrift, allP[0]);   //reiht sich ganz unten an


// changing

let ueberschrift2 = document.getElementsByTagName("h1");
ueberschrift2[0].textContent= "Titel";

//alternativ
//ueberschrift.textContent = "Titel";


//getting any elements

let testId = document.getElementById("testID");
console.log(testId);


// Vererbung in DOM
//klonen

let hund = document.createElement("p");
hund.textContent = "doggo";
body.appendChild(hund);
let hund2 = hund.cloneNode(true);
body.appendChild(hund);
hund2.textContent = "diggi";
body.insertBefore(hund2, hund);
//entweder diggi oder doggo Fehler

//Eventlistener

hund.textContent = "Push me!";

hund.addEventListener("click", pushed);

function pushed() {
    if(hund.textContent === "doggo"){
        hund.textContent = "Push me!"
    }
    else{
        hund.textContent = "doggo";
    }
}


hund.textContent = "Bruno";
hund2.textContent = "Fritz";

hund.addEventListener("click", newPush);
hund2.addEventListener("click", newPush);

function newPush(lulu){
    console.log(lulu.target);
    lulu.currentTarget.textContent = "verändert!"
}

let button1 = document.createElement("button"); //neues Element erstellen 
let button2 = document.createElement("button");
let textfeld = document.createElement("h2");

textfeld.textContent = 0;
button1.textContent = "Up"; //Textinhalt des Inhalts
button2.textContent = "Down";

body.appendChild(textfeld);
body.appendChild(button1);
body.appendChild(button2);


button1.addEventListener("click", go);
button2.addEventListener("click", go);

function go(event){
if (event.currentTarget.textContent === "Up" ){
    textfeld.textContent++;
}
else{
    textfeld.textContent--;
}
}

//roulette und der code hier durchmachen und script durchlesen







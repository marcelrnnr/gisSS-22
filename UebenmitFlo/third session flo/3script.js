let body = document.body; 

body.append("Ohne Element");

let div = document.createElement("div");

div.textContent = "Mit Element";
body.appendChild(div); //geht nur mit Elementen

div.className = "infobox";


//changing 

let divs = document.getElementsByTagName("div");
console.log(divs)
divs[0].className = "infoBox";

// getting any element

let testId = document.getElementById("testId");
let pElements = testId.getElementsByTagName("p");
let secondElement = pElements[1];

function logElemenets() {
    console.log(body);
    console.log(testId);
    console.log(pElements);
    pElements[0].className = "infoBox";
}

// Vererbung in der DOM


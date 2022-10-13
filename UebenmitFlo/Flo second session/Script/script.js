

console.log("sieben");

/**Arrayliste erstellen */
const list = ["Dome1", "Dome2", "Dome3"];
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);

/**Funktion */

function firstFunction(){
    console.log("penis");
}
firstFunction();


function secondFunction(input){
    let word = input;
    console.log(word);
}
secondFunction("Ich bin dein parameter");

/**Funktion mit 2 Parametern un return */

function add2numbers(x, y){
    let result = x + y;
    return result;
}
add2numbers(7, 66);

console.log(add2numbers(7, 60));

    // adding apend, Appendchild


    let bodyFlo = document.body; // #1
let p = document.createElement("div"); // #4 element erstellen

body.append("Ohne Element"); // #2 Append erklaeren



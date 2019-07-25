"use strict"

window.addEventListener("load", function() {

let button = document.getElementById("addElement");
button.addEventListener("click", function() {

        let itemlist = document.getElementById("liste") // Liste ansteuern
        let newItem = document.createElement("li"); // Neues Element erstellen
        
        let feld = document.getElementById("newElement"); //Textfeld ansteuern
        let input = feld.value;
        newItem.innerText = input;
        
        itemlist.appendChild(newItem);

}, false);

}, false);


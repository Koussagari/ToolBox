"use strict";

// creation of the two global varialbles
var i = 1;
var listItem = "";


//Defining a listener for our button, specifically, an onclick
processInput();

function processInput() {
    if (i <= 5) {

        // (a)Setting the value of listItem
        var listItem = document.getElementById('item_' + i);

        // (b) Setting the content of the element with an id equal to listItem
        document.getElementById("toolBox").value = listItem;

        // (c) Setting the value with id of "toolBox" to an empty string
        document.getElementById("toolBox").value = "";

        // appending the value to the list item
        result.appendChild(li);

        // End of the suggestion of names
        if (i == 5) {
            var fin = document.getElementById("resultsFin").innerHTML = ("Thanks for your suggestions");

        }
        for (var i = 1; i <= 5; i++) {
            listItem = ul.parentNode.parentNode;
        }

    }

}
document.getElementById("button").addEventListener("click", processInput);
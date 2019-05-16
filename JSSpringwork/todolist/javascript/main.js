//declaring DOM variables

var del0101 = document.getElementById('del0101');
var add0101 = document.getElementById('add0101');
var demoline = document.getElementById('demo');
var testline = document.getElementById('test');
var firstol = document.getElementById('td101');

//Array to store items on to do list

var list = { item1: "" };

//delete button function. does not delete if there is only one item on the list. Only
//edit is available at 1 item on the list.

del0101.onclick = function deleteAdd() {

    if (del0101.parentElement.parentElement.childElementCount === 1) {

    } else {
        del0101.parentElement.parentElement.remove();
    }
};

//add button function. also handles edit functions as add button turns into edit button.

add0101.onclick = function addd() {

    // if (add0101.innerHTML === "edit") {

    //     testline.remove();
    // }

    var x = document.getElementById("merp");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }


    list.item1 = text;
    setdemo();

    makeListItem();
}

//line that changes the list item from a form to a header

function setdemo() {
    document.getElementById('merp').remove();
    add0101.innerHTML = "edit";
    testline.innerHTML = list.item1;
}

function makeListItem(){

    var listItem = document.createElement("li");
    var headerlistItem = document.createElement("h1");
    var formlistItem = document.createElement("form");
    var buttonadd = document.createElement("button");
    var buttondel = document.createElement("button");

    var textnode = document.createTextNode("Water");
    listItem.appendChild(textnode); 

    document.getElementById("td101").appendChild(listItem);
    firstol.insertBefore(listItem, firstol.childNodes[0]);
}

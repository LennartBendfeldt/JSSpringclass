

var del0101 = document.getElementById('del0101');
var add0101 = document.getElementById('add0101');
var demoline = document.getElementById('demo');
var testline = document.getElementById('test');

var list = { item1: "" };

del0101.onclick = function deleteAdd() {

    if (del0101.parentElement.parentElement.childElementCount === 1) {

    } else {
        del0101.parentElement.parentElement.remove();
    }
};

add0101.onclick = function addd() {

    if(add0101.innerHTML === "edit"){

        testline.remove();
    }

    var x = document.getElementById("merp");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }


    list.item1 = text;
    setdemo();

    if(add0101.innerHTML === "edit"){

        demoline.innerHTML = "";
    }
}

function setdemo() {
    document.getElementById('merp').remove();
    add0101.innerHTML = "edit";
    testline.innerHTML = list.item1;
}

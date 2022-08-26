const submit = document.getElementById("submit");
const rows1 = document.getElementsByTagName("tbody")[0].rows;
var tbody = document.getElementsByTagName("tbody")[0];

submit.addEventListener("click",function() {
    var toDoitem = document.getElementById("add").value;

    console.log(toDoitem);

    if (toDoitem == ""){
        alert("Enter a new item before submiting");
    }
    else{
        var new_row = tbody.insertRow();
        var cell1 = new_row.insertCell(0);
        var cell2 = new_row.insertCell(1);

        var newText2 = document.createTextNode(toDoitem);

        cell1.appendChild(<input type="checkbox" id="check1"></input>);
        cell2.appendChild(newText2);
    }
});
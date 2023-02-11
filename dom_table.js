

document.getElementById("display").addEventListener("submit",function(e){
    e.preventDefault();
    console.log(e.target[0].value);
    let table = document.getElementById("myTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = e.target[0].value;
    cell2.innerHTML = e.target[1].value;
    e.target[0].value = ""
    e.target[1].value = ""
    let button = document.createElement("BUTTON");
    button.innerHTML = "Delete";
    cell3.appendChild(button);
    button.addEventListener("click", function(){
        row.remove();
    });
});



// var entry=document.getElementById('entry');
// entry.addEventListener("click", action);

var row=1;
function myFunction(){
    var name=document.getElementById('name').value;
    var contact=document.getElementById('number').value;
    var location=document.getElementById('location').value;


    if(name=='' || contact=='' || location=='') {
        alert("Please fill up the details");
        return;
    }else{
        alert("welcome" + " "+name);
    }


    var display=document.getElementById('display');

    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    
    cell1.innerHTML=name;
    cell2.innerHTML=contact;
    cell3.innerHTML=location;

    // row++;

//     var newRow=display.insertRow(row);

//     var cell1=newRow.insertcell(0);
//     var cell2=newRow.insertcell(1);
//     var cell3=newRow.insercell(2);

//     cell1.innerHTML=name;
//     cell2.innerHTML=contact;
//     cell3.innerHTML=location;


//     row++;
 }

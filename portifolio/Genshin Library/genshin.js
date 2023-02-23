function validateForm(){
let validateChar =document.forms["register"]["character"].value;    
let validateRar =document.forms["register"]["rarity"].value;
let validateReg =document.forms["register"]["region"].value;
let validateBirth =document.forms["register"]["birth"].value;
let validateDate =document.forms["register"]["date"].value;    
let validateWeap =document.forms["register"]["weapons"].value;

    if (validateChar=="") {
        alert("Fill the Character form!");
        return false;
    }
    if (validateRar=="") {
        alert("Fill the Rarity form!");
        return false;
    }
    if (validateReg=="") {
        alert("Fill the Region form!");
        return false;
    }
    if (validateBirth=="") {
        alert("Fill the Birthday form!");
        return false;
    }
    if (validateDate== "") {
        alert("Fill the Date form!");
        return false;
    }
    if (validateWeap== "") {
        alert("Choose one weapon!");
        return false;
    }

}

function fill(id){
    let Char =document.forms["register"]["character"].value;    
    let Rar =document.forms["register"]["rarity"].value;
    let Weap =document.forms["register"]["weapons"].value;
    let Reg =document.forms["register"]["region"].value;
    let Birth =document.forms["register"]["birth"].value;    
    let date =document.forms["register"]["date"].value;

    let fillin = window.document.getElementById("filltable");
    fillin.innerHTML+=`<tr>
                    <td>${Char}</td>
                    <td>${Rar}</td>
                    <td>${Weap}</td>
                    <td>${Reg}</td>    
                    <td>${Birth}</td>
                    <td>${date}</td>
                    </tr>`;    
                }
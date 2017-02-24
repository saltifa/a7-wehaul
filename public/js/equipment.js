'use strict';

$(document).ready(function() {
    initPage();
});

function initPage() {
    $("#nextBtn").click(addEquipment);
    //if("window.history.forward()" === )
}

function addEquipment(e) {
    e.preventDefault();

    $.post("/movenow-rider",
        {
            "equipment": $("#vehicle").val(),
        },
        /*if("name" =null || "start"=null || "end"||null){
            document.getElementById('error').innerHTML="All fields must contain valid inputs";
        }else{ */
            addedVehicle);
    //}
}

function addedVehicle(data) {
    window.location.href = "equipment";
    //$('.alert').show();
    //alert.alert();
}
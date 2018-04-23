
function clickFIFO(){
   
    $("#btFIFO").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}

function clickLRU(){
    $("#btLRU").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}

function clickSCLOCK(){
    $("#btSCLOCK").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}
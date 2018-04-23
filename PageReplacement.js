
function clickFIFO(){
   
    $("#btFIFO").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btOPTIMAL").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}

function clickLRU(){
    $("#btLRU").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btOPTIMAL").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}

function clickSCLOCK(){
    $("#btSCLOCK").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btOPTIMAL").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}

function clickOPTIMAL(){
    $("#btOPTIMAL").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}
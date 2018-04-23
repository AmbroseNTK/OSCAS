
function clickFCFS(){

    $("#btFCFS").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");

}

function clickSSTF(){
    $("#btSSTF").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}

function clickSCAN(){
    $("#btSCAN").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}

function clickCSCAN(){
    $("#btCSCAN").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}

function clickLOOK(){
    $("#btLOOK").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}

function clickCLOOK(){
    $("#btCLOOK").addClass("buttonMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonMenuClick").addClass("buttonMenuLeave");
}
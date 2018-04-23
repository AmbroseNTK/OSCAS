
function clickFCFS(){

    $("#btFCFS").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");

}

function clickSSTF(){
    $("#btSSTF").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}

function clickSCAN(){
    $("#btSCAN").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}

function clickCSCAN(){
    $("#btCSCAN").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}

function clickLOOK(){
    $("#btLOOK").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}

function clickCLOOK(){
    $("#btCLOOK").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btSSTF").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btCSCAN").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btLOOK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFCFS").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
}
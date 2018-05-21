
var algorithm = 'pr_fifo';
var PR_SimSet =[];
var PR_numOfRefs = 0;
var PR_diffRef = [];

function clickFIFO() {

    $("#btFIFO").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btOPTIMAL").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    algorithm = 'pr_fifo';
}

function clickLRU() {
    $("#btLRU").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btOPTIMAL").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    algorithm = 'pr_lru';
}

function clickSCLOCK() {
    $("#btSCLOCK").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btOPTIMAL").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    algorithm = 'pr_sclock';
}

function clickOPTIMAL() {
    $("#btOPTIMAL").addClass("buttonSubMenuClick").removeClass("buttonMenuLeave");
    $("#btLRU").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btFIFO").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    $("#btSCLOCK").removeClass("buttonSubMenuClick").addClass("buttonMenuLeave");
    algorithm = 'pr_optimal';
}

function checkParamsPageReplacement(numOfRefs, listOfRefs) {
    result = -1;

    diffRef = [];

    if (numOfRefs <= 4 && numOfRefs > 0) {
        list = listOfRefs.split(',');
        for (let i = 0; i < list.length; i++) {
            var isContain = false;
            if (list[i] == '') {
                return -3;
            }
            for (let j = 0; j < diffRef.length; j++) {
                if (list[i] == diffRef[j]) {
                    isContain = true;
                    break;
                }
            }
            if (!isContain) {
                diffRef.push(list[i]);
            }
        }
        if (diffRef.length < 30)
            result = 0;
    }
    PR_diffRef = diffRef;
    return result;
}

function isContain(element, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == element)
            return true;
    }
    return false;
}

function calcFIFO(numOfRefs, listOfRefs) {
    result = [];
    pointer = 0;
    pages = [];
    for (let i = 0; i < numOfRefs; i++) {
        pages.push('');
    }

    refs = listOfRefs.split(',');
    let replacement = '';
    for (let i = 0; i < refs.length; i++) {
        if (!isContain(refs[i], pages)) {
            pages[pointer] = refs[i];
            replacement = refs[i];
        }
        result.push({ cur: pointer, rep: replacement });
        if (replacement != '') {
            pointer++;
            pointer %= numOfRefs;
        }
        replacement = '';
    }
    PR_numOfRefs = numOfRefs;
    PR_SimSet = result;
    return result;
}
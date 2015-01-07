var i = 0;

function counting() {
    i++;
    postMessage(i);
    setTimeout("counting()", 500);
}

counting();
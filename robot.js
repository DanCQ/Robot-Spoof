function printer() {
    var print;
    var mint = document.getElementById("mint");
    var i = 0;
    
    function brr(){

        i += 1;
        mint.innerHTML = i;

        if (i >= 4444) {
            clearInterval(print);
            i = 0;
            setTimeout(function() { printer() }, 10000);
        }
    }

    print = setInterval(brr, 100);
}


window.onload = function() {
    
    printer();

}
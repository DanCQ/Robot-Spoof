const hal9000 = document.querySelector(".wallet");

//makes wallet numbers count upwards
function minter() {
    var print;
    var mint = document.getElementById("mint");
    var i = 0;
    
    function brr(){
        i += 1;
        mint.innerHTML = i;

        if (i >= 4444) {
            clearInterval(print);
            i = 0;
            setTimeout(function() { crypto() }, 10000);
        }
    }
    print = setInterval(brr, 100);
}


//plays sound on wallet click
hal9000.addEventListener("click", function() {  
    
    function no() {
        var sorry = new Audio('assets/sorry.mp3');
        sorry.play();
    }
    no();
});

window.onload = function() {
    
    minter();
}

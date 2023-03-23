const hal9000 = document.querySelector(".wallet");
const bot = document.querySelector(".bot");
const gallery = document.querySelector(".gallery");


function beep() {
    let boop = new Audio('assets/beepboop.mp3');
    boop.play();
}

function no() {
    let sorry = new Audio('assets/sorry.mp3');
    sorry.play();
}

//makes wallet numbers count upwards
function minter() {
    var print;
    var mint = document.getElementById("mint");
    var i = 0;
    
    function brr(){
        i += 1;
        mint.textContent = i;

        if (i >= 4444) {
            clearInterval(print);
            i = 0;
            setTimeout(function() { minter() }, 10000);
        }
    }
    print = setInterval(brr, 100);
}


window.onload = function() {
    
    minter();
    
    hal9000.addEventListener("click", function() { no() }); //plays sound on wallet click

    bot.addEventListener("click", function() { beep() });
    
    gallery.addEventListener("click", function() { beep() });
}

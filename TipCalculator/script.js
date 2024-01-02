const amount = document.getElementById("ammount");
const guests = document.getElementById("guests");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

function calculate() {
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = "";
    guests.value = "";
    quality.value = "";
    if(tip === "NaN"){
        tipAmount.innerHTML = "Tip $0 each";
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = "Tip $" + tip + " each";
        showTipAmount();
    }
}

function showTipAmount(){
    var x = tipAmount;
    x.className = "show";
    setTimeout(function(){x.className = x.className.replace("show", "");},3000);
}
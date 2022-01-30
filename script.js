document.body.style.backgroundColor="black";
let sliderSIP = document.getElementById('slider1');
let sliderTime = document.getElementById('slider2');
let sliderROR = document.getElementById('slider3');

let SIPAmtBox = document.getElementById('sipInput');
let TimeBox = document.getElementById('yearInput');
let RORBox = document.getElementById('RORInput');
let finalAmtBox = document.getElementById('finalAmt');

sliderSIP.oninput = ()=>{
    SIPAmtBox.value = sliderSIP.value;
}

sliderTime.oninput = ()=>{
    TimeBox.value = sliderTime.value;
}

sliderROR.oninput = ()=>{
    RORBox.value = sliderROR.value;
}

function computeWealth(){
    let sipamt = SIPAmtBox.value;
    let years = TimeBox.value;
    let rate = RORBox.value;

    let totalSipInAyear = sipamt * 12;
    let totalPrincipal = totalSipInAyear * years;

    let finalAmt = totalPrincipal*(Math.pow((1 + (rate / 100)), years));

    
    finalAmtBox.value = finalAmt.toFixed(2);

}

function refreshForm(){
    SIPAmtBox.value="";
    TimeBox.value="";
    RORBox.value="";
    finalAmtBox.value="";
}

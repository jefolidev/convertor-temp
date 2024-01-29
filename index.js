const submit = document.getElementById("submit");

function calcTemp(){

    const tempValue = document.getElementById("tempValue").value;
    const result = document.getElementById("result");

    if(document.getElementById("celsiusV").checked){
        let calcF = (tempValue *(9/5) + 32);
        let calcK = parseInt(tempValue) + parseFloat(273.15) ;

       result.textContent = tempValue + "°C é equivalente a "+ calcF +"°F e " + calcK + "K";
    } 

    if(document.getElementById("fahrV").checked){
        let calcC = (tempValue - 32) * 5/9;
        let calcK = (tempValue - 32) * 5/9 + 273.15 ;

       result.textContent = tempValue + "°F é equivalente a "+ calcC.toFixed(1) +"°C e " + calcK.toFixed(1)  + "K";
    }

    if(document.getElementById("kelvinV").checked){
        let calcC = tempValue - 273;
        let calcF = (tempValue - 273) * 5/9 + 32;

       result.textContent = tempValue + "K é equivalente a "+ calcC.toFixed(1) +"°C e " + calcF.toFixed(1) + "°F";
    }
}

submit.addEventListener('click', calcTemp)
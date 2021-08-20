function calculateTip() {
    resetTip();

    var billAmount=document.getElementById("amount").value;
    var tipPercentage=document.getElementById("tip").value;
    var numberofPeople=document.getElementById("numberPeople").value;

    // to validate the bill amount
    if(billAmount===""){
        alert("Bill Amount is Empty,Please fill it");
        return;
    }

    // to calculate Tip
    function tipCalc(){
        let tipTotal=((billAmount*100)*tipPercentage)/100;
        tipTotal=tipTotal.toFixed(2);
        return tipTotal;
    }

    var totalTip= tipCalc();

    if(numberofPeople>1){
        document.getElementById("multiple").style.display="block";
        let bill=(billAmount/numberofPeople);
        let tip=(totalTip/numberofPeople);
        document.getElementById("TipMultiple").innerHTML=tip.toFixed(2);
        
        let full= (tip*numberofPeople);
        document.getElementById("tipMul").innerHTML=full.toFixed(2);

        let amountEach= parseFloat(bill) + parseFloat(tip);
        document.getElementById("totalAmountEach").innerHTML =amountEach.toFixed(2);
   
        let multipleTotal = parseFloat(billAmount) + parseFloat(totalTip);
        document.getElementById("billTotalMultiple").innerHTML =multipleTotal.toFixed(2);
    }
    else{
        document.getElementById("single").style.display = "block";
        let singleTotal = (parseFloat(billAmount) + parseFloat(totalTip));
        document.getElementById("tipAmount").innerHTML = totalTip;
        document.getElementById("billTotal").innerHTML = singleTotal.toFixed(2);
    }
}
    
    resetTip();

    // for resetting and hiding the blocks
    function resetTip() {
        document.getElementById("single").style.display="none";
        document.getElementById("multiple").style.display="none";

    }
    

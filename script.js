document.addEventListener("DOMContentLoaded",function(){
// for casing
document.getElementById('case-increase').addEventListener('click',function(){
    handleProductChange('case', true);
});

document.getElementById("case-decrease").addEventListener("click",function(){
    handleProductChange('case', false);
});

// for phone

document.getElementById("phone-increase").addEventListener("click",function(){
    handleProductChange('phone', true);
})

document.getElementById("phone-decrease").addEventListener("click",function(){
    handleProductChange('phone', false);
})

function handleProductChange(product,isIncrease){
    var productInput=parseInt(document.getElementById(product+'-count').value);
    var productCount=productInput;
    if(isIncrease==true){
        productCount=productInput+1;
    }
    if(isIncrease==false && productCount>0){
        productCount=productInput-1;
    }
    document.getElementById(product+"-count").value=productCount;

    let productTotal=0;
    if(product=='phone'){
        productTotal=productCount*200;
    }

    if(product=='case'){
        productTotal=productCount*5;
    }
    document.getElementById(product+"-total").innerText=productTotal;
    calculateTotal();
}

function calculateTotal(){
    var caseCount=document.getElementById("case-count");
    var caseNewCount=parseInt(caseCount.value);
    var phoneCount=parseInt(document.getElementById("phone-count").value);
    var subTotal=caseNewCount*5+phoneCount*200;
    document.getElementById("sub-total").innerText=subTotal;

    var tax=(subTotal*10)/100;
    document.getElementById("tax").innerText=Math.round(tax);

    var finalTotal=subTotal+tax;
    document.getElementById('final-total').innerText=Math.ceil(finalTotal);
}

// for remove
document.getElementById('phone-remove').addEventListener("click",function(){
    removeItem("phoneRemove");
})

document.getElementById('case-remove').addEventListener("click",function(){
    removeItem("caseRemove");
})

function removeItem(remove){
    if(remove=="phoneRemove"){
        document.getElementById("phone-row").style.display="none";
    }
    if(remove=="caseRemove"){
        document.getElementById("case-row").style.display="none";
    }
}













})
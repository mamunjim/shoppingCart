document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("phone-increase").addEventListener("click",function(){
        handleProduct("phone",true);
    })
    
    document.getElementById("phone-decrease").addEventListener("click",function(){
        handleProduct("phone",false);
    
    })
    
    document.getElementById("case-increase").addEventListener("click",function(){
        handleProduct("case",true);
    })
    
    document.getElementById("case-decrease").addEventListener("click",function(){
        handleProduct("case",false);
    })
    
    function handleProduct(product,isIncrease){
        var productInput=parseInt(document.getElementById(product+"-count").value);
        if(isIncrease==true){
            var productCount=document.getElementById(product+"-count").value=productInput+1;
        }
        if(isIncrease==false && productInput>0){
            var productCount=document.getElementById(product+"-count").value=productInput-1;
        }
        if(product=="phone"){
             document.getElementById(product+"-total").innerText=productCount*200;
        }
        if(product=="case"){
            document.getElementById(product+"-total").innerText=productCount*5;
        }
    
        var phoneCount=parseInt(document.getElementById("phone-count").value);
        var caseCount=parseInt(document.getElementById("case-count").value);
        var subTotal=phoneCount*200+caseCount*5;
        document.getElementById("sub-total").innerText=subTotal;
    
        var Tax=subTotal*.10;
        document.getElementById("tax").innerText=Tax;
    
        var finalTotal=subTotal+Tax;
        document.getElementById("final-total").innerText=finalTotal;
    }
    
    // remove items
    document.getElementById('phone-remove').addEventListener("click",function(){
        productRemove("phone")
    })
    document.getElementById('case-remove').addEventListener("click",function(){
        productRemove("case")
    })
    
    function productRemove(removeItem){
        if(removeItem=="phone"){
            document.getElementById("phone-row").style.display="none";
        }
        if(removeItem=="case"){
            document.getElementById("case-row").style.display="none";
        }
    }
    
    })
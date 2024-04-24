let inputvalue=document.getElementById('user-input');
let number=document.querySelectorAll('.numbers').forEach(function(item){
    item.addEventListener('click',function (e){
        if(inputvalue.innerText==='NaN'){
            inputvalue.innerText="";
        }
        if (inputvalue.innerText==="0"){
            inputvalue.innerText="";
        }
        inputvalue.innerText += e.target.innerHTML.trim();
    });

});

//operations will be view on console
let calculate=document.querySelectorAll(".operations").forEach(function (item){
    item.addEventListener('click',function (e){
        let lastvalue =inputvalue.innerText.substring(inputvalue.innerText.length, inputvalue.innerText.length - 1);
        if(!isNaN(lastvalue)&& e.target.innerHTML === "="){
            inputvalue.innerText= eval(inputvalue.innerText);
        }else if(e.target.innerHTML=== "AC"){
            inputvalue.innerText= 0;
        }else if(e.target.innerHTML=== "CE"){
            inputvalue.innerText=inputvalue.innerText.substring(0,inputvalue.innerText.length - 1);
        if(inputvalue.innerText.length==0){
            inputvalue.innerText="0";
        }
        }else {
             inputvalue.innerText += e.target.innerText;
            
        }
        
    });
});





let letraA = document.querySelector("#letraA");
let letraB = document.querySelector("#letraB");
let letraC = document.querySelector("#letraC");
let letraD = document.querySelector("#letraD");
let letraE = document.querySelector("#letraE");
let letraF = document.querySelector("#letraF");

let tabela = document.querySelector("#tabela");

tabela.addEventListener("click", function(event){

    if(event.target.id == "A"){
        letraA.focus();
    }

    if(event.target.id == "B"){
        letraB.focus();
    }

    if(event.target.id == "C"){
        letraC.focus()
    }

    if(event.target.id == "D"){
        letraD.focus();
    }

    if(event.target.id == "E"){
        letraE.focus();
    }

    if(event.target.id == "F"){
        letraF.focus();
    }

    setTimeout(function(){
        event.target.remove();
    }, 500)

   
});




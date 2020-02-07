window.addEventListener("load", function(){
    document.getElementById("loader").classList.toggle("loader2")
})
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let i = 0;
let botton = document.getElementById("boton");


boton.addEventListener("click", function(){
    if(i==0){
        enlaces.className = ("enlaces dos")
        i = 1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        i = 0;
    }
})

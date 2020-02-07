let boton2  = document.getElementById("sec");
let seccion = document.getElementById("seccion");
let a = 0;
let botton2 = document.getElementById("boton2");
let img = document.getElementById("img3");

boton2.addEventListener("click", function(){
    if(a==0){
        seccion.className = ("seccion two")
        img.className=("img3 e")
        a = 1;
    }else{
        seccion.classList.remove("two")
        img.classList.remove("e")
        seccion.className = ("img3")
        seccion.className = ("seccion one")
        a = 0;
    }
})
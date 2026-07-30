/*=========================================================
                MIL VARIEDADES
                APP.JS
                BETA 1.0
=========================================================*/

/*=============================
        SCROLL SUAVE
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=============================
        HEADER STICKY
=============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

/*=============================
        BOTÓN VOLVER ARRIBA
=============================*/

const volver=document.getElementById("volverArriba");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        volver.classList.add("mostrar");

    }else{

        volver.classList.remove("mostrar");

    }

});

volver.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
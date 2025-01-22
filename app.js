
function textoHtml (elemento, texto) {

    let cambioTexto = document.querySelector(elemento);
cambioTexto.innerHTML = texto;

}

//Procedimiento Juego
function intentosUsuario (comparacion) {

    let numeroUsuario = parseInt (document.getElementById ("Numero").value)
    console.log (typeof(numeroUsuario))
//comparación
    
    if(numeroUsuario === comparacion){

        textoHtml ("p",`Acertaste, el número es Correcto!! Lo lograste con ${intentos} ${intentos==1? "vida.": "vidas."}`)
        document.getElementById("Jugar").setAttribute("disabled","true")
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    
    }
    else {

        if (numeroUsuario<comparacion) {

            textoHtml ("p", "Te faltó, el numero es mayor.")
        }

        else if (numeroUsuario>comparacion){

            textoHtml ("p", "Te pasaste, el numero es menor.")
        }
        else {
            textoHtml ("p", "Por Favor ingresa un numero")
            intentos++
        }
        intentos--;
        if (intentos<0){
            intentos=0
        }
        console.log ("vida:",intentos)

        limpiarCaja()

    }
    if (intentos == 0 ){
        textoHtml ("p", `Perdiste, alcanzaste el número máximo de intentos, el número era (${Secret})`)
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    }


}

//limpia el imput
function limpiarCaja (){

    document.querySelector ("#Numero").value= "";

}

    
// Genera las condiciones iniciales del juego + guardar lista
function CondicionesIniciales(){
    textoHtml("h1", "Bienvenidos al juego!");
    textoHtml ("p", "Elije un número del 1 al 10")
    intentos= 3;
    let ramdon=Math.floor(Math.random()*10)+1

    while (Lista.includes(ramdon)){
        console.log("ANTES:",ramdon)
        console.log("LISTA ANTES:",Lista)
        ramdon= Math.floor(Math.random()*10)+1
        console.log("AHORA:", ramdon)
        if (Lista.length>=10) {
            textoHtml("p", "Ya haz adivinado todos los Números ¡¡Felicidades!!")
            ramdon=0
            break;
        }
    }
    Lista.push(ramdon);
    console.log ("Lista:",Lista);
    return ramdon
    
}    


// Nuevo juego
function nuevoJuego() {
//limpiar caja
    limpiarCaja();
// Mensajes inicials
    Secret = CondicionesIniciales();
    console.log(Secret)
// deshabilitar boton d reinicio
document.getElementById ("reiniciar").setAttribute ("disabled","true")
document.getElementById ("Jugar").removeAttribute("disabled")
//Finalizar Juego
    if (Secret==0) {
    document.getElementById ("reiniciar").setAttribute ("disabled","true")
    document.getElementById("Jugar").setAttribute("disabled","true") 
    
    }
}
// llamado y declaración de variables

let intentos= 0;
let Lista= [];
let Secret = CondicionesIniciales();
console.log (Secret);

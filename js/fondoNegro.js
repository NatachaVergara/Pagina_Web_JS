
let miBoton2 = document.querySelector("#botonColor");
let cambioColor = document.querySelector(".cambioColor");
console.log(cambioColor)

//Toggle 
miBoton2.addEventListener("click", () => {
    console.log(miBoton2)
 
    cambioColor.classList.toggle("fondoNegro")


});
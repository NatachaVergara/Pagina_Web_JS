 
//Proyecto 1
//let porcentaje = 0;//Creo la variable para despues usarla dentro del switch
function facturacion(precio, medioDePago) { //Ingreso el precio del producto que voy a realizar el cálculo de descuento 
  precio = document.querySelector("#precio").value;
  // precio = Number(prompt(`Ingrese el monto del producto`));      
  //Le pido al usuario que ingrese el metodo de pago, siguiedo las instrucciones dadas
  medioDePago = document.querySelector("#medioDePago").value.toUpperCase();

  // medioDePago = prompt(`Las opciones de pago son las siguientes: \n Si quiere pagar en efectivo ingrese E \n Si quiere pagar con tarjeta de débito ingrese D \n Si quiere pagar con tarjeta de crédito ingrese C `).toUpperCase();

  switch (medioDePago) {
    case "E":
      if (precio <= 199) {
        document.querySelector("#montoFinal").innerHTML = (`El monto final a abonar es $${precio}, no tiene descuento`);
      } else if (precio >= 200 && precio < 400) {
        let porcentaje = precio * 30 / 100;
        precio -= porcentaje;
        document.querySelector("#montoFinal").innerHTML = (`El monto final con el 30% de descuento es: $${precio}`)
      } else {
        porcentaje = precio * 40 / 100;
        precio -= porcentaje;
        document.querySelector("#montoFinal").innerHTML = (`El monto final con el 40% de descuento es: $${precio}`)
      } //Fin pago efectivo

      break;
    case "D":
      if (precio <= 199) {
        document.querySelector("#montoFinal").innerHTML = (`El monto final a abonar es $${precio}, no tiene descuento`);
      } else if (precio >= 200 && precio < 400) {
        porcentaje = precio * 20 / 100;
        precio -= porcentaje;
        document.querySelector("#montoFinal").innerHTML = (`El monto final con el 20% de descuento es: $${precio}`)
      } else {
        porcentaje = precio * 40 / 100;
        precio -= porcentaje;
        document.querySelector("#montoFinal").innerHTML = (`El monto final con el 40% de descuento es: $${precio}`)
      } //Fin de pago con T débito

      break;
    case "C":
      if (precio <= 199) {
        document.querySelector("#montoFinal").innerHTML = (`El monto final a abonar es $${precio}, no tiene descuento`);
      } else if (precio >= 200 && precio < 400) {
        porcentaje = precio * 10 / 100;
        precio -= porcentaje;
        document.querySelector("#montoFinal").innerHTML = (`El monto final con el 10% de descuento es: $${precio}`)
      } else {
        porcentaje = precio * 40 / 100;
        precio -= porcentaje;
        document.querySelector("#montoFinal").innerHTML = (`El monto final con el 40% de descuento es: $${precio}`)
      } //Fin de pago con T cébito
      break;
    default:
      (medioDePago == "");
      document.querySelector("#montoFinal").textContent = (`Ha ingresado un dato invalido o ha dejado un campo vacío, revise la información y vuelva a calcular`);
    //Si el usuario ingresa un dato que no fue pedido
  }//Fin del switch
} //fin de la funcion

function borrar() {
  window.location.reload();
}


let montoFinal = facturacion(); //Permito que la funcion facturación realice su trabajo dentro de la variable montoFinal.

// //Ejercicio 5: Lanzamiento de dados. Programar un evento
// /*Paso 1 realizado en html
//   Paso 2 declarar un funcion tirarDados(), se va a ejecutar cuando se haga click en el boton del html*/
// //Paso 3 codear dentro de la funcion el lanzamiento aleatorio a traves de un Math.random. 

/************************************************************* */
//Proyecto 2

function tirarDados(numero) {
  //document.getElementById("demo").innerHTML = Math.floor((Math.random()*6)+1);
  numero = Math.floor((Math.random() * 6) + 1);
  console.log(numero);
  //The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result. If the passed argument is an integer, the value will not be rounded.

  switch (numero) {
    case 1:
      numero = 1;
      document.getElementById("demo").innerHTML = (`<img class="img" src="https://i.pinimg.com/236x/21/8d/0d/218d0d64ad210eeeb2e0d74fb71b56aa.jpg">`);
      break;
    case 2:
      numero = 2;
      document.getElementById("demo").innerHTML = (`<img class="img" src="https://image.flaticon.com/icons/png/512/0/2.png">`);
      break;
    case 3:
      numero = 3;
      document.getElementById("demo").innerHTML = (`<img class="img" src="https://image.freepik.com/iconos-gratis/tres-dados-resultado_318-9261.jpg">`);
      break;
    case 4:
      numero = 4;
      document.getElementById("demo").innerHTML = (`<img  class="img" src="https://img.freepik.com/icones-gratis/dado-com-seis-faces_318-9726.jpg?size=338&ext=jpg">`);
      break;
    case 5:
      numero = 5;
      document.getElementById("demo").innerHTML = (`<img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlexMQuRxoeYtFU4e8UgLURtQU0d5w6cyLNSqKGrh0yy2w6pqP8xzlw4NuSv3kmlvKD6o&usqp=CAU">`);
      break;
    default:
      document.getElementById("demo").innerHTML = (`<img class="img" src="https://img.freepik.com/iconos-gratis/seis-resultado-dados_318-9190.jpg?size=338&ext=jpg">`);
  }//Fin del switch

}//Fin de la funcion


/************************************************************* */
//Proyecto 3
//Ejercicio 6: Contador de click
/**Paso 1: Creo un boton en HTML 
 * Paso 2: Creo una funcion contadorDeClick() donde programo que cada vez que se haga click se muestre por consola el conteo de las veces que se ha realizado el click del boton*/

//Paso 2
let click = 0;// creo una variable en 0 para luego poder ir sumando los clicks
function contadorDeClick() {
  click += 1; //  voy agregando clicks
  console.log(click);//Los muestro por consola
  document.getElementById("demo2").innerHTML = click;//Lo muestro en el html
}
/************************************************************* */

//Proyecto 4
// EJERCICIO 1: Mis primeros pasos en Manipulación del DOM.
// 1. Abre https://practica-manipulacion-del-dom.netlify.app/ para practicar
// 2. Mira el textContent del <h1> en la consola.
// 3. Dale al textContent del <h1> un nuevo string que diga “Estoy
// agregando un nuevo texto”.
// 4. Elegí el primer elemento <p> y agrégale el siguiente código html en
// su interior <span>Estoy aprendiendo a manipular el DOM</span>
// 5. Mira por la consola el innerHTML del segundo <ul>.

//Paso 3
// let ej1 = document.querySelector("#h1");
// ej1.addEventListener("mouseenter", nuevoTextoE);

// let ej2 = document.querySelector("#h1");
// ej2.addEventListener("mouseleave", nuevoTextoS);



// function nuevoTextoE() {
//   ej1.textContent = "Estoy agregando nuevo texto";
// }

// function nuevoTextoS() {
//   ej2.textContent = "Proyecto 4: Manipulación del DOM";
// }
// //Paso 4
// let parrafo = document.querySelector("#primerParrafo");

// parrafo.innerHTML = "<span>Estoy aprendiendo a manipular el DOM </span>";
// parrafo.style.color = "red";

// EJERCICIO 2

// 1. Usando la propiedad style del elemento en javascript dale a ese
// <h1> color de fondo amarillo.

// let h1 = document.querySelector("#h1");
// h1.style.backgroundColor = "yellow";

// 2. Crea un selector .subtitulos en tu archivo style.css y dale las
// propiedad CSS:
// color: teal;
// font-size: 2rem;
// font-family: Arial, Helvetica, sans-serif;

// Luego agrégale a los <h2> la clase .subtitulos con la propiedad JS
// classList.

// let modificarH2 = document.querySelectorAll("h2");//encuentro en el html todos los h2
// //modificarH2.classList.add("subtilulos");//creo el codigo para agregar el estilo .subtitulo
// for (let i = 0; i < modificarH2.length; i++) {
//   modificarH2[i].classList.add("subtilulos"); // creo un for para recorrer a todos esos h2 y cuando lo encuentra, le va agregando el estilo
// }

/// 3. Obtén los elementos con la clase .estilo-letras y remueve la misma
// con la propiedad JS classList que corresponda.

//El remove esta funcionando, solo que no existe el archivo css de .estilo-letras
// let remover = document.querySelectorAll(".estilo-letras"); //creo la variable que va tomar encontrar el class .estilo-letras en el html
// for (let j = 0; j < remover.length; j++) {
//   remover[j].classList.remove("estilo-letras");//creo el for para recorrer el html e ir removiendo el estilo mientras lo va encontrando
// }








/************************************************************* */
//Proyecto 5
//Paso 1 Crear un boton en HTML, colocar como texto "activar" y luego en el archivo css darle un BG color red al boton.
//Paso 2 Agregar el boton los siguentes eventos en JS: Click,mouseenter y mouseleave. 
//Paso 3 En las funciones vinculadas el evento, programalo siguiente
/**
 * a) Evento click: Programa que cuando se haga click, el texto del boton se cambie por el string "Desactivado"
 * b) Evento mouseenter: Cuando entre el cursor al boton, este cambie de color a verde
 * c) Evento mouseleave: Cuando el cursor salga del boton que vuelva al color que determinamos en css***/




let miBoton = document.querySelector("#botonColor");
miBoton.addEventListener("click", myClick);



let entrarBoton = document.querySelector("#botonColor");
entrarBoton.addEventListener("mouseenter", entrar);

let salirBoton = document.querySelector("#botonColor");
salirBoton.addEventListener("mouseleave", salir);



function myClick() {

  if (miBoton.textContent == "Modo nocturno: ON") {
    miBoton.textContent = "Modo nocturno: OFF";

  }

  else {
    miBoton.textContent = "Modo nocturno: ON";

  }
}

function entrar() {
  
  entrarBoton.style.backgroundColor = "green";


}

function salir() {
  salirBoton.style.backgroundColor = "red";

}









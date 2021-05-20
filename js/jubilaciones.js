
/**Obtengo todos los datos de entrada del formulario */


console.log(nombre);


function calculoJubilacion() {
  
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = parseInt(document.querySelector("#edad").value);
    let aportes = parseInt(document.querySelector("#aportes").value);
    let genero = document.querySelector("#genero").value.toUpperCase();
    let infoFinal = document.querySelector("#infoFinal");

    let botonCalcular = document.querySelector(".bCalcular");
    let resto = 0;
    switch (genero) {
        case "F":
            if (genero == "F" && edad <= 59) {
                infoFinal.textContent = (`${nombre}  ${apellido} ud es menor de 60 años por lo que todavia no está en edad de jubilarse. Gracias por su tiempo`);
            }
            else {
                if (genero == "F" && edad >= 59 && aportes <= 29) {
                    resto =  30- aportes;
                    infoFinal.textContent = (`${nombre}  ${apellido} ud ya tiene la edad minima pero le faltan ${resto} años de aporte para comenzar la jubilación. Gracias por su tiempo`);

                }
                else {
                    infoFinal.textContent = (`${nombre} ${apellido} El sistema de jubilación le da la bienvenida, ud. ya puede comenzar con el trámite de jubilación.`);

                }
            }//fin del proceso mujeres
            break;
        case "M":
            if (genero == "M" && edad <= 64 ) {
                infoFinal.textContent = (`${nombre}  ${apellido} ud es menor de 65 años por lo que todavia no está en edad de jubilarse. Gracias por su tiempo`);
            }
            else {
                if (genero == "M" && edad >= 65 && aportes <= 29) {
                    resto =  30 - aportes;
                    infoFinal.textContent = (`${nombre}  ${apellido} ud ya tiene la edad minima pero le faltan ${resto} años de aporte para comenzar la jubilación. Gracias por su tiempo`);

                }
                else {
                    infoFinal.textContent = (`${nombre}  ${apellido} El sistema de jubilación le da la bienvenida, ud. ya puede comenzar con el trámite de jubilación.`);

                }

            }//fin del proceso hombres
            break;
        default:
            infoFinal.textContent = (`${nombre} ${apellido} Revise la información`);





    } //Fin del switch


} //fin de la funcion






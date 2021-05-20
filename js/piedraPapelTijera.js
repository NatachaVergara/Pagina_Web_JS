let botonJugar = document.querySelector("#btn");
botonJugar.addEventListener("click", juego);






function juego(num1, num2, num3) {
    let imgA = document.querySelector("#ladoA");
    let imgB = document.querySelector("#ladoB");
    let imgC = document.querySelector("#ladoB");
     console.log(imgA, imgB, imgC);

    let resultadoJugada = document.querySelector("#resultado");




    num1 = Math.floor((Math.random() * 3) + 1);
    num2 = Math.floor((Math.random() * 3) + 1);
    num3 = Math.floor((Math.random() * 3) + 1);


    console.log(num1, num2,num3);


    if ((num1 == 1 && num2 == 1) || (num1 == 1 && num3 == 1) ) {

        imgA.src = (`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jtOrjsA_Mw7_uTUyjdlEKjEptipqp5QwOvL9iZsTMVEGhNtRx_y84TwsODireui2vC0&usqp=CAU`); //Piedra         
        imgB.src = (`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jtOrjsA_Mw7_uTUyjdlEKjEptipqp5QwOvL9iZsTMVEGhNtRx_y84TwsODireui2vC0&usqp=CAU`); //Piedra

        resultadoJugada.textContent = (`Piedra y Piedra empatan`); //1 piedra
    }
    else if ((num1 == 2 && num2 == 2) || (num1 == 2 && num3 == 2)  ) {
        imgA.src = (`https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png`); //papel
        imgB.src = (`https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png`); //papel
        resultadoJugada.textContent = (`Papel y Papel empatan`);   //2 papel
    }
    else if ((num1 == 3 && num2 == 3) || (num1 == 3 && num3 == 3)) {
        imgA.src =  (`https://www.pinclipart.com/picdir/middle/536-5360227_scissors-hand-rock-paper-scissors-png-clipart.png`);//Tijera
        imgB.src =  (`https://www.pinclipart.com/picdir/middle/536-5360227_scissors-hand-rock-paper-scissors-png-clipart.png`);//Tijera
        resultadoJugada.textContent = (`Tijera y tijera empatan`); //3 tijera
    }

    else if (num1 == 1 && num3 == 2 )
        {
            imgA.src = (`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jtOrjsA_Mw7_uTUyjdlEKjEptipqp5QwOvL9iZsTMVEGhNtRx_y84TwsODireui2vC0&usqp=CAU`); //Piedra 
            imgC.src = (`https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png`); //papel
            resultadoJugada.textContent = (`Papel le gana a piedra`);
        }
    else if (num1 == 2 && num3 == 1 )
            {
                imgA.src = (`https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png`); //papel
                imgC.src = (`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jtOrjsA_Mw7_uTUyjdlEKjEptipqp5QwOvL9iZsTMVEGhNtRx_y84TwsODireui2vC0&usqp=CAU`); //Piedra 
                resultadoJugada.textContent = (`Papel le gana a piedra`);

            }
    else if (num1 == 3 && num2 == 2 )
            {
                imgA.src =  (`https://www.pinclipart.com/picdir/middle/536-5360227_scissors-hand-rock-paper-scissors-png-clipart.png`);//Tijera
                imgB.src =  (`https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png`); //papel
                resultadoJugada.textContent = (`Tijera le gana al papel`)

            }
    else if (num1 == 2 && num2 == 3)
            {
                imgA.src = (`https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png`); //papel
                imgB.src = (`https://www.pinclipart.com/picdir/middle/536-5360227_scissors-hand-rock-paper-scissors-png-clipart.png`);//Tijera
                resultadoJugada.textContent = (`Tijera le gana al papel`)                
            }
    else if (num3 == 1 && num1 == 3)
            {
                imgA.src = (`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jtOrjsA_Mw7_uTUyjdlEKjEptipqp5QwOvL9iZsTMVEGhNtRx_y84TwsODireui2vC0&usqp=CAU`); //Piedra 
                imgB.src = (`https://www.pinclipart.com/picdir/middle/536-5360227_scissors-hand-rock-paper-scissors-png-clipart.png`);//Tijera
                resultadoJugada.textContent = (`Piedra le gana a tijera`)
            }
    else if( num3 == 3 && num1 == 1 )       
            {
                imgA.src = (`https://www.pinclipart.com/picdir/middle/536-5360227_scissors-hand-rock-paper-scissors-png-clipart.png`);//Tijera
                imgB.src = (`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jtOrjsA_Mw7_uTUyjdlEKjEptipqp5QwOvL9iZsTMVEGhNtRx_y84TwsODireui2vC0&usqp=CAU`); //Piedra 
                resultadoJugada.textContent = (`Piedra le gana a tijera`)
            }


}
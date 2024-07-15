//Aqui generamos los colores aleatorios//
function colorAleatorio(){
    return Math.floor(Math.random()*256);

}


//

function cambiarColor(){
    let colorBody = `rgb(${colorAleatorio()}, ${colorAleatorio()}, ${colorAleatorio()})`;    
    let colorDiv = `rgb(${colorAleatorio()}, ${colorAleatorio()}, ${colorAleatorio()})`;
    document.body.style.backgroundColor = colorBody;
    let divCaja = document.querySelector(".cajaColor");

    divCaja.style.backgroundColor = colorDiv;

}
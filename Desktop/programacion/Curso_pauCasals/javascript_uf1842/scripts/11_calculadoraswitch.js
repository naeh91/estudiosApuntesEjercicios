function calcular(p){
    var calculo,v1,v2;
    v1 = parseFloat(document.getElementById("valor1").value);
    v2 = parseFloat(document.getElementById("valor2").value);
    switch (p){
        case 0:
            calculo = v1 + v2;
            break;
        case 1:
            calculo = v1-v2;
            break;
        case 2:
            calculo = v1 * v2;
            break;
        
        case 3:
            calculo = v1 / v2;
                break;
                

            
    }
    document.getElementById("respuesta").innerHTML = calculo.toFixed(1);
}
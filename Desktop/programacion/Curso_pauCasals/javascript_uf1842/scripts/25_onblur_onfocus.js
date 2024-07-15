function iluminarFondo(campo) {
    document.getElementById("fedad").style.backgroundColor = campo === "fedad" ? "greenyellow" : "white";
    document.getElementById("fnombre").style.backgroundColor = campo === "fnombre" ? "greenyellow" : "white";
}

function mayusculas(campo) {
    document.getElementById("fnombre").style.textTransform = "uppercase";
    document.getElementById("fedad").style.backgroundColor = "white";
    document.getElementById("fnombre").style.backgroundColor = "white";
}
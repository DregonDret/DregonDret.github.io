const nombre = document.querySelector(".parrafo");
const fondoProyect = document.querySelector('.detalles_de_proyecto')

document.getElementById("bot").onclick = function(){
    console.log("se envio el mensaje");
    document.getElementById("mandar").innerHTML = "mensaje enviado";
    nombre.style.color = "blue";
}
document.getElementById("cambio_ColorF").onclick = function(){
    fondoProyect.style.backgroundColor = "green";
}
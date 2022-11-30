const heading = document.querySelector("#heading");
//console.log(heading);

const enlaces = document.querySelectorAll(".navegacion a");
//console.log(enlaces);

const nuevoEnlace = document.createElement("A");

nuevoEnlace.href = "nuevo-enlace.html";
nuevoEnlace.textContent = "Tienda virtual";
nuevoEnlace.classList.add("navegacion__enlace");
//console.log(nuevoEnlace)

const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(nuevoEnlace);

//eventos
// const btEnviar = document.querySelector(".boton--primario");
// btEnviar.addEventListener("click", function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log("enviado el formulario");
// });


const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombreDatos = document.querySelector("#nombre");
const emailDatos = document.querySelector("#email");
const mensajeDatos = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");


nombreDatos.addEventListener("input", leerTexto);
emailDatos.addEventListener("input", leerTexto);
mensajeDatos.addEventListener("input", leerTexto);
//submit validar formulario 
formulario.addEventListener('submit', function(ev) {
    ev.preventDefault();
    

    const { nombre, email, mensaje} = datos;

    if(nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios",true);
    
        return; //corta la ejecución del código
    }
    // crear la alerta de Enviar el formulario
    mostrarAlerta("Mensaje enviado correctamente");

});



function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add("error");
    
    }else {
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);
    setTimeout( () => {
        alerta.remove();
}, 5000);

};

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    
    
};




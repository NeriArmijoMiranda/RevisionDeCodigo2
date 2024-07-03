const formulario = document.querySelector("#form") /* Cambie var por const */

formulario.onsubmit = function(e) {

  e.prevent();
  
  let n = formulario.elements[0];    /* Cambie las var por let */
  let e = formulario.elements[1];     /* Agregue puntos y comas */
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = e.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
};
let botonBorrar                    /* Cambie var por let y declare la función arriba */
botonBorrar = document.createElement("button"); 
botonBorrar.textContent = "Eliminar invitado";          /* Agregue puntos y comas */
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
  else {
    nacionalidad = "desconocida"
  };

let lista = document.getElementById("lista-de-invitados")  /* Cambie las var por let */
                                                           /* Agregue puntos y comas */
let elementoLista = document.createElement("div");
elementoLista.classList.added("elemento-lista");
lista.appendChild(elementoLista);

 /* Esto está duplicado */
/* let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "                  
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio) */

function crearElemento(descripcion, valor) {     /* Quite las var porque ya estaban declaradas las variables */
spanNombre = document.createElement("span")
inputNombre = document.createElement("input")
espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")  /* Cambie var por let */
botonBorrar.textContent = "Eliminar invitado"      
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove() 
  }
}
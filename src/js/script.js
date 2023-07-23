const contenedor = document.getElementById('contenedor');

var titulo = document.getElementById('titulo');

const nuevoelement = [];




function añadirelemento() {
  contenedor.innerHTML = '';
  var texto = titulo.value;
  nuevoelement.push(texto);

  console.log(nuevoelement);
  var identifier = 0;
  nuevoelement.forEach((textos) => {
    const elemento = `
  <div class="elementTodo" id="${identifier}">
  <p id="descripcion">${textos}</p>
  <button onclick="eliminar(${identifier});">x</button>
  </div >
  `;
    contenedor.innerHTML += elemento;

  })
  identifier++;


};

function eliminar(eliminar) {
  contenedor.removeChild(eliminar);
}
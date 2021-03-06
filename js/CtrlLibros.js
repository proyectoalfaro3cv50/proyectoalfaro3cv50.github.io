import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  cod,
  muestraError
} from "../lib/util.js";
import {
  tieneRol
} from "./seguridad.js";

/** @type {HTMLUListElement} */
const lista = document.
  querySelector("#lista");
const daoLibro =  getFirestore().collection("libros");

getAuth().
  onAuthStateChanged(
    protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    //["Administrador"])) {
      ["Cliente"])) {
    consulta();
  }
}

function consulta() {
  daoLibro.orderBy("titulo").onSnapshot(htmlLista, errConsulta);
}

/**
 * @param {import(
    "../lib/tiposFire.js").
    QuerySnapshot} snap */
function htmlLista(snap) {
  let html = "";
  if (snap.size > 0) {
    snap.forEach(doc =>
      html += htmlFila(doc));
  } else {
    html += /* html */
      `<li class="vacio">
        -- No hay libros
        registrados. --
      </li>`;
  }
  lista.innerHTML = html;
}

/**
 * @param {import(
    "../lib/tiposFire.js").
    DocumentSnapshot} doc */
function htmlFila(doc) {
  /**
   * @type {import("./tipos.js").
                  Alumno} */
  const data = doc.data();
  const titulo = cod(data.titulo);
  const autor = cod(data.autor);
  const paginas = cod(data.paginas);
  const editorial = cod(data.editorial);
  var fsf= cod(data.fecha);
  var fecha = new Date(fsf);
  var espacio="[   -   ]";
  var dformat = [fecha.getDate()+1, fecha.getMonth()+1, fecha.getFullYear()].join('/');
  const parámetros =
    new URLSearchParams();
  parámetros.append("id", doc.id);
  return ( /* html */
    `<li>
      <a class="fila" href=
  "libro.html?${parámetros}">
        <strong class="primario">
          Titulo: ${titulo}<br>
          Autor: ${autor} <br>
          Páginas: ${paginas} <br>
          Editorial: ${editorial}<br>
          Fecha de publicación:${dformat}
        </strong>
      </a>
    </li>`);
}

/** @param {Error} e */
function errConsulta(e) {
  muestraError(e);
  consulta();
}
import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraLibros
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoLibro =
  getFirestore().
    collection("libros");
const params =
  new URL(location.href).
    searchParams;
const id = params.get("id");
/** @type {HTMLFormElement} */
const forma = document["forma"];

getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    busca();
  }
}

/** Busca y muestra los datos que
 * corresponden al id recibido. */
async function busca() {
  try {
    const doc =
      await daoLibro.
        doc(id).
        get();
    if (doc.exists) {
      /**
       * @type {
          import("./tipos.js").
                  Alumno} */
      const data = doc.data();
      forma.titulo.value = data.titulo;
      forma.autor.value = data.autor || "";
      forma.paginas.value = data.paginas || "";
      forma.editorial.value = data.editorial || "";
      forma.fecha.value = data.fecha || "";
      forma.addEventListener(
        "submit", guarda);
      forma.eliminar.
        addEventListener(
          "click", elimina);
    } else {
      throw new Error(
        "No se encontró.");
    }
  } catch (e) {
    muestraError(e);
    muestraLibros();
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =new FormData(forma);
    const titulo = getString(formData, "titulo").trim();  
    const autor = getString(formData, "autor").trim();
    const paginas = getString(formData, "paginas").trim();
    const editorial = getString(formData, "editorial").trim();
    const fecha = getString(formData, "fecha").trim();
    /**
     * @type {
        import("./tipos.js").
                Alumno} */
    const modelo = {
      titulo, 
      autor,
      paginas,
      editorial,
      fecha
    };
    await daoLibro.
      doc(id).
      set(modelo);
    muestraLibros();
  } catch (e) {
    muestraError(e);
  }
}

async function elimina() {
  try {
    if (confirm("Confirmar la " +
      "eliminación")) {
      await daoLibro.
        doc(id).
        delete();
      muestraLibros();
    }
  } catch (e) {
    muestraError(e);
  }
}


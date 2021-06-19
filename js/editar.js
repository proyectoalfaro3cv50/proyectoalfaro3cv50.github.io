console.log("hola");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB2IrJ3A1c79ES84uglkXpYRa-MavmiasE",
    authDomain: "proyectoalfaro3cv500.firebaseapp.com",
    projectId: "proyectoalfaro3cv500",
    storageBucket: "proyectoalfaro3cv500.appspot.com",
    messagingSenderId: "847202787655",
    appId: "1:847202787655:web:d5bb81ba0525992355ac62"
});

var db = firebase.firestore();
boton=document.getElementById('boton');
//LEER DOCUMENTOS
var tabla=document.getElementById("tabla");
    db.collection("libros").onSnapshot((querySnapshot) => {

    tabla.innerHTML=""; 
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().autor}`);
    tabla.innerHTML+= `<tr>
    <td>${doc.id}</td>
    <td>${doc.data().autor}</td>
    <td>${doc.data().titulo}</td>
    <td>${doc.data().editorial}</td>
    <td>${doc.data().paginas}</td>
    <td><button onclick="editar('${doc.id}', '${doc.data().autor}', '${doc.data().titulo}','${doc.data().editorial}', '${doc.data().paginas}')">EDITAR</button></td>
    </tr>`;
    });
    });


    import {
        getAuth,
        getFirestore
      } from "../lib/fabrica.js";
      import {
        getString,
        muestraError
      } from "../lib/util.js";
      import {
        muestraPasatiempos
      } from "./navegacion.js";
      import {
        tieneRol
      } from "./seguridad.js";
      
      const libros =
        getFirestore().
          collection("libros");
      /** @type {HTMLFormElement} */
      //const forma = document["forma"];
      getAuth().onAuthStateChanged(
        protege, muestraError);
      
      /** @param {import(
          "../lib/tiposFire.js").User}
          usuario */
      async function protege(usuario) {
        if (tieneRol(usuario,
          ["Administrador"])) {
          forma.addEventListener(
            "clic", guardar);
        }
      }
      
      /** @param {Event} evt */
      async function guardar(evt) {
        try {
          evt.preventDefault();

          var autorCapturado= document.getElementById('autor').value;
          var tituloCapturado= document.getElementById('titulo').value;
          var editorialCapturado= document.getElementById('editorial').value;
          var paginasCapturado= document.getElementById('paginas').value;
          var boton=document.getElementById('boton');     
          boton.innerHTML='Editar';          
          /**
           * @type {
              import("./tipos.js").
                      Pasatiempo} */
          const modelo = {
            autor: autorCapturado,
            titulo: tituloCapturado,
            editorial: editorialCapturado,
            paginas: paginasCapturado
          };
          await daolibro.
            add(modelo);
            document.getElementById('autor').value="";
    document.getElementById('titulo').value="";
    document.getElementById('editorial').value="";
    document.getElementById('paginas').value="";
    boton.innerHTML='guardar libro nuevo';
    boton.onclick=function(){
        guardar();
    }
        } catch (e) {
          muestraError(e);
        }
      }
      
























function editar (id, autor, titulo, editorial, paginas){
    boton=document.getElementById('boton');
//boton.style.visibility  = 'visible'; // Se ve

    document.getElementById('autor').value=autor;
    document.getElementById('titulo').value=titulo;
    document.getElementById('editorial').value=editorial;
    document.getElementById('paginas').value=paginas;

    var boton=document.getElementById('boton');     
    boton.innerHTML='Editar';
    
    boton.onclick= function(){
    var washingtonRef = db.collection("libros").doc(id);
    // Set the "capital" field of the city 'DC'
    var autorCapturado1=document.getElementById('autor').value;
    var tituloCapturado1=document.getElementById('titulo').value;
    var editorialCapturado1=document.getElementById('editorial').value;
    var paginasCapturado1=document.getElementById('paginas').value;

    return washingtonRef.update({
    autor: autorCapturado1,
    titulo: tituloCapturado1,
    editorial: editorialCapturado1,
    paginas: paginasCapturado1
    })
    .then(() => {
    console.log("Document successfully updated!");

    
    })
    .catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
    }); 
    }

}


function guardar(){
//ESTO SE USA PARA AGREGAR USUARIOS

var autorCapturado= document.getElementById('autor').value;
var tituloCapturado= document.getElementById('titulo').value;
var editorialCapturado= document.getElementById('editorial').value;
var paginasCapturado= document.getElementById('paginas').value;


db.collection("libros").add({
    autor: autorCapturado,
    titulo: tituloCapturado,
    editorial: editorialCapturado,
    paginas: paginasCapturado
})
.then((docRef) => {
document.getElementById('autor').value="";
document.getElementById('titulo').value="";
document.getElementById('editorial').value="";
document.getElementById('paginas').value="";

    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

//ESTO SE USA PARA AGREGAR USUARIOS CREA LA COLECCION Y LA AGREGA ALV
}





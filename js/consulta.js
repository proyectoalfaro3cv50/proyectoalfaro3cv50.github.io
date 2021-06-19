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



//LEER DOCUMENTOS
var tabla=document.getElementById("tabla");
	db.collection("libros").onSnapshot((querySnapshot) => {

	tabla.innerHTML="";	
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
    tabla.innerHTML+= `<tr>
    <td>${doc.id}</td>
    <td>${doc.data().autor}</td>
    <td>${doc.data().titulo}</td>
    <td>${doc.data().editorial}</td>
    <td>${doc.data().paginas}</td>
  </tr>`;
    });
	});









/*
function actualizar(id, nombre, apellido, fecha){
//actualizar datos
document.getElementById("nombre").value=nombre;
document.getElementById("apellido").value=apellido;
document.getElementById("fecha").value=fecha;
var boton= document.getElementById("boton");
boton.innerHTML='Editar';
boton.onclick= function(){
var nombre=document.getElementById("nombre").value;
var apellido=document.getElementById("apellido").value;
var fecha=document.getElementById("fecha").value;


var objetoModificar = db.collection("users").doc(id);
// Set the "capital" field of the city 'DC'
return objetoModificar.update({
    first: nombre,
    last: apellido,
    born: fecha
})
.then(() => {
	boton.innerHTML='guardar';
    console.log("Document successfully updated!");
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

}

} */
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
    <td><button onclick=eliminar('${doc.id}')>ELIMINAR</BUTTON></td>
  </tr>`;
    });
	});

function eliminar(id){
//BORRAR DATOS
db.collection("libros").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
}






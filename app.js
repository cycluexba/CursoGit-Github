firebase.initializeApp({
  apiKey: "AIzaSyCKDR-tUz80ZW4q9rd935XYVZuckkQbIMM",
  authDomain: "usuario-7a201.firebaseapp.com",
  projectId: "usuario-7a201",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});





// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAeXIJcJRBKTYKjF6baLe8PpeD2hUnU-Tg",
    authDomain: "kwitter-86cd3.firebaseapp.com",
    databaseURL: "https://kwitter-86cd3-default-rtdb.firebaseio.com",
    projectId: "kwitter-86cd3",
    storageBucket: "kwitter-86cd3.appspot.com",
    messagingSenderId: "1030279020362",
    appId: "1:1030279020362:web:25d5b4d6aca96ef6b94bb3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    var user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}
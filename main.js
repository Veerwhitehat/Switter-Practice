//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMUDQ6jVu3j-GJuZ6EZZ_hXu_XTM0UpHI",
    authDomain: "kwitter-61954.firebaseapp.com",
    databaseURL: "https://kwitter-61954-default-rtdb.firebaseio.com",
    projectId: "kwitter-61954",
    storageBucket: "kwitter-61954.appspot.com",
    messagingSenderId: "902204318333",
    appId: "1:902204318333:web:3ca1ab004412c5a3a44714"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser(){
      text= document.getElementById("name").value;
      firebase.database().ref("/").child(text).update({
          purpose : "value"
      });
  }
//YOUR FIREBASE LINKS
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
var room_name= localStorage.getItem("roomname");
var user_name= localStorage.getItem("username");

function logout(){
    
    window.location="index2.html";
}
function send(){
    m1= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          likes:0,
          message:m1,
    })
    document.getElementById("msg").innerHTML="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

//ADD YOUR FIREBASE LINKS HERE
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

 var username= localStorage.getItem("username");
 document.getElementById("username").innerHTML= "Welcome  " + username + "<sup style='font-size:25px'> &#128540;</sup>";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    //Start code
    console.log("Room name -"+Room_names);
    row="<div class='room_name' id='"+ Room_names + "' onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML+=row;     
      //End code

    });});}
getData();
function addroom(){
roomname= document.getElementById("roomname").value;
localStorage.setItem("roomname",roomname);
firebase.database().ref("/").child(roomname).update({
      "roomname": "addroom",
})

window.location="kwitter_page.html";
}
function redirect(roomname){
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}

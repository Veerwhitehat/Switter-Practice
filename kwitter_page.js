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
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
likes= message_data['likes'];
message= message_data['message'];
name_tag= "<h4>"+name+"<img class='user_tick' src='tick.png' height='20' width='25'></h4>";
message_tag= "<h4 class='message_h4'>"+message+"</h4>";
like_tag= "<button class='btn btn-warning' id='"  + firebase_message_id+"' value="+likes+" onclick='update_likes(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> likes "+likes+"</span></button><hr>";
row= name_tag+message_tag+like_tag+span_tag;
document.getElementById("output").innerHTML+=row;

//End code
    } });  }); }
getData();
function update_likes(id){
    current_likes=   document.getElementById(id).value;
    current_likes=   Number(current_likes)+1;
    firebase.database().ref(room_name).child(id).update({
          likes:current_likes,
    })
 }

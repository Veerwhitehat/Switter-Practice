var username= "";

function login(){
 username = document.getElementById("user_name").value;
 localStorage.setItem("username",username);
 window.location="index2.html";

}
    

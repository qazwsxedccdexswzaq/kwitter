// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB72ClzRzjOeX1X_fhDp37Ysn6hovyo_aU",
      authDomain: "kwitter-bcf12.firebaseapp.com",
      databaseURL: "https://kwitter-bcf12-default-rtdb.firebaseio.com",
      projectId: "kwitter-bcf12",
      storageBucket: "kwitter-bcf12.appspot.com",
      messagingSenderId: "676919358022",
      appId: "1:676919358022:web:4d50ae865ddee17a1cd047"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("roome_name", room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " +Room_names);
      row ="<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
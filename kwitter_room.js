//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB01nuMTtKmCE4ngEz8oaS8bbQilY4C-HY",
      authDomain: "tic-tac-toe-bdcac.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-bdcac-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-bdcac",
      storageBucket: "tic-tac-toe-bdcac.appspot.com",
      messagingSenderId: "360371520000",
      appId: "1:360371520000:web:43813bd3edcca8b47c8ee5",
      measurementId: "G-Z9WB2MRLDC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -"+Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
                document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout () {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
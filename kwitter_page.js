user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function send (){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
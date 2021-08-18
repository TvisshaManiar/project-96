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
  
function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
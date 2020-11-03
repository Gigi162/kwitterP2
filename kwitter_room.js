//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAOoHtvupTh-8K4xe-VeS5HaolI-Nw3ZLE",
      authDomain: "kwitterbase.firebaseapp.com",
      databaseURL: "https://kwitterbase.firebaseio.com",
      projectId: "kwitterbase",
      storageBucket: "kwitterbase.appspot.com",
      messagingSenderId: "868006231969",
      appId: "1:868006231969:web:aa07022b85e5f121bd55e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"   
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_chat.html";
      console.log(room_name);
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name = " + Room_names);
                  row = "<div class = 'room_name' id=" + Room_names + " onclick = 'RedirectToChat(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function RedirectToChat(name) {
      console.log("current room name = " + name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_chat.html"
}
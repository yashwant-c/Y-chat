// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBgNADQgoGYymo_Wb4RoUzVKDJAvIcycg0",
    authDomain: "ychat-e7fdd.firebaseapp.com",
    databaseURL: "https://ychat-e7fdd-default-rtdb.firebaseio.com",
    projectId: "ychat-e7fdd",
    storageBucket: "ychat-e7fdd.appspot.com",
    messagingSenderId: "411428032709",
    appId: "1:411428032709:web:d01b33b0d7f8ec107620ac",
    measurementId: "G-E2NRY307J7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getdata() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.foreach(function(childsnapshot){childkey=childsnapshot.key;
    Room_names = childkey;
    
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+= row; 
}) 
      
  }); }
  getdata();

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "Ychat_page.html";

  }

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "Ychat_room.html";
  }

  
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBTR8BriSV5Stfh4U9OJkZW_eJRleF16cs",
    authDomain: "ychat-4370a.firebaseapp.com",
    databaseURL: "https://ychat-4370a-default-rtdb.firebaseio.com",
    projectId: "ychat-4370a",
    storageBucket: "ychat-4370a.appspot.com",
    messagingSenderId: "254539023107",
    appId: "1:254539023107:web:041676413cee71cb0c5f36",
    measurementId: "G-MHEYCMYPYH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  getData();

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value=";"
  }

  function updateLike(message_id)
  {
    console.log("Clicked on like button - "+message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_Likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
    });
  }

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }